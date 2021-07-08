import { useState } from "react";
import { useRouter } from "next/router";
import { AiOutlineLeft } from "react-icons/ai";

export default function BackButton() {
  const [hoverBack, setHoverBack] = useState(false);
  const { pathname } = useRouter();
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.back();
  };

  const isSetToGoBack =
    pathname.includes("/photography") || pathname.includes("/prints");

  return (
    <>
      {isSetToGoBack && (
        <div
          onMouseEnter={() => setHoverBack(true)}
          onMouseLeave={() => setHoverBack(false)}
          onClick={handleClick}
          className=" flex justify-center items-center rounded-3xl font-black tracking-wide bg-palette-primary text-white cursor-pointer px-4 py-2 w-24 h-10"
        >
          <AiOutlineLeft
            className={`text-xl ${
              hoverBack
                ? "opacity-100 translate-x-0"
                : "opacity-0  translate-x-12"
            } absolute transition-all transform duration-150 ease-linear`}
          />
          <span
            className={`absolute ${
              hoverBack ? "opacity-0" : "opacity-100"
            } transition-all duration-75 ease-linear`}
          >
            Go Back
          </span>
        </div>
      )}
    </>
  );
}
