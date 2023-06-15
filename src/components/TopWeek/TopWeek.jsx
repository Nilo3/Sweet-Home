export default function TopWeek() {
    return (
      <>
        <br />
        <div className="w-screen">

          <a href="#" className="flex items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mx-auto" style={{ maxWidth: '75%' }}>
            <div className="flex w-full">
              <div className="flex flex-col justify-between p-4 leading-normal w-1/2">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Top of the week</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, error suscipit, consectetur libero iusto provident, ipsum praesentium a veritatis illo iure voluptate porro quisquam. Earum et aliquid cumque laborum quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, voluptas? Eaque, ratione ducimus. Tempore quae incidunt porro quo odit ut, architecto earum vitae vel placeat reiciendis aliquid repellendus dolores sit?</p>
              </div>
              <img className="object-cover w-1/2 h-80 md:h-100 rounded-r-lg" src="https://i.pinimg.com/564x/93/f6/49/93f64909f4c87544c7ca2de0cef424da.jpg" alt="" />
            </div>
          </a>
        </div>
      </>
    );
  }