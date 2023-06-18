import { BsMegaphone } from "react-icons/bs";

const NewProductsNav = () => {
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div className=" p-4 md:py-1 md:px-2 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
          <BsMegaphone className="text-2xl" />
          <div className="hidden md:block">New Products</div>
        </div>
      </div>
    </div>
  );
};

export default NewProductsNav;