import "./globals.css";
import "animate.css";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
