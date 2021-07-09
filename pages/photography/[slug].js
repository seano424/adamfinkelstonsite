import { getAllArtworkWithSlug, getGallery } from "lib/api";
import ImageCards from "@/components/ImageCards";

export default function Prints({ gallery }) {
  const { artPieces, title } = gallery.results[0];
  return <ImageCards title={title} images={artPieces} />;
}

export async function getStaticProps({ params, preview = false }) {
  const gallery = await getGallery(params.slug, preview);
  return {
    props: { preview, gallery },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const allArtwork = await getAllArtworkWithSlug();
  return {
    paths:
      allArtwork?.map((art) => ({
        params: {
          slug: art.slug,
        },
      })) || [],
    fallback: false,
  };
}
