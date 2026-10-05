# Fermor homepage

A redesigned homepage for Fermor, built with Next.js (App Router) and Tailwind CSS v4.

**Live:** https://fermor-homepage-mocha.vercel.app
**Repo:** https://github.com/Shambhabi1234/fermor-homepage

## Setup
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```
Deploy: import the repo on Vercel. No environment variables needed.

## Decisions
- **Who it's for:** people who want control over their money without learning finance first. The copy avoids jargon and says what Fermor does in the first line.
- **Understand, act, grow:** the hero headline answers "what do I do next?", which is the gap most finance apps leave open.
- **The hero is the product.** Instead of a stock illustration, visitors use a working goal planner. Changing any slider updates the projection, the goal status and a suggested next step, so the page demonstrates the idea instead of describing it.
- **Quiet everywhere else.** Platform section uses rows with a real example for each pillar, not identical cards. The only motion is the chart line drawing in and the planner responding to input.
- **Visual direction:** cool paper background, navy ink, one ultramarine accent, lime reserved for positive status. Bricolage Grotesque for headlines and Instrument Sans for text.
- **Accessibility:** keyboard focus styles, labelled controls, reduced-motion support, semantic landmarks.
- **Assumptions:** product copy is my interpretation of the brief. Figures and the planner are illustrative.

- **Financial health check:** a second interactive tool that scores savings rate, cash cushion and debt load, then ranks what to fix first. It runs fully in the browser and stores nothing.
- **Security principles:** written as design principles for the concept. Replace with real certifications and policies before launch.

## Structure
`app/page.js` sections · `components/Planner.jsx` interactive hero · `components/HealthCheck.jsx` health score tool · `components/Waitlist.jsx` validated signup form (client-side only)
