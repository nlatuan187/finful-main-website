import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  variable: '--font-inter',
})


export const metadata: Metadata = {
  title: "Finful",
  description: "Kiến thức & Công cụ tài chính hướng tới lợi ích của người dùng",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css"
        />
      </head>
      <body className={inter.className}>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-H0B9536MQP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-H0B9536MQP');
          `}
        </Script>
      </body>
    </html>
  );
}
