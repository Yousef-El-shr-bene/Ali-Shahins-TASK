import type { Metadata } from "next";
import "./globals.css";
import Hider from "./lip/Hider";



export const metadata: Metadata = {
  title: "Ali-Shahins-TASK",
  description: "created by yousef A&L&S&H&R&B&E&N&E",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}>
        <Hider/>
        {children}
      </body>
    </html>
  );
}
