/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import techAnimalsLogo from "@/assets/Group 1.png";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Link from 'next/link';
import { div } from 'motion/react-client';


export function NavMenu({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 flex items-center justify-center px-1", className)}
    >
      <Menu setActive={setActive}>

        <div className="flex items-center h-[40px] gap-25 justify-between">
          <div className="w-full h-full flex flex-row gap-5  items-center container  justify-start">
          <Link href="/" className="flex items-center flex-row gap-4 w-full justify-start">
                <img
                  src={techAnimalsLogo.src}
                  alt="TechAnimals Logo"
                  width={50}
                  height={50}
                  className=" object-cover w-15 h-15"
                />
                <div className="flex flex-col items-start w-full">
                <span className="text-black text-left dark:text-white text-sm tracking-widest">TECHANIMALS</span>
                <span className="text-black text-left dark:text-white text-[9px] w-50">SOFTWARE DEVELOPMENT</span> 
                </div>
            </Link>
          </div>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Process">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
          <div className="flex gap-3 items-center">
            <ThemeToggle />
            <MenuItem setActive={setActive} active={active} item="Contact">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/contact">Contact</HoveredLink>
              </div>
            </MenuItem>
          </div>
        </div>
      </Menu>
    </div>
  );
}