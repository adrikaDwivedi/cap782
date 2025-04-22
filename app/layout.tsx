import type { Metadata } from "next";
// import {Navbar} from '@/components/Navbar'
// import {Body} from '@/components/index'
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react"


// import Body from "../components/Body";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Digital dashboard",
  description: "A digital dashboard of MCA'2025 LPU students ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {/* <Body/> */}
        {children}
        <SpeedInsights/>
        <Analytics/>
      </body>
    </html>
  );
}
