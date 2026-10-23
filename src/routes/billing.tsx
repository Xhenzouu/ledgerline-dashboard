import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/dashboard/Header";

export const Route = createFileRoute("/billing")({
  head: () => ({
    meta: [
      { title: "Billing — Ledgerline" },
      { name: "description", content: "Billing for your SaaS workspace." },
      { property: "og:title", content: "Billing — Ledgerline" },
      { property: "og:description", content: "Billing for your SaaS workspace." },
    ],
  }),
  component: () => (
    <>
      <Header title="Billing" />
      <div className="rounded-lg border border-border bg-card p-10 text-sm text-muted-foreground">This section is coming soon.</div>
    </>
  ),
});
