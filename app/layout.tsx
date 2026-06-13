import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import OpenAIPixelTracker from "@/components/OpenAIPixelTracker";

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
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-P47R23P5');
            `
          }}
        />
        {/* End Google Tag Manager */}
        <Script
          id="openai-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.oaiq = window.oaiq || function () {
                (window.oaiq.q = window.oaiq.q || []).push(arguments);
              };
              oaiq("init", { pixelId: "7xQf6u5yVfVCMFo6ey13kP" });
            `
          }}
        />
        <Script
          id="openai-pixel"
          strategy="afterInteractive"
          src="https://bzrcdn.openai.com/sdk/oaiq.min.js"
        />
      </head>
      <body className="bg-background text-text">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P47R23P5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <OpenAIPixelTracker />
        <CustomCursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
