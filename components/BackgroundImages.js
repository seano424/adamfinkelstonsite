import React, { useEffect, useState } from 'react'
import { imageBuilder } from 'lib/sanity'
import Image from 'next/image'

export default function LandingPageImages({ artPieces }) {
  const [image, setImage] = useState([artPieces[2]])
  const random = Math.floor(Math.random() * artPieces.length)

  useEffect(() => {
    random > 1
      ? setImage([artPieces[random]])
      : setImage([artPieces[0], artPieces[1]])
  }, [])

  return (
    <article>
      {image.length < 2 ? (
        <div className="sm:absolute h-screen w-full top-0 z-10">
          <Image
            src={imageBuilder(image[0]).url()}
            alt="Adam Finkelston's landing page image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      ) : (
        <div className="flex">
          <div className="h-screen w-1/2 absolute top-0 z-0">
            <Image
              alt="Adam Finkelston"
              src={imageBuilder(image[1]).url()}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
          <div className="h-screen w-1/2 absolute top-0 right-0 z-0">
            <Image
              alt="Adam Finkelston"
              src={imageBuilder(image[0]).url()}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
        </div>
      )}
    </article>
  )
}
