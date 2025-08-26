import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';
import { Anta, Audiowide } from 'next/font/google';
import { BackgroundBeams } from '../ui/background-beams';

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
      <div className="container relative z-10 flex flex-col items-start justify-center h-full w-7xl px-0 mx-auto text-left text-white">
        <p className={`${anta.className} text-left sm:w-4xl w-4xl tracking-widest mb-8 text-lg md:text-xl text-white/90`}>
          {description}
        </p>
        <h1 className={`${audiowide.className} mb-6 z-10 tracking-widest text-start sm:w-4xl w-2xl text-2xl sm:text-4xl font-bold leading-tight md:text-6xl lg:text-7xl font-anta`}>
          {title}
        </h1>
        <BackgroundBeams />
      </div>
    </section>
  );
}