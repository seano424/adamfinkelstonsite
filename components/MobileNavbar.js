import Link from "next/link";

export default function MobileNavbar({ open, toggle }) {
  return (
    <>
      {open && (
        <div
          className={`fixed w-full top-20 left-0 ${
            open ? "h-screen" : "h-0"
          } transition-all duration-200 ease-linear z-20`}
        >
          <div
            className={`flex flex-col mt-20 sm:mt-20 md:mt-32 lg:mt-0 items-center justify-center gap-y-7 w-full h-0 ${
              open ? "h-500 sm:h-500 md:h-800 lg:h-full" : "h-0"
            } rounded-full lg:rounded bg-gray-200 bg-opacity-90  transition-all duration-500 ease-linear border-2`}
          >
            <Link href="/">
              <a
                onClick={toggle}
                className="text-2xl font-bold tracking-widest uppercase hover:opacity-60 hover:text-red-600 transition-all duration-75 ease-linear"
              >
                Home
              </a>
            </Link>
            <Link href="/prints">
              <a
                onClick={toggle}
                className="text-2xl font-bold tracking-widest uppercase hover:opacity-60 hover:text-red-600 transition-all duration-75 ease-linear"
              >
                Prints
              </a>
            </Link>
            <Link href="/photography">
              <a
                onClick={toggle}
                className="text-2xl font-bold tracking-widest uppercase hover:opacity-60 hover:text-red-600 transition-all duration-75 ease-linear"
              >
                Photography
              </a>
            </Link>

            <Link href="/about">
              <a
                onClick={toggle}
                className="text-2xl font-bold tracking-widest uppercase hover:opacity-60 hover:text-red-600 transition-all duration-75 ease-linear"
              >
                About the artist
              </a>
            </Link>
            <Link href="/contact">
              <a
                onClick={toggle}
                className="text-2xl font-bold tracking-widest uppercase hover:opacity-60 hover:text-red-600 transition-all duration-75 ease-linear"
              >
                Contact the artist
              </a>
            </Link>
            <Link href="/newsletter">
              <a
                onClick={toggle}
                className="text-2xl font-bold tracking-widest uppercase hover:opacity-60 hover:text-red-600 transition-all duration-75 ease-linear"
              >
                Newsletter
              </a>
            </Link>
            <Link href="/cart">
              <a
                onClick={toggle}
                className="text-2xl font-bold tracking-widest uppercase hover:opacity-60 hover:text-red-600 transition-all duration-75 ease-linear"
              >
                Cart
              </a>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
