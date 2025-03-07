import React from "react";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/navber/navber";

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
