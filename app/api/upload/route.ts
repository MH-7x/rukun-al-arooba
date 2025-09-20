import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: Request) {
  const body = await request.json();
  const { paramsToSign } = body;

  try {
    const signature = cloudinary.utils.api_sign_request(
      paramsToSign,
      process.env.CLOUDINARY_API_SECRET!
    );

    return Response.json({ signature });
  } catch (error) {
    return Response.json({ error });
  }
}

export async function DELETE(request : Request) {
    const {publicId} = await request.json()
    if (!publicId) {
      return Response.json({success : false, message : 'public id not received'})
    }
    const res = await cloudinary.uploader.destroy(publicId, {resource_type : "image"});
    return Response.json({success : true, message : "ok", res : res})
}
