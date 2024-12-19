import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Project from "./project";

import pastWork from "../datasets/past_work";

type propsType = {
  offset: number; // Correct type for the ref
};

const ProjectCarousel = ({ offset }: propsType) => {
  return (
    <div>
      <ParallaxLayer offset={offset} speed={0} id="projects">
        <Image
          className="w-full"
          priority
          src={"/images/projectsbg.png"}
          alt="projectsBG"
          width={3040}
          height={1600}
        />
      </ParallaxLayer>

      <ParallaxLayer offset={offset} speed={0.2}>
        <div className="w-full text-center">
          <h1 className="text-5xl text-white py-10">what I&apos;ve done</h1>
        </div>

        <Carousel
          showThumbs={false}
          autoPlay={false}
          // infiniteLoop={true}
          showStatus={false}
          showIndicators={true}
          renderArrowPrev={(clickHandler, hasPrev) => {
            return (
              <div
                className={`absolute top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20 text-white text-2xl`}
                onClick={clickHandler}
              >
                <FaArrowCircleLeft />
              </div>
            );
          }}
          renderArrowNext={(clickHandler, hasNext) => {
            return (
              <div
                className={`absolute top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20 text-white text-2xl`}
                onClick={clickHandler}
              >
                <FaArrowCircleRight />
              </div>
            );
          }}
        >
          <div>
            <Project {...pastWork.paintingByNumbersData}></Project>
          </div>

          <div>
            <Project {...pastWork.forestPilatesData}></Project>
          </div>
        </Carousel>

        {/* <Link href={"#contact"} className="w-full flex justify-center md:mt-10">
          <button
            type="button"
            className="w-[95%] md:w-1/3 mx-auto text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center"
          >
            get in touch
          </button>
        </Link> */}
      </ParallaxLayer>
    </div>
  );
};
export default ProjectCarousel;
