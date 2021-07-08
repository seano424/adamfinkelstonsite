import React from 'react'
import Link from 'next/link'

export default function NavLogo() {
  return (
    <Link href="/">
      <a className="text-3xl text-gray-900 font-black uppercase ">
        Adam Finkelston
      </a>
    </Link>
  )
}
