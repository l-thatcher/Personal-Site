import Link from "next/link";
import Image from "next/image";
import { RefObject } from "react"; // Correct import for the ref type
import { IParallax } from "@react-spring/parallax";

type propsType = {
  parallaxRef: RefObject<IParallax | null>; // Correct type for the ref
};

const Navbar = ({ parallaxRef }: propsType) => {
  return (
    <div>
      <nav className="hidden sticky -top-1 bg-[#232E4D] md:flex flex-col">
        <div className="container mx-auto h-20">
          <ul className="flex items-center justify-around h-full">
            <li>
              <p
                onClick={() => parallaxRef.current?.scrollTo(1.4)} // Optional chaining to avoid errors
                className="text-white text-md font-w300"
              >
                About Me
              </p>
            </li>
            <li>
              <Link href="#portfolio" className="text-white text-md font-w300">
                portfolio
              </Link>
            </li>
            <li>
              <Link href="#home">
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
              <p className="text-white text-md font-w400">about</p>
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
