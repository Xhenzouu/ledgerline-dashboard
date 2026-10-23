import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/dashboard/Header";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — Ledgerline" },
      { name: "description", content: "Settings for your SaaS workspace." },
      { property: "og:title", content: "Settings — Ledgerline" },
      { property: "og:description", content: "Settings for your SaaS workspace." },
    ],
  }),
  component: () => (
    <>
      <Header title="Settings" />
      <div className="rounded-lg border border-border bg-card p-10 text-sm text-muted-foreground">This section is coming soon.</div>
    </>
  ),
});
