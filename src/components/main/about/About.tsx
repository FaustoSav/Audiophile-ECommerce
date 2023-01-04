import { useContext } from "react";
import { CommerceContext } from "../../../context/CommerceContext";
import { images } from "../../images/Images";
export const About = () => {
  const { aboutText } = useContext(CommerceContext);
  return (
    <div className="mt-28 pb-10 md:max-w-[1100px] lg:flex lg:flex-row-reverse md:pb-20 ">
      <img
        className="rounded-md w-full tablet:hidden"
        src={images.aboutIMG.mobile}
        alt="About-img"
      />
      <img
        className="rounded-md w-full hidden tablet:block lg:hidden"
        src={images.aboutIMG.tablet}
        alt="About-img"
      />
      <img
        className="rounded-md w-1/2 hidden lg:block "
        src={images.aboutIMG.desktop}
        alt="About-img"
      />

      <article className="mt-8 flex flex-col items-center lg:justify-center">
        <h2 className="about-title">
          Bringing you the <span className="text-customOrgange">best</span> audio
          gear{" "}
        </h2>
        <p className=" text-center text-textGrayDark md:leading-7 tablet:px-5 lg:text-start  lg:pl-0 lg:pr-12  ">{aboutText}</p>
      </article>
    </div>
  );
};
