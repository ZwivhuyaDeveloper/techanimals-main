import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';
import { Anta, Audiowide } from 'next/font/google';

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
    <section className={cn("relative w-full h-screen overflow", className)}>
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          className="object-cover w-full h-full"
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
      <div className="container relative z-10 flex flex-col items-center justify-center h-full px-4 mx-auto text-center text-white">
        <p className={`${anta.className} text-start w-4xl tracking-widest mx-auto mb-8 text-lg md:text-xl text-white/90`}>
          {description}
        </p>
        <h1 className={`${audiowide.className} mb-6 tracking-widest text-start w-4xl text-4xl font-bold leading-tight md:text-6xl lg:text-6xl font-anta`}>
          {title}
        </h1>
      </div>
    </section>
  );
}