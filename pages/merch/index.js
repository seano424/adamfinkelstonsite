import React from "react";
import Products from "../../components/Products";
import client from "../../lib/sanity";
import { merchQuery, getAllArt } from "../../lib/api";

export default function index({ products, art }) {
  const artPieces = art.map((a) => a.artPieces).flat();
  const artFiltered = artPieces.filter((art) => art.price);
  const artWithIds = artFiltered.map((art) => {
    return { ...art, id: art._key };
  });
  return (
    <main className="mx-40">
      <Products products={artWithIds} />
    </main>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const products = await client.fetch(merchQuery);
  const art = await getAllArt(preview);

  return {
    props: {
      products,
      art,
    },
  };
}
