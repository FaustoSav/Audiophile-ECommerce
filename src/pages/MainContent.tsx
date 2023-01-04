import { About } from "../components/main/about/About";
import { Categories } from "../components/main/categories/Categories";
import { HomeProducts } from "../components/main/home-products/HomeProducts";
import { NewProduct } from "../components/main/new-product/NewProduct";

export const MainContent = () => {
  return (
    <div className="  md:flex md:flex-col md:justify-center md:items-center ">
      <NewProduct />
      <div className="px-6 bg-white md:w-full md:flex md:flex-col md:items-center">
        <Categories />
        <HomeProducts />
        <About />
      </div>
    </div>
  );
};
