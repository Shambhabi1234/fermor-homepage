"use client";
import { useState } from "react";
const GOALS = [
  { k: "Retirement", t: 2e7, m: 15000, r: 12, y: 25 },
  { k: "First home", t: 4e6, m: 30000, r: 9, y: 7 },
  { k: "Safety net", t: 3e5, m: 8000, r: 6.5, y: 3 },
];
const fmt = (n) => n >= 1e7 ? `₹${(n / 1e7).toFixed(2)} Cr` : n >= 1e5 ? `₹${(n / 1e5).toFixed(1)} L` : `₹${Math.round(n).toLocaleString("en-IN")}`;
const val = (m, r, k) => { const i = r / 1200; return m * ((Math.pow(1 + i, k) - 1) / i) * (1 + i); };

function Range({ label, value, set, min, max, step, show }) {
  return (
    <label className="block">
      <span className="flex justify-between text-sm"><span className="text-mute">{label}</span><b>{show}</b></span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => set(+e.target.value)} className="mt-2" />
    </label>
  );
}

export default function Planner() {
  const [g, setG] = useState(0);
  const [m, setM] = useState(GOALS[0].m), [r, setR] = useState(GOALS[0].r), [y, setY] = useState(GOALS[0].y);
  const goal = GOALS[g];
  const pick = (i) => { setG(i); setM(GOALS[i].m); setR(GOALS[i].r); setY(GOALS[i].y); };
  const n = y * 12, fv = val(m, r, n), inv = m * n, ok = fv >= goal.t;
  const need = Math.ceil(goal.t / (fv / m) / 500) * 500;
  const top = Math.max(fv, goal.t) * 1.08;
  const X = (k) => 16 + (k / y) * 568, Y = (v) => 230 - (v / top) * 210;
  const line = Array.from({ length: y + 1 }, (_, k) => `${k ? "L" : "M"}${X(k)} ${Y(val(m, r, k * 12))}`).join("");
  return (
    <div className="rounded-3xl border border-line bg-white p-5 shadow-[0_24px_60px_-30px_rgba(20,33,61,.35)] sm:p-7">
      <div role="tablist" className="flex gap-2">
        {GOALS.map((x, i) => (
          <button key={x.k} role="tab" aria-selected={g === i} onClick={() => pick(i)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${g === i ? "bg-ink text-white" : "bg-paper text-mute hover:text-ink"}`}>{x.k}</button>
        ))}
      </div>
      <div className="mt-6 flex items-end justify-between gap-4">
        <div><p className="text-sm text-mute">Projected in {y} years</p><p className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">{fmt(fv)}</p></div>
        <span className={`rounded-full px-3 py-1 text-sm font-semibold ${ok ? "bg-lime text-ink" : "bg-blue/10 text-blue"}`}>{ok ? "On track" : `${fmt(goal.t - fv)} short`}</span>
      </div>
      <svg viewBox="0 0 600 240" className="mt-4 w-full" role="img" aria-label={`Growth toward ${fmt(goal.t)} goal`}>
        <path d={`${line}L${X(y)} 230L16 230Z`} fill="var(--color-blue)" opacity=".08" />
        <path d={`M${X(0)} 230L${X(y)} ${Y(inv)}`} stroke="var(--color-mute)" strokeDasharray="4 5" fill="none" />
        <line x1="16" x2="584" y1={Y(goal.t)} y2={Y(goal.t)} stroke="var(--color-ink)" strokeWidth="1" />
        <text x="584" y={Y(goal.t) - 8} textAnchor="end" fontSize="13" fill="var(--color-ink)">Goal {fmt(goal.t)}</text>
        <path d={line} pathLength="1" className="draw" stroke="var(--color-blue)" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>
      <div className="mt-3 grid gap-5 sm:grid-cols-3">
        <Range label="Monthly" value={m} set={setM} min={1000} max={100000} step={500} show={fmt(m)} />
        <Range label="Yearly return" value={r} set={setR} min={4} max={18} step={0.5} show={`${r}%`} />
        <Range label="Years" value={y} set={setY} min={1} max={35} step={1} show={y} />
      </div>
      <p className="mt-6 rounded-2xl bg-paper p-4 text-[15px]">
        <b>Fermor suggests: </b>
        {ok ? `You're ahead of plan. You've put in ${fmt(inv)} and growth covers the rest.` : `Raise your monthly amount to ${fmt(need)} to reach ${fmt(goal.t)} in ${y} years.`}
      </p>
      <p className="mt-3 text-xs text-mute">Illustration only. Returns vary and are not guaranteed.</p>
    </div>
  );
}
