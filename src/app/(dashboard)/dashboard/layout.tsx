import React from "react";
import SideBar from "@/components/SideBar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" min-h-screen bg-gray-100 grid lg:grid-cols-10">
      <div className="col-span-2">
        <SideBar />
      </div>

      <div className="col-span-8">
        <main className="px-4 h-screen">{children}</main>
      </div>
    </div>
  );
}
