import React from 'react'
import Layout from './Layout'
import { imageBuilder } from 'lib/sanity'
import Image from 'next/image'
import Link from 'next/link'

export default function Galleries({ content, landingPage }) {
  const { artPieces } = landingPage[0]
  return (
    <Layout artPieces={artPieces}>
      <div className="pt-10 bg-white bg-opacity-95 min-h-screen grid grid-cols-4 gap-8 px-20 pb-20">
        {content.map((gallery) => (
          <Link
            key={gallery._id}
            href={`/${gallery.category}/${gallery.slug.current}`}
          >
            <div className="cursor-pointer">
              <Image
                src={imageBuilder(gallery.featureImage).url()}
                alt={`Gallery Image For ${gallery.title}`}
                width={700}
                height={700}
                objectFit="contain"
              />
              <p className="font-serif text-gray-800 tracking-widest  m-auto underline max-w-max">
                {gallery.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  )
}
