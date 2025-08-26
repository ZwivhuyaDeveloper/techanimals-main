/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { WobbleCard } from "../ui/wobble-card";
import { BackgroundBeams } from "../ui/background-beams";
import background2 from "@/assets/RENDER3.png";
import background3 from "@/assets/tech-animals-blue.png";
import Image from "next/image";
import { Anta, Audiowide } from "next/font/google";

const anta = Anta({
  weight: ["400"],
  variable: "--font-anta",
  subsets: ["latin"],
});

const audiowide = Audiowide({
  weight: ["400"],
  variable: "--font-audiowide",
  subsets: ["latin"],
});

export function Services() {
  return (
    <div className="gap-12 flex flex-col items-center">
        <div className="w-full gap-4 flex flex-col items-start max-w-7xl mx-auto">
            <h2 className={`${anta.className} 
                tracking-widest relative text-left z-10 text-lg sm:text-2xl 
                bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-neutral-200 dark:to-neutral-600 
                bg-gradient-to-l from-neutral-200 to-neutral-600 `}>
            Services
            </h2>
            <h1 className={`${audiowide.className} 
                tracking-widest relative text-left w-full max-w-lg text-4xl 
                bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-neutral-200 dark:to-neutral-600 
                bg-gradient-to-l from-neutral-200 to-neutral-600  my-2 z-10`}>
                Services Tailored 
                to Your Vision 
            </h1>
        </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Gippity AI powers the entire universe
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            With over 100,000 mothly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
        <Image
          src={background2}
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-2 lg:-right-[10%]  -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          No shirt, no shoes, no weapons.
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          If someone yells “stop!”, goes limp, or taps out, the fight is over.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Signup for blazing-fast cutting-edge state of the art Gippity AI
            wrapper today!
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            With over 100,000 mothly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
        <Image
          src={background3}
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[%] -bottom-10 object-contain rounded-2xl"
        />
        <BackgroundBeams />
      </WobbleCard>
    </div>
    </div>
  );
}
