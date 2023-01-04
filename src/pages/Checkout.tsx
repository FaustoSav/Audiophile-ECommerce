import { useContext, useEffect, useState } from "react";
import { CheckoutForm } from "../components/checkout/CheckoutForm";
import { CheckoutResume } from "../components/checkout/CheckoutResume";

import { Return } from "../components/show-product/Return";
import { CommerceContext } from "../context/CommerceContext";
import { ICartProduct, ISummaryPrice } from "../interfaces/interface";

export const Checkout = () => {
  const { cartItems, totalPrice } = useContext(CommerceContext);

  const [productsArray, setProductsArray] = useState<ICartProduct[]>(cartItems);
  useEffect(() => {
    if (cartItems) {
      setProductsArray(cartItems);
    }
  }, [totalPrice, cartItems]);
  return (
    <div className={` bg-slate-50 w-full px-4 pb-36  `}>
      <div className="checkout-container">
        <Return />
        <CheckoutForm products={productsArray} />
      </div>
      <CheckoutResume products={productsArray} />
    </div>
  );
};
