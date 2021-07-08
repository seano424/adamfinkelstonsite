import React from 'react'
import Link from 'next/link'

export default function LandingPageNav({ title }) {
  return (
    <nav className="tracking-wide text-gray-800 bg-white relative py-4 flex font-semibold text-xl justify-evenly">
      <Link href="/galleries">
        <a>{title}</a>
      </Link>
      <Link href="/about">
        <a>About The Artist</a>
      </Link>
      <Link href="/newsletter">
        <a>Contact The Artist</a>
      </Link>
      <Link href="/shop">
        <a>Shop</a>
      </Link>
    </nav>
  )
}
