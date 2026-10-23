import { transactions } from "@/data/mockData";
import { cn } from "@/lib/utils";

export function Transactions() {
  return (
    <div className="rounded-lg border border-border bg-card p-5 sm:p-6">
      <h2 className="mb-4 font-serif text-2xl">Recent Transactions</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-left text-xs uppercase tracking-wide text-muted-foreground">
              <th className="pb-3 font-medium">Customer</th>
              <th className="pb-3 font-medium">Date</th>
              <th className="pb-3 font-medium">Status</th>
              <th className="pb-3 text-right font-medium">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t) => (
              <tr key={t.id} className="border-b border-border last:border-0">
                <td className="py-3">
                  <p className="font-medium">{t.customer}</p>
                  <p className="text-xs text-muted-foreground">{t.plan}</p>
                </td>
                <td className="py-3 text-muted-foreground">{t.date}</td>
                <td className="py-3">
                  <span
                    className={cn(
                      "text-xs font-medium",
                      t.status === "Paid" && "text-success",
                      t.status === "Pending" && "text-primary",
                      t.status === "Refunded" && "text-destructive",
                    )}
                  >
                    {t.status}
                  </span>
                </td>
                <td className="py-3 text-right font-medium tabular-nums">${t.amount.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
