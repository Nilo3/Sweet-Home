import recommendation1 from "../../assets/image/recommendations1.webp"
export default function Recommendations() {
  return (
    <>
      <br />
      <div className="w-screen">
        <a href="#" className="flex items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mx-auto" style={{ maxWidth: '75%' }}>
          <div className="flex w-full">
            <img className="object-cover w-1/3 h-80 md:h-100 rounded-l-lg" src={recommendation1} alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal w-1/2">
              <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Achieve that sweet space</h5>
              <p className="mt-10 mb-10 text-lg italic text-gray-700 dark:text-gray-400">
              Discover quality furniture for every style and taste, helping you achieve the home of your dreams. Our wide selection caters to diverse preferences, ensuring that each customer can find their perfect pieces. Create a haven of comfort and style with us today.</p>
            </div>
          </div>
        </a>

      </div>
    </>
  );
}