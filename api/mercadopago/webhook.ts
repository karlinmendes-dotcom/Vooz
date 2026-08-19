import type { VercelRequest, VercelResponse } from "@vercel/node";

const MERCADOPAGO_ACCESS_TOKEN = process.env.MERCADOPAGO_ACCESS_TOKEN;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { type, data } = req.body;

    // Mercado Pago sends different notification types
    // We handle payment notifications
    if (type === "payment") {
      const paymentId = data?.id;

      if (!paymentId) {
        return res.status(400).json({ error: "No payment ID provided" });
      }

      // Fetch payment details from Mercado Pago API
      const paymentResponse = await fetch(
        `https://api.mercadopago.com/v1/payments/${paymentId}`,
        {
          headers: {
            Authorization: `Bearer ${MERCADOPAGO_ACCESS_TOKEN}`,
          },
        }
      );

      const paymentData = await paymentResponse.json();

      if (!paymentResponse.ok) {
        return res.status(paymentResponse.status).json(paymentData);
      }

      // Here you would typically:
      // 1. Save the payment to your database (Convex)
      // 2. Send a notification to the user
      // 3. Update any related records

      console.log("Payment notification received:", {
        id: paymentData.id,
        status: paymentData.status,
        amount: paymentData.transaction_amount,
        payer: paymentData.payer?.email,
      });

      // TODO: Call Convex mutation to save payment
      // await convex.mutation("payments:create", { ... });

      return res.status(200).json({ received: true });
    }

    // For other notification types
    return res.status(200).json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}