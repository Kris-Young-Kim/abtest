import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "AB Test",
  description: "AB Test Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
        <Script
          src="https://cdn.switchuplab.com/switchup.min.js/4ZCQERK5NO"
          data-project-id="4ZCQERK5NO"
          data-spa="true"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
