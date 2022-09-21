import { useEffect, useState } from "react";
//styles
import { StyledNav } from "./NavbarStyles";
import Image from "next/image";
//components
import LinkItems from "./LinkItems";
//functions
import { navLinks } from "../../helpers/boilerplate/functions";

type Props = {
  children: React.ReactNode;
};

const Navbar = ({ children }: Props) => {
  //menutoggler
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prev) => (prev = !prev));
  };

  //prevent scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <StyledNav>
        <nav className="container nav-wrapper">
          <div className="menu">
            <Image
              src="/assets/shared/tablet/icon-hamburger.svg"
              alt="hamburger"
              width={16}
              height={15}
              onClick={toggleMenu}
            />
          </div>

          <div className="logo">
            <Image
              src="/assets/shared/desktop/logo.svg"
              alt="logo"
              width={143}
              height={25}
            />
          </div>

          <div className="links">
            <ul>
              <LinkItems array={navLinks} />
            </ul>
          </div>

          <div className="cart">
            <Image
              src="/assets/shared/desktop/icon-cart.svg"
              alt="cart"
              width={23}
              height={20}
            />
          </div>
        </nav>
        {children}
        {open && (
          <div className="mobile-menu">
            <ul>
              <LinkItems array={navLinks} menuItems />
            </ul>
          </div>
        )}
      </StyledNav>
    </>
  );
};

export default Navbar;
