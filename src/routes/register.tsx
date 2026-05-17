import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Create account | Calye-Safe" },
      { name: "description", content: "Create your Calye-Safe account." },
    ],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: typeof window === "undefined" ? undefined : window.location.origin,
      },
    });
    setLoading(false);

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage("Account created. Check your email if confirmation is enabled.");
  }

  return (
    <main className="min-h-screen bg-canvas text-ink grid place-items-center px-5 py-10">
      <div className="w-full max-w-md">
        <Link to="/" className="mx-auto mb-8 flex w-fit items-center gap-2 text-lg font-semibold">
          Calye<span className="text-primary">Safe</span>
        </Link>
        <section className="card-soft p-7">
          <h1 className="text-2xl font-semibold tracking-tight text-center">Create account</h1>
          <p className="mt-2 mb-6 text-center text-sm text-ink/60">
            Start reporting and tracking community issues.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block text-sm font-medium">
              Email
              <input
                required
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mt-1 w-full rounded-lg border border-input bg-card px-3 py-2"
              />
            </label>
            <label className="block text-sm font-medium">
              Password
              <input
                required
                minLength={6}
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="mt-1 w-full rounded-lg border border-input bg-card px-3 py-2"
              />
            </label>
            {message ? <p className="text-sm text-ink/65">{message}</p> : null}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-primary px-5 py-3 font-medium text-primary-foreground disabled:opacity-60"
            >
              {loading ? "Creating account..." : "Create account"}
            </button>
          </form>
          <p className="mt-5 text-center text-sm text-ink/60">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-primary">
              Sign in
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}
