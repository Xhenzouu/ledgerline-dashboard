import { Link, useRouterState } from "@tanstack/react-router";
import { LayoutDashboard, LineChart, Users, CreditCard, Settings, X, Hexagon } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Analytics", url: "/analytics", icon: LineChart },
  { title: "Customers", url: "/customers", icon: Users },
  { title: "Billing", url: "/billing", icon: CreditCard },
  { title: "Settings", url: "/settings", icon: Settings },
] as const;

export function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const path = useRouterState({ select: (r) => r.location.pathname });
  return (
    <>
      {open && <div className="fixed inset-0 z-30 bg-background/80 lg:hidden" onClick={onClose} />}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex w-[260px] flex-col border-r border-border bg-sidebar transition-transform lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <Hexagon className="h-6 w-6 text-primary" strokeWidth={1.75} />
            <span className="font-serif text-xl">Ledgerline</span>
          </div>
          <button aria-label="Close menu" onClick={onClose} className="text-muted-foreground lg:hidden">
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex-1 space-y-1 px-3 py-4">
          {items.map((i) => {
            const active = path === i.url;
            return (
              <Link
                key={i.url}
                to={i.url}
                onClick={onClose}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-sidebar-accent text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <i.icon className={cn("h-4 w-4", active && "text-primary")} strokeWidth={1.75} />
                {i.title}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3 border-t border-border p-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-sm font-medium text-secondary-foreground">
            HA
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium">Henson Arroyo</p>
            <p className="truncate text-xs text-muted-foreground">Admin · Ledgerline</p>
          </div>
        </div>
      </aside>
    </>
  );
}
