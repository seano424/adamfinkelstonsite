import Image from "next/image";
import { useRouter } from "next/router";
import { imageBuilder } from "@/lib/sanity";

export default function ImageCard({ title, image, href }) {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-col relative h-80 mb-10 lg:h-96 w-full transform hover:scale-105 cursor-pointer transition-all duration-300 ease-linear group"
    >
      <h1 className="z-50 relative w-max mx-auto bottom-10 text-2xl font-black uppercase text-gray-300 group-hover:text-gray-700 transition-all duration-200 ease-linear">
        {title}
      </h1>
      <Image
        src={imageBuilder(image).url()}
        alt={"Photography by Adam Finkelston"}
        layout="responsive"
        objectFit="cover"
        objectPosition="center"
        priority={true}
        width={100}
        height={100}
        objectFit="cover"
      />
      {/* <img
        src={imageBuilder(image).url()}
        alt="Photo by Adam Finkelston"
        height="500px"
        width="500px"
      /> */}
    </div>
  );
}
