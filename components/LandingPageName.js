import React from 'react'
import Link from 'next/link'

export default function LandingPageName({ color, name }) {
  const nameStyle = {
    color: color,
  }

  return (
    <Link href="/galleries">
      <a
        style={nameStyle}
        className="hover:opacity-70 cursor-pointer absolute text-4xl tracking-widest font-black -top-full md:-top-52 md:mt-32 uppercase pl-20 py-5 w-full"
      >
        {name}
      </a>
    </Link>
  )
}
