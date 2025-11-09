import React from "react";
import Header from "@/components/ui/header/page";
import Footer from "@/components/ui/footer/page";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
