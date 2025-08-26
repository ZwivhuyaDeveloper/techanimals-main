"use client";

import { Hero } from "@/components/home/hero";
import { useEffect, useState } from "react";
import { AboutUs } from "@/components/home/about-us";
import { ArrowUpIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import background1 from '@/assets/tech-animals-blue.png';
import background2 from '@/assets/RENDER3.png';
import background3 from '@/assets/RENDER4.png';
import { Services } from "@/components/home/services";


export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen">
      <div className="min-h-screen">
        {showScrollTop && (
          <Button
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 z-50 p-4 bg-white rounded-full shadow-lg"
          >
            <ArrowUpIcon className="w-6 h-6" />
          </Button>
        )}
        <section>
          <Hero
            title="UNLOCKING DIGITAL SUCCESS"
            description="TECH SOLUTIONS WITHOUT THE HASSLE"
            backgroundImage={background1}
          />
        </section>
        <section className="">
          <AboutUs />
        </section>
        <section className="mb-10">
          <Services />
        </section>
      </div>
    </main>
  );
}