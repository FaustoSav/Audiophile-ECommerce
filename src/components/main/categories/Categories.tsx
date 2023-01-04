import { useContext } from "react";
import { Link } from "react-router-dom";
import { CommerceContext } from "../../../context/CommerceContext";

export const Categories = () => {
  const { catItems, images, scrollTotop } = useContext(CommerceContext);
  return (
    <div className="cat-container ">
      {catItems.map((item: string, i: number) => {
        return (
          <article
            className="category-item "
            key={item}
            onClick={() => scrollTotop("auto")}
          >
            <Link
              className="flex flex-col items-center gap-3 pb-[20px] w-full  "
              to={`/${item}`}
            >
              <img
                className="category-img"
                src={images.categoriesIMG[i].src}
                alt="img"
              />
              <h3 className="uppercase font-[700] text-customBlack tracking-[1px]">
                {item}
              </h3>
              <div className=" text-textGrayDark font-[700] text-sm flex gap-4 items-center hover:text-customOrgange">
                SHOP
                <img
                  className="w-[8px] h-[12px]"
                  src={images.icons.arrowRight}
                  alt=""
                />
              </div>
            </Link>
          </article>
        );
      })}
    </div>
  );
};
