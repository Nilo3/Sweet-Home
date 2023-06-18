export default function TopWeek() {
  return (
    <>
      <br />
      <div className="w-screen">
        <a
          href="#"
          className="flex items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mx-auto"
          style={{ maxWidth: "75%" }}
        >
          <div className="flex w-full">
            <div className="flex flex-col justify-between p-4 leading-normal w-1/2">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Top of the week
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Discover the best deals of the week for your home. From stylish
                furniture and comfortable bedding to beautiful carpets and
                garden essentials, find everything you need to create a cozy and
                inviting space. Dont miss out on these top picks!
              </p>
            </div>
            <img
              className="object-cover w-1/2 h-80 md:h-100 rounded-r-lg"
              src="https://cc.tvbs.com.tw/img/program/upload/2022/02/17/20220217151643-9c8ac8de.jpg"
              alt=""
            />
          </div>
        </a>
      </div>
    </>
  );
}
