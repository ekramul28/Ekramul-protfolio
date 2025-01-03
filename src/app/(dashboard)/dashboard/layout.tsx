import React from "react";
import SideBar from "@/components/SideBar";
import NavbarDetailsPage from "@/components/navber/navberForDetalisPage";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" min-h-screen bg-gray-100 grid md:grid-cols-10">
      <div className="col-span-2">
        <SideBar />
      </div>

      <div className="col-span-8">
        <NavbarDetailsPage />
        <main className="px-4 w-full ">{children}</main>
      </div>
    </div>
  );
}
