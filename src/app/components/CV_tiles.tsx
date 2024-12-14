import Image from "next/image";

const CVTiles = ({ parallaxRef }: propsType) => {
  return (
    <>
      <div className="w-full justify-start h-screen items-center">
        <div className=" w-[80vw] m-auto md:m-0 md:w-[40vw] h-screen flex flex-col justify-around items-center py-24">
          <div className="p-1">
            <div
              onClick={() => parallaxRef.current.scrollTo(2.1)}
              className="flex flex-col items-center bg-white rounded-xl shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <Image
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={"/images/codefreeimg.png"}
                alt="Work History"
                height={2800}
                width={1024}
              ></Image>
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Work History
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </div>
          </div>

          <div className="p-1">
            <div
              onClick={() => parallaxRef.current.scrollTo(2.5)}
              className=" flex flex-col items-center bg-white rounded-xl shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <Image
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={"/images/mobileimg.png"}
                alt="Education"
                height={2800}
                width={1024}
              ></Image>
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Education
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </div>
          </div>

          <div className="p-1">
            <div
              onClick={() => parallaxRef.current.scrollTo(3.2)}
              className=" flex flex-col items-center bg-white rounded-xl shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <Image
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={"/images/bespokeimg.png"}
                alt="Noteworthy Projects"
                height={2800}
                width={1024}
              ></Image>
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy Projects
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CVTiles;