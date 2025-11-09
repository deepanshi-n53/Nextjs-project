import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import ReactQueryProvider from "@/lib/queryclient";

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "Using React Query with Next.js 14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
