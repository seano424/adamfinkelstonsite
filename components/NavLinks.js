import Link from "next/link";
import { useRouter } from "next/router";
import { FaShoppingCart, FaInstagramSquare } from "react-icons/fa";
import { useShoppingCart } from "use-shopping-cart";
import { TwitterShareButton, PinterestShareButton } from "react-share";
import { FacebookIcon, TwitterIcon, PinterestIcon } from "react-share";
import BackButton from "./BackButton";

export default function NavLinks() {
  const { cartCount } = useShoppingCart();
  const { pathname } = useRouter();
  const router = useRouter();
  const url = `https://fink.vercel.app${router.asPath}`;

  return (
    <nav className="hidden z-50 xl:flex w-full flex-col items-center text-gray-500 pt-10">
      <article>
        <Link href="/">
          <a className="text-3xl flex items-center gap-2 text-gray-900 font-black uppercase ">
            Adam Finkelston
            <span className="hidden lg:block relative text-3xl font-medium text-gray-300 tracking-wider text-center">
              {pathname.includes("/prints") && "/ Prints"}
              {pathname.includes("/photographs") && "/ Photography"}
            </span>
          </a>
        </Link>
      </article>
      <article className="flex py-8 w-8/12 justify-between gap-6 items-center">
        <BackButton />
        <Link href="/">
          <a
            className={`uppercase pl-4 my-4 transition-all duration-100 ease-linear hover:text-gray-900 hover:scale-110 transform hover:underline ${
              pathname === "/" && "text-design-1 underline"
            }`}
          >
            Home
          </a>
        </Link>
        <Link href="/newsletter">
          <a
            className={`uppercase pl-4 my-4 transition-all duration-100 ease-linear hover:text-gray-900 hover:scale-110 transform hover:underline ${
              pathname === "/newsletter" && "text-design-1 underline"
            }`}
          >
            newsletter
          </a>
        </Link>
        <Link href="/about">
          <a
            className={`uppercase pl-4 my-4 transition-all duration-100 ease-linear hover:text-gray-900 hover:scale-110 transform hover:underline ${
              pathname === "/about" && "text-design-1 underline"
            }`}
          >
            about
          </a>
        </Link>

        <Link href="/contact">
          <a
            className={`uppercase pl-4 my-4 transition-all duration-100 ease-linear hover:text-gray-900 hover:scale-110 transform hover:underline ${
              pathname === "/contact" && "text-design-1 underline"
            }`}
          >
            contact
          </a>
        </Link>
        <div className="self-center flex gap-4">
          <a
            href="https://www.facebook.com/AdamFinkelstonPhotography"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon round={true} size={30} />
          </a>
          <a
            href="https://www.instagram.com/adinfinitum138/"
            rel="noreferrer"
            target="_blank"
          >
            <FaInstagramSquare size={30} color={"tomato"} />
          </a>

          <TwitterShareButton
            url={url}
            title={"Artwork by Adam Finkelston"}
            image={url}
            children={<TwitterIcon round={true} size={30} />}
          />

          <PinterestShareButton
            url={url}
            description={"Artwork by Adam Finkelston"}
            media={"https://i.imgur.com/KKB4IHq.png"}
            children={<PinterestIcon round={true} size={30} />}
          />
          <Link href="/cart" passHref>
            <a
              suppressHydrationWarning={true}
              className="relative self-center"
              aria-label="cart"
              passhref="true"
            >
              <FaShoppingCart className="w-6 h-5 m-auto" passhref="true" />
              {cartCount === 0 ? null : (
                <div
                  aria-label="cart"
                  className="absolute top-0 right-0 text-xs bg-yellow-300 text-gray-900 font-semibold rounded-full py-1 px-2 transform translate-x-10 -translate-y-3"
                >
                  {cartCount}
                </div>
              )}
            </a>
          </Link>
        </div>
      </article>
    </nav>
  );
}
