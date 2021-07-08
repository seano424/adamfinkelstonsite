import ImageCard from "@/components/ImageCard";
import { getAllArt } from "@/lib/api";
import Layout from "@/components/Layout";

export default function galleries({ art }) {
  const photographs = art
    .filter((art) => art.category === "photographs")
    .map((item) => item.artPieces)
    .flat()
    .filter((photo) => photo.asset);
  const prints = art
    .filter((art) => art.category === "prints")
    .map((item) => item.artPieces)
    .flat()
    .filter((print) => print.asset);
  const randomPhoto =
    photographs[Math.floor(Math.random() * photographs.length)];
  const randomPrint = prints[Math.floor(Math.random() * prints.length)];

  return (
    <Layout>
      <main className="flex my-20 xl:mx-40 mx-10 justify-center gap-10">
        <ImageCard
          href={"/photography"}
          title="View Photography"
          image={randomPhoto.asset}
        />
        <ImageCard
          href={"/prints"}
          title="View Prints"
          image={randomPrint.asset}
        />
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
