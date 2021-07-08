import Link from 'next/link'

export default function MobileNavbar({ open, toggle }) {
  return (
    <>
      {open && (
        <div
          className={`fixed w-full top-0 left-0 ${
            open ? 'h-screen' : 'h-0'
          } transition-all duration-200 ease-linear z-20`}
        >
          <div
            className={`flex flex-col mt-32 sm:mt-20 md:mt-32 lg:mt-0 items-center justify-center gap-y-7 w-full h-0 ${
              open ? 'h-400 sm:h-500 md:h-800 lg:h-full' : 'h-0'
            } rounded-full lg:rounded bg-gray-200 bg-opacity-70  transition-all duration-500 ease-linear border-2`}
          >
            <Link href="/galleries">
              <a
                onClick={toggle}
                className="text-2xl font-bold tracking-widest uppercase hover:opacity-60 hover:text-red-600 transition-all duration-75 ease-linear"
              >
                Galleries
              </a>
            </Link>
            <Link href="/products">
              <a
                onClick={toggle}
                className="text-2xl font-bold tracking-widest uppercase hover:opacity-60 hover:text-red-600 transition-all duration-75 ease-linear"
              >
                Shop local
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
          </div>
        </div>
      )}
    </>
  )
}
