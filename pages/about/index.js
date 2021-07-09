import React from "react";
import { getAboutPage } from "../../lib/api";
import Info from "@/components/Info";

export default function About({ info }) {
  const blockContent = info[0].body;
  const avatar = info[0].main_image.asset;
  return (
    <main className="mt-20">
      <Info
        title={"About the Artist"}
        avatar={avatar}
        blockContent={blockContent}
      />
    </main>
  );
}

export async function getStaticProps({ preview = false }) {
  const info = await getAboutPage(preview);
  return {
    props: { preview, info },
    revalidate: 1,
  };
}
