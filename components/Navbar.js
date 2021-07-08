import { useState } from 'react'
import Hamburger from './Hamburger'
import NavLinks from './NavLinks'
import NavLogo from './NavLogo'
import Link from 'next/link'
import MobileNavbar from './MobileNavbar'
import { imageBuilder } from 'lib/sanity'

export default function Navbar({ prints, photographs }) {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }

  return (
    <section
      className={`flex fixed ${
        open ? '' : 'md:static bg-white md:bg-opacity-95'
      } xl:flex-col lg:pt-16 pt-10 items-center xl:mb-0 justify-between z-50  w-screen gap-4`}
    >
      <div className="xl:self-center pl-10 md:pl-20 xl:pr-0 z-50">
        <NavLogo />
      </div>
      <nav className="flex items-center justify-between">
        <NavLinks prints={prints} photographs={photographs} />
        <Hamburger toggle={toggle} open={open} />
        <MobileNavbar open={open} toggle={toggle} />
      </nav>
    </section>
  )
}
