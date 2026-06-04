/**
 * Local dev server for the Book a Demo API (Amazon SES).
 * In production, use the Vercel serverless function in api/send-demo.ts
 * or deploy this server elsewhere.
 *
 * Run: node server/index.js
 * Requires: AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION, SES_FROM_EMAIL
 */
import express from "express";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const app = express();
app.use(express.json());

const ses = new SESClient({
  region: process.env.AWS_REGION || "us-east-1",
  credentials:
    process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY
      ? {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        }
      : undefined,
});

const FROM_EMAIL = process.env.SES_FROM_EMAIL || "sales@ansora.io";
const TO_EMAIL = process.env.SES_TO_EMAIL || "sales@ansora.io";
const PORT = process.env.PORT || 3001;

app.use((_req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.options("/api/send-demo", (_req, res) => res.status(200).end());

app.post("/api/send-demo", async (req, res) => {
  const { name, email, company, message } = req.body || {};
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
          Body: { Text: { Data: textBody, Charset: "UTF-8" } },
        },
        ReplyToAddresses: [email.trim()],
      })
    );
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("SES send error:", err);
    return res.status(500).json({ error: "Failed to send email" });
  }
});

app.listen(PORT, () => {
  console.log(`Book a Demo API (SES) running at http://localhost:${PORT}/api/send-demo`);
});
