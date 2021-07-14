import React, { useState, useEffect } from "react";
import { imageBuilder } from "@/lib/sanity";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";
import Image from "next/image";

export default function Lightbox({
  images,
  lightboxDisplay,
  setLightBoxDisplay,
}) {
  const [mainImage, setMainImage] = useState(images[0].asset);
  const [imageToShow, setImageToShow] = useState("");
  const [isAdded, setIsAdded] = useState(false);
  const { addItem, removeItem } = useShoppingCart();

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

  const handleUserKeyPress = (event) => {
    const { key } = event;
    lightboxDisplay && key === "ArrowRight" && showNext(event);
    lightboxDisplay && key === "ArrowLeft" && showPrev(event);
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
  const addToCart = (e, product) => {
    e.stopPropagation();

    const item = {
      ...product,
      id: product._key,
    };
    setIsAdded(true);
    addItem(item);
  };

  return (
    <div
      id="lightbox"
      onClick={hideLightBox}
      className="z-50 xl:fixed top-0 left-0 w-full lg:h-full bg-black flex flex-col xl:flex-row items-center justify-between"
    >
      <button className="text-white ml-10" onClick={showPrev}>
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

      {imageToShow.price && (
        <div className="text-white ">
          <h2 className="uppercase text-center pb-10 text-3xl font-thin">
            Artwork for Sale
          </h2>
          <h3 className="uppercase text-xl">{imageToShow.title}</h3>
          <p className=" w-96 py-1">{imageToShow.description}</p>
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
        </div>
      )}
      <button className="text-white mr-10" onClick={showNext}>
        →
      </button>
    </div>
  );
}
