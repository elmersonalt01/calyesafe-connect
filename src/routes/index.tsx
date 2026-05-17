import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Camera, Bell, ShieldCheck, ArrowRight, Activity } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Calye-Safe — Smart City Incident Reporting | Santa Rosa, Laguna" },
      {
        name: "description",
        content:
          "Report community issues in Santa Rosa, Laguna in seconds. Photo + GPS, real-time tracking, and a city-wide response dashboard for safer barangays.",
      },
      { property: "og:title", content: "Calye-Safe — Santa Rosa Smart City Reporting" },
      {
        property: "og:description",
        content: "Citizen-powered incident reporting for safer streets in Santa Rosa, Laguna.",
      },
    ],
  }),
  component: Landing,
});

const categories = [
  { label: "Basura", icon: "🗑️", tone: "bg-primary/5 ring-primary/10" },
  { label: "Sira sa Kalsada", icon: "🛣️", tone: "bg-secondary/5 ring-secondary/10" },
  { label: "Baha / Kanal", icon: "💧", tone: "bg-accent/10 ring-accent/30" },
  { label: "Streetlight", icon: "💡", tone: "bg-muted ring-ink/5" },
  { label: "Fallen Tree", icon: "🌳", tone: "bg-primary/5 ring-primary/10" },
  { label: "Public Safety", icon: "🛡️", tone: "bg-secondary/5 ring-secondary/10" },
];

