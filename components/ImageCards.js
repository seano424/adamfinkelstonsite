import React from "react";
import VerticalScroll from "./VerticalScroll";
import HorizontalScroll from "./HorizontalScroll";

export default function ImageCards({ images, title }) {
  return (
    <>
      <HorizontalScroll images={images} />
      <VerticalScroll title={title} images={images} />
    </>
  );
}
