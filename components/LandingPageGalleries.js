import Image from "next/image";
import { imageBuilder } from "lib/sanity";

export default function LandingPageGalleries({ art }) {
  return (
    <div className="grid grid-cols-4 gap-16 px-10 py-10">
      {art.map((a) => (
        <div key={a._id}>
          <Image
            src={imageBuilder(a.featureImage).url()}
            alt={`Adam Finkelston - ${a.title}`}
            width={500}
            height={500}
            priority
          />
          <p className="ml-16 italic font-bold text-sm tracking-widest">
            {a.title}
          </p>
        </div>
      ))}
    </div>
  );
}
