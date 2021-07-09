import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaShoppingCart, FaInstagramSquare } from "react-icons/fa";
import { TwitterShareButton, PinterestShareButton } from "react-share";
import { FacebookIcon, TwitterIcon, PinterestIcon } from "react-share";
import { useCartContext } from "@/context/Store";
import BackButton from "./BackButton";

export default function NavLinks() {
  const cart = useCartContext()[0];
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    let numItems = 0;
    cart.forEach((item) => {
      numItems += item.variantQuantity;
    });
    setCartItems(numItems);
  }, [cart]);

  const { pathname } = useRouter();
  const router = useRouter();
  const url = `https://fink.vercel.app${router.asPath}`;

  return (
    <article className="hidden w-8/12 justify-between xl:flex py-5 items-center text-gray-500">
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
      <div className="self-center flex gap-2">
        <a
          href="https://www.facebook.com/AdamFinkelstonPhotography"
          target="_blank"
        >
          <FacebookIcon round={true} size={30} />
        </a>
        <a href="https://www.instagram.com/adinfinitum138/" target="_blank">
          <FaInstagramSquare round={true} size={30} color={"tomato"} />
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
          <a className="relative self-center" aria-label="cart">
            <FaShoppingCart className="w-6 h-5 m-auto" />
            {cartItems === 0 ? null : (
              <div className="absolute top-0 right-0 text-xs bg-yellow-300 text-gray-900 font-semibold rounded-full py-1 px-2 transform translate-x-10 -translate-y-3">
                {cartItems}
              </div>
            )}
          </a>
        </Link>
      </div>
    </article>
  );
}
