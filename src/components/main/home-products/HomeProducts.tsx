import { useEffect, useState } from "react";
import { images } from "../../images/Images";
import { SeeButton } from "../../shared/SeeButton";

export const HomeProducts = () => {
  return (
    <div className=" mt-24 md:w-full md:max-w-[1100px] space-y-6 md:space-y-10 lg:space-y-16  bg-white  ">
      <article className="home-product__first ">
        <img
          className="w-[170px] mt-8 md:w-[200px] lg:w-[400px] lg:ml-44 lg:translate-y-[30px] "
          src={images.homeProducts[0]}
          alt="product-img"
        /> 
        <div className=" flex flex-col  items-center gap-6 lg:items-start lg:gap-8 xl:w-[300px] ">
          <h3 className=" text-white home-product__title leading-[38px] mt-2 text-[38px] tablet:text-[46px] tablet:leading-[46px] tablet:w-[200px] md:text-[56px] md:w-[300px] md:leading-[56px] lg:text-start lg:tracking-[8px]">
            zx9 Speaker
          </h3>
          <p className="text-white text-center font-[200] max-w-[370px] tablet:text-lg lg:text-start  ">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>

          <SeeButton
            toProduct="/speakers/zx9-speaker"
            styles="bg-customBlack hover:brightness-200"
          />
        </div>
      </article>

      <article className="home-product__second  ">
        <h3 className="home-product__title text-[26px] lg:text-[30px]">zx7 speaker</h3>
        <SeeButton
          toProduct="/speakers/zx7-speaker"
          styles="button-transparent"
        />
      </article>

      <article className=" home-product__third ">
        
        <img
          className="home-img__earphones tablet:hidden"
          src={images.homeImages.earphonesMobile}
          alt="Earphone img"
        />
        <img
          className="home-img__earphones hidden tablet:block md:hidden"
          src={images.homeImages.earphonesTablet}
          alt="Earphone img"
        />
        <img
          className="home-img__earphones hidden md:block"
          src={images.homeImages.earphonesDesktop}
          alt="Earphone img"
        />

        <div className="bg-[#25242413]  rounded-md flex flex-col  py-10 text-left px-6 tablet:w-full tablet:items-start tablet:justify-center sm:pl-10 lg:pl-20 xl:pl-28  ">
          <h3 className=" home-product__title text-[26px] lg:text-[30px] ">yx1 earphones</h3>

          <SeeButton
            toProduct="/earphones/yx1-earphones"
            styles="button-transparent"
          />
        </div>
      </article>
    </div>
  );
};
