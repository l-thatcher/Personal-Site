import Image from "next/image";
import { ParallaxLayer } from "@react-spring/parallax";

export default function HeroSection() {
  return (
    <div className="relative flex justify-center items-center" id="home">
      <ParallaxLayer offset={0} speed={0.1}>
        <Image
          className=""
          priority
          src="/hero-assets/sky.png"
          alt="Sky"
          width={4096}
          height={2800}
        />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.4}>
        <Image
          className=""
          priority
          src="/hero-assets/moon.png"
          alt="Moon"
          width={4096}
          height={2510}
        />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.2}>
        <Image
          className=""
          priority
          src="/hero-assets/shed.png"
          alt="Man"
          width={4096}
          height={2800}
        />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.4}>
        <Image
          className=""
          priority
          src="/hero-assets/bottom.png"
          alt="Bottom"
          width={4096}
          height={2800}
        />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.6}>
        <Image
          className=""
          priority
          src="/hero-assets/fish_planet.png"
          alt="Fish Planet"
          width={4096}
          height={2510}
        />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={1}>
        <Image
          className=""
          priority
          src="/hero-assets/underwaterdot.png"
          alt="Water Dots"
          width={4096}
          height={2800}
        />
      </ParallaxLayer>
    </div>
  );
}
