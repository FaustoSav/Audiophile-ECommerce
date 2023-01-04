import React, { useContext } from "react";
import { CommerceContext } from "../../../context/CommerceContext";

export const CartBackground = () => {
  const { handleCart, showCart } = useContext(CommerceContext);
  return (
    <div
      onClick={() => handleCart("close")}
      className={`cart-background__dark  ${!showCart ? "hidden" : "flex"}`}
    ></div>
  );
};
