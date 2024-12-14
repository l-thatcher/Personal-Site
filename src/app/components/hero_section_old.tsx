import Image from "next/image";
import { ParallaxBanner } from "react-scroll-parallax";

export default function HeroSection() {
  const sky: BannerLayer = {
    image: "/hero-assets/sky.png",
    translateY: [-10, 10],
    shouldAlwaysCompleteAnimation: true,
  };

  const moon: BannerLayer = {
    image: "/hero-assets/moon.png",
    translateY: [-40, 0],
    shouldAlwaysCompleteAnimation: true,
  };

  const shed: BannerLayer = {
    image: "/hero-assets/shed.png",
    translateY: [20, 0],
    shouldAlwaysCompleteAnimation: true,
  };

  const bottom: BannerLayer = {
    image: "/hero-assets/bottom.png",
    translateY: [40, 0],
    shouldAlwaysCompleteAnimation: true,
  };

  const fishPlanet: BannerLayer = {
    image: "/hero-assets/fish_planet.png",
    translateY: [60, 0],
    shouldAlwaysCompleteAnimation: true,
  };

  const underWaterdot: BannerLayer = {
    image: "/hero-assets/underwaterdot.png",
    translateY: [100, 0],
    shouldAlwaysCompleteAnimation: true,
  };

  return (
    <ParallaxBanner
      layers={[sky, moon, shed, bottom, fishPlanet, underWaterdot]}
      className="aspect-[2/1] bg-gray-900"
    />

    // <div className="relative flex justify-center items-center h-screen">
    //   <Image
    //     className="absolute inset-0 w-full"
    //     priority
    //     src="/hero-assets/sky.png"
    //     alt="Sky"
    //     width={4096}
    //     height={2800}
    //   />

    //   <Image
    //     className="absolute inset-0 w-full"
    //     priority
    //     src="/hero-assets/moon.png"
    //     alt="Moon"
    //     width={4096}
    //     height={2510}
    //   />

    //   <Image
    //     className="absolute inset-0 w-full"
    //     priority
    //     src="/hero-assets/shed.png"
    //     alt="Shed"
    //     width={4096}
    //     height={2800}
    //   />

    //   <Image
    //     className="absolute inset-0 w-full"
    //     priority
    //     src="/hero-assets/bottom.png"
    //     alt="Bottom"
    //     width={4096}
    //     height={2800}
    //   />

    //   <Image
    //     className="absolute inset-0 w-full"
    //     priority
    //     src="/hero-assets/fish_planet.png"
    //     alt="Fish Planet"
    //     width={4096}
    //     height={2510}
    //   />

    //   <Image
    //     className="absolute inset-0 w-full"
    //     priority
    //     src="/hero-assets/underwaterdot.png"
    //     alt="Water Dots"
    //     width={4096}
    //     height={2800}
    //   />
    // </div>
  );
}
