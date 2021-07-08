import React from 'react'
import { imageBuilder } from 'lib/sanity'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function HorizontalScroll({ titles, images, content }) {
  const [delta, setDelta] = useState(0)
  const [dimensions, setDimensions] = useState(0)

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    if (dimensions > 832) {
      window.addEventListener('wheel', handleWheel, { passive: false })
    } else {
      window.removeEventListener('wheel', handleWheel, { passive: false })
    }
  }, [dimensions])

  const handleWheel = (e) => {
    if (!e.deltaY) {
      return
    }
    if (dimensions > 832) {
      e.currentTarget.scrollLeft += e.deltaY + e.deltaX
      e.preventDefault()
    }
  }

  const handleResize = () => {
    setDimensions(window.innerWidth)
  }

  return (
    <main
      onWheel={(e) =>
        setDelta((e.currentTarget.scrollLeft += e.deltaY + e.deltaX))
      }
      className="flex-1 overflow-y-hidden flex pb-10"
    >
      {images.map((image, idx) => (
        <div key={idx} className="min-w-max">
          <Link href={`/${content[idx].category}/${content[idx].slug.current}`}>
            <a>
              <img
                style={{ height: '500px' }}
                key={image._key}
                src={imageBuilder(image.asset).url()}
                alt="Adam Finkelston"
                className=""
              />
              <div className="flex relative left-24 justify-between w-80 bg-gray-100 gap-10">
                <h1 className="italic">{titles[idx]}</h1>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </main>
  )
}
