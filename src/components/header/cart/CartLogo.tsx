import { useContext } from "react";
import { CommerceContext } from "../../../context/CommerceContext";
import { images } from "../../images/Images";

export const CartLogo = () => {
  const { handleCart, showMenu, totalItems } = useContext(CommerceContext);
  return (
    <div
      className="relative hover:cursor-pointer"
      onClick={() => handleCart("open")}
    >
      {totalItems > 0 && (
        <div className="total-items">
          {totalItems}
        </div>
      )}

      <img
        className={`w-6 hover:cursor-pointer ${showMenu ? "hidden" : "block"} md:w-8 lg:w-10 xl:w-14 `}
        src={images.icons.cart}
        alt="logo"
      />
    </div>
  );
};
