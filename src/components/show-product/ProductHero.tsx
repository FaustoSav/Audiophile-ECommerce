import { useContext } from "react";
import { CommerceContext } from "../../context/CommerceContext";

export const ProductHero = ({ product }: any) => {
  const { cantAdd, handleCantAdd, addToCart, formateador } =
    useContext(CommerceContext);
  return (
    <div className="show-product__first-container">
      <img
        src={product.image.mobile}
        alt="Product-img"
        className="rounded-md  tablet:hidden mid:w-1/2"
      />
      <img
        src={product.image.tablet}
        alt="Product-img"
        className="rounded-md  hidden tablet:block lg:hidden mid:max-w-[50%] mid:max-h-[600px] "
      />
      <img
        src={product.image.desktop}
        alt="Product-img"
        className="rounded-md hidden lg:block lg:max-w-[510px]   "
      />
      <div className="flex flex-col justify-center items-start gap-5 text-start lg:gap-7  ">
        {product.new && (
          <span className="uppercase text-customOrgange tracking-[9px]">
            new product
          </span>
        )}
        <h3 className=" show-product_title">{product.name}</h3>

        <p className="description-text md:max-w-[500px]  ">
          {product.description}
        </p>

        <span className="price">
          $ {formateador.format(product.price)}
        </span>

        <div className=" gap-4 flex mid:flex-col sm:flex-row md:w-1/2 ">
          <div className="addContainer">
            <span
              onClick={() => handleCantAdd("subs", product.name)}
              className="changeAdd"
            >
              -
            </span>
            <div className="font-bold text-sm px-2 w-[30px]   text-center">
              {cantAdd}
            </div>
            <span
              onClick={() => handleCantAdd("add", product.name)}
              className="changeAdd"
            >
              +
            </span>
          </div>
          <div onClick={() => addToCart(product)} className="addCartButton">
            Add to cart
          </div>
        </div>
      </div>
    </div>
  );
};
