import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CommerceContext } from "../../../context/CommerceContext";
import { IProduct } from "../../../interfaces/interface";
import { NotFound } from "../../../pages/NotFound";
import { SeeButton } from "../../shared/SeeButton";

export const CategoryProducts = () => {
  const { data, catItems } = useContext(CommerceContext);
  const [filteredData, setfilteredData] = useState<IProduct[]>([]);
  const { category } = useParams();

  useEffect(() => {
    const temporalData = data.filter(
      (product: IProduct) => product.category == category
    );

    setfilteredData(
      temporalData.sort(
        (a: IProduct, b: IProduct) => Number(b.new) - Number(a.new)
      )
    );
  }, [category]);

  {
    if (catItems.includes(category)) {
      return (
        <div>
          <div className="bg-customBlack w-full mx-auto h-[50px] leading-[110px] md:h-[100px] md:leading-[150px] ">
            <h1 className="text-white font-[700] text-[28px]  uppercase text-center md:text-[32px] lg:text-[36px] md:tracking-[3px]">
              {category}
            </h1>
          </div>
          <div className="px-6 space-y-28 mt-16 pb-12 md:pb-24 pt-12 bg-white flex flex-col lg:[&>*:nth-child(even)]:flex-row-reverse ">
            {filteredData.map((product: IProduct) => {
              return (
                <div
                  key={product.name}
                  className="columCentered gap-6  md:max-w-[1100px] md:mx-auto lg:flex-row lg:gap-32 "
                >
                  <div className="flex flex-col gap-5 lg:w-1/2">
                    <img
                      src={product.categoryImage.mobile}
                      alt="Product-img"
                      className="rounded-md min-w-full tablet:hidden "
                    />
                    <img
                      src={product.categoryImage.tablet}
                      alt="Product-img"
                      className="rounded-md min-w-full hidden tablet:block lg:hidden  "
                    />
                    <img
                      src={product.categoryImage.desktop}
                      alt="Product-img"
                      className="rounded-md min-w-full hidden lg:block "
                    />
                  </div>

                  <div className="columCentered text-center gap-6 lg:w-1/2 lg:items-start lg:text-start ">
                    {product.new && (
                      <span className="uppercase text-customOrgange tracking-[9px]">
                        new product
                      </span>
                    )}
                    <h3 className=" uppercase font-[600] text-customBlack text-[28px] md:text-[32px] md:font-[700] lg:max-w-[250px] lg:leading-9">
                      {product.name}
                    </h3>

                    <p className="description-text md:max-w-[650px] md:text-[17px] lg:text-[16px] ">
                      {product.description}
                    </p>
                    <SeeButton
                    toProduct={`/${product.category}/${product.slug}`}
                  />
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>
      );
    } else {
      return <NotFound />;
    }
  }
};
