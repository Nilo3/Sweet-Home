import { FcIdea } from "react-icons/fc";

const NewProductsNav = () => {
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3 select-none">
        <div className=" p-4 md:py-1 md:px-2 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
          <FcIdea className="text-2xl" />
          <div className="hidden md:block">Ideas & inspiration</div>
        </div>
      </div>
    </div>
  );
};

export default NewProductsNav;
