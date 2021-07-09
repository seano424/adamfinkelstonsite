import { getPrints } from "../../lib/api";
import ImageCard from "../../components/ImageCard";

export default function galleries({ art }) {
  return (
    <main className="grid grid-cols-2 xl:grid-cols-3 my-20 xl:mx-40 mx-10 justify-center gap-10">
      {art.map(
        (a) =>
          a.featureImage.asset && (
            <ImageCard
              key={a._id}
              href={`/prints/${a.slug.current}`}
              title={a.title}
              image={a.featureImage.asset}
            />
          )
      )}
    </main>
  );
}

export async function getStaticProps({ preview = false }) {
  const art = await getPrints(preview);

  return {
    props: { preview, art },
    revalidate: 1,
  };
}
