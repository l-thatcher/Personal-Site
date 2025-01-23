"use client";

import Image from "next/image";
import { ParallaxLayer } from "@react-spring/parallax";

type propsType = {
  offset: number;
};

const Bio = ({ offset }: propsType) => {
  return (
    <ParallaxLayer offset={offset} speed={0.1}>
      <div className="flex justify-center" id="bio">
        <Image
          className=""
          src="/logos/logo-white.png"
          alt="logo"
          height={200}
          width={200}
        />
      </div>
      <div>
        <div className="text-center md:px-[30vw]">
          <h2 className="text-3xl text-white">professional website</h2>
          <h2 className="text-3xl text-white">and software development</h2>
          <p className="text-md text-white p-4">
            Software engineer with expertise in full-stack development, project
            management, and client relations. Skilled in creating bespoke
            websites and applications with a focus on front-end design and user
            experience. Proficient in multiple programming languages and
            frameworks, and invest time personally in teaching myself new
            languages and technologies as they become available. I have a strong
            track record of delivering projects on time and exceeding client
            expectations. Adept at learning emerging technologies and employing
            Agile methodologies for team and project management
          </p>
          <button className="rounded-full bg-slate-50 text-[#272B4A] p-2 text-md hover:bg-slate-300">
            get in touch
          </button>
        </div>
      </div>
      <div className="bg-[#272B4A] md:py-20">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-5xl text-white py-10">core skills</h1>

            <div className="flex flex-col md:flex-row justify-around w-full px-4 md:px-20">
              <div className="flex flex-col items-center justify-center w-full md:w-1/4 h-2/3">
                <div className="w-20 h-20 my-10 rounded-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600"></div>
                <p className="text-white text-xl text-center">
                  languages frameworks &<br /> web development
                </p>
                <p className="text-white text-md text-center md:p-5">
                  {" "}
                  HTML, CSS, JavaScript, PHP, Python, Java, SQL, C#, Solidity,
                  Firebase, Flask, Spring Boot, WordPress, Next.js, React,
                  Tailwind, Bootstrap
                </p>
              </div>
              <div className="flex flex-col items-center justify-center w-full md:w-1/4 h-2/3">
                <div className="w-20 h-20 rounded-full my-10 bg-gradient-to-t from-orange-400 to-sky-400"></div>
                <p className="text-white text-xl text-center">
                  mobile development
                </p>
                <p className="text-white text-md text-center p-5">
                  {" "}
                  Flutter (ios and android)
                </p>
              </div>
              <div className="flex flex-col items-center justify-center w-full md:w-1/4 h-2/3">
                <div className="w-20 h-20 rounded-full my-10 bg-gradient-to-tl from-orange-500 viq-yellow-300 to-sky-200"></div>
                <p className="text-white text-xl text-center">
                  project management
                </p>
                <p className="text-white text-md text-center p-5">
                  {" "}
                  Agile, Kanban, Scrum, Client Relations, Team Management
                </p>
              </div>
              <div className="flex flex-col items-center justify-center w-full md:w-1/4 h-2/3">
                <div className="w-20 h-20 rounded-full my-10 bg-gradient-to-r from-orange-400 to-rose-400"></div>
                <p className="text-white text-xl text-center">tools</p>
                <p className="text-white text-md text-center p-5">
                  {" "}
                  Git, Jenkins, Docker, Adobe Suite
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ParallaxLayer>
  );
};

export default Bio;
