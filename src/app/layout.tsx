import type { Metadata } from "next";
import "./globals.scss";

import { Inter } from "next/font/google";
import { Toaster } from "sonner";

import { Header } from "@/components/shared/Header/Header";
import { SideBar } from "@/components/shared/SideBar/SideBar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MIRON.B",
  description: "Miron Brinkovskii portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster richColors position="top-right" duration={1500} />
        <Header />
        <SideBar />
        {children}
      </body>
      <Analytics />
      <SpeedInsights />
    </html>
  );
}