function Landing() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-canvas/80 border-b border-ink/5">
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="size-9 rounded-xl bg-primary grid place-items-center text-primary-foreground font-bold shadow-soft">
              C
            </div>
            <span className="font-semibold tracking-tight text-lg">
              Calye<span className="text-primary">Safe</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-ink/70">
            <Link to="/about" className="hover:text-ink transition-colors">
              About
            </Link>
            <Link to="/contact" className="hover:text-ink transition-colors">
              Contact
            </Link>
            <Link to="/login" className="hover:text-ink transition-colors">
              Sign in
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-soft"
            >
              Get started
            </Link>
          </nav>
          <Link
            to="/register"
            className="md:hidden px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium shadow-soft"
          >
            Start
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-5 pt-14 pb-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-7">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/20 ring-1 ring-accent/40 text-xs font-semibold uppercase tracking-wider text-ink/70">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            Santa Rosa, Laguna
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-balance leading-[1.05]">
            Report. Respond. <span className="text-primary">Resolve.</span>
          </h1>
          <p className="text-lg text-ink/65 max-w-xl text-balance">
            Calye-Safe turns every citizen into a sensor for the city. Snap a photo,
            drop a pin, and watch your barangay respond — all in real time.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-medium shadow-soft hover:glow-brand transition-shadow"
            >
              Submit your first report
              <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-card ring-1 ring-ink/10 font-medium hover:bg-muted transition-colors"
            >
              How it works
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-ink/5">
            {[
              { v: "18", l: "Barangays covered" },
              { v: "4.2h", l: "Avg. resolution" },
              { v: "98%", l: "Verification rate" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl font-semibold">{s.v}</div>
                <div className="text-xs text-ink/55 mt-0.5">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Phone mockup */}
        <div className="relative mx-auto w-full max-w-[380px]">
          <div className="absolute -inset-8 bg-gradient-to-tr from-primary/20 via-secondary/15 to-accent/20 rounded-[3rem] blur-2xl" />
          <div className="relative bg-card rounded-[2rem] ring-1 ring-ink/5 shadow-card overflow-hidden aspect-[9/18] flex flex-col">
            <div className="px-6 pt-5 flex justify-between text-xs font-medium text-ink/60">
              <span>9:41</span>
              <span>•••</span>
            </div>
            <div className="flex-1 p-5 space-y-5 overflow-hidden">
              <div>
                <p className="text-xs uppercase tracking-wider text-secondary font-semibold">
                  Santa Rosa, Laguna
                </p>
                <h3 className="text-xl font-semibold mt-1">Magandang umaga.</h3>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {categories.slice(0, 4).map((c) => (
                  <div
                    key={c.label}
                    className={`p-3 rounded-2xl ring-1 ${c.tone} flex flex-col gap-2`}
                  >
                    <div className="text-lg">{c.icon}</div>
                    <span className="text-xs font-medium">{c.label}</span>
                  </div>
                ))}
              </div>
              <div className="card-soft p-3.5 space-y-2.5">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium">Fallen Tree — Brgy. Labas</p>
                    <p className="text-[11px] text-ink/55">Submitted 2h ago</p>
                  </div>
                  <span className="px-2 py-0.5 bg-secondary/10 text-secondary text-[9px] font-bold uppercase tracking-wider rounded">
                    Processing
                  </span>
                </div>
                <div className="aspect-[2/1] bg-canvas rounded-lg ring-1 ring-ink/5" />
              </div>
            </div>
            <nav className="px-5 py-3 bg-card border-t border-ink/5 flex justify-between">
              {["Home", "Map", "Inbox", "Profile"].map((n, i) => (
                <div key={n} className="flex flex-col items-center gap-1">
                  <div
                    className={`size-4 rounded ${i === 0 ? "bg-primary" : "bg-ink/30"}`}
                  />
                  <span
                    className={`text-[9px] font-medium ${i === 0 ? "text-primary" : "text-ink/40"}`}
                  >
                    {n}
                  </span>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-card border-y border-ink/5">
        <div className="max-w-6xl mx-auto px-5 py-20">
          <div className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-widest text-secondary font-semibold mb-3">
              Built for every barangay
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-balance">
              A complete civic feedback loop, in your pocket.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Camera,
                title: "Snap & send",
                body: "Photo, GPS, and category — all captured in seconds.",
              },
              {
                icon: MapPin,
                title: "Geo-tagged",
                body: "Reports land on the barangay's live operational map.",
              },
              {
                icon: Activity,
                title: "Real-time status",
                body: "Track verification, assignment, and resolution as it happens.",
              },
              {
                icon: Bell,
                title: "Emergency alerts",
                body: "City-wide broadcasts for floods, outages, and hazards.",
              },
            ].map((f) => (
              <div key={f.title} className="card-soft card-hover p-6 space-y-3">
                <div className="size-11 rounded-xl bg-primary/10 text-primary grid place-items-center">
                  <f.icon className="size-5" />
                </div>
                <h3 className="font-semibold">{f.title}</h3>
                <p className="text-sm text-ink/60">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs uppercase tracking-widest text-secondary font-semibold mb-2">
              What you can report
            </p>
            <h2 className="text-3xl font-semibold tracking-tight">
              Eight categories. One tap each.
            </h2>
          </div>
          <Link
            to="/register"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary"
          >
            Start reporting <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {categories.map((c) => (
            <div
              key={c.label}
              className={`p-5 rounded-2xl ring-1 ${c.tone} flex flex-col gap-3 card-hover`}
            >
              <span className="text-2xl">{c.icon}</span>
              <span className="text-sm font-medium leading-tight">{c.label}</span>
            </div>
          ))}
          <div className="p-5 rounded-2xl ring-1 ring-ink/10 bg-muted flex flex-col gap-3 card-hover">
            <span className="text-2xl">📍</span>
            <span className="text-sm font-medium leading-tight">Drainage</span>
          </div>
          <div className="p-5 rounded-2xl ring-1 ring-ink/10 bg-muted flex flex-col gap-3 card-hover">
            <span className="text-2xl">⋯</span>
            <span className="text-sm font-medium leading-tight">Other</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-5 pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-ink text-canvas p-10 md:p-14">
          <div className="absolute -top-20 -right-20 size-72 bg-primary/40 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-10 size-72 bg-accent/30 rounded-full blur-3xl" />
          <div className="relative max-w-2xl space-y-5">
            <ShieldCheck className="size-10 text-accent" />
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-balance">
              Help build a safer Santa Rosa.
            </h2>
            <p className="text-canvas/70 text-lg">
              Free for every resident. Built with the barangay in mind.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/register"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:glow-brand transition-shadow"
              >
                Create your account
                <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-canvas/10 ring-1 ring-canvas/20 font-medium hover:bg-canvas/20 transition-colors"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-ink/5 py-8">
        <div className="max-w-6xl mx-auto px-5 flex flex-wrap items-center justify-between gap-4 text-sm text-ink/55">
          <p>© 2026 Calye-Safe • Smart City Santa Rosa</p>
          <div className="flex gap-6">
            <Link to="/about" className="hover:text-ink">About</Link>
            <Link to="/contact" className="hover:text-ink">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
