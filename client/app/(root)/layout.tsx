import type { Metadata } from "next";
import { Lato, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import "animate.css";
import "aos/dist/aos.css";
import Footer from "@/components/Footer";
import TopPanel from "@/components/TopPanel";
import { ToastContainer } from "react-toastify";
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
  title: "OREEN - Car Rental Web Application",
  description:
    "OREEN is a Car Rental web application provide high quality services and good cars with latest model for local rental",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${lato.variable} ${montserrat.variable} antialiased`}>
        <TopPanel />
        <header className='container mx-auto px-4'>
          <Navbar />
        </header>
        <main>
          {children}
          <ToastContainer />
        </main>
        <footer className='border-b-[25px] border-red-5'>
          <div className='container mx-auto px-4'>
            <Footer />
          </div>
        </footer>
      </body>
    </html>
  );
}
