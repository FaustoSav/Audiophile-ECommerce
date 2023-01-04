import { useContext } from "react";
import { CommerceContext } from "../../../context/CommerceContext";
import { images } from "../../images/Images";
import { CartProducts } from "./CartProducts";
export const CartDisplay = () => {
  const { showCart, cartItems } = useContext(CommerceContext);

  return (
    <div className={`cart-container ${!showCart ? "hidden" : "flex"}`}>
      {!cartItems.length ? (
        <div className="flex flex-col justify-center items-center gap-5">
          <p>Your Cart is empty</p>
          <img className="w-20" src={images.icons.emptyCart} alt="cart-icon" />
        </div>
      ) : (
        <CartProducts />
      )}
    </div>
  );
};
