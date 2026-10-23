import { revenueData } from "@/data/mockData";

const W = 800;
const H = 280;
const P = { t: 16, r: 16, b: 32, l: 52 };
const MAX = 50000;
const ticks = [0, 10000, 20000, 30000, 40000, 50000];

export function RevenueChart() {
  const iw = W - P.l - P.r;
  const ih = H - P.t - P.b;
  const x = (i: number) => P.l + (i / (revenueData.length - 1)) * iw;
  const y = (v: number) => P.t + ih - (v / MAX) * ih;
  const pts = revenueData.map((d, i) => `${x(i)},${y(d.revenue)}`).join(" ");
  const area = `${P.l},${P.t + ih} ${pts} ${x(revenueData.length - 1)},${P.t + ih}`;

  return (
    <div className="rounded-lg border border-border bg-card p-5 sm:p-6">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
        <div>
          <h2 className="font-serif text-2xl">Revenue</h2>
          <p className="text-sm text-muted-foreground">Monthly recurring revenue, last 12 months</p>
        </div>
        <p className="font-sans text-2xl font-semibold tracking-tight tabular-nums text-primary">$42,500</p>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="Revenue chart">
        {ticks.map((t) => (
          <g key={t}>
            <line x1={P.l} x2={W - P.r} y1={y(t)} y2={y(t)} className="stroke-border" strokeWidth={1} />
            <text x={P.l - 10} y={y(t) + 4} textAnchor="end" className="fill-muted-foreground text-[11px]">
              ${t / 1000}k
            </text>
          </g>
        ))}
        <polygon points={area} className="fill-primary" fillOpacity={0.08} />
        <polyline points={pts} fill="none" className="stroke-primary" strokeWidth={3} strokeLinejoin="round" strokeLinecap="round" />
        {revenueData.map((d, i) => (
          <g key={d.month}>
            <circle cx={x(i)} cy={y(d.revenue)} r={3.5} className="fill-background stroke-primary" strokeWidth={2}>
              <title>{`${d.month}: $${d.revenue.toLocaleString()}`}</title>
            </circle>
            <text x={x(i)} y={H - 10} textAnchor="middle" className="fill-muted-foreground text-[11px]">
              {d.month}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
