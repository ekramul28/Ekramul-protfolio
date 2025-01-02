import React from "react";
import Navbar from "@/components/navber/navber";
import Footer from "@/components/Footer/Footer";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <Navbar />
      <div className="mt-24">{children}</div>
      <Footer />
    </div>
  );
}
