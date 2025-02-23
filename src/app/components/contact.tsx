"use client";
import { ParallaxLayer } from "@react-spring/parallax";

import {
  InstagramIcon,
  EnvelopeIcon,
  LinkedinIcon,
} from "../icons/contactIcons";

type propsType = {
  offset: number;
};

const ContactSection = ({ offset }: propsType) => {
  return (
    <ParallaxLayer offset={offset} speed={0.1}>
      <div className="bg-[#272B4A] py-20" id="contact">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-5xl text-white py-10">contact</h1>

            <div className="flex flex-wrap justify-center gap-8 px-4 md:px-20">
              {/* Instagram */}
              <a
                href="https://instagram.com/shed.61"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-white hover:bg-gray-100 transition-colors duration-300"
                aria-label="Instagram Profile"
              >
                <InstagramIcon className="h-12 w-12 text-[#272B4A]" />
              </a>

              {/* Email */}
              <a
                href="mailto:louis@shed61.co.uk"
                className="p-4 rounded-full bg-white hover:bg-gray-100 transition-colors duration-300"
                aria-label="Send Email"
              >
                <EnvelopeIcon className="h-12 w-12 text-[#272B4A]" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-white hover:bg-gray-100 transition-colors duration-300"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="h-12 w-12 text-[#272B4A]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </ParallaxLayer>
  );
};

export default ContactSection;
