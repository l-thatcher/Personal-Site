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
  return (
    <div>
      <Navbar parallaxRef={parallaxRef} />
      <Parallax
        className="parallax"
        pages={windowWidth < 768 ? 10.4 : 5.8}
        ref={parallaxRef}
      >
        <HeroSection />

        <Bio offset={windowWidth < 768 ? 0.4 : 1} />

        <ParallaxLayer speed={0.5} offset={windowWidth < 768 ? 4.3 : 2.3}>
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
            start: 2.3,
            end: 3,
          }}
        >
          <div className="hidden md:block">
            <CVTiles parallaxRef={parallaxRef} />
          </div>
        </ParallaxLayer>

        <Details offset={windowWidth < 768 ? 4.3 : 2.3} />

        <ProjectCarousel offset={windowWidth < 768 ? 7.8 : 4} />

        <ContactSection offset={windowWidth < 768 ? 9.6 : 5.3} />
      </Parallax>
    </div>
  );
}
