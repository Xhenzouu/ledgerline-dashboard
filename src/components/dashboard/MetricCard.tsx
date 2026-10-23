import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function MetricCard({ title, value, change }: { title: string; value: string; change: number }) {
  const up = change >= 0;
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <p className="text-sm text-muted-foreground">{title}</p>
      <div className="mt-3 flex items-end justify-between gap-2">
        <p className="font-serif text-3xl">{value}</p>
        <span
          className={cn(
            "inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-xs font-medium",
            up ? "bg-success text-success-foreground" : "bg-destructive text-destructive-foreground",
          )}
        >
          {up ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
          {up ? "+" : ""}
          {change}%
        </span>
      </div>
    </div>
  );
}
