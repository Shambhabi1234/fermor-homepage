import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";
const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage" });
const sans = Instrument_Sans({ subsets: ["latin"], variable: "--font-instrument" });
export const metadata = {
  title: "Fermor | Finance that tells you what to do next",
  description: "See where you stand, get clear next steps, and grow toward your goals.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
