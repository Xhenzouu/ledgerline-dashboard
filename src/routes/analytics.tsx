import { createFileRoute } from "@tanstack/react-router";
import { BarChart3 } from "lucide-react";
import { Header } from "@/components/dashboard/Header";

export const Route = createFileRoute("/analytics")({
  head: () => ({
    meta: [
      { title: "Analytics — Ledgerline" },
      { name: "description", content: "Deep-dive product and revenue analytics." },
      { property: "og:title", content: "Analytics — Ledgerline" },
      { property: "og:description", content: "Deep-dive product and revenue analytics." },
    ],
  }),
  component: AnalyticsPage,
});

function AnalyticsPage() {
  return (
    <>
      <Header title="Analytics" subtitle="Usage, retention and cohort trends." />
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="font-serif text-2xl">Retention by Cohort</h2>
        <div className="mt-6 flex h-72 flex-col items-center justify-center gap-3 rounded-md border border-dashed border-border text-muted-foreground">
          <BarChart3 className="h-8 w-8" strokeWidth={1.5} />
          <p className="text-sm">Chart coming soon</p>
        </div>
      </div>
    </>
  );
}
