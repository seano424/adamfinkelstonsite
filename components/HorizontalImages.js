import Link from "next/link";
import Image from "next/image";
import { imageBuilder } from "@/lib/sanity";
import { useEffect, useState } from "react";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";

export default function HorizontalImages({
  images,
  isGoingDown,
  setDelta,
  wheelStop,
}) {
  const [state, setState] = useState(false);
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  const [imageToShow, setImageToShow] = useState("");
  const [isAdded, setIsAdded] = useState(false);
  const { addItem, removeItem } = useShoppingCart();
  const shoppingCart = useShoppingCart();

  console.log(shoppingCart);

  useEffect(() => {
    isGoingDown ? setState(true) : setState(false);
  }, [wheelStop]);

  const handleUserKeyPress = (event) => {
    const { key } = event;
    lightboxDisplay && key === "ArrowRight" && showNext(event);
    lightboxDisplay && key === "ArrowLeft" && showPrev(event);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);

    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  });

  useEffect(() => {
    const timeoutID = window.setTimeout(() => {
      setIsAdded(false);
    }, 3000);

    return () => window.clearTimeout(timeoutID);
  }, [isAdded]);

  const addToCart = (e, product) => {
    e.stopPropagation();

    const item = {
      ...product,
      id: product._key,
    };
    setIsAdded(true);
    addItem(item);
  };

  const showImage = (image) => {
    //set imageToShow to be the one that's been clicked on
    setImageToShow(image);
    //set lightbox visibility to true
    setLightBoxDisplay(true);
  };

  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  const showNext = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex >= images.length - 1) {
      setImageToShow(images[0]);
    } else {
      let nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setImageToShow(images[images.length - 1]);
    } else {
      let nextImage = images[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };

  return (
    <>
      {lightboxDisplay ? (
        <div
          id="lightbox"
          onClick={hideLightBox}
          className="z-50 fixed top-0 left-0 w-full h-full bg-black flex items-center justify-between"
        >
          <button className="text-white" onClick={showPrev}>
            ←
          </button>
          <Image
            key={imageToShow._key}
            src={imageBuilder(imageToShow.asset).url()}
            alt="Adam Finkelston"
            // layout="fill"
            width={500}
            height={500}
          />
          {imageToShow.price && (
            <div className="text-white">
              <p>
                {formatCurrencyString({
                  value: imageToShow.price,
                  currency: "usd",
                })}
              </p>
              <div className="flex flex-col h-28">
                {isAdded ? (
                  <>
                    <h1 className="w-80 font-black rounded mb-2 p-2 tracking-wider bg-gradient-to-r from-palette-primary  to-green-300 text-center">
                      Item added :)
                    </h1>
                  </>
                ) : (
                  <>
                    <button
                      className="w-80 bg-palette-primary font-black rounded mb-2 p-2 tracking-wider"
                      onClick={(e) => addToCart(e, imageToShow)}
                    >
                      Add to cart
                    </button>
                    <button
                      className="w-80 bg-pink-500 font-black tracking-wider rounded p-2"
                      onClick={() => removeItem(imageToShow._key)}
                    >
                      Remove from cart
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
          <button className="text-white" onClick={showNext}>
            →
          </button>
        </div>
      ) : (
        <main
          // Uncomment this if you want down scroll to also scroll right...
          onWheel={(e) =>
            setDelta((e.currentTarget.scrollLeft += e.deltaY + e.deltaX))
          }
          className="flex-1 overflow-y-hidden flex gap-x-10 md:h-screen pt-28 lg:pt-0"
        >
          {images.map((image, idx) => (
            <div key={idx} className="min-w-max">
              <div
                onClick={() => showImage(image)}
                className={`${
                  state ? "h-600 w-600" : "h-400 w-400"
                } transition-all relative delay-700 duration-1000 ease-in-out cursor-pointer`}
              >
                {image !== undefined && (
                  <Image
                    key={image._key}
                    src={imageBuilder(image.asset).url()}
                    alt="Adam Finkelston"
                    layout="fill"
                  />
                )}
                {image.title && (
                  <div className="flex text-sm relative top-full shadow-2xl px-8 py-1 justify-center w-80 bg-gray-100 gap-x-10 uppercase tracking-widest m-auto">
                    <h1 className="italic">{image.title}</h1>
                  </div>
                )}
              </div>
            </div>
          ))}
        </main>
      )}
    </>
  );
}
