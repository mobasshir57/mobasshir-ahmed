import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Md Mobasshir Ahmed | SEO Specialist & MERN Stack Developer",
  description: "I rank websites on Google's first page and build fast, scalable web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} antialiased`}>
      <head>
        <Script
          id="openai-tracking"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(w,d,s,u){if(w.oaiq)return;var q=function(){q.q.push(arguments)};q.q=[];w.oaiq=q;var j=d.createElement(s);j.async=1;j.src=u;var f=d.getElementsByTagName(s)[0];f.parentNode.insertBefore(j,f)}(window,document,"script","https://bzrcdn.openai.com/sdk/oaiq.min.js");oaiq("init",{pixelId:"73ateCDXoZVkkQspZc62s3",debug:true});`
          }}
        />
      </head>
      <body className="bg-background text-text">
        <CustomCursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
