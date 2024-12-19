"use client";

import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

import Navbar from "./components/navbar";
import HeroSection from "./components/hero_section";
import Bio from "./components/bio";
import CVTiles from "./components/CV_tiles";
import Details from "./components/details_section";
import ProjectCarousel from "./components/projects_carousel";

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(0);
  const parallaxRef = useRef<IParallax>(null!);

  // Update windowWidth on the client side
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  if (windowWidth === 0) return null; // Prevent rendering before windowWidth is set

  return (
    <div>
      <Navbar parallaxRef={parallaxRef} />
      <Parallax
        className="parallax"
        pages={windowWidth < 768 ? 5 : 6}
        ref={parallaxRef}
      >
        <HeroSection />

        <Bio offset={windowWidth < 768 ? 0.4 : 1} />

        <ParallaxLayer speed={0.5} offset={windowWidth < 768 ? 4 : 2}>
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
            windowWidth < 768
              ? { start: 3.7, end: 3.7 }
              : { start: 2.3, end: 2.8 }
          }
        >
          <CVTiles parallaxRef={parallaxRef} />
        </ParallaxLayer>

        <div className="hidden md:flex">
          <Details offset={windowWidth < 768 ? 2 : 2.3} />
        </div>

        <ProjectCarousel offset={4} />
      </Parallax>
    </div>
  );
}
