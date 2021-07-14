import { getPhotographs } from "../../lib/api";
import ImageCard from "../../components/ImageCard";

export default function galleries({ art }) {
  return <ImageCard images={art} />;
}

export async function getStaticProps({ preview = false }) {
  const art = await getPhotographs(preview);

  return {
    props: { preview, art },
    revalidate: 1,
  };
}
