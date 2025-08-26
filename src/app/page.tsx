import { Hero } from "@/components/home/hero";
import techAnimalsBg from '@/assets/tech-animals-blue.png';
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero
        title="UNLOCKING DIGITAL SUCCESS"
        description="TECH SOLUTIONS WITHOUT THE HASSLE"
        backgroundImage={techAnimalsBg}
      />
    </main>
  );
}