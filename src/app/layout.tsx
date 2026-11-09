import type { Metadata, Viewport } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr Murtaza Kazmi | Family Medicine Specialist, Karachi",
  description:
    "Dr Murtaza Kazmi (MBBS, MCPS) is a Family Medicine Specialist at Karachi Central Hospital, Water Pump. First point of care for all ages. Book a consultation on WhatsApp.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f8fa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a151e" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${figtree.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
