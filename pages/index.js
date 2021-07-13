import ImageCard from "@/components/ImageCard";
import { getAllArt } from "@/lib/api";
import { formatCurrencyString } from "use-shopping-cart";

export default function galleries({ art }) {
  const artPieces = art.map((a) => a.artPieces).flat();
  const artFiltered = artPieces.filter((art) => art.price);
  const artWithIds = artFiltered.map((art) => {
    return { ...art, id: art._key };
  });
  console.log(artWithIds);

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
  );
}

export async function getStaticProps({ preview = false }) {
  const art = await getAllArt(preview);
  return {
    props: { preview, art },
    revalidate: 1,
  };
}

// cartItems: {
//     '92f164b087b6': {
//       _key: '92f164b087b6',
//       _type: 'artPiece',
//       asset: {
//         _ref: 'image-285d2265f557fe7a44e31b3cbe9e2d446aa6a7a6-1000x1000-jpg',
//         _type: 'reference'
//       },
//       price: 500,
//       quantity: 1,
//       id: '92f164b087b6',
//       value: 500,
//       formattedValue: '$5.00'
//     },
//     '0706c11471e2': {
//       _key: '0706c11471e2',
//       _type: 'artPiece',
//       asset: {
//         _ref: 'image-03837318740540fc21067a97f4c7f181deb15734-1000x1000-jpg',
//         _type: 'reference'
//       },
//       price: 800,
//       quantity: 1,
//       id: '0706c11471e2',
//       value: 800,
//       formattedValue: '$8.00'
//     }
//   }

//   props: [
//     {
//       '92f164b087b6': {
//         _key: '92f164b087b6',
//         _type: 'artPiece',
//         asset: [Object],
//         price: 500,
//         quantity: 1,
//         id: '92f164b087b6',
//         value: 500,
//         formattedValue: '$5.00'
//       },
//       '0706c11471e2': {
//         _key: '0706c11471e2',
//         _type: 'artPiece',
//         asset: [Object],
//         price: 800,
//         quantity: 1,
//         id: '0706c11471e2',
//         value: 800,
//         formattedValue: '$8.00'
//       }
//     },
//     {
//       '92f164b087b6': {
//         _key: '92f164b087b6',
//         _type: 'artPiece',
//         asset: [Object],
//         price: 500,
//         quantity: 1,
//         id: '92f164b087b6',
//         value: 500,
//         formattedValue: '$5.00'
//       },
//       '0706c11471e2': {
//         _key: '0706c11471e2',
//         _type: 'artPiece',
//         asset: [Object],
//         price: 800,
//         quantity: 1,
//         id: '0706c11471e2',
//         value: 800,
//         formattedValue: '$8.00'
//       }
//     }
//   ]
