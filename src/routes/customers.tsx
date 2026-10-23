import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/dashboard/Header";
import { customers } from "@/data/mockData";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/customers")({
  head: () => ({
    meta: [
      { title: "Customers — Ledgerline" },
      { name: "description", content: "All accounts, plans and recurring revenue." },
      { property: "og:title", content: "Customers — Ledgerline" },
      { property: "og:description", content: "All accounts, plans and recurring revenue." },
    ],
  }),
  component: CustomersPage,
});

function CustomersPage() {
  return (
    <>
      <Header title="Customers" subtitle="Every account on your platform." />
      <div className="rounded-lg border border-border bg-card p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-xs uppercase tracking-wide text-muted-foreground">
                <th className="pb-3 font-medium">Customer</th>
                <th className="pb-3 font-medium">Plan</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 text-right font-medium">MRR</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((c) => (
                <tr key={c.id} className="border-b border-border last:border-0">
                  <td className="py-3">
                    <p className="font-medium">{c.name}</p>
                    <p className="text-xs text-muted-foreground">{c.email}</p>
                  </td>
                  <td className="py-3 text-muted-foreground">{c.plan}</td>
                  <td className="py-3">
                    <span
                      className={cn(
                        "text-xs font-medium",
                        c.status === "Active" && "text-success",
                        c.status === "Trial" && "text-primary",
                        c.status === "Churned" && "text-destructive",
                      )}
                    >
                      {c.status}
                    </span>
                  </td>
                  <td className="py-3 text-right font-medium tabular-nums">${c.mrr.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
