"use client";

import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import { useRef } from "react";
import Image from "next/image";

import Navbar from "./components/navbar";
import HeroSection from "./components/hero_section";
import Bio from "./components/bio";
import CVTiles from "./components/CV_tiles";
import Details from "./components/details_section";

export default function Home() {
  const parallaxRef = useRef<IParallax>(null!);

  return (
    <div>
      <Navbar parallaxRef={parallaxRef} />
      <Parallax
        className="parallax"
        pages={window.innerWidth < 768 ? 5 : 4}
        ref={parallaxRef}
      >
        <HeroSection />

        <Bio offset={window.innerWidth < 768 ? 0.4 : 1} />

        <ParallaxLayer speed={0.5} offset={window.innerWidth < 768 ? 4 : 2}>
          <div className="flex justify-center absolute">
            <Image
              className=""
              priority
              src={"/images/planets.png"}
              alt="logo"
              height={3040}
              width={3900}
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          speed={0}
          sticky={
            window.innerWidth < 768
              ? { start: 3.7, end: 3.7 }
              : { start: 2.3, end: 2.8 }
          }
        >
          <CVTiles parallaxRef={parallaxRef} />
        </ParallaxLayer>

        <Details offset={window.innerWidth < 768 ? 2 : 2.3} />
      </Parallax>
    </div>
  );
}
