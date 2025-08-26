import type { Metadata } from "next";
import { Geist, Geist_Mono, Anta, Audiowide } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { NavMenu } from "@/components/layout/nav-menu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anta = Anta({
  weight: [ "400"],
  variable: "--font-anta",
  subsets: ["latin"],
});

const audiowide = Audiowide({
  weight: [ "400"],
  variable: "--font-audiowide",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tech Animals",
  description: "A modern Next.js application with dark mode support",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="light">
      <body className={`${geistSans.variable} ${geistMono.variable} ${anta.variable} ${audiowide.variable} font-sans min-h-screen transition-colors duration-200`}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
              <NavMenu />
            <main className="flex-1 pt-20">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}