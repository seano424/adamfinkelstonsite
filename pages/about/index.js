import React from 'react'
import { getAllArt, getAboutPage } from '../../lib/api'
import Layout from '@/components/Layout'
import Info from '@/components/Info'

export default function About({ art, info }) {
  const blockContent = info[0].body
  const avatar = info[0].main_image.asset
  const photographs = art.filter((art) => art.category === 'photographs')
  const prints = art.filter((art) => art.category === 'prints')
  return (
    <Layout photographs={photographs} prints={prints}>
      <main className="mt-20">
        <Info
          title={'About the Artist'}
          avatar={avatar}
          blockContent={blockContent}
        />
      </main>
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const art = await getAllArt(preview)
  const info = await getAboutPage(preview)
  return {
    props: { preview, art, info },
    revalidate: 1,
  }
}
