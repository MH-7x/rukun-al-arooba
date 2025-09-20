import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Row,
  Column,
  Hr,
  Link,
  Img,
} from "@react-email/components";
import * as React from "react";
import { PayLoad } from "./FORM";

export const ContactFormEmail = (formData: PayLoad) => {
  const DetailRow = ({
    label,
    value,
  }: {
    label: string;
    value: string | null | React.ReactNode;
  }) => {
    if (!value) return null;
    return (
      <Row style={detailRow}>
        <Column style={detailLabel}>{label}</Column>
        <Column style={detailValue}>{value}</Column>
      </Row>
    );
  };

  return (
    <Html>
      <Head />
      <Preview>New Inquiry from {formData.name || "a customer"}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header Section */}
          <Section style={header as React.CSSProperties}>
            <Heading style={companyName}>Rukun Al Arooba</Heading>
            <Text style={headerSubtitle}>Used Furniture Trading</Text>
          </Section>

          {/* Main Content Section */}
          <Section style={content}>
            <Heading as="h1" style={title}>
              New Contact Form Submission
            </Heading>
            <Text style={paragraph}>
              You have received a new inquiry. The details are provided below.
            </Text>

            <Hr style={hr} />

            {/* Submitter's Details */}
            <Heading as="h2" style={sectionTitle}>
              Submitter Details
            </Heading>
            <Section style={detailsContainer}>
              <DetailRow label="Reason for Contact" value={formData.reason} />
              <DetailRow label="Name" value={formData.name} />
              <DetailRow
                label="Phone"
                value={
                  formData.phone ? (
                    <Link href={`tel:${formData.phone}`} style={link}>
                      {formData.phone}
                    </Link>
                  ) : null
                }
              />
              <DetailRow
                label="Email"
                value={
                  formData.email ? (
                    <Link href={`mailto:${formData.email}`} style={link}>
                      {formData.email}
                    </Link>
                  ) : null
                }
              />
              <DetailRow label="City" value={formData.city} />
              <DetailRow label="Area" value={formData.area} />
            </Section>

            <Hr style={hr} />

            {/* Inquiry Details */}
            <Heading as="h2" style={sectionTitle}>
              Inquiry Details
            </Heading>
            <Section style={detailsContainer}>
              <DetailRow
                label="Category of Interest"
                value={formData.category}
              />
              <DetailRow label="Item Condition" value={formData.condition} />
              {formData.preferredService && (
                <DetailRow
                  label="Preferred Services"
                  value={`${
                    formData.preferredService.pickup
                      ? "Need Pickup "
                      : "no Pickup "
                  }, ${
                    formData.preferredService.delivery
                      ? "Need Delivery "
                      : "no Delivery "
                  }`}
                />
              )}
            </Section>

            {/* Message Section */}
            {formData.message && (
              <>
                <Hr style={hr} />
                <Heading as="h2" style={sectionTitle}>
                  Message
                </Heading>
                <Text style={messageText}>
                  &ldquo;{formData.message}&ldquo;
                </Text>
              </>
            )}

            {/* Submitted Images Section */}
            {formData.images.length > 0 && (
              <>
                <Hr style={hr} />
                <Heading as="h2" style={sectionTitle}>
                  Submitted Images
                </Heading>
                <Section>
                  {formData.images.map((url, index) => (
                    <Row key={index} style={{ marginBottom: "10px" }}>
                      <Column>
                        <Link href={url} target="_blank" style={imageLink}>
                          <Img
                            src={url}
                            alt={`Submitted Image ${index + 1}`}
                            width="150"
                            style={imageStyle}
                          />
                          <Text style={imageLinkText as React.CSSProperties}>
                            View Image {index + 1}
                          </Text>
                        </Link>
                      </Column>
                    </Row>
                  ))}
                </Section>
              </>
            )}
          </Section>

          {/* Footer Section */}
          <Section style={footer as React.CSSProperties}>
            <Text style={footerText}>
              This email was sent from the contact form on your website.
            </Text>
            <Text style={footerText}>
              © {new Date().getFullYear()} Rukun Al Arooba. All Rights Reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactFormEmail;

// --- Styles ---

const theme = {
  primary: "#144e5a",
  secondary: "#c07d53",
  accent: "#ffdb5e",
  textPrimary: "#2d2d2d",
  background: "#f4f4f7",
  white: "#ffffff",
};

const main = {
  backgroundColor: theme.background,
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
  maxWidth: "100%",
};

const header = {
  backgroundColor: theme.primary,
  color: theme.white,
  padding: "24px",
  textAlign: "center",
  borderRadius: "8px 8px 0 0",
};

const companyName = {
  fontSize: "28px",
  fontWeight: "bold",
  margin: "0",
  color: theme.accent,
};

const headerSubtitle = {
  fontSize: "14px",
  margin: "4px 0 0",
  color: "#e0e0e0",
};

const content = {
  backgroundColor: theme.white,
  padding: "24px",
  borderRadius: "0 0 8px 8px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
};

const title = {
  color: theme.primary,
  fontSize: "24px",
  fontWeight: "bold",
  lineHeight: "1.2",
  margin: "0 0 16px",
};

const sectionTitle = {
  color: theme.secondary,
  fontSize: "18px",
  fontWeight: "600",
  margin: "24px 0 8px",
};

const paragraph = {
  color: theme.textPrimary,
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0 0 16px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const detailsContainer = {
  padding: "16px",
  backgroundColor: "#f9f9f9",
  borderRadius: "6px",
  border: `1px solid #eaeaea`,
};

const detailRow = {
  width: "100%",
  marginBottom: "12px",
};

const detailLabel = {
  color: "#555555",
  fontSize: "14px",
  fontWeight: "600",
  width: "180px",
  verticalAlign: "top",
};

const detailValue = {
  color: theme.textPrimary,
  fontSize: "14px",
};

const messageText = {
  ...paragraph,
  fontStyle: "italic",
  color: "#333",
  borderLeft: `3px solid ${theme.secondary}`,
  paddingLeft: "14px",
  margin: "16px 0",
};

const link = {
  color: theme.primary,
  textDecoration: "underline",
};

const imageLink = {
  display: "inline-block",
  textDecoration: "none",
};

const imageStyle = {
  borderRadius: "6px",
  border: `1px solid #ccc`,
};

const imageLinkText = {
  fontSize: "12px",
  color: "#555",
  margin: "4px 0 0",
  textAlign: "center",
};

const footer = {
  padding: "24px",
  textAlign: "center",
};

const footerText = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
  margin: "0",
};
