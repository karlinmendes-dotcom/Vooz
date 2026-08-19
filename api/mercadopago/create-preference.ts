import type { VercelRequest, VercelResponse } from "@vercel/node";

const MERCADOPAGO_ACCESS_TOKEN = process.env.MERCADOPAGO_ACCESS_TOKEN;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { amount, description, payerEmail, payerName } = req.body;

    if (!amount || !description || !payerEmail || !payerName) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const preference = {
      items: [
        {
          title: description,
          unit_price: amount,
          quantity: 1,
          currency_id: "BRL",
        },
      ],
      payer: {
        email: payerEmail,
        name: payerName,
      },
      back_urls: {
        success: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:5173"}/payment/success`,
        failure: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:5173"}/payment/failure`,
        pending: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:5173"}/payment/pending`,
      },
      auto_return: "approved",
      notification_url: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:5173"}/api/mercadopago/webhook`,
    };

    const response = await fetch("https://api.mercadopago.com/v1/preferences", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${MERCADOPAGO_ACCESS_TOKEN}`,
      },
      body: JSON.stringify(preference),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    return res.status(200).json({
      id: data.id,
      init_point: data.init_point,
      sandbox_init_point: data.sandbox_init_point,
    });
  } catch (error) {
    console.error("Error creating preference:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}