import type { Metadata } from "next";
import { Inter, Poppins, Rubik } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import ChatBot from "@/components/ChatBot";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700", "800"], variable: "--font-poppins" });
const rubik = Rubik({ subsets: ["latin"], weight: ["400"], variable: "--font-rubik" });

export const metadata: Metadata = {
  title: "Digiwave Technologies",
  description: "Transforming Ideas into Scalable Digital Solutions",
  icons: {
    icon: "/Logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
