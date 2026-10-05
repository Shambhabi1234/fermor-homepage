"use client";
import { useState } from "react";
export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle");
  const submit = (e) => {
    e.preventDefault();
    setState(/^\S+@\S+\.\S+$/.test(email) ? "done" : "error");
  };
  if (state === "done")
    return <p className="mt-8 text-xl font-medium">You're on the list. We'll email {email} when your spot opens.</p>;
  return (
    <form onSubmit={submit} className="mt-8 flex max-w-md flex-col gap-3 sm:flex-row" noValidate>
      <input
        value={email}
        onChange={(e) => { setEmail(e.target.value); setState("idle"); }}
        type="email" placeholder="you@email.com" aria-label="Email address"
        className="min-w-0 flex-1 rounded-full bg-white px-5 py-3.5 text-ink placeholder:text-mute"
      />
      <button className="rounded-full bg-lime px-6 py-3.5 font-semibold text-ink transition hover:brightness-95">Join early access</button>
      {state === "error" && <p role="alert" className="text-sm sm:absolute sm:mt-16">Enter a valid email, like name@email.com.</p>}
    </form>
  );
}
