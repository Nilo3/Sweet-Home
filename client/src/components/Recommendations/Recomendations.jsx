import recommendation1 from "../../assets/image/recommendations1.webp";

const Recommendations = () => {
  return (
    <>
      <br />
      <div className="w-screen px-12">
        <div className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mx-auto">
          <img
            className="object-cover w-full md:w-1/2 h-80 md:h-auto md:max-h-100 rounded-lg md:rounded-l-lg"
            src={recommendation1}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal w-full md:w-1/2">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Our recommendations
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify mt-4">
              Explore our curated collection of high-quality furniture and home
              accessories. Whether you prefer modern designs or timeless
              classics, we have something to suit every style and taste. Create
              the perfect living space with our expertly selected
              recommendations.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recommendations;
