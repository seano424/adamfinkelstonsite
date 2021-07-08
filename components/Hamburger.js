import React from 'react'

export default function Hamburger({ toggle, open }) {
  return (
    <article
      onClick={toggle}
      className={`xl:hidden z-50 pr-10 md:pr-20 xl:pl-0 cursor-pointer flex flex-col justify-center ${
        open ? 'p-3' : 'p-3'
      }`}
    >
      <div
        className={`w-8 h-1 bg-gray-900 rounded-full transition-all duration-150 ease-linear relative ${
          open ? `transform rotate-45` : `transform rotate-0 mt-1`
        }`}
      />
      <div
        className={`w-8 h-1 bg-gray-900 rounded-full transition-all duration-150 ease-linear relative ${
          open
            ? `transform translate-x-5 opacity-0`
            : `transform translate-x-0 opacity-100 mt-1 `
        }`}
      />
      <div
        className={`w-8 h-1 bg-gray-900 rounded-full transition-all duration-150 ease-linear relative ${
          open ? `transform -rotate-45 -mt-2` : `transform rotate-0 mt-1`
        }`}
      />
    </article>
  )
}
