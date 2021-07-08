import Meta from '../components/Meta'
import Navbar from './Navbar'

export default function Layout({ children, artPieces, photographs, prints }) {
  return (
    <>
      <Meta />
      <section
        className={`flex overflow-y-scroll bg-white text-gray-700 text-sm justify-around dark:text-white`}
      >
        <Navbar photographs={photographs} prints={prints} />
      </section>
      <section className="pt-32 md:pt-0 relative md:static">{children}</section>
    </>
  )
}

//flex-col min-h-screen
