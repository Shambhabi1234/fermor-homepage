import Planner from "@/components/Planner";
import HealthCheck from "@/components/HealthCheck";
import Waitlist from "@/components/Waitlist";

const pillars = [
  ["Understand", "Every account and investment in one view, with plain-language reasons behind each number.", "You spent 31% of income on rent. People in your city typically spend 28%."],
  ["Act", "A short list of next steps, ranked by how much they change your outcome.", "Move ₹5,000 from savings into your liquid fund. It lifts your yearly return by ₹380."],
  ["Grow", "Goals with a visible path that adjusts when your income or spending changes.", "Your salary rose 8%. Raising your SIP by ₹1,200 keeps your home goal on schedule."],
];
const steps = [
  ["Connect", "Link accounts with read-only access. Fermor can see balances but never move money."],
  ["See clearly", "Your spending, savings and investments are sorted and explained in minutes."],
  ["Set goals", "Pick what matters: a home, retirement, or a cushion for the unexpected."],
  ["Follow the plan", "Get monthly next steps and watch progress against each goal."],
];
const faqs = [
  ["Who is Fermor for?", "Anyone who wants to feel in control of money without learning finance first: first-time earners, families and busy professionals."],
  ["Can Fermor move my money?", "No. Connections are read-only. You make every final decision yourself."],
  ["Is this financial advice?", "Fermor offers education and planning tools. Projections are estimates and not guarantees."],
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-line bg-paper/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#" className="flex items-center gap-2 font-display text-2xl font-bold tracking-tight">
            <svg width="26" height="22" viewBox="0 0 26 22" aria-hidden><rect x="0" y="12" width="6" height="10" rx="2" fill="#14213d"/><rect x="10" y="6" width="6" height="16" rx="2" fill="#3340f5"/><rect x="20" y="0" width="6" height="22" rx="2" fill="#c8f169"/></svg>
            fermor
          </a>
          <nav className="hidden gap-8 text-sm text-mute md:flex">
            <a href="#platform" className="hover:text-ink">Platform</a><a href="#check" className="hover:text-ink">Health check</a><a href="#how" className="hover:text-ink">How it works</a><a href="#faq" className="hover:text-ink">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <details className="relative md:hidden"><summary className="cursor-pointer list-none rounded-full border border-line px-4 py-2.5 text-sm font-medium">Menu</summary>
              <div className="absolute right-0 mt-2 grid w-48 gap-1 rounded-2xl border border-line bg-white p-2 text-sm shadow-lg">
                {[["#platform","Platform"],["#check","Health check"],["#how","How it works"],["#faq","FAQ"]].map(([h,l]) => <a key={h} href={h} className="rounded-xl px-3 py-2 hover:bg-paper">{l}</a>)}
              </div></details>
            <a href="#start" className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white"><span className="sm:hidden">Join</span><span className="hidden sm:inline">Get early access</span></a>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 lg:grid-cols-[1fr_1.1fr] lg:pt-20">
          <div>
            <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">Finance that tells you what to do next.</h1>
            <p className="mt-6 max-w-lg text-lg text-mute">Fermor connects your accounts, explains where you stand in plain language, and turns your goals into a monthly plan.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#start" className="rounded-full bg-blue px-6 py-3.5 font-semibold text-white transition hover:brightness-110">Get early access</a>
              <a href="#platform" className="rounded-full border border-line px-6 py-3.5 font-semibold">See how it works</a>
            </div>
            <p className="mt-5 text-sm text-mute">Read-only access. Your data stays yours.</p>
          </div>
          <Planner />
        </section>

        <section id="platform" className="border-y border-line bg-white py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">Understand your money, act on it, and watch it grow.</h2>
            <div className="mt-12 divide-y divide-line border-t border-line">
              {pillars.map(([t, d, ex]) => (
                <div key={t} className="grid gap-4 py-8 md:grid-cols-[1fr_1.3fr_1.3fr] md:gap-10">
                  <h3 className="font-display text-3xl font-semibold">{t}</h3>
                  <p className="text-mute">{d}</p>
                  <p className="rounded-2xl bg-paper p-4 text-[15px]">{ex}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="check" className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">Find out where you stand in 30 seconds.</h2>
          <p className="mt-4 max-w-xl text-lg text-mute">Four numbers give you a financial health score and the three things worth fixing first. Nothing is stored or sent.</p>
          <div className="mt-10"><HealthCheck /></div>
        </section>

        <section id="how" className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Set up in an afternoon.</h2>
          <ol className="mt-12 grid gap-8 md:grid-cols-4">
            {steps.map(([t, d], i) => (
              <li key={t} className="border-t-2 border-ink pt-4">
                <span className="font-display text-lg font-semibold text-blue">{i + 1}</span>
                <h3 className="mt-1 font-display text-xl font-semibold">{t}</h3>
                <p className="mt-2 text-[15px] text-mute">{d}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="bg-ink py-20 text-white">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">Built so you stay in control.</h2>
            <div className="mt-12 grid gap-10 md:grid-cols-3">
              {[["Read-only connections","Fermor can see balances and transactions. It can never move money or place orders."],["Your data, your call","Export or delete everything at any time. Your information is never sold."],["Explained, not hidden","Every suggestion shows the numbers behind it, so you can check the logic."]].map(([t,d]) => (
                <div key={t} className="border-l-2 border-lime pl-5"><h3 className="font-display text-xl font-semibold">{t}</h3><p className="mt-2 text-white/70">{d}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-3xl px-5 py-20">
          <h2 className="font-display text-4xl font-bold tracking-tight">Common questions</h2>
          <div className="mt-8 divide-y divide-line border-y border-line">
            {faqs.map(([q, a]) => (
              <details key={q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">{q}<span className="text-2xl text-blue transition group-open:rotate-45">+</span></summary>
                <p className="mt-3 max-w-xl text-mute">{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="start" className="mx-auto max-w-6xl px-5 pb-20">
          <div className="relative rounded-[2rem] bg-blue p-8 text-white sm:p-14">
            <h2 className="max-w-xl font-display text-4xl font-bold tracking-tight sm:text-5xl">Get your first plan free.</h2>
            <p className="mt-4 max-w-md text-white/80">Join early access and Fermor will build a plan around your goals as soon as you're in.</p>
            <Waitlist />
          </div>
        </section>
      </main>

      <footer className="border-t border-line py-8 text-sm text-mute">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3 px-5"><span>© 2026 Fermor. Concept homepage for an assignment.</span><span>Privacy, Terms and Contact</span></div>
      </footer>
    </>
  );
}
