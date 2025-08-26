import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';
import { Anta, Audiowide } from 'next/font/google';
import { BackgroundBeams } from '../ui/background-beams';
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
  backgroundImage: StaticImageData | string;
  className?: string;
}

export function Hero({
  title,
  description,
  backgroundImage,
  className,
}: HeroProps) {
  return (
    <section className={cn("relative w-full h-screen -mt-20 overflow-hidden", className)}>
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          className="object-cover w-full "
          quality={100}
        />
        <div className="absolute inset-0" style={{
          background: `
            linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 10%, transparent 70%, rgba(0,0,0,0.7) 100%),
            linear-gradient(to right, rgba(0,0,0,0.7) 0%, transparent 10%, transparent 70%, rgba(0,0,0,0.7) 100%)
          `
        }} />
      </div>

      {/* Content */}
      <div className="container relative z-10 flex flex-col items-start justify-center h-full w-full max-w-7xl px-4 mx-auto text-left text-white">
        <div className="w-full max-w-4xl">
          <p className={`${anta.className} text-lg md:text-xl tracking-widest text-white/90 mb-6`}>
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