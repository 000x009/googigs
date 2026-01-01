import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/widgets/header/ui/header";

export const metadata: Metadata = {
  title: "GooGigs",
  description: "Jobs Jobs Jobs...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body>
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
