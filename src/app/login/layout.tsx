import React from "react";
import NavbarDetailsPage from "@/components/navber/navberForDetalisPage";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" min-h-screen bg-gray-100 grid lg:grid-cols-10">
      <div className="col-span-2 mt-7">
        <NavbarDetailsPage />
      </div>

      <div className="col-span-8">
        <main className="px-4 h-screen">{children}</main>
      </div>
    </div>
  );
}
