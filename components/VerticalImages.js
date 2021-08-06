import { imageBuilder } from "../lib/sanity";
import BackButton from "./BackButton";
import Image from "next/image";

export default function VerticalImages({ images, title, showImage }) {
  return (
    <section className="lg:hidden flex flex-col">
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
  );
}
