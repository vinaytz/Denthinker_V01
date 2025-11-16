import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DenThinkers Foundation - Every Child Deserves the Chance to Dream",
  description: "A Non Government Organization working for the upliftment of underprivileged children through education, healthcare, and community support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
