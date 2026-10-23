import { Calendar, ChevronDown } from "lucide-react";

export function Header({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="font-serif text-4xl tracking-tight">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
      </div>
      <button className="inline-flex items-center gap-2 self-start rounded-md border border-border bg-card px-3 py-2 text-sm hover:bg-accent sm:self-auto">
        <Calendar className="h-4 w-4 text-muted-foreground" strokeWidth={1.75} />
        Last 30 Days
        <ChevronDown className="h-4 w-4 text-muted-foreground" strokeWidth={1.75} />
      </button>
    </header>
  );
}
