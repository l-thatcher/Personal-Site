"use client";

import Image from "next/image";
import { ParallaxLayer } from "@react-spring/parallax";
import Link from "next/link";

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
          <h1 className="text-4xl text-white">software engineer</h1>
          <h2 className="text-2xl text-white">
            full stack development | project managment
          </h2>
          <p className="text-md text-white p-4">
            Software engineer with expertise in full-stack development, project
            management, and client relations. Skilled in creating bespoke
            websites and applications with a focus on front-end design and user
            experience. Proficient in multiple programming languages and
            frameworks, and invest time personally in teaching myself new
            languages and technologies as they become available. I have a strong
            track record of delivering projects on time and exceeding client
            expectations. Adept at learning emerging technologies and employing
            Agile methodologies for team and project management.
          </p>
          <div className="">
            <Link
              href="https://www.linkedin.com/in/louis-thatcher-391739231/"
              target="_blank"
              className="text-white text-2xl hover:underline px-5"
            >
              LinkedIn
            </Link>
            <span className="text-white"> | </span>
            <Link
              href="https://github.com/l-thatcher"
              target="_blank"
              className="text-white text-2xl hover:underline px-5"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#272B4A] md:py-20">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-5xl text-white py-10">core skills</h1>

            <div className="flex flex-col md:flex-row justify-around w-full px-4 md:px-20">
              <div className="flex flex-col items-center justify-center w-full md:w-1/5 h-2/3">
                <div className="w-20 h-20 my-10 rounded-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600"></div>
                <p className="text-white text-xl text-center">
                  Web Technologies
                </p>
                <p className="text-white text-md text-center md:p-5">
                  {" "}
                  I specialize in front-end and back-end development using HTML,
                  CSS, and JavaScript, with robust frameworks like React and
                  Next.js. My web development toolkit includes Tailwind and
                  Bootstrap for responsive design, ensuring elegant and
                  functional user interfaces.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center w-full md:w-1/5 h-2/3">
                <div className="w-20 h-20 rounded-full my-10 bg-gradient-to-t from-fuchsia-400 to-red-400"></div>
                <p className="text-white text-xl text-center">
                  Server-Side Languages
                </p>
                <p className="text-white text-md text-center p-5">
                  {" "}
                  My backend expertise spans PHP, Python (with Flask), Java
                  (utilizing Spring Boot), and C# development. I&apos;m also
                  experienced with database management using SQL and have
                  explored blockchain development through Solidity.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center w-full md:w-1/5 h-2/3">
                <div className="w-20 h-20 rounded-full my-10 bg-gradient-to-t from-orange-400 to-sky-400"></div>
                <p className="text-white text-xl text-center">
                  mobile development
                </p>
                <p className="text-white text-md text-center p-5">
                  {" "}
                  I use Flutter to create high-performance, visually appealing
                  mobile applications for both iOS and Android platforms,
                  ensuring seamless user experiences across devices.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center w-full md:w-1/5 h-2/3">
                <div className="w-20 h-20 rounded-full my-10 bg-gradient-to-tl from-orange-500 viq-yellow-300 to-sky-200"></div>
                <p className="text-white text-xl text-center">
                  project management
                </p>
                <p className="text-white text-md text-center p-5">
                  {" "}
                  I&apos;m proficient in Agile methodologies, implementing Scrum
                  and Kanban frameworks to optimize team productivity. My
                  approach emphasizes strong client relations and effective team
                  management, ensuring project success from conception to
                  delivery.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center w-full md:w-1/5 h-2/3">
                <div className="w-20 h-20 rounded-full my-10 bg-gradient-to-r from-orange-400 to-rose-400"></div>
                <p className="text-white text-xl text-center">tools</p>
                <p className="text-white text-md text-center p-5">
                  {" "}
                  My workflow integrates Git for version control, Jenkins for
                  continuous integration, and Docker for containerization. I
                  complement these technical tools with Adobe Suite for design
                  and creative work.
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
