import React from 'react'
import { getPhotographs, getAllArt, getLandingPage } from '../../lib/api'
import HorizontalScroll from '@/components/HorizontalScroll'
import Layout from '@/components/Layout'

export default function galleries({ content, allArt, landingPage }) {
  const images = content.map((c) => c.featureImage)
  const titles = content.map((c) => c.title)
  const photographs = allArt.filter((art) => art.category === 'photographs')
  const prints = allArt.filter((art) => art.category === 'prints')
  const artPieces = landingPage[0].artPieces.map((art) => art.asset)

  return (
    <Layout artPieces={artPieces} prints={prints} photographs={photographs}>
      <main>
        <HorizontalScroll content={content} images={images} titles={titles} />
      </main>
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const content = await getPhotographs(preview)
  const allArt = await getAllArt(preview)
  const landingPage = await getLandingPage(preview)
  return {
    props: { preview, content, allArt, landingPage },
    revalidate: 1,
  }
}
