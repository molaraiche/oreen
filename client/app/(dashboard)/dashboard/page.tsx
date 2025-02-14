// import Logout from "@/components/Logout";
import SideBar from "@/components/SideBar";
import { Children } from "react";
// import Image from "next/image";
// import Link from "next/link";

export function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className=' h-screen font-montserrat'>
      <div className='flex '>
        <SideBar />
        <div className={`  w-full flex items-center justify-center h-screen`}>
          {children}
        </div>
      </div>
    </section>
  );
}
export default DashboardLayout;
