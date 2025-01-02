import React from "react";
import Footer from "@/components/Footer/Footer";
import NavbarDetailsPage from "@/components/navber/navberForDetalisPage";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <NavbarDetailsPage />
      <div className="mt-24">{children}</div>
      <Footer />
    </div>
  );
}
