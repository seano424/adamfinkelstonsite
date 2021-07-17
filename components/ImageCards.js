import { useEffect, useState } from "react";
import { imageBuilder } from "@/lib/sanity";
import Lightbox from "./Lightbox";
import BackButton from "./BackButton";
import HorizontalImages from "@/components/HorizontalImages";
import VerticalImages from "@/components/VerticalImages";

export default function ImageCards({ images, title }) {
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  const [imageToShow, setImageToShow] = useState("");
  const [mainImage, setMainImage] = useState(images[0].asset);

  const showImage = (image) => {
    setMainImage(image.asset);
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  return (
    <>
      {lightboxDisplay ? (
        <Lightbox
          images={images}
          mainImage={mainImage}
          setMainImage={setMainImage}
          imageToShow={imageToShow}
          setImageToShow={setImageToShow}
          lightboxDisplay={lightboxDisplay}
          setLightBoxDisplay={setLightBoxDisplay}
        />
      ) : (
        <>
          <HorizontalImages images={images} showImage={showImage} />
          <VerticalImages images={images} title={title} showImage={showImage} />
        </>
      )}
    </>
  );
}
