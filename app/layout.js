import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "AirDosa — AI-Powered Instant Dosa Delivery",
  description:
    "Crispy dosas delivered by smart drones in minutes. Bengaluru's favourite AI dosa fleet.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${dmSans.variable}`}>{children}</body>
    </html>
  );
}
