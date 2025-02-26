import React from "react";

interface ProjectProps {
  title: string;
  description: string;
  url: string;
}

const Project = ({ title, description, url }: ProjectProps) => {
  return (
    <div className="flex justify-center items-center px-4 py-8">
      <div className="bg-white/20 backdrop-blur-md border border-white/30 shadow-lg rounded-lg p-6 w-full max-w-[90%] flex flex-col md:flex-col">
        {/* Text Content */}
        <div className="w-full md:w-[100%] flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold text-center text-white mb-4">
            {title}
          </h2>
          <p className="text-base text-center text-gray-200 mb-4 md:mb-0">
            {description}
          </p>
        </div>

        {/* Iframe */}
        <div className="w-full">
          <div className="w-full aspect-[9/17] md:aspect-[16/9] overflow-hidden pt-8">
            <iframe
              src={url}
              title={title}
              allowFullScreen
              className="!w-full h-full border-0 rounded-xl !m-0 md:!w-[150%] md:h-[150%] md:scale-[66.67%] md:origin-top-left"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
