import React from "react";
import Image from "next/image";
interface ProjectProps {
  title: string;
  description: string;
  url: string;
}

const styles = {
  width: "200%",
  height: "170%",
  transform: "scale(0.5)",
};

const responsiveStyles = {
  ...styles,
  "@media (minWidth: 768px)": {
    width: "80%",
    height: "120%",
    transform: "scale(1)",
  },
};

const Project = ({ title, description, url }: ProjectProps) => {
  return (
    <div className="flex justify-center items-center px-4 py-8">
      <div className="bg-white/20 backdrop-blur-md border border-white/30 shadow-lg rounded-lg p-6 w-full max-w-[90%]">
        <h2 className="text-2xl font-bold text-center text-white mb-4">
          {title}
        </h2>
        <p className="text-base text-center text-gray-200 mb-16">
          {description}
        </p>
        <div className="relative w-full pt-[56.25%] overflow-hidden rounded-lg md:w-[73%] m-auto">
          <iframe
            src={url}
            title={title}
            allowFullScreen
            className="absolute top-0 -left-10 border-0 w-[100%] h-[120%] scale:100 md:w-[200%] md:h-[170%] md:scale-50 transform origin-top-left"
            style={responsiveStyles}
          ></iframe>
        </div>
        <Image
          src="/images/computer_outline.png"
          width={500}
          height={500}
          alt="Picture of the author"
          className="absolute bottom-0 left-0"
        />
      </div>
    </div>
  );
};

export default Project;
