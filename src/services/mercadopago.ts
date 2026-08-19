// Mercado Pago integration service
// API Reference: https://www.mercadopago.com.br/developers/en/reference

const MERCADOPAGO_PUBLIC_KEY = import.meta.env.VITE_MERCADOPAGO_PUBLIC_KEY;

export interface MercadoPagoPayment {
  id: number;
  status: string;
  status_detail: string;
  payment_type_id: string;
  payment_method_id: string;
  transaction_amount: number;
  currency_id: string;
  description: string;
  payer: {
    email: string;
    first_name: string;
    last_name: string;
  };
  date_created: string;
  date_last_updated: string;
}

export interface CreatePaymentParams {
  amount: number;
  description: string;
  payerEmail: string;
  payerName: string;
}

// Get public key for frontend
export function getPublicKey() {
  return MERCADOPAGO_PUBLIC_KEY;
}

// Create a payment preference (for Checkout Pro)
export async function createPaymentPreference(params: CreatePaymentParams) {
  const response = await fetch("/api/mercadopago/create-preference", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params),
  });

  if (!response.ok) {
    throw new Error("Failed to create payment preference");
  }

  return response.json();
}

// Webhook handler for payment notifications
export async function handlePaymentWebhook(paymentData: MercadoPagoPayment) {
  const response = await fetch("/api/mercadopago/webhook", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(paymentData),
  });

  if (!response.ok) {
    throw new Error("Failed to handle payment webhook");
  }

  return response.json();
}

// Get payment status
export async function getPaymentStatus(paymentId: string) {
  const response = await fetch(`/api/mercadopago/payment/${paymentId}`);

  if (!response.ok) {
    throw new Error("Failed to get payment status");
  }

  return response.json();
}

// Initialize MercadoPago SDK (for checkout)
export function initMercadoPago() {
  if (!MERCADOPAGO_PUBLIC_KEY) {
    console.error("MERCADOPAGO_PUBLIC_KEY not configured");
    return null;
  }
  
  // The SDK will be loaded from CDN in the component
  return MERCADOPAGO_PUBLIC_KEY;
}