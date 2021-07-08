import Link from "next/link";
import Image from "next/image";
import { imageBuilder } from "@/lib/sanity";
import { getAllArt } from "@/lib/api";
import Layout from "@/components/Layout";

export default function galleries({ art }) {
  const photographs = art
    .filter((art) => art.category === "photographs")
    .map((item) => item.artPieces)
    .flat();
  const prints = art
    .filter((art) => art.category === "prints")
    .map((item) => item.artPieces)
    .flat();
  const randomPhoto =
    photographs[Math.floor(Math.random() * photographs.length)];
  const randomPrint = prints[Math.floor(Math.random() * prints.length)];

  return (
    <Layout>
      <main className="flex my-20 xl:mx-40 mx-10 justify-center gap-10">
        <div className="flex flex-col relative h-96 w-full transform hover:scale-105 cursor-pointer transition-all duration-300 ease-linear group">
          <h1 className="z-50 relative mx-auto bottom-10 text-2xl font-black uppercase text-gray-300 group-hover:text-gray-700 transition-all duration-200 ease-linear">
            View Photography
          </h1>
          <Image
            src={imageBuilder(randomPhoto.asset).url()}
            alt={"Photography by Adam Finkelston"}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>

        <div className="flex flex-col relative h-96 w-full transform hover:scale-105 cursor-pointer transition-all duration-300 ease-linear group">
          <h1 className="z-50 relative mx-auto bottom-10 text-2xl font-black uppercase text-gray-300 group-hover:text-gray-700 transition-all duration-200 ease-linear">
            View Prints
          </h1>
          <Image
            src={imageBuilder(randomPrint.asset).url()}
            alt={"Prints by Adam Finkelston"}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const art = await getAllArt(preview);
  return {
    props: { preview, art },
    revalidate: 1,
  };
}
