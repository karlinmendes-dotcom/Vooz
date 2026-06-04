import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const DEMO_EMAIL = "sales@ansora.io";
/** Base URL for API (empty = same origin; set VITE_API_URL when API is on another host) */
const API_BASE = import.meta.env.VITE_API_URL ?? "";

export const BookDemo = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(`${API_BASE}/api/send-demo`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container max-w-lg">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Book a Demo</CardTitle>
              <CardDescription>
                Tell us a bit about yourself and we’ll get back to you to schedule a demo. Your request will be sent to{" "}
                <a href={`mailto:${DEMO_EMAIL}`} className="text-primary underline">
                  {DEMO_EMAIL}
                </a>
                .
              </CardDescription>
            </CardHeader>
            <CardContent>
              {status === "success" && (
                <div className="mb-4 rounded-md bg-green-500/10 text-green-700 dark:text-green-400 p-3 text-sm">
                  Thanks! We’ve received your request and will be in touch soon.
                </div>
              )}
              {status === "error" && (
                <div className="mb-4 rounded-md bg-destructive/10 text-destructive p-3 text-sm">
                  Something went wrong. Please try again or email us directly at{" "}
                  <a href={`mailto:${DEMO_EMAIL}`} className="underline">{DEMO_EMAIL}</a>.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                    Name <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData((d) => ({ ...d, name: e.target.value }))}
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData((d) => ({ ...d, email: e.target.value }))}
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-1.5">
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your company (optional)"
                    value={formData.company}
                    onChange={(e) => setFormData((d) => ({ ...d, company: e.target.value }))}
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                    Message <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="What would you like to see in the demo?"
                    value={formData.message}
                    onChange={(e) => setFormData((d) => ({ ...d, message: e.target.value }))}
                    className={cn(
                      "flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
                      "placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                      "disabled:cursor-not-allowed disabled:opacity-50 resize-y min-h-[80px]"
                    )}
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-2 pt-2">
                  <Button type="submit" disabled={status === "sending"} className="flex-1">
                    {status === "sending" ? "Sending…" : "Send request"}
                  </Button>
                  <Button type="button" variant="outline" asChild>
                    <Link to="/">Back to home</Link>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
};
