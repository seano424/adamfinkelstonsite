import { FaArrowLeft } from 'react-icons/fa'
import Link from 'next/link'

function BackToProductButton() {
  return (
    <Link href="/products" passHref>
      <a
        aria-label="back-to-products"
        className="border border-palette-primary text-palette-primary text-lg font-primary font-semibold pt-2 pb-1 leading-relaxed flex 
      justify-center items-center focus:ring-1 focus:ring-palette-light focus:outline-none w-full hover:bg-palette-lighter rounded-sm"
      >
        <FaArrowLeft className="w-4 mr-2 inline-flex" />
        Back To All Products
      </a>
    </Link>
  )
}

export default BackToProductButton
