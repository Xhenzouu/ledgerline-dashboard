import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/dashboard/Header";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — Ledgerline" },
      { name: "description", content: "Workspace and profile settings." },
      { property: "og:title", content: "Settings — Ledgerline" },
      { property: "og:description", content: "Workspace and profile settings." },
    ],
  }),
  component: SettingsPage,
});

const fields = [
  { id: "name", label: "Full name", value: "Henson Arroyo", type: "text" },
  { id: "email", label: "Email", value: "henson@ledgerline.io", type: "email" },
  { id: "company", label: "Company", value: "Ledgerline", type: "text" },
  { id: "timezone", label: "Timezone", value: "Asia/Manila (UTC+8)", type: "text" },
];

function SettingsPage() {
  return (
    <>
      <Header title="Settings" subtitle="Manage your profile and workspace." />
      <form className="max-w-2xl rounded-lg border border-border bg-card p-6" onSubmit={(e) => e.preventDefault()}>
        <h2 className="mb-6 font-serif text-2xl">Profile</h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {fields.map((f) => (
            <label key={f.id} className="block text-sm">
              <span className="mb-1.5 block text-muted-foreground">{f.label}</span>
              <input
                type={f.type}
                defaultValue={f.value}
                className="w-full rounded-md border border-border bg-card px-3 py-2 text-foreground outline-none focus:border-primary"
              />
            </label>
          ))}
        </div>
        <div className="mt-6 flex justify-end">
          <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            Save changes
          </button>
        </div>
      </form>
    </>
  );
}
