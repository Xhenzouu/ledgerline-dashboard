import { funnel } from "@/data/mockData";

const bars = ["bg-primary", "bg-secondary", "bg-success"];

export function ConversionFunnel() {
  return (
    <div className="rounded-lg border border-border bg-card p-5 sm:p-6">
      <h2 className="mb-6 font-serif text-2xl">Conversion Funnel</h2>
      <div className="space-y-6">
        {funnel.map((f, i) => (
          <div key={f.stage}>
            <div className="mb-2 flex justify-between text-sm">
              <span>{f.stage}</span>
              <span className="tabular-nums text-muted-foreground">
                {f.value.toLocaleString()} · {f.percent}%
              </span>
            </div>
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-muted">
              <div className={`h-full rounded-full ${bars[i]}`} style={{ width: `${Math.max(f.percent, 3)}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
