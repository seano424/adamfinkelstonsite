import { getPrints, getAllArt } from '../../lib/api'
import HorizontalScroll from '@/components/HorizontalScroll'
import Layout from '@/components/Layout'

export default function galleries({ content, allArt }) {
  const images = content.map((c) => c.featureImage)
  const titles = content.map((c) => c.title)
  const photographs = allArt.filter((art) => art.category === 'photographs')
  const prints = allArt.filter((art) => art.category === 'prints')
  return (
    <Layout prints={prints} photographs={photographs}>
      <main className="mt-20">
        <HorizontalScroll content={content} images={images} titles={titles} />
      </main>
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const content = await getPrints(preview)
  const allArt = await getAllArt(preview)

  return {
    props: { preview, content, allArt },
    revalidate: 1,
  }
}
