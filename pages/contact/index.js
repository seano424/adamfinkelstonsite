import React from "react";
import { getContactPage } from "../../lib/api";
import Info from "@/components/Info";

export default function About({ info }) {
  const blockContent = info[0].body;
  return (
    <main className="mt-20">
      <Info title={"About the Artist"} blockContent={blockContent} />
    </main>
  );
}

export async function getStaticProps({ preview = false }) {
  const info = await getContactPage(preview);
  return {
    props: { preview, info },
    revalidate: 1,
  };
}
