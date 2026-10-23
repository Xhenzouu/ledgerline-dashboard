import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/dashboard/Header";

export const Route = createFileRoute("/analytics")({
  head: () => ({
    meta: [
      { title: "Analytics — Ledgerline" },
      { name: "description", content: "Analytics for your SaaS workspace." },
      { property: "og:title", content: "Analytics — Ledgerline" },
      { property: "og:description", content: "Analytics for your SaaS workspace." },
    ],
  }),
  component: () => (
    <>
      <Header title="Analytics" />
      <div className="rounded-lg border border-border bg-card p-10 text-sm text-muted-foreground">This section is coming soon.</div>
    </>
  ),
});
