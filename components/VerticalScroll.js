import React from "react";
import Image from "next/image";
import Link from "next/link";
import { imageBuilder } from "../lib/sanity";

export default function VerticalScroll({ images, title }) {
  return (
    <section className="md:hidden flex flex-col my-10">
      <article className="pb-10 flex gap-4 justify-between mx-10">
        <h1 className="font-bold uppercase tracking-wider">{title}</h1>
        <div className="flex gap-4">
          <Link href={`/galleries`}>
            <a className="underline">Back to Galleries</a>
          </Link>
        </div>
      </article>
      <article className="grid grid-cols-3 gap-4">
        {images.map((a) => (
          <div key={a._key}>
            <Image
              src={imageBuilder(a.asset).url()}
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
