import React from "react";

interface ProjectProps {
  title: string;
  description: string;
  url: string;
}

const Project = ({ title, description, url }: ProjectProps) => {
  return (
    <div className="flex justify-center items-center px-4 py-8">
      <div className="bg-white/20 backdrop-blur-md border border-white/30 shadow-lg rounded-lg p-6 max-w-[70%] w-full">
        <h2 className="text-2xl font-bold text-center text-white mb-4">
          {title}
        </h2>
        <p className="text-base text-center text-gray-200 mb-6">
          {description}
        </p>
        <div className="relative w-full pt-[56.25%] overflow-hidden rounded-lg w-[70%] m-auto">
          <iframe
            src={url}
            title={title}
            allowFullScreen
            className="absolute top-0 -left-10 border-0 w-[210%] h-[200%] scale-50 transform origin-top-left"
            style={{
              width: "200%",
              height: "200%",
              transform: "scale(0.5)",
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Project;
