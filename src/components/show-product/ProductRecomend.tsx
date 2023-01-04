import { IProduct } from "../../interfaces/interface";
import { SeeButton } from "../shared/SeeButton";

export const ProductRecomend = ({ product }: any) => {
  return (
    <div className="columCentered gap-10 my-[110px]">
      <h3 className="subTitle mb-0">you may also like</h3>
      <div className="md:flex md:justify-between tablet:w-full md:gap-5 lg:gap-8 xl:gap-12 ">
        {product.others.map((product: IProduct) => {
          return (
            <div
              className="columCentered gap-8 w-full mb-5 "
              key={product.name}
            >
              <picture className="others-subcontainer">
                <img
                  className="rounded-md tablet:hidden "
                  src={product.image.mobile}
                  alt="gallery-img"
                />
                <img
                  className="rounded-md hidden tablet:block lg:hidden w-[200px]"
                  src={product.image.tablet}
                  alt="gallery-img"
                />{" "}
                <img
                  className="rounded-md hidden lg:block "
                  src={product.image.desktop}
                  alt="gallery-img"
                />
              </picture>
              <h3 className="subTitle mb-0 tablet:tracking-[1px] md:tracking-[2px]">
                {product.name}
              </h3>
              <SeeButton toProduct={`/${product.slug}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
