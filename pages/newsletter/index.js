import React from "react";
import { getAllArt, getBackgroundImages } from "../../lib/api";
import Layout from "@/components/Layout";
import Newsletter from "@/components/Newsletter";
import BackgroundImages from "@/components/BackgroundImages";

export default function About({ art, content }) {
  const { artPieces } = content[0];
  const photographs = art.filter((art) => art.category === "photographs");
  const prints = art.filter((art) => art.category === "prints");
  return (
    <Layout photographs={photographs} prints={prints}>
      <main>
        <section className="z-20 relative flex justify-center pt-10 md:pt-20">
          <Newsletter />
        </section>
        <BackgroundImages artPieces={artPieces} />
      </main>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const art = await getAllArt(preview);
  const content = await getBackgroundImages(preview);
  return {
    props: { preview, art, content },
    revalidate: 1,
  };
}

{
}
