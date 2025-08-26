"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";
import { Audiowide } from "next/font/google";
import { Anta } from "next/font/google";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

const audiowide = Audiowide({
  weight: ["400"],
  variable: "--font-audiowide",
  subsets: ["latin"],
});

const anta = Anta({
  weight: ["400"],
  variable: "--font-anta",
  subsets: ["latin"],
});

export function AboutUs({ className }: { className?: string }) {
  return (
    <div className={cn("h-[120vh] w-full rounded-md dark:bg-neutral-950 bg-white relative flex flex-col  justify-center antialiased", className)}>
      <div className="max-w-7xl items-start h-full my-45 gap-6 flex flex-col w-full mx-auto">
        <h2 className={`${anta.className} 
            tracking-widest relative text-left z-10 text-lg sm:text-2xl 
            bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-neutral-200 dark:to-neutral-600 
            bg-gradient-to-l from-neutral-200 to-neutral-600 `}>
          About Us
        </h2>
        <h1 className={`${audiowide.className} 
            tracking-widest relative text-left w-full max-w-lg text-4xl 
            bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-neutral-200 dark:to-neutral-600 
            bg-gradient-to-l from-neutral-200 to-neutral-600  my-2 z-10`}>
            Your Trusted
            Development Partner
        </h1>
        <div className="grid grid-cols-2 gap-4 mt-6">
            <Card className="w-full h-[60vh] z-50">
                <CardContent>
                    <p>Our team of experienced developers is dedicated to delivering high-quality solutions that meet your needs. We use the latest technologies and best practices to ensure that your project is completed on time and to the highest standard.</p>
                </CardContent>
            </Card>
            <Card className="w-full h-[60vh] ">
                <CardContent>
                    <p>Our team of experienced developers is dedicated to delivering high-quality solutions that meet your needs. We use the latest technologies and best practices to ensure that your project is completed on time and to the highest standard.</p>
                </CardContent>
            </Card>
        </div>
        <BackgroundBeams />
      </div>
    </div>
  );
}
