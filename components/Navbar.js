import { useState } from "react";
import { useRouter } from "next/router";
import Hamburger from "./Hamburger";
import NavLinks from "./NavLinks";
import NavLogo from "./NavLogo";
import MobileNavbar from "./MobileNavbar";
import { AiOutlineLeft } from "react-icons/ai";
import BackButton from "./BackButton";

export default function Navbar({ prints, photographs }) {
  const { pathname } = useRouter();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [hoverBack, setHoverBack] = useState(false);
  const isSetToGoBack =
    pathname.includes("/photography") || pathname.includes("/prints");
  const toggle = () => {
    setOpen(!open);
  };
  const handleClick = (e) => {
    e.preventDefault();
    router.back();
  };

  return (
    <section
      className={`flex fixed ${
        open ? "" : "md:static bg-white md:bg-opacity-95"
      } xl:flex-col lg:pt-16 pt-10 items-center xl:mb-0 justify-between z-50  w-screen gap-4`}
    >
      <div className="z-50 mx-4 flex justify-between w-full items-center xl:flex-col">
        <NavLogo />
        <NavLinks
          isSetToGoBack={isSetToGoBack}
          prints={prints}
          photographs={photographs}
        />
        <Hamburger toggle={toggle} open={open} />
        <MobileNavbar open={open} toggle={toggle} />
      </div>
    </section>
  );
}
