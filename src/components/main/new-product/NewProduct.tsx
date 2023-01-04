import { SeeButton } from "../../shared/SeeButton";

export const NewProduct = () => {
  return (
    <div className=" new-product__container ">
      <div className="hero-container md:px-6  ">
        <h2 className=" uppercase text-lightGray font-bold tracking-[6px] text-[14px] md:text-lg xl:text-xl tablet:mt-16">
          New Product
        </h2>
        <h1 className=" uppercase text-white text-center   tablet:text-[45px] tablet:leading-[50px]  text-[35px] font-[600] md:font-bold lg:text-start lg:text-[50px] md:leading-[60px]">
          xx99 Mark II Headphones
        </h1>
        <p className="text text-center   lg:text-start    ">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>

        <SeeButton toProduct="/headphones/xx99-mark-two-headphones" />
      </div>
    </div>
  );
};
