import { FaHeart } from 'react-icons'

function Footer() {
  return (
    <footer className="py-4 flex justify-center font-primary items-center">
      Built with <FaHeart className="w-5 text-red-600 mx-1" /> by{' '}
      <a
        href="https://twitter.com/deepwhitman"
        target="_blank"
        rel="noreferrer"
        className="text-palette-primary font-bold px-1"
      >
        Bilal Tahir
      </a>
    </footer>
  )
}

export default Footer
