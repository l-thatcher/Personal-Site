import Image from "next/image";
import Link from "next/link";

import { StaticImageData } from "next/image";

interface ProjectProps {
  title: string;
  platform: string;
  owner: string;
  quoteText: string;
  aboutText: string;
  link: string;
}

export default function Project({
  title,
  platform,
  owner,
  quoteText,
  aboutText,
  link,
}: ProjectProps) {
  return (
    <div className="w-full md:h-[70vh] flex flex-row items-center">
      <div className="w-1/3 h-full hidden md:flex flex-col justify-around bg-slate-600 bg-opacity-50 backdrop-blur-sm p-10 rounded-e-xl">
        <div className="flex-auto">
          <p className="pb-3 shrink mb-2 text-3xl font-bold tracking-tight text-white">
            {title}
          </p>
          <p className="py-1 shrink mb-2 text-md tracking-tight text-orange-500">
            platform: {platform}
          </p>
          <p className="shrink mb-2 text-md tracking-tight text-orange-500">
            owner: {owner}
          </p>
        </div>

        <div className="flex flex-col justify-between">
          <div className="flex flex-col">
            <div className="pt-14 mx-auto">
              <Image
                className="py-6"
                src="/quote.png"
                height={188}
                width={159}
                alt={"quote"}
              />
            </div>
            <p className="pl-5 mb-2 text-lg font- tracking-tight text-white text-center">
              {quoteText}
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center"
          >
            <button
              type="button"
              className="w-3/4 mt-5 mx-auto text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center"
            >
              {" "}
              click here to view site
            </button>
          </Link>
        </div>
      </div>

      <div className="w-full md:w-1/2 md:h-[70vh] flex-col justify-center items-center">
        <div className="px-12 md:px-5 h-full flex justify-center items-center">
          <iframe src={link} className="h-full w-full"></iframe>
        </div>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex justify-center"
        >
          <button
            type="button"
            className="w-3/4 mb-8 mx-auto text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-b-lg text-lg px-5 py-2.5 text-center"
          >
            {" "}
            click here to view site
          </button>
        </Link>
      </div>

      <div className="w-1/3 h-full hidden md:flex flex-col justify-around text-center bg-slate-600 bg-opacity-50 backdrop-blur-sm p-10 rounded-s-xl">
        <p className="p-3 text-3xl font-bold tracking-tight text-white">
          about
        </p>
        <p className="py-1 pr-5 mb-4 text-lg font- tracking-tight text-white">
          {aboutText}
        </p>
      </div>
    </div>
  );
}
