import { useContext } from "react";
import { useParams } from "react-router-dom";
import { About } from "../components/main/about/About";
import { Categories } from "../components/main/categories/Categories";
import ProductInfo from "../components/show-product/ProductInfo";
import { ProductRecomend } from "../components/show-product/ProductRecomend";
import { Return } from "../components/show-product/Return";
import { CommerceContext } from "../context/CommerceContext";
import { IProduct } from "../interfaces/interface";

export const ShowProduct = () => {
  const params = useParams();

  const { data } = useContext(CommerceContext);

  const product = data.find((product: IProduct) => {
    return product.slug == params.id;
  });

  return product != undefined ? (
    <div className="px-6 bg-white">
      <div className="md:max-w-[1100px] mx-auto">
         <Return />
      <ProductInfo product={product} />
      <ProductRecomend product={product} />
      <Categories />
      <About />
      </div>
     
    </div>
  ) : (
    <div>Not found en el show product</div>
  );
};
