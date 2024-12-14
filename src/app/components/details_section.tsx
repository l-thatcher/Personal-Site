import { ParallaxLayer } from "@react-spring/parallax";

type propsType = {
  offset: number;
};

const Details = ({ offset }: propsType) => {
  return (
    <ParallaxLayer offset={offset} speed={0.2} id="services">
      <div className="w-full flex justify-end">
        <div className="w-[60vw] p-20">
          <div className=" mb-10 h-[50vh] block p-6 bg-white rounded-lg  shadow-[#ED4395] hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
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
