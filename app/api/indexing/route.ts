
import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import fs from "fs";
import path from "path";

type IndexingRequestBody = {
  url: string;
  type: "URL_UPDATED" | "URL_DELETED";
};

function loadServiceAccount(): { client_email: string; private_key: string } {
  
  const envJson = process.env.GOOGLE_SERVICE_ACCOUNT;
  if (envJson) {
    try {
      const parsed = JSON.parse(envJson);
      if (!parsed.client_email || !parsed.private_key) {
        throw new Error("Invalid GOOGLE_SERVICE_ACCOUNT JSON: missing fields");
      }
      return { client_email: parsed.client_email, private_key: parsed.private_key };
    } catch (err) {
      throw new Error("Failed to parse GOOGLE_SERVICE_ACCOUNT env var: " + (err as Error).message);
    }
  }

  
  const defaultPath = path.join(process.cwd(), "service_account.json");
  const accountPath = process.env.GOOGLE_SERVICE_ACCOUNT_PATH || defaultPath;

  if (!fs.existsSync(accountPath)) {
    throw new Error(
      `No service account found. Set GOOGLE_SERVICE_ACCOUNT (JSON string) or GOOGLE_SERVICE_ACCOUNT_PATH. Tried: ${accountPath}`
    );
  }
  const raw = fs.readFileSync(accountPath, "utf8");
  const parsed = JSON.parse(raw);
  if (!parsed.client_email || !parsed.private_key) {
    throw new Error("Invalid service_account.json: missing client_email or private_key");
  }
  return { client_email: parsed.client_email, private_key: parsed.private_key };
}

async function getAccessToken(clientEmail: string, privateKey: string) {
  const jwtClient = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/indexing"],
  });

  
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const tokens = await new Promise<any>((resolve, reject) => {
    jwtClient.authorize((err, t) => {
      if (err) return reject(err);
      resolve(t);
    });
  });

  // tokens.access_token should exist
  if (!tokens || !tokens.access_token) {
    throw new Error("Failed to obtain access token from Google JWT client.");
  }
  return tokens.access_token as string;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Partial<IndexingRequestBody>;

    if (!body || typeof body.url !== "string" || typeof body.type !== "string") {
      return NextResponse.json({ error: "Invalid request body. Expect { url: string, type: 'URL_UPDATED'|'URL_DELETED' }" }, { status: 400 });
    }

    // Validate type
    if (body.type !== "URL_UPDATED" && body.type !== "URL_DELETED") {
      return NextResponse.json({ error: "type must be 'URL_UPDATED' or 'URL_DELETED'" }, { status: 400 });
    }

    
    const { client_email, private_key } = loadServiceAccount();

    
    const accessToken = await getAccessToken(client_email, private_key);

    // Call Google Indexing API
    const indexingUrl = "https://indexing.googleapis.com/v3/urlNotifications:publish";
    const res = await fetch(indexingUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        url: body.url,
        type: body.type,
      }),
    });

    const responseBody = await res.json().catch(() => null);

    // Return Google response forward to client
    return NextResponse.json(
      {
        status: res.status,
        ok: res.ok,
        data: responseBody,
      },
      { status: res.status }
    );
  } catch (err) {
    console.error("Indexing API error:", err);
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: "Server error", message }, { status: 500 });
  }
}
