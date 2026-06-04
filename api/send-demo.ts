import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const ses = new SESClient({
  region: process.env.AWS_REGION ?? "us-east-1",
  credentials:
    process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY
      ? {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        }
      : undefined,
});

const FROM_EMAIL = process.env.SES_FROM_EMAIL ?? "sales@ansora.io";
const TO_EMAIL = process.env.SES_TO_EMAIL ?? "sales@ansora.io";

export default async function handler(
  req: { method?: string; body?: unknown },
  res: { status: (code: number) => { json: (body: object) => void }; setHeader: (name: string, value: string) => void }
) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).json({});
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Vercel parses JSON body into req.body; raw body may be string
  let body: { name?: string; email?: string; company?: string; message?: string };
  try {
    body =
      typeof req.body === "string"
        ? (JSON.parse(req.body) as typeof body)
        : (req.body as typeof body) ?? {};
  } catch {
    return res.status(400).json({ error: "Invalid JSON body" });
  }

  const { name, email, company, message } = body;
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: "Name, email, and message are required" });
  }

  const subject = `Book a Demo request from ${name.trim()}`;
  const textBody = [
    `Name: ${name.trim()}`,
    `Email: ${email.trim()}`,
    `Company: ${(company ?? "").trim() || "—"}`,
    "",
    "Message:",
    message.trim(),
  ].join("\n");

  try {
    await ses.send(
      new SendEmailCommand({
        Source: FROM_EMAIL,
        Destination: { ToAddresses: [TO_EMAIL] },
        Message: {
          Subject: { Data: subject, Charset: "UTF-8" },
          Body: {
            Text: { Data: textBody, Charset: "UTF-8" },
          },
        },
        ReplyToAddresses: [email.trim()],
      })
    );
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("SES send error:", err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
