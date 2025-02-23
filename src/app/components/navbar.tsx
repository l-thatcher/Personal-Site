"use client";

import Link from "next/link";
import Image from "next/image";
import { RefObject } from "react";
import { IParallax } from "@react-spring/parallax";
import { useState, useEffect } from "react";

type propsType = {
  parallaxRef: RefObject<IParallax | null>; // Correct type for the ref
};

const Navbar = ({ parallaxRef }: propsType) => {
  const [windowWidth, setWindowWidth] = useState(0);

  // Update windowWidth on the client side
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <nav className="hidden fixed w-full z-[1000] bg-[#272c49] md:flex flex-col">
        <div className="container mx-auto h-20">
          <ul className="flex items-center justify-around h-full">
            <li>
              <p
                onClick={() =>
                  parallaxRef.current?.scrollTo(0.000539 * windowWidth + 0.067)
                }
                className="text-white text-md font-w300 cursor-pointer"
              >
                about me
              </p>
            </li>
            <li>
              <p
                onClick={() =>
                  parallaxRef.current?.scrollTo(0.000539 * windowWidth + 0.45)
                }
                className="text-white text-md font-w300 cursor-pointer"
              >
                core skills
              </p>
            </li>
            <li>
              <Link href="/">
                <Image
                  className="cursor-pointer"
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
                onClick={() =>
                  parallaxRef.current?.scrollTo(-0.00123 * windowWidth + 6)
                } // Optional chaining to avoid errors
                className="text-white text-md font-w300 cursor-pointer"
              >
                what I&apos;ve done
              </p>
            </li>
            <li>
              <p className="text-white text-md font-w400 cursor-pointer">
                contact
              </p>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
