import { Lato, Montserrat } from "next/font/google";

import { Metadata } from "next";
import "./globals.css";
import "animate.css";
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
  title: "Admin | OREEN - Car Rental Web Application",
  description:
    "OREEN is a Car Rental web application provide high quality services and good cars with latest model for local rental",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${lato.variable} ${montserrat.variable} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
