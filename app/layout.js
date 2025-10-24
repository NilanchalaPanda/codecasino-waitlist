import { JetBrains_Mono, Orbitron } from "next/font/google";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});
export const metadata = {
  title: "CodeNEarn | Join Now!",
  description:
    "Where Code Meets Competition. Join the waitlist and enter the ultimate coding arena.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jetbrains.variable} ${orbitron.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
