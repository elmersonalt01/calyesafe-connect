import { createFileRoute, Link } from "@tanstack/react-router";
import { Camera, ClipboardCheck, MapPinned, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Calye-Safe" },
      {
        name: "description",
        content: "Learn how Calye-Safe helps Santa Rosa residents report and track community issues.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="min-h-screen bg-canvas text-ink">
      <SiteHeader />
      <section className="max-w-5xl mx-auto px-5 py-16">
        <p className="text-xs uppercase tracking-widest text-secondary font-semibold">
          About Calye-Safe
        </p>
        <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-balance">
          A direct line between residents and city response teams.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-ink/65">
          Calye-Safe is a civic reporting app for Santa Rosa, Laguna. Residents can
          submit issues with a photo, location, and category so barangay and city
          teams can verify, assign, and resolve reports faster.
        </p>
      </section>

      <section className="bg-card border-y border-ink/5">
        <div className="max-w-5xl mx-auto px-5 py-14 grid md:grid-cols-4 gap-4">
          {[
            { icon: Camera, title: "Capture", body: "Add a photo and short report." },
            { icon: MapPinned, title: "Locate", body: "Pin the issue to the right place." },
            { icon: ClipboardCheck, title: "Verify", body: "Teams review and assign reports." },
            { icon: ShieldCheck, title: "Resolve", body: "Residents track status updates." },
          ].map((item) => (
            <article key={item.title} className="card-soft p-5">
              <div className="size-10 rounded-xl bg-primary/10 text-primary grid place-items-center">
                <item.icon className="size-5" />
              </div>
              <h2 className="mt-4 font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm text-ink/60">{item.body}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function SiteHeader() {
  return (
    <header className="border-b border-ink/5 bg-canvas/90">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <Link to="/" className="font-semibold text-lg">
          Calye<span className="text-primary">Safe</span>
        </Link>
        <nav className="flex items-center gap-5 text-sm font-medium text-ink/70">
          <Link to="/contact" className="hover:text-ink">Contact</Link>
          <Link to="/login" className="hover:text-ink">Sign in</Link>
          <Link to="/register" className="px-4 py-2 rounded-full bg-primary text-primary-foreground">
            Get started
          </Link>
        </nav>
      </div>
    </header>
  );
}
