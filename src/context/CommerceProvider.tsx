import { CommerceContext } from "./CommerceContext";
import { products as data } from "../data/products.json";
import { images } from "../components/images/Images";
import { useEffect, useState } from "react";
import { footerText } from "../data/products.json";
import {
  ICartProduct,
  IProduct,
  Iprops,
  IModal,
  ISummaryPrice,
} from "../interfaces/interface";
import { IVA_RATE, SHIPPING_FEE } from "../const/Const";

export const CommerceProvider = ({ children }: Iprops) => {
  const [cartItems, setCartItems] = useState<ICartProduct[]>([]);

  const [showCart, setShowCart] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalItems, setTotalItems] = useState<number>(0);
  const navItems = ["home", "headphones", "speakers", "earphones"];
  const catItems = navItems.slice(1);
  const [allowCheckout, setAllowCheckout] = useState<boolean>();
  const [cantAdd, setCantAdd] = useState<number>(1);
  const [Modal, setModal] = useState<IModal>();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showCheckoutModal, setShowCheckoutModal] = useState<boolean>(false);

  showCheckoutModal || showCart
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "scroll");

  const aboutText =
    "Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.";

  const formateador = new Intl.NumberFormat("eng-US", {
    maximumFractionDigits: 0,
  });

  useEffect(() => {
    let datos = localStorage.getItem("cartItems");
    if (datos) {
      let renderedDatos = JSON.parse(datos);
      setCartItems(renderedDatos);
      setTotalPrice(getTotalPrice(renderedDatos));
      setTotalItems(renderedDatos.length);
      setTotalPrice(getTotalPrice(renderedDatos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const getTotalPrice = (array: ICartProduct[]) => {
    let total = 0;

    array.map((item) => {
      total += item.cant * item.price;
    });

    return total;
  };

  const getSummaryPrices = (products: ICartProduct[]) => {
    const total = getTotalPrice(products);

    const summaryObject = {
      total: total,
      shipping: SHIPPING_FEE,
      iva: total * IVA_RATE,
      grandTotal: total + total * IVA_RATE + SHIPPING_FEE,
    };

    return summaryObject;
  };
  const modalInfo = {
    success: {
      text: "Product added to cart",
      bg: "bg-green-700",
      hover: "hover:bg-green-600",
    },
    fail: {
      text: "This product is already in the cart",
      bg: "bg-red-700",
      hover: "hover:bg-red-600",
    },
  };
  const handleModal = (acc: boolean) => {
    switch (acc) {
      case true:
        setModal(modalInfo.success);
        break;
      case false:
        setModal(modalInfo.fail);
        break;
      default:
        break;
    }
    setShowModal(true);

    setTimeout(() => {
      setShowModal(false);
    }, 1500);
  };
  //Se setea la cantidad del producto a agregar en el carrito
  const handleCantAdd = (acc: string) => {
    switch (acc) {
      case "add":
        setCantAdd(cantAdd + 1);
        break;
      case "subs":
        cantAdd > 1 && setCantAdd(cantAdd - 1);
        break;

      default:
        break;
    }
  };
  const scrollTotop = (bhvr: ScrollBehavior) => {
    window.scrollTo({ top: 0, left: 0, behavior: bhvr });
  };
  //Se muestra y oculta el menu
  const handleMenu = (acc: string) => {
    switch (acc) {
      case "open":
        document.body.style.overflow = "hidden";
        setShowMenu(true);
        break;
      case "close":
        document.body.style.overflow = "auto";
        setShowMenu(false);
        break;
      default:
        break;
    }
  };
  //Se muestra y oculta el carrito
  const handleCart = (acc: string) => {
    switch (acc) {
      case "open":
        document.body.style.overflow = "hidden";

        setShowCart(true);
        break;
      case "close":
        document.body.style.overflow = "auto";

        setShowCart(false);
        break;
      default:
        break;
    }
  };
  const setProductProperties = (product: IProduct, c: number) => {
    //Se setean las props del producto que va al carro y se retorna un nuevo objeto
    const newProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.cartImage,
      cant: c,
      shortName: product.shortName,
    };
    return newProduct;
  };
  //Se define si se puede o no agregar un prod al carrito
  const canAddtoCart = (product: IProduct) => {
    //Si el carro esta vacio, directamente se agrega al carro el producto, de no ser asi, sigue el codigo
    if (cartItems.length == 0) {
      return true;
    } else {
      //Se crea una variable para saber si el producto existe, ya que hay items en el carrito
      const findProduct = cartItems.find((item) => item.id === product.id);
      if (!findProduct) {
        return true;
      } else {
        return false;
      }
    }
  };
  //Se agrega, o no, el producto al carrito
  const addToCart = (product: IProduct) => {
    if (canAddtoCart(product)) {
      handleModal(true);

      const temporalArray = [
        ...cartItems,
        setProductProperties(product, cantAdd),
      ];
      setCartItems(temporalArray);
      setTotalPrice(totalPrice + product.price * cantAdd);
      setTotalItems(totalItems + 1);
    } else {
      handleModal(false);
    }
    setCantAdd(1);
  };
  return (
    <CommerceContext.Provider
      value={{
        navItems,
        data,
        catItems,
        images,
        aboutText,
        setCartItems,
        cartItems,
        showCart,
        handleCart,
        setShowCart,
        showMenu,
        handleMenu,
        scrollTotop,
        footerText,
        cantAdd,
        handleCantAdd,
        addToCart,
        Modal,
        showModal,
        setShowModal,
        formateador,
        totalPrice,
        setTotalPrice,
        totalItems,
        setTotalItems,
        getSummaryPrices,
        showCheckoutModal,
        setShowCheckoutModal,
      }}
    >
      {children}
    </CommerceContext.Provider>
  );
};
