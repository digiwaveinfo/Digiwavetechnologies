import type { Metadata } from "next";
import { Inter, Poppins, Rubik } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import ChatBot from "@/components/ChatBot";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700", "800"], variable: "--font-poppins" });
const rubik = Rubik({ subsets: ["latin"], weight: ["400"], variable: "--font-rubik" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: "Digiwave Technologies - Transforming Ideas into Digital Solutions",
    template: "%s | Digiwave Technologies"
  },
  description: "Digiwave Technologies specializes in web development, mobile apps, AI/ML solutions, cloud services, and digital transformation. Transform your ideas into scalable digital solutions.",
  keywords: [
    "web development",
    "mobile app development",
    "AI solutions",
    "ML solutions",
    "cloud services",
    "digital transformation",
    "software development",
    "UI/UX design",
    "digital marketing",
    "Digiwave Technologies"
  ],
  authors: [{ name: "Digiwave Technologies" }],
  creator: "Digiwave Technologies",
  publisher: "Digiwave Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/Logo.svg",
    shortcut: "/Logo.svg",
    apple: "/Logo.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    title: "Digiwave Technologies - Transforming Ideas into Digital Solutions",
    description: "Transforming Ideas into Scalable Digital Solutions with cutting-edge technology",
    siteName: "Digiwave Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digiwave Technologies",
    description: "Transforming Ideas into Scalable Digital Solutions",
    creator: "@digiwave",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JB318YS4B8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JB318YS4B8');
          `}
        </Script>
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} ${rubik.variable} font-sans antialiased`}
        style={{ fontFamily: 'var(--font-inter)' }}
      >
        <Providers>
          {children}
          <ChatBot />
        </Providers>
      </body>
    </html>
  );
}
