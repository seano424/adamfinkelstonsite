import { useState } from 'react'
import Link from 'next/link'
import { FaCaretDown } from 'react-icons/fa'

export default function Tab({ links }) {
  const [openTab, setOpenTab] = useState(false)
  return (
    <div
      onMouseOver={() => setOpenTab(true)}
      onMouseLeave={() => setOpenTab(false)}
      className="flex flex-col cursor-pointer group"
    >
      {links && (
        <div className="mt-4 uppercase flex items-center gap-1">
          {links[0].category} <FaCaretDown />
        </div>
      )}
      <div
        className={`${
          openTab ? 'opacity-100' : 'opacity-0 h-0'
        } transition-all duration-300 ease-linear absolute top-40 z-50 bg-gray-100 font-semibold w-52 py-8 px-4 text-lg text-gray-900 flex flex-col`}
      >
        {links &&
          links.map((item) => (
            <Link
              key={item._id}
              href={`/${item.category}/${item.slug.current}`}
            >
              <a className="hover:text-gray-400 py-1">{item.title}</a>
            </Link>
          ))}
      </div>
    </div>
  )
}
