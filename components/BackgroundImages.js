import React, { useEffect, useState } from 'react'
import { imageBuilder } from 'lib/sanity'
import Image from 'next/image'

export default function BackgroundImages({ artPieces }) {
  const [image, setImage] = useState([artPieces[0]])
  const random = Math.floor(Math.random() * artPieces.length)

  useEffect(() => {
    setImage([artPieces[random]])
  }, [])

  const imageStyle = {
    height: '100vw',
    width: '100vw',
    position: 'relative',
  }

  return (
    <article style={{ zIndex: 0 }} className="fixed top-0 z-0">
      <div style={imageStyle}>
        <Image
          src={imageBuilder(image[0]).url()}
          alt="Adam Finkelston's landing page image"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </article>
  )
}
