import { useContext } from "react";
import { Link } from "react-router-dom";
import { CommerceContext } from "../../context/CommerceContext";
import { Logo } from "../shared/Logo";
import { images } from "../images/Images";

export const Footer = () => {
  const { navItems, footerText, scrollTotop } = useContext(CommerceContext);

  return (
    <footer className="footer">
      <div className=" space-y-10 flex flex-col items-center">
        <Logo />
        <div className="footer__nav-items">
          {navItems.map((item: string, i: number) => {
            return (
              <li className="menu-item" key={item}>
                {i === 0 ? (
                  <Link onClick={() => scrollTotop("smooth")} to="/">
                    {item}
                  </Link>
                ) : (
                  <Link onClick={() => scrollTotop("auto")} to={`/${item}`}>
                    {item}
                  </Link>
                )}
              </li>
            );
          })}
        </div>
        <div className="text text-center tablet:px-12 md:max-w-[650px] lg:max-w-none lg:text-[18px] lg:tracking-[1px] lg:px-0 xl:text-justify">
          {footerText}
        </div>
      </div>

      <div className="text-textGray text-center lg:text-[18px]">
       Just a demo.
      </div>

      <div className="flex text-center items-center gap-5 lg:gap-12">
        {images.socialIcons.map((icon, i) => {
          return (
            <img
              className="hover:cursor-pointer lg:w-8 "
              src={icon.src}
              alt="icon"
              key={i}
            />
          );
        })}
      </div>
    </footer>
  );
};
