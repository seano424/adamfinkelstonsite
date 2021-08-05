import { useState } from "react";
import { useRouter } from "next/router";
import Hamburger from "./Hamburger";
import NavLinks from "./NavLinks";
import MobileNavbar from "./MobileNavbar";

export default function Navbar({ prints, photographs }) {
  const { pathname } = useRouter();
  const [open, setOpen] = useState(false);
  const isSetToGoBack =
    pathname.includes("/photography") || pathname.includes("/prints");
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <section
      className={`flex fixed ${
        open ? "" : "md:static bg-white md:bg-opacity-95"
      } xl:flex-col items-center xl:mb-0 justify-between z-50  w-screen gap-4`}
    >
      <NavLinks />
      <Hamburger toggle={toggle} open={open} />
      <MobileNavbar open={open} toggle={toggle} />
    </section>
  );
}
