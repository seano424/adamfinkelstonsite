import { useEffect, useState } from "react";
import Link from "next/link";
import { imageBuilder } from "@/lib/sanity";
import ToggleTheme from "./ToggleTheme";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";
import { useTheme } from "next-themes";

export default function Lightbox({
  imageToShow,
  mainImage,
  images,
  setLightBoxDisplay,
  lightboxDisplay,
  setMainImage,
  setImageToShow,
}) {
  const [isAdded, setIsAdded] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);
  const { addItem, removeItem } = useShoppingCart();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);

    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  });

  useEffect(() => {
    const timeoutID = window.setTimeout(() => {
      setIsAdded(false);
      setIsRemoved(false);
    }, 3000);

    return () => window.clearTimeout(timeoutID);
  }, [isAdded]);

  const handleUserKeyPress = (event) => {
    const { key } = event;
    lightboxDisplay && key === "ArrowRight" && showNext(event);
    lightboxDisplay && key === "ArrowLeft" && showPrev(event);
  };

  const showNext = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex >= images.length - 1) {
      setMainImage(images[0].asset);
      setImageToShow(images[0]);
    } else {
      let nextImage = images[currentIndex + 1];
      setMainImage(images[currentIndex + 1].asset);
      setImageToShow(nextImage);
    }
  };

  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setMainImage(images[images.length - 1].asset);
      setImageToShow(images[images.length - 1]);
    } else {
      let nextImage = images[currentIndex - 1];
      setMainImage(images[currentIndex - 1].asset);
      setImageToShow(nextImage);
    }
  };

  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  const handleChangeImage = (e, image) => {
    e.stopPropagation();
    setMainImage(image);
  };

  const addToCart = (e, product) => {
    e.stopPropagation();

    const item = {
      ...product,
      id: product._key,
    };
    setIsAdded(true);
    addItem(item);
  };

  const removeFromCart = (e, id) => {
    e.stopPropagation();
    setIsRemoved(true);
    removeItem(id);
  };

  return (
    <>
      {lightboxDisplay && (
        <div
          id="lightbox"
          onClick={hideLightBox}
          className="z-50 xl:fixed top-0 left-0 w-full lg:h-full bg-white dark:bg-black flex flex-col xl:flex-row items-center justify-between pt-12 lg:pg-0"
        >
          <div className="flex lg:hidden gap-4 mx-1">
            <button
              className="text-gray-900 dark:text-white ml-10 focus:outline-none"
              onClick={showPrev}
            >
              ←
            </button>
            <div className="flex flex-col gap-7">
              <img
                key={imageToShow._key}
                src={imageBuilder(mainImage).url()}
                alt="Adam Finkelston"
                // layout="fill"
                width={500}
                height={500}
              />
              {imageToShow.thumbnails && (
                <div className="flex gap-6">
                  {imageToShow.thumbnails.map((thumbs) => (
                    <div className="flex gap-6">
                      <img
                        onClick={(e) => handleChangeImage(e, thumbs.asset)}
                        key={imageToShow._key}
                        src={imageBuilder(thumbs.asset).url()}
                        alt="Adam Finkelston"
                        // layout="fill"
                        objectFit="contain"
                        width={50}
                        height={50}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
            <button
              className="text-gray-900 dark:text-white mr-10 focus:outline-none"
              onClick={showNext}
            >
              →
            </button>
          </div>

          <button
            className="text-gray-900 dark:text-white ml-10 hidden lg:flex focus:outline-none"
            onClick={showPrev}
          >
            ←
          </button>
          <div className="flex-col gap-7 hidden lg:flex">
            <img
              key={imageToShow._key}
              src={imageBuilder(mainImage).url()}
              alt="Adam Finkelston"
              // layout="fill"
              width={500}
              height={500}
            />
            {imageToShow.thumbnails && (
              <div className="flex gap-6">
                {imageToShow.thumbnails.map((thumbs) => (
                  <div className="flex gap-6">
                    <img
                      onClick={(e) => handleChangeImage(e, thumbs.asset)}
                      key={imageToShow._key}
                      src={imageBuilder(thumbs.asset).url()}
                      alt="Adam Finkelston"
                      // layout="fill"
                      objectFit="contain"
                      width={50}
                      height={50}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="text-white ">
            {imageToShow.price && (
              <h2 className="uppercase hidden lg:flex italic text-gray-900 dark:text-white font-thin">
                Item for Sale
              </h2>
            )}

            <div className="py-4">
              {imageToShow.title && (
                <h3 className="uppercase text-lg lg:text-xl text-gray-900 dark:text-white">
                  {imageToShow.title}
                </h3>
              )}
              {imageToShow.description && (
                <p className="w-96 py-1 text-gray-900 dark:text-white">
                  {imageToShow.description}
                </p>
              )}
            </div>
            <>
              {imageToShow.price && (
                <p className="text-gray-900 dark:text-white">
                  {formatCurrencyString({
                    value: imageToShow.price * 100,
                    currency: "usd",
                  })}
                </p>
              )}
              <div className="flex flex-col h-40 lg:h-28">
                {imageToShow.price && (
                  <>
                    <button
                      className={`w-80 mt-2 ${
                        isAdded &&
                        "bg-gradient-to-r from-palette-primary to-green-300"
                      } bg-palette-primary font-black rounded mb-2 p-2 tracking-wider transition-all duration-300 ease-linear`}
                      onClick={(e) => addToCart(e, imageToShow)}
                    >
                      {isAdded ? "Item added" : "Add to cart"}
                    </button>
                    <Link href="/cart">
                      <a className="w-80 text-center bg-blue-500 font-black tracking-wider rounded mb-2 p-2">
                        Go to cart
                      </a>
                    </Link>
                    <button
                      className="w-80 bg-pink-500 font-black tracking-wider rounded p-2"
                      // onClick={() => removeItem(imageToShow._key)}
                      onClick={(e) => removeFromCart(e, imageToShow._key)}
                    >
                      {isRemoved ? "Item removed" : "Remove from cart"}
                    </button>
                  </>
                )}

                <ToggleTheme />
              </div>
            </>
          </div>
          <button
            className="text-gray-900 hidden lg:flex dark:text-white mr-10 focus:outline-none"
            onClick={showNext}
          >
            →
          </button>
        </div>
      )}
    </>
  );
}
