import React from 'react'
import { getAllArt } from '@/lib/api'
import Layout from '@/components/Layout'
import HorizontalScroll from '@/components/HorizontalScroll'
import Link from 'next/link'
import Image from 'next/image'
import { imageBuilder } from '@/lib/sanity'

export default function galleries({ content }) {
  const images = content.map((c) => c.featureImage)
  const titles = content.map((c) => c.title)
  const photographs = content.filter((art) => art.category === 'photographs')
  const prints = content.filter((art) => art.category === 'prints')
  return (
    <Layout photographs={photographs} prints={prints}>
      <section className="mt-10 md:pt-0 lg:flex hidden">
        <HorizontalScroll content={content} images={images} titles={titles} />
      </section>
      <section className="lg:hidden flex flex-col my-10">
        <article className="grid grid-cols-2 gap-4">
          {images.map((image, idx) => (
            <Link
              key={idx}
              href={`/${content[idx].category}/${content[idx].slug.current}`}
            >
              <a>
                <div
                  className={`flex relative shadow-2xl px-8 justify-center w-min lg:w-max bg-gray-100 uppercase tracking-widest m-auto`}
                >
                  <h1 className="italic">{titles[idx]}</h1>
                </div>
                <Image
                  src={imageBuilder(image.asset).url()}
                  alt={`Adam Finkelston`}
                  width={500}
                  height={500}
                />
              </a>
            </Link>
          ))}
        </article>
      </section>
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const content = await getAllArt(preview)
  return {
    props: { preview, content },
    revalidate: 1,
  }
}
