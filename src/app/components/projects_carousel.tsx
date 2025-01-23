import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Project from "./project";

import pastWork from "../datasets/past_work";

type Props = {
  offset: number;
};

const ProjectCarousel = ({ offset }: Props) => {
  return (
    <div>
      {/* Parallax background */}
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
          showStatus={false}
          showIndicators={true}
          infiniteLoop={true}
          renderArrowPrev={(clickHandler) => (
            <div
              className="absolute top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20 text-white text-2xl"
              onClick={clickHandler}
            >
              <FaArrowCircleLeft />
            </div>
          )}
          renderArrowNext={(clickHandler) => (
            <div
              className="absolute top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20 text-white text-2xl"
              onClick={clickHandler}
            >
              <FaArrowCircleRight />
            </div>
          )}
        >
          {Object.values(pastWork).map((projectData, index) => (
            <div key={index}>
              <Project {...projectData} />
            </div>
          ))}
        </Carousel>
      </ParallaxLayer>
    </div>
  );
};

export default ProjectCarousel;
