import Link from "next/link";

export default function MobileNavbar({ open, toggle }) {
  return (
    <>
      {open && (
        <div
          className={`fixed bg-white bg-opacity-80 w-full h-full pt-16 top-0 left-0 transition-all duration-200 ease-linear z-30`}
        >
          <div
            className={`flex flex-col items-center justify-center gap-y-7 w-full h-0 ${
              open ? "h-400 sm:h-500 md:h-800 lg:h-full" : "h-0"
            } rounded-full lg:rounded bg-gray-200 bg-opacity-90  transition-all duration-500 ease-linear border-2`}
          >
            <Link href="/">
              <a
                onClick={toggle}
                className="text-xl font-bold tracking-widest uppercase hover:opacity-60 hover:text-red-600 transition-all duration-75 ease-linear"
              >
                Home
              </a>
            </Link>
            <Link href="/prints">
              <a
                onClick={toggle}
                className="text-xl font-bold tracking-widest uppercase hover:opacity-60 hover:text-red-600 transition-all duration-75 ease-linear"
              >
                Prints
              </a>
            </Link>
            <Link href="/photographs">
              <a
                onClick={toggle}
                className="text-xl font-bold tracking-widest uppercase hover:opacity-60 hover:text-red-600 transition-all duration-75 ease-linear"
              >
                Photography
              </a>
            </Link>

            <Link href="/about">
              <a
                onClick={toggle}
                className="text-xl font-bold tracking-widest uppercase hover:opacity-60 hover:text-red-600 transition-all duration-75 ease-linear"
              >
                About the artist
              </a>
            </Link>
            <Link href="/contact">
              <a
                onClick={toggle}
                className="text-xl font-bold tracking-widest uppercase hover:opacity-60 hover:text-red-600 transition-all duration-75 ease-linear"
              >
                Contact the artist
              </a>
            </Link>
            <Link href="/newsletter">
              <a
                onClick={toggle}
                className="text-xl font-bold tracking-widest uppercase hover:opacity-60 hover:text-red-600 transition-all duration-75 ease-linear"
              >
                Newsletter
              </a>
            </Link>
            <Link href="/cart">
              <a
                onClick={toggle}
                className="text-xl font-bold tracking-widest uppercase hover:opacity-60 hover:text-red-600 transition-all duration-75 ease-linear"
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
