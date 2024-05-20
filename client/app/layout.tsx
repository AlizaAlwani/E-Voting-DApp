'use client';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import ConnectWallet from "@/components/ConnectWallet";
import { ThirdwebProvider } from "@/providers/ThirdWebProviders";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Election DApp",
  description: "Election DApp created on thirdweb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThirdwebProvider>
        <ConnectWallet />
        <Sidebar />
        {children}
        </ThirdwebProvider>
        </body>

    </html>
  );
}
