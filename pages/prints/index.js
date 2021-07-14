import { getPrints } from "../../lib/api";
import ImageCard from "../../components/ImageCard";

export default function galleries({ art }) {
  console.log("art:", art);
  return <ImageCard images={art} />;
}

export async function getStaticProps({ preview = false }) {
  const art = await getPrints(preview);

  return {
    props: { preview, art },
    revalidate: 1,
  };
}
