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
import ContactSection from "./components/contact";

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(0);
  const parallaxRef = useRef<IParallax>(null!);

  // Update windowWidth on the client side
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  if (windowWidth === 0) return null; // Prevent rendering before windowWidth is set
  console.log(windowWidth);
  return (
    <div>
      <Navbar parallaxRef={parallaxRef} />
      <Parallax
        className="parallax"
        pages={windowWidth < 768 ? 7 : 5.5}
        ref={parallaxRef}
      >
        <HeroSection />

        <Bio offset={0.000539 * windowWidth + 0.067} />

        <ParallaxLayer speed={0.5} offset={-0.000847 * windowWidth + 3.464}>
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
          sticky={{
            start: -0.000917 * windowWidth + 3.887,
            end: -0.000917 * windowWidth + 4.3,
          }}
        >
          <div className="hidden md:block">
            <CVTiles parallaxRef={parallaxRef} />
          </div>
        </ParallaxLayer>

        <Details offset={-0.000539 * windowWidth + 3.3} />

        <ProjectCarousel offset={-0.00123 * windowWidth + 6.1} />
        <ContactSection offset={-0.00123 * windowWidth + 7.1} />
      </Parallax>
    </div>
  );
}
