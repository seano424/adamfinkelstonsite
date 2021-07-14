import Image from "next/image";
import { useRouter } from "next/router";
import { imageBuilder } from "@/lib/sanity";

export default function ImageCard({ images, href }) {
  const router = useRouter();

  const handleClick = (e, slug) => {
    e.preventDefault();
    router.push(`/${images[0].category}/${slug}`);
  };

  return (
    <main className="grid lg:grid-cols-2 xl:grid-cols-3 my-20 xl:mx-40 mx-10 justify-center gap-10">
      {images.map(
        (image, idx) =>
          image.featureImage.asset && (
            <div
              onClick={(e) => handleClick(e, image.slug.current)}
              key={idx}
              className="flex flex-col relative h-64 mb-10 lg:h-96 w-full transform hover:scale-105 cursor-pointer transition-all duration-300 ease-linear group"
            >
              <h1 className="z-50 relative w-max mx-auto bottom-10 text-2xl font-black uppercase text-gray-300 group-hover:text-gray-700 transition-all duration-200 ease-linear">
                {image.title}
              </h1>
              <Image
                src={imageBuilder(image.featureImage.asset).url()}
                alt={"Photography by Adam Finkelston"}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          )
      )}
    </main>
  );
}
