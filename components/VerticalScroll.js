import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { imageBuilder } from "../lib/sanity";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";
import BackButton from "./BackButton";

export default function VerticalScroll({ images, title }) {
  const [state, setState] = useState(false);
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  const [imageToShow, setImageToShow] = useState("");
  const [isAdded, setIsAdded] = useState(false);
  const [mainImage, setMainImage] = useState(images[0].asset);
  const { addItem, removeItem } = useShoppingCart();

  // USEEFFECT
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

  // FUNCTIONS
  const handleUserKeyPress = (event) => {
    const { key } = event;
    lightboxDisplay && key === "ArrowRight" && showNext(event);
    lightboxDisplay && key === "ArrowLeft" && showPrev(event);
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
  const showImage = (image) => {
    //set imageToShow to be the one that's been clicked on
    setMainImage(image.asset);
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
  const handleChangeImage = (e, image) => {
    e.stopPropagation();
    setMainImage(image);
  };
  return (
    <>
      {lightboxDisplay ? (
        <section className="h-full bg-black">
          <div
            id="lightbox"
            onClick={hideLightBox}
            className="z-50 pt-20 flex flex-col items-center justify-between"
          >
            <div className="flex gap-4 mx-1">
              <button className="text-white" onClick={showPrev}>
                ←
              </button>
              <div className="flex flex-col gap-7">
                <Image
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
                        <Image
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
              <button className="text-white" onClick={showNext}>
                →
              </button>
            </div>

            <div className="text-white flex flex-col items-center">
              <h3 className="uppercase text-lg pt-8">{imageToShow.title}</h3>
              <p className="">{imageToShow.description}</p>
              {imageToShow.price && (
                <>
                  <p>
                    {formatCurrencyString({
                      value: imageToShow.price * 100,
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
                          className="w-80 mt-2 bg-palette-primary font-black rounded mb-2 p-2 tracking-wider"
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
                </>
              )}
            </div>
          </div>
        </section>
      ) : (
        <section className="lg:hidden flex flex-col my-10">
          <article className="pb-10 flex items-center gap-4 justify-between mx-8">
            <BackButton size="sm" />
            <h1 className="font-bold uppercase tracking-wider">{title}</h1>
          </article>
          <article className="grid grid-cols-3 gap-4">
            {images.map((a) => (
              <div key={a._key} onClick={() => showImage(a)}>
                <Image
                  src={imageBuilder(a.image ? a.image.asset : a.asset).url()}
                  alt={`${a.title} - Adam Finkelston`}
                  width={500}
                  height={500}
                />
              </div>
            ))}
          </article>
        </section>
      )}
    </>
  );
}
