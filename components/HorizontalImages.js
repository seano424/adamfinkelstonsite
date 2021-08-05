import { useState } from "react";
import { imageBuilder } from "../lib/sanity";

export default function HorizontalImages({ images, showImage }) {
  return (
    <section
      // Uncomment this if you want down scroll to also scroll right...
      onWheel={(e) => (e.currentTarget.scrollLeft += e.deltaY + e.deltaX)}
      className="flex-1 hidden lg:flex overflow-y-hidden dark:bg-white gap-x-10"
    >
      {images.map((image, idx) => (
        <div key={idx} className="min-w-max group">
          <div
            onClick={() => showImage(image)}
            className={`h-400 w-400 transition-all relative delay-700 duration-1000 ease-in-out cursor-pointer`}
          >
            {image !== undefined && (
              <img
                src={imageBuilder(image.asset).url()}
                alt="Adam Finkelston"
              />
            )}
          </div>
          {image.title && (
            <div className="flex opacity-10 relative shadow-lg text-gray-800 group-hover:opacity-100 transition-all duration-200 ease-linear text-sm px-8 py-1 justify-center w-72 bg-gray-100 gap-x-10 uppercase tracking-widest m-auto">
              <h1 className="italic">{image.title}</h1>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
