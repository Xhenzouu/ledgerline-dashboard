import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/dashboard/Header";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { Transactions } from "@/components/dashboard/Transactions";
import { ConversionFunnel } from "@/components/dashboard/ConversionFunnel";
import { metrics } from "@/data/mockData";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Overview — Ledgerline Analytics" },
      { name: "description", content: "MRR, active users, churn and revenue trends at a glance." },
      { property: "og:title", content: "Overview — Ledgerline Analytics" },
      { property: "og:description", content: "MRR, active users, churn and revenue trends at a glance." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header title="Overview" subtitle="Welcome back. Here's how your business is performing." />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((m) => (
          <MetricCard key={m.title} {...m} />
        ))}
      </div>
      <div className="mt-6">
        <RevenueChart />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <Transactions />
        </div>
        <div className="lg:col-span-2">
          <ConversionFunnel />
        </div>
      </div>
    </>
  );
}
