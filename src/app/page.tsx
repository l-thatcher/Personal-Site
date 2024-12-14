"use client";

import Navbar from "./components/navbar";
import HeroSection from "./components/hero_section";
import Bio from "./components/bio";

import { Parallax, IParallax } from "@react-spring/parallax";
import { useRef } from "react";

export default function Home() {
  const parallaxRef = useRef<IParallax>(null);

  return (
    <div>
      <Parallax className="parallax" pages={3} ref={parallaxRef}>
        <Navbar parallaxRef={parallaxRef} />
        <HeroSection />
        <Bio offset={1} />
      </Parallax>
    </div>
  );
}
