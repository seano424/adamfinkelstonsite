import '../styles/globals.css'
import 'react-image-lightbox/style.css'
import SEO from '@/components/SEO'
import Layout from '@/components/Layout'
import { CartProvider } from '@/context/Store'
import Meta from '@/components/Meta'

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Meta />
      <SEO title={process.env.siteTitle} />
      <Component {...pageProps} />
    </CartProvider>
  )
}

export default MyApp
