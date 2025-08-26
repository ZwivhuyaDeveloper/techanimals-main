"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";
import { Audiowide } from "next/font/google";
import { Anta } from "next/font/google";
import { cn } from "@/lib/utils";

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
    <div className={cn("h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased", className)}>
      <div className="max-w-7xl items-start flex flex-col gap-4 w-full mx-auto px-0">
        <h2 className={`${anta.className} tracking-widest relative text-left z-10 text-lg sm:text-4xl  bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-600 `}>
          About Us
        </h2>
        <h1 className={`${audiowide.className} tracking-widest relative  text-left w-full max-w-lg text-4xl bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-600  my-2 z-10`}>
            Your Trusted
            Development Partner
        </h1>
        <div>
            <p></p>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
