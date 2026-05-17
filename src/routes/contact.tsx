import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageSquare, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Calye-Safe" },
      {
        name: "description",
        content: "Contact the Calye-Safe team for support, partnerships, and civic reporting help.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="min-h-screen bg-canvas text-ink">
      <header className="border-b border-ink/5 bg-canvas/90">
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <Link to="/" className="font-semibold text-lg">
            Calye<span className="text-primary">Safe</span>
          </Link>
          <nav className="flex items-center gap-5 text-sm font-medium text-ink/70">
            <Link to="/about" className="hover:text-ink">About</Link>
            <Link to="/login" className="hover:text-ink">Sign in</Link>
          </nav>
        </div>
      </header>

      <section className="max-w-5xl mx-auto px-5 py-16 grid lg:grid-cols-[1fr_360px] gap-10">
        <div>
          <p className="text-xs uppercase tracking-widest text-secondary font-semibold">
            Contact
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
            Need help with Calye-Safe?
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink/65">
            Send a message for account help, report follow-ups, or coordination with
            barangay response teams.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              { icon: Mail, label: "Email", value: "support@calyesafe.local" },
              { icon: Phone, label: "Phone", value: "City hotline" },
              { icon: MapPin, label: "Area", value: "Santa Rosa, Laguna" },
              { icon: MessageSquare, label: "Response", value: "Within office hours" },
            ].map((item) => (
              <div key={item.label} className="card-soft p-5">
                <item.icon className="size-5 text-primary" />
                <p className="mt-4 text-sm text-ink/55">{item.label}</p>
                <p className="font-medium">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <form className="card-soft p-6 space-y-4">
          <label className="block text-sm font-medium">
            Name
            <input className="mt-1 w-full rounded-lg border border-input bg-card px-3 py-2" />
          </label>
          <label className="block text-sm font-medium">
            Email
            <input type="email" className="mt-1 w-full rounded-lg border border-input bg-card px-3 py-2" />
          </label>
          <label className="block text-sm font-medium">
            Message
            <textarea rows={5} className="mt-1 w-full rounded-lg border border-input bg-card px-3 py-2" />
          </label>
          <button type="button" className="w-full rounded-full bg-primary px-5 py-3 font-medium text-primary-foreground">
            Send message
          </button>
        </form>
      </section>
    </main>
  );
}
