import MainImageCard from "@/components/MainImageCard";
import { getAllArt } from "@/lib/api";
import { formatCurrencyString } from "use-shopping-cart";

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
    <main className="flex flex-col lg:flex-row mt-10 sm:mt-20 xl:mx-40 mx-10 dark:bg-white justify-center gap-10">
      <MainImageCard
        href={"/photographs"}
        title="View Photographs"
        image={randomPhoto.asset}
      />
      <MainImageCard
        href={"/prints"}
        title="View Prints"
        image={randomPrint.asset}
      />
    </main>
  );
}

export async function getStaticProps({ preview = false }) {
  const art = await getAllArt(preview);
  return {
    props: { preview, art },
    revalidate: 1,
  };
}
