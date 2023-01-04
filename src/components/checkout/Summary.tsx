import { useContext, useEffect, useState } from "react";
import {
  ICartProduct,
  ICheckoutProp,
  ISummaryPrice,
} from "../../interfaces/interface";
import { SHIPPING_FEE } from "../../const/Const";
import { CommerceContext } from "../../context/CommerceContext";

export const Summary = ({ products }: ICheckoutProp) => {
  const { formateador, getSummaryPrices, cartItems, totalPrice } = useContext(CommerceContext);
  const [summaryData, setSummaryData] = useState<ISummaryPrice>();

  useEffect(() => {
    if(cartItems ){
      console.log(totalPrice)
      setSummaryData(getSummaryPrices(cartItems))

    };
    

  }, [ cartItems ]);

  return (
    <div className="summary-container bg-white p-4 pb-10">
      <h3 className="subTitle text-[19px] tracking-[1px] m-0">Summary</h3>

      {products.map((product: ICartProduct) => {
        return (

          product &&
          <div key={product.id}>
            <div className="summary__product-container">
              <div className="flex gap-4 ">
                <img
                  src={product.image}
                  className="w-16 h-16 rounded-lg"
                  alt="Product-img"
                />
                <div className="flex flex-col items-start justify-center">
                  <span className="font-bold text-customBlack ">
                    {product.shortName}
                  </span>
                  <span className="text-textGrayDark font-[600]">
                    {product.price}
                  </span>
                </div>
              </div>

              <span className="text-textGrayDark font-[600]">
                x{product.cant}
              </span>
            </div>
          </div>
        );
      })}
      <div className="mt-6">
        <div className="flex justify-between">
          <span className="summary-subTitle">Total</span>
          <span className="price">
            ${formateador.format(summaryData?.total)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="summary-subTitle">Shipping</span>
          <span className="price">${SHIPPING_FEE}</span>
        </div>
        <div className="flex justify-between">
          <span className="summary-subTitle">IVA (Included)</span>
          <span className="price">${formateador.format(summaryData?.iva)}</span>
        </div>
        <div className="flex justify-between my-6">
          <span className="summary-subTitle">Grand total</span>

          <span className="price text-customOrgange">
            ${formateador.format(summaryData?.grandTotal)}
          </span>
        </div>
      </div>
    </div>
  );
};
