import { ParallaxLayer } from "@react-spring/parallax";

type propsType = {
  offset: number;
};

const Details = ({ offset }: propsType) => {
  return (
    <ParallaxLayer offset={offset} speed={0.2} id="services">
      <div className="w-full flex justify-end">
        <div className="w-full md:w-[60vw] p-5 md:p-20">
          <div className=" mb-10 h-auto block p-6 bg-white rounded-lg  shadow-[#ED4395] hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Professional Experience
            </h2>
            <h3 className="font-bold text-white text-center">
              Lead Web Designer & Developer <br />
              Hangar47 (Feb 2023 – Present)
            </h3>
            <ul className="list-disc pl-4 text-grey-700 dark:text-grey-700">
              <li>
                Being part of a small company, my role covered a variety of
                tasks, but I was primarily the lead designer and developer
                behind new WordPress websites, including wonderyearsint.com,
                winterbothams.co.uk, and advancefirst.com.
              </li>
              <li>
                Developed bespoke PHP and Python plugins for web scraping and
                post automation, significantly improving efficiency within the
                company.
              </li>
              <li>
                Managed client meetings, developing my skills in client
                relations, requirement gathering, understanding client visions,
                and task prioritisation.
              </li>
              <li>
                Implemented SEO strategies, improving client website visibility
                and performance on Google.
              </li>
            </ul>
            <br />
            <h3 className="font-bold text-white text-center">
              Founder & Developer <br />
              Shed61 (Aug 2022 – Present)
            </h3>
            <ul className="list-disc pl-4 text-grey-700 dark:text-grey-700">
              <li>
                Delivered affordable web solutions for small businesses,
                balancing cost with quality.
              </li>
              <li>
                Learnt a lot about client relationship management, requirement
                gathering, and task prioritisation.
              </li>
              <li>
                Specialised in CMS platforms (WordPress, Squarespace, Wix) to
                empower client self-management.
              </li>
              <li>
                Implemented SEO strategies, improving client website visibility
                and performance on Google.
              </li>
            </ul>
          </div>

          <div className=" mb-10 h-[50vh] block p-6 bg-white  shadow-[#FDC6D6] rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>

          <div className=" mb-10 h-[50vh] block p-6 bg-white  shadow-[#2F1246] rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </div>
      </div>
    </ParallaxLayer>
  );
};

export default Details;
