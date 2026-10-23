import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/dashboard/Header";

export const Route = createFileRoute("/customers")({
  head: () => ({
    meta: [
      { title: "Customers — Ledgerline" },
      { name: "description", content: "Customers for your SaaS workspace." },
      { property: "og:title", content: "Customers — Ledgerline" },
      { property: "og:description", content: "Customers for your SaaS workspace." },
    ],
  }),
  component: () => (
    <>
      <Header title="Customers" />
      <div className="rounded-lg border border-border bg-card p-10 text-sm text-muted-foreground">This section is coming soon.</div>
    </>
  ),
});
