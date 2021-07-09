import { useEffect, useState } from "react";
import HorizontalImages from "./HorizontalImages";

export default function HorizontalScroll({ images }) {
  const [lastScrollTop, setLastScrolltop] = useState(0);
  const [wheelStop, setWheelStop] = useState(false);
  const [isGoingDown, setIsGoingDown] = useState(false);
  const [delta, setDelta] = useState(0);
  const [dimensions, setDimensions] = useState(0);
  const [state, setState] = useState(false);

  useEffect(() => {
    isGoingDown ? setState(true) : setState(false);
  }, [wheelStop]);

  useEffect(() => {
    if (window.innerWidth > 832) {
      window.addEventListener("wheel", handleWheel, { passive: false });
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [dimensions]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollDownResizeImage);
  }, [delta]);

  useEffect(() => {
    createWheelStopListener(window, function () {
      setWheelStop(true);
    });
  }, []);

  useEffect(() => {});
  function createWheelStopListener(element, callback, timeout) {
    var handle = null;
    var onScroll = function () {
      if (handle) {
        clearTimeout(handle);
      }
      handle = setTimeout(callback, timeout || 200); // default 200 ms
    };
    element.addEventListener("wheel", onScroll);
    return function () {
      element.removeEventListener("wheel", onScroll);
    };
  }

  const handleScrollDownResizeImage = (e) => {
    let st = window.pageYOffset;
    if (st > lastScrollTop) {
      setIsGoingDown(true); //downscroll
    } else {
      setIsGoingDown(false); //upscroll
    }
    setLastScrolltop(st || document.documentElement.scrollTop);
  };

  function createWheelStopListener(element, callback, timeout) {
    var handle = null;
    var onScroll = function () {
      if (handle) {
        clearTimeout(handle);
      }
      handle = setTimeout(callback, timeout || 200); // default 200 ms
    };
    element.addEventListener("wheel", onScroll);
    return function () {
      element.removeEventListener("wheel", onScroll);
    };
  }

  const handleWheel = (e) => {
    setWheelStop(false);
    if (!e.deltaY) {
      return;
    }
    if (dimensions > 832) {
      e.currentTarget.scrollLeft += e.deltaY + e.deltaX;
      e.preventDefault();
    }
  };

  const handleResize = () => {
    setDimensions(window.innerWidth);
  };

  return (
    <main
      onWheel={(e) =>
        setDelta((e.currentTarget.scrollLeft += e.deltaY + e.deltaX))
      }
      className="hidden md:flex mt-6 flex-1 overflow-y-hidden gap-x-10 md:h-screen pt-28 lg:pt-0"
    >
      <HorizontalImages images={images} state={state} />
    </main>
  );
}
