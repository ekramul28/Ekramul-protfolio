import SideBar from "@/components/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-12 min-h-screen">
      <div className="col-span-2">
        <SideBar />
      </div>

      <div className="col-span-12 lg:col-span-10 ml-3">{children}</div>
    </div>
  );
}
