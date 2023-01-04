import { ChangeEventHandler, useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CommerceContext } from "../../context/CommerceContext";
import { ICheckoutProp } from "../../interfaces/interface";
import { Label } from "./Label";

import { Summary } from "./Summary";

type FormValues = {
  name: string;
  email: string;
  phone: number;
  address: string;
  zipCode: number;
  city: string;
  country: string;
  radioMoney: string;
  radioCash: string;
  eMoneyNumber?: number;
  eMoneyPin?: number;
};

export const CheckoutForm = (props: ICheckoutProp) => {
  const cashText =
    "The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormValues>({ mode: "onChange" });

  const [checkedRadio, setCheckedRadio] = useState<string>("radioCash");

  const handleRadio: ChangeEventHandler<HTMLInputElement> = (event) => {
    setCheckedRadio(event.currentTarget.value);
  };
  const { setShowCheckoutModal, cartItems, setCartItems, scrollTotop, setTotalItems } =
    useContext(CommerceContext);
  const onSubmit: SubmitHandler<FormValues> = (values) => {
    if (isValid) {
      scrollTotop("smooth");
      setShowCheckoutModal(true);
      reset();
    } 
  };

  return (
    <>
      <form
        className="checkout-subcontainer "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full rounded-md bg-white p-4 lg:p-8 lg:rounded-xl">
          <h1 className="subTitle">Checkout</h1>

          <div className="w-full customGrid:grid customGrid:grid-cols-2 customGrid:grid-flow-row customGrid:gap-x-4">
            <legend className="checkout-subtitle ">Billing Details</legend>
            <div className="customGrid:col-start-1">
              <Label labelValue="Name" errors={errors.name} />
              <input
                className={`input ${errors.name && "border-red-500"}`}
                type="text"
                {...register("name", {
                  required: "Requiered field",
                  pattern: {
                    value: /^[^<>%$#^*]*$/,
                    message: "Wrong Format",
                  },
                })}
                placeholder="Tim Berners Lee"
              />
            </div>
            <div>
              <Label labelValue="Email" errors={errors.email} />

              <input
                className={`input ${errors.email && "border-red-500"}`}
                type="email"
                {...register("email", {
                  required: "Requiered field",
                  pattern: {
                    value: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/,
                    message: "Wrong Format",
                  },
                })}
                placeholder="savoya@gmail.com"
              />
            </div>
            <div>
              <Label labelValue="Phone" errors={errors.phone} />

              <input
                className={`input ${errors.phone && "border-red-500"}`}
                type="number"
                {...register("phone", {
                  required: "Requiered field",
                  valueAsNumber: true,
                })}
                placeholder="3407402846"
              />
            </div>
          </div>

          <div className="w-full customGrid:grid customGrid:grid-cols-2 customGrid:grid-flow-row customGrid:gap-x-4">
            <legend className="checkout-subtitle ">Shipping Info</legend>

            <div className="customGrid:col-start-1 col-span-2">
              <Label labelValue="Adress" errors={errors.address} />

              <input
                className={`input ${errors.address && "border-red-500"}`}
                type="text"
                {...register("address", { required: "Requiered field" })}
                placeholder="Av. San Martin 129"
              />
            </div>

            <div>
              <Label labelValue="ZIP Code" errors={errors.zipCode} />

              <input
                className={`input ${errors.zipCode && "border-red-500"}`}
                type="number"
                {...register("zipCode", {
                  required: "Requiered field",
                  pattern: {
                    value: /^[0-9]{4,5}(?:-[0-9]{4})?$/,
                    message: "Wrong format",
                  },
                  valueAsNumber: true,
                })}
                placeholder="2915"
              />
            </div>

            <div>
              <Label labelValue="City" errors={errors.city} />
              <input
                className={`input ${errors.city && "border-red-500"}`}
                type="text"
                {...register("city", { required: "Requiered field" })}
                placeholder="Buenos Aires"
              />
            </div>

            <div>
              <Label labelValue="Country" errors={errors.country} />
              <input
                className={`input ${errors.country && "border-red-500"}`}
                type="text"
                {...register("country", { required: "Requiered field" })}
                placeholder="Argentina"
              />
            </div>
          </div>

          <div className="w-full customGrid:grid customGrid:grid-cols-2 customGrid:grid-flow-row customGrid:gap-x-4">
            <div>
              <label className="input-label">Payment Method</label>
            </div>
            <div className="">
              <div className="radioContainer ">
                <input
                  className=" w-4 h-4 hover:cursor-pointer "
                  type="radio"
                  value="radioMoney"
                  checked={checkedRadio === "radioMoney"}
                  {...register("radioMoney")}
                  onChange={handleRadio}
                  placeholder="Tim Berners Lee"
                />
                <label
                  className="h-4 input-label text-[15px]"
                  htmlFor="radioMoney"
                >
                  e-Money
                </label>
              </div>
              <div className="radioContainer">
                <input
                  className=" w-4 h-4 hover:cursor-pointer"
                  type="radio"
                  value="radioCash"
                  checked={checkedRadio === "radioCash"}
                  {...register("radioCash")}
                  onChange={handleRadio}
                  placeholder="Tim Berners Lee"
                />
                <label
                  className="h-4 input-label text-[15px]"
                  htmlFor="radioCash"
                >
                  Cash on Delivery
                </label>
              </div>
            </div>

            <div className="customGrid:col-start-1 customGrid:col-end-3 customGrid:mt-2">
              {checkedRadio === "radioMoney" && (
                <>
                  <div className="">
                    <Label
                      labelValue="e-Money Number"
                      errors={errors.eMoneyNumber}
                    />

                    <input
                      className={`input ${
                        errors.eMoneyNumber && "border-red-500"
                      }`}
                      type="number"
                      {...register("eMoneyNumber", {
                        required: "Requiered field",
                        pattern: {
                          value: /^[0-9]{9}$/,
                          message: "Wrong format",
                        },
                      })}
                      placeholder="12345678"
                    />
                  </div>

                  <div className="w-full">
                    <Label labelValue="e-Money PIN" errors={errors.eMoneyPin} />

                    <input
                      className={`input ${
                        errors.eMoneyPin && "border-red-500"
                      }`}
                      type="number"
                      {...register("eMoneyPin", {
                        required: "Requiered field",
                        pattern: {
                          value: /^[0-9]{4}$/,
                          message: "Wrong format",
                        },
                        valueAsNumber: true,
                      })}
                      placeholder="1331"
                    />
                  </div>
                </>
              )}

              {checkedRadio === "radioCash" && (
                <div className="w-full sm:mt-3  ">
                  <img
                    className="mx-auto"
                    src="images/checkout/icon-cash-on-delivery.svg"
                    alt="icon-cash"
                  />
                  <p className="description-text sm:mt-3 ">{cashText}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-full rounded-md lg:rounded-xl overflow-hidden lg:w-[45%] ">
          {/* <Summary/> */}
          <Summary products={props.products} />

          <div
            className={` px-4 bg-white pb-5 ${
              !isValid || !cartItems.length ? "cursor-not-allowed" : ""
            }`}
          >
            <input
              className={`button w-full  rounded-md ${
                !isValid || !cartItems.length
                  ? "  opacity-60 pointer-events-none"
                  : ""
              }`}
              type="submit"
              value={"Continue & Pay"}
            />
          </div>
        </div>
      </form>
    </>
  );
};
