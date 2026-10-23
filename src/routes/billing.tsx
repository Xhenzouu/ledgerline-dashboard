import { createFileRoute } from "@tanstack/react-router";
import { FileText, Download } from "lucide-react";
import { Header } from "@/components/dashboard/Header";
import { invoices } from "@/data/mockData";

export const Route = createFileRoute("/billing")({
  head: () => ({
    meta: [
      { title: "Billing — Ledgerline" },
      { name: "description", content: "Your plan and past invoices." },
      { property: "og:title", content: "Billing — Ledgerline" },
      { property: "og:description", content: "Your plan and past invoices." },
    ],
  }),
  component: BillingPage,
});

function BillingPage() {
  return (
    <>
      <Header title="Billing" subtitle="Manage your plan and download invoices." />
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-4 font-serif text-2xl">Past Invoices</h2>
        <ul className="divide-y divide-border">
          {invoices.map((inv) => (
            <li key={inv.id} className="flex items-center justify-between gap-4 py-4">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-muted-foreground" strokeWidth={1.75} />
                <div>
                  <p className="text-sm font-medium">{inv.id}</p>
                  <p className="text-xs text-muted-foreground">{inv.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-medium text-success">{inv.status}</span>
                <span className="text-sm font-medium tabular-nums">${inv.amount}</span>
                <button aria-label={`Download ${inv.id}`} className="text-muted-foreground hover:text-primary">
                  <Download className="h-4 w-4" strokeWidth={1.75} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
