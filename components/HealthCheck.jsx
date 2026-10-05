"use client";
import { useState } from "react";
const fmt = (n) => n >= 1e5 ? `₹${(n / 1e5).toFixed(1)} L` : `₹${Math.round(n).toLocaleString("en-IN")}`;
function Field({ label, v, set, min, max, step }) {
  return (
    <label className="block">
      <span className="flex justify-between text-sm"><span className="text-mute">{label}</span><b>{fmt(v)}</b></span>
      <input type="range" min={min} max={max} step={step} value={v} onChange={(e) => set(+e.target.value)} className="mt-2" />
    </label>
  );
}
export default function HealthCheck() {
  const [inc, setInc] = useState(80000), [sp, setSp] = useState(56000), [sav, setSav] = useState(150000), [emi, setEmi] = useState(12000);
  const rate = Math.max(0, (inc - sp) / inc), months = sav / Math.max(sp, 1), debt = emi / inc;
  const a = Math.min(rate / 0.2, 1) * 40, b = Math.min(months / 6, 1) * 35;
  const c = (debt <= 0.2 ? 1 : Math.max(0, 1 - (debt - 0.2) / 0.3)) * 25;
  const score = Math.round(a + b + c);
  const actions = [
    { w: 40 - a, t: `Save ${fmt(Math.max(0, inc * 0.2 - (inc - sp)))} more each month to reach a 20% savings rate.` },
    { w: 35 - b, t: `Add ${fmt(Math.max(0, sp * 6 - sav))} to your cash cushion. That covers 6 months of spending.` },
    { w: 25 - c, t: `Loan payments take ${Math.round(debt * 100)}% of income. Aim to bring that under 20%.` },
  ].filter((x) => x.w > 1).sort((x, y) => y.w - x.w).slice(0, 3);
  const label = score >= 75 ? "Strong" : score >= 50 ? "Getting there" : "Needs attention";
  const C = 2 * Math.PI * 54;
  return (
    <div className="grid gap-10 rounded-3xl border border-line bg-white p-6 sm:p-10 lg:grid-cols-2">
      <div className="space-y-6">
        <Field label="Monthly income" v={inc} set={setInc} min={20000} max={500000} step={5000} />
        <Field label="Monthly spending" v={sp} set={setSp} min={5000} max={500000} step={1000} />
        <Field label="Savings in the bank" v={sav} set={setSav} min={0} max={2000000} step={10000} />
        <Field label="Monthly loan payments" v={emi} set={setEmi} min={0} max={150000} step={1000} />
      </div>
      <div>
        <div className="flex items-center gap-6">
          <svg width="132" height="132" viewBox="0 0 132 132" role="img" aria-label={`Score ${score} out of 100`}>
            <circle cx="66" cy="66" r="54" fill="none" stroke="var(--color-line)" strokeWidth="12" />
            <circle cx="66" cy="66" r="54" fill="none" stroke="var(--color-blue)" strokeWidth="12" strokeLinecap="round"
              strokeDasharray={C} strokeDashoffset={C * (1 - score / 100)} transform="rotate(-90 66 66)" style={{ transition: "stroke-dashoffset .6s ease" }} />
            <text x="66" y="76" textAnchor="middle" className="fill-ink font-display" fontSize="34" fontWeight="700">{score}</text>
          </svg>
          <div><p className="font-display text-2xl font-semibold">{label}</p><p className="text-sm text-mute">Saving {Math.round(rate * 100)}% of income, {months.toFixed(1)} months of cushion.</p></div>
        </div>
        <p className="mt-7 font-medium">Do these first</p>
        <ul className="mt-3 space-y-3">
          {(actions.length ? [{ t: "You're in strong shape. Put your surplus toward a goal in the planner above." }] : actions).map((x, i) => (
            <li key={i} className="flex gap-3 rounded-2xl bg-paper p-4 text-[15px]"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue" />{x.t}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
