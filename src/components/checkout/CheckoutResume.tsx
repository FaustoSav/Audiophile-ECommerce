import { useContext } from "react";
import { CommerceContext } from "../../context/CommerceContext";
import { ICartProduct, ICheckoutProp } from "../../interfaces/interface";
import { images } from "../images/Images";
import { SeeButton } from "../shared/SeeButton";
export const CheckoutResume = ({ products }: ICheckoutProp) => {
  const {
    showCheckoutModal,
    setShowCheckoutModal,
    totalPrice,
    formateador,
    setCartItems,
    setTotalItems,
  } = useContext(CommerceContext);

  const finishPayment = () => {
    setCartItems([]);
    setTotalItems(0);
    localStorage.removeItem("cartItems");
    setShowCheckoutModal(false);
  };

  return showCheckoutModal ? (
    <>
      <div
        onClick={finishPayment}
        className="cart-background__dark fixed  z-40"
      ></div>

      <div className="checkout-modal">
        <div className="w-7 sm:w-16 ">
          <img src={images.icons.check} alt="" />
        </div>
        <div>
          <h2 className="subTitle text-[16px] mt-3 mb-2 leading-6 sm:text-[32px] sm:max-w-[250px] sm:mt-6 sm:leading-8 sm:mb-5">
            Thank you for your order
          </h2>
          <p className="text-textGrayDark leading-4 text-[14px] sm:text-[16px]">
            You will receive an email confirmation shortly
          </p>
        </div>

        <div className="w-full flex flex-col justify-center items-center sm:mt-7 md:flex-row md:items-stretch ">
          <div className="w-full bg-saturedWhite rounded-md mt-5 px-2 max-h-[270px] sm:max-h-[350px] sm:rounded-none sm:rounded-l-md sm:m-0  overflow-y-scroll pb-4">
            {products.map((product: ICartProduct) => {
              return (
                product && (
                  <div key={product.id}>
                    <div className="summary__product-container ">
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

                      <span className="text-textGrayDark font-[600] pr-3">
                        x{product.cant}
                      </span>
                    </div>
                  </div>
                )
              );
            })}
          </div>
          <div className="bg-customBlack flex flex-col justify-center items-start p-4 w-full rounded-b-md sm:max-h-[350px] sm:rounded-b-none sm:rounded-r-md sm:w-1/2 sm:justify-end">
            <span className="text-textGray uppercase">Grand total</span>
            <span className="text-white font-bold">
              $ {formateador.format(totalPrice)}
            </span>
          </div>
        </div>

        <div onClick={finishPayment} className="w-full sm:mt-4">
          <SeeButton
            styles="block w-full mt-2 rounded-[3px]"
            toProduct="/"
            customText="Back to home"
          />
        </div>
      </div>
    </>
  ) : null;
};
