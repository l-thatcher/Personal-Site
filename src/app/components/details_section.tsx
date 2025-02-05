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
            <h3 className="font-bold dark:text-white text-center border-b-2 border-white pb-2 mb-2">
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
            <h3 className="font-bold dark:text-white text-center border-b-2 border-white pb-2 mb-2">
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

          <div className=" mb-10 h-auto block p-6 bg-white rounded-lg  shadow-[#ED4395] hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Education
            </h2>
            <h3 className="font-bold dark:text-white text-center border-b-2 border-white pb-2 mb-2">
              Cardiff University (2019–2022)
              <br />
              BSc Applied Software Engineering | Grade: 2:1
            </h3>
            <ul className="list-disc pl-4 text-grey-700 dark:text-grey-700">
              <li>
                The course focused on learning to adapt to modern and emerging
                technologies to ensure skills remain relevant, as well as
                working in and managing teams developing software for real world
                clients.
              </li>
              <li>
                Agile methodologies such as Kanban boards, planning poker, and
                hosting weekly planning and review meetings were core aspects of
                team management training.
              </li>
              <li>
                There was a heavy emphasis on good version control using GIT and
                CI/CD pipelines to ensure best practices were kept during
                project development.
              </li>
            </ul>
          </div>

          <div className=" mb-10 h-auto block p-6 bg-white rounded-lg  shadow-[#ED4395] hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Key Projects
            </h2>
            <h3 className="font-bold dark:text-white text-center border-b-2 border-white pb-2 mb-2">
              Zero Carbon 2030
            </h3>
            <ul className="list-disc pl-4 text-grey-700 dark:text-grey-700">
              <li>
                Developed a blockchain-integrated carbon credit platform using
                Next.js and Ethereum.
              </li>
              <li>
                Led a complete UI redesign to improve mobile responsiveness and
                enhance user experience.
              </li>
              <li>
                Created a secure admin panel with API integration and user
                authentication, enabling seamless project management.
              </li>
              <li>
                Utilised Agile methodologies (Scrum) including planning and
                retrospective meetings to ensure smooth sprints and timely
                delivery.
              </li>
              <li>
                Achieved a System Usability Scale (SUS) score of 80.36,
                categorising the platform as “excellent” and placing it in the
                top bracket of SUS benchmarks.
              </li>
            </ul>
            <br />
            <h3 className="font-bold dark:text-white text-center border-b-2 border-white pb-2 mb-2">
              Biblio
            </h3>
            <ul className="list-disc pl-4 text-grey-700 dark:text-grey-700">
              <li>
                Designed and developed a cross-platform book marketplace app
                using Flutter for iOS, Android, and web.
              </li>
              <li>
                Integrated real-time database management with Firebase,
                providing seamless user authentication and in-app messaging.
              </li>
              <li>
                Ran stakeholder interviews to test the SUS and followed Apple
                and Google design principles.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ParallaxLayer>
  );
};

export default Details;
