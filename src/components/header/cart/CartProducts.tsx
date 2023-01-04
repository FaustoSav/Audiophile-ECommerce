import { useContext } from "react";
import { Link } from "react-router-dom";
import { CommerceContext } from "../../../context/CommerceContext";
import { ICartProduct } from "../../../interfaces/interface";

export const CartProducts = () => {
  const {
    cartItems,
    setCartItems,
    formateador,
    totalPrice,
    setTotalItems,
    setTotalPrice,
    totalItems,
    handleCart
  } = useContext(CommerceContext);

  const removeFromCart = (name: string) => {
    setCartItems(() =>
      cartItems.filter((item: ICartProduct) => {
        return item.name != name;
      })
    );
    setTotalItems(totalItems - 1);
  };

  const handleCartAdd = (acc: string, cartName: string, cartPrice: number) => {
    const productInCart = cartItems.find(
      (item: ICartProduct) => item.name === cartName
    );

    switch (acc) {
      case "add":
        setTotalPrice(totalPrice + cartPrice);
        productInCart &&
          setCartItems(() =>
            cartItems.map((item: ICartProduct) => {
              if (item.name === cartName) {
                return { ...item, cant: item.cant + 1 };
              } else {
                return item;
              }
            })
          );

        break;
      case "subs":
        if (productInCart.cant === 1) {
          setTotalPrice(totalPrice - cartPrice);
          removeFromCart(cartName);
        }
        if (productInCart.cant > 1) {
          setTotalPrice(totalPrice - cartPrice);
          setCartItems(() =>
            cartItems.map((item: ICartProduct) => {
              if (item.name === cartName) {
                return { ...item, cant: item.cant - 1 };
              } else {
                return item;
              }
            })
          );
        }

        break;
      default:
        break;
    }
  };

  return (
    <div className=" p-5 flex flex-col gap-6 w-full overflow-hidden ">
      <div className="flex justify-between items-center">
        <span className="text-customBlack uppercase tracking-[1px]">
          Cart({cartItems.length})
        </span>
        <span
          onClick={() => {
            setCartItems([]);
            setTotalItems(0);
            setTotalPrice(0);
          }}
          className="underline font-[400] hover:text-customOrgange hover:cursor-pointer"
        >
          Remove All
        </span>
      </div>
      <div className="flex flex-col gap-6 gap overflow-y-scroll max-h-[400px]">
        {cartItems.map((product: ICartProduct) => {
          return (
            <article
              className=" flex justify-between items-center"
              key={product.name}
            >
              <div className="cart-product__left">
                <div className="bg-saturedWhite px-4 py-2 rounded-md">
                  <img
                    className="min-w-[32px] w-[32px]"
                    src={product.image}
                    alt="img-product"
                  />
                </div>

                <div className="flex flex-col">
                  <span className="text-customBlack text-sm">
                    {product.name}
                  </span>
                  <span className="font-[700] text-sm ">$ {product.price}</span>
                </div>
              </div>

              <div className="cart-product__right mr-2  ">
                <div className="addContainer ">
                  <span
                    onClick={() =>
                      handleCartAdd("subs", product.name, product.price)
                    }
                    className="changeAdd text-base"
                  >
                    -
                  </span>
                  <div className="font-bold text-sm md:px-2 ">
                    {product.cant}
                  </div>
                  <span
                    onClick={() =>
                      handleCartAdd("add", product.name, product.price)
                    }
                    className="changeAdd text-base"
                  >
                    +
                  </span>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="flex justify-between items-center">
        <span className="text-textGrayDark font-[400]">TOTAL</span>
        <span className="text-customBlack">
          $ {formateador.format(totalPrice)}
        </span>
      </div>

      {cartItems.length && (
        <Link onClick={()=> handleCart('close')} className="button mx-auto" to={`/checkout`}>
          Checkout
        </Link>
      )}
    </div>
  );
};
