import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign in | Calye-Safe" },
      { name: "description", content: "Sign in to your Calye-Safe account." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage("Signed in successfully.");
  }

  return (
    <AuthShell title="Sign in" subtitle="Access your Calye-Safe account.">
      <form onSubmit={handleSubmit} className="space-y-4">
        <EmailField value={email} onChange={setEmail} />
        <PasswordField value={password} onChange={setPassword} />
        {message ? <p className="text-sm text-ink/65">{message}</p> : null}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-primary px-5 py-3 font-medium text-primary-foreground disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>
      <p className="mt-5 text-center text-sm text-ink/60">
        No account yet?{" "}
        <Link to="/register" className="font-medium text-primary">
          Create one
        </Link>
      </p>
    </AuthShell>
  );
}

function AuthShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-canvas text-ink grid place-items-center px-5 py-10">
      <div className="w-full max-w-md">
        <Link to="/" className="mx-auto mb-8 flex w-fit items-center gap-2 text-lg font-semibold">
          Calye<span className="text-primary">Safe</span>
        </Link>
        <section className="card-soft p-7">
          <h1 className="text-2xl font-semibold tracking-tight text-center">{title}</h1>
          <p className="mt-2 mb-6 text-center text-sm text-ink/60">{subtitle}</p>
          {children}
        </section>
      </div>
    </main>
  );
}

function EmailField({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <label className="block text-sm font-medium">
      Email
      <input
        required
        type="email"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-1 w-full rounded-lg border border-input bg-card px-3 py-2"
      />
    </label>
  );
}

function PasswordField({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <label className="block text-sm font-medium">
      Password
      <input
        required
        minLength={6}
        type="password"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-1 w-full rounded-lg border border-input bg-card px-3 py-2"
      />
    </label>
  );
}
