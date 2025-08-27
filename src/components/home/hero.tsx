import React from 'react';
import { cn } from '@/lib/utils';
import { Anta, Audiowide } from 'next/font/google';
import { TextGenerateEffect } from '../ui/text-generate-effect';

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

interface HeroProps {
  title: string;
  description: string;
  className?: string;
}

export function Hero({
  title,
  description,
  className,
}: HeroProps) {
  return (
    <section className={cn("relative w-full h-screen -mt-20 overflow-hidden", className)}>
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
      {/* eslint-disable-next-line @typescript-eslint/no-require-imports */}
      <video src={require("../../assets/0000-0120.mp4")} 
        className='object-cover h-full w-full ' 
        controls={false}
        autoPlay
        loop  
        muted
        playsInline
      />
        <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-black/70 dark:via-transparent dark:via-10% dark:via-70% dark:to-black/70
          dark:bg-gradient-to-r dark:from-black/70 dark:via-transparent dark:via-10% dark:via-70% dark:to-black/70
          bg-gradient-to-b from-white/50 via-transparent via-10% via-70% to-white/50
          bg-gradient-to-r from-white/50 via-transparent via-10% via-70% to-white/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 flex flex-col items-start justify-center h-full w-full max-w-7xl px-4 mx-auto text-left text-white">
        <div className="w-full max-w-4xl">
          <p className={`${anta.className} text-lg px-6 md:text-xl tracking-widest text-white/90 mb-6`}>
            {description}
          </p>
          <h1 className={`${audiowide.className} mb-8`}>
            <TextGenerateEffect words={title} />
          </h1>
        </div>
      </div>
    </section>
  );
}