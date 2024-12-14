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
            As a web developer, my mission is to create captivating,
            user-friendly websites that leave a lasting impression. With a focus
            on stunning design and seamless functionality, I aim to exceed
            client expectations and eliminate any worries they may have. By
            blending technical expertise with a keen eye for aesthetics, I
            deliver worry-free experiences, empowering clients to focus on their
            core objectives while I craft their exceptional online presence.
          </p>
          <button className="rounded-full bg-slate-50 text-[#272B4A] p-2 text-md hover:bg-slate-300">
            get in touch
          </button>
        </div>
      </div>
      <div className="bg-[#272B4A] md:py-20">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-5xl text-white py-10">what I do</h1>

            <div className="flex flex-col md:flex-row justify-around w-full px-4 md:px-20">
              <div className="flex flex-col items-center justify-center w-full md:w-1/4 h-2/3">
                <div className="w-20 h-20 my-10 rounded-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600"></div>
                <p className="text-white text-xl text-center">
                  code free web design
                </p>
                <p className="text-white text-md text-center md:p-5">
                  {" "}
                  Platforms like WordPress, Wix, and Shopify offer affordable
                  and user-friendly solutions for creating stylish websites.
                  With intuitive interfaces, customizable design options,
                  seamless hosting, and ongoing support, managing and
                  maintaining your website becomes hassle-free.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center w-full md:w-1/4 h-2/3">
                <div className="w-20 h-20 rounded-full my-10 bg-gradient-to-t from-orange-400 to-sky-400"></div>
                <p className="text-white text-xl text-center">
                  app development
                </p>
                <p className="text-white text-md text-center p-5">
                  {" "}
                  Flutter is a powerful cross-platform development framework for
                  creating versatile mobile applications. With its user-friendly
                  interface, and seamless compatibility with iOS and Android
                  platforms, Flutter offers an efficient and affordable solution
                  for building high-quality apps.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center w-full md:w-1/4 h-2/3">
                <div className="w-20 h-20 rounded-full my-10 bg-gradient-to-tl from-orange-500 viq-yellow-300 to-sky-200"></div>
                <p className="text-white text-xl text-center">
                  bespoke coded sites
                </p>
                <p className="text-white text-md text-center p-5">
                  {" "}
                  We will work together to develop a list of requirements for
                  your site. Then work through a plan, prototype and then
                  finally produce the site you want. This provides the most
                  customisation and will allow us to create the exact site that
                  you want. However, this is the most time consuming approach.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center w-full md:w-1/4 h-2/3">
                <div className="w-20 h-20 rounded-full my-10 bg-gradient-to-r from-orange-400 to-rose-400"></div>
                <p className="text-white text-xl text-center">
                  AI assisted workflows
                </p>
                <p className="text-white text-md text-center p-5">
                  {" "}
                  With new AI tools appearing constantly they can be used for
                  anything from copyrite, to image creation. wether you need a
                  new logo, blog posts, new images for your website, or an
                  entirly new website, there are AI assisted tools that can help
                  us make it faster and better.
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
