import { Lato, Montserrat } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import "animate.css";
import SideBar from "@/components/SideBar";
import { Bounce, ToastContainer } from "react-toastify";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Dashboard | OREEN",
  description:
    "Manage Freely your website with the modern tools and very simple way",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Dashboard | OREEN</title>
      </head>
      <body
        className={`${lato.variable} ${montserrat.variable} antialiased`}
        suppressHydrationWarning>
        <main className='flex'>
          <SideBar />
          <section className='w-[80%]'>
            {children}
            <ToastContainer
              position='bottom-right'
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme='light'
              transition={Bounce}
            />
          </section>
        </main>
      </body>
    </html>
  );
}
