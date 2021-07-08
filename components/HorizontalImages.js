import Link from "next/link";
import Image from "next/image";
import { imageBuilder } from "@/lib/sanity";
import { useEffect, useState } from "react";

export default function HorizontalImages({
  images,
  handleLightbox,
  isGoingDown,
  setDelta,
  wheelStop,
}) {
  const [state, setState] = useState(false);
  useEffect(() => {
    isGoingDown ? setState(true) : setState(false);
  }, [wheelStop]);

  return (
    <main
      // Uncomment this if you want down scroll to also scroll right...
      onWheel={(e) =>
        setDelta((e.currentTarget.scrollLeft += e.deltaY + e.deltaX))
      }
      className="flex-1 overflow-y-hidden flex gap-x-10 md:h-screen pt-28 lg:pt-0"
    >
      {images.map((image, idx) => (
        <div key={idx} className="min-w-max">
          <div onClick={() => handleLightbox(idx)} className="cursor-pointer">
            {image !== undefined && image.asset && (
              <img
                className={`${
                  state ? "h-600" : "h-400"
                } transition-all delay-700 duration-1000 ease-in-out`}
                src={imageBuilder(image.asset).url()}
                alt="Adam Finkelston"
              />
            )}
            <div className="flex text-sm relative shadow-2xl px-8 py-1 justify-center w-80 bg-gray-100 gap-x-10 uppercase tracking-widest m-auto">
              <h1 className="italic">{image.title}</h1>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
