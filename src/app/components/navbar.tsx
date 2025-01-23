import Link from "next/link";
import Image from "next/image";
import { RefObject } from "react";
import { IParallax } from "@react-spring/parallax";

type propsType = {
  parallaxRef: RefObject<IParallax | null>; // Correct type for the ref
};

const Navbar = ({ parallaxRef }: propsType) => {
  return (
    <div>
      <nav className="hidden fixed w-full z-[1000] bg-[#272c49] md:flex flex-col">
        <div className="container mx-auto h-20">
          <ul className="flex items-center justify-around h-full">
            <li>
              <p
                onClick={() => parallaxRef.current?.scrollTo(0.9)} // Optional chaining to avoid errors
                className="text-white text-md font-w300"
              >
                About Me
              </p>
            </li>
            <li>
              <p
                onClick={() => parallaxRef.current?.scrollTo(1.5)} // Optional chaining to avoid errors
                className="text-white text-md font-w300"
              >
                What I do
              </p>
            </li>
            <li>
              <Link href="/">
                <Image
                  className=""
                  priority
                  src="/logos/logo-white.png"
                  alt="logo"
                  height={120}
                  width={120}
                />
              </Link>
            </li>
            <li>
              <p
                onClick={() => parallaxRef.current?.scrollTo(2.1)} // Optional chaining to avoid errors
                className="text-white text-md font-w300"
              >
                What I&apos;ve done
              </p>
            </li>
            <li>
              <p className="text-white text-md font-w400">contact</p>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
