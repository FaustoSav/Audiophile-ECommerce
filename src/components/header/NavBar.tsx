import { CartLogo } from "./cart/CartLogo";
import { CartBackground } from "./cart/CartBackground";
import { CartDisplay } from "./cart/CartDisplay";
import { Logo } from "../shared/Logo";
import { Menu } from "./Menu";

import { Modal } from "../shared/Modal";

export const NavBar = () => {
  return (
    

    <nav className="nav">
      <Modal/>
      <Logo />
      <Menu />
      <CartBackground />
      <CartDisplay />
      <CartLogo />
    </nav>
  

  );
};
