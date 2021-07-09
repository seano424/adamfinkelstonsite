import React from "react";
import { getBackgroundImages } from "../../lib/api";
import Newsletter from "@/components/Newsletter";
import BackgroundImages from "@/components/BackgroundImages";

export default function About({ content }) {
  const { artPieces } = content[0];
  return (
    <main>
      <section className="z-20 relative flex justify-center pt-10 md:pt-20">
        <Newsletter />
      </section>
      <BackgroundImages artPieces={artPieces} />
    </main>
  );
}

export async function getStaticProps({ preview = false }) {
  const content = await getBackgroundImages(preview);
  return {
    props: { preview, content },
    revalidate: 1,
  };
}

{
}
