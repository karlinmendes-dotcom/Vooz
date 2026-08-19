"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { getPublicKey, createPaymentPreference } from "@/services/mercadopago";

interface CheckoutProps {
  amount: number;
  description: string;
  payerEmail?: string;
  payerName?: string;
  onSuccess?: (paymentId: string) => void;
  onError?: (error: string) => void;
}

export const Checkout = ({
  amount,
  description,
  payerEmail,
  payerName,
  onError,
}: CheckoutProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async () => {
    setLoading(true);
    setError(null);

    try {
      // Create preference on backend
      const preference = await createPaymentPreference({
        amount,
        description,
        payerEmail: payerEmail || "",
        payerName: payerName || "",
      });

      // Redirect to Mercado Pago checkout
      if (preference.init_point) {
        window.location.href = preference.init_point;
      } else if (preference.sandbox_init_point) {
        window.location.href = preference.sandbox_init_point;
      } else {
        throw new Error("No checkout URL received");
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Erro ao processar pagamento";
      setError(errorMessage);
      onError?.(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="p-4 border rounded-lg bg-muted/50">
        <p className="text-sm text-muted-foreground">Valor</p>
        <p className="text-2xl font-bold">R${amount.toFixed(2)}</p>
        <p className="text-sm text-muted-foreground mt-2">{description}</p>
      </div>

      {error && (
        <div className="p-3 text-sm text-red-500 bg-red-50 dark:bg-red-900/20 rounded-lg">
          {error}
        </div>
      )}

      <Button
        onClick={handleCheckout}
        disabled={loading || !getPublicKey()}
        className="w-full"
      >
        {loading ? "Processando..." : "Pagar com Mercado Pago"}
      </Button>

      <p className="text-xs text-center text-muted-foreground">
        Pagamento seguro via Mercado Pago
      </p>
    </div>
  );
};