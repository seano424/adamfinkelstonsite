import SEO from '@/components/SEO'
import PageTitle from '@/components/PageTitle'
import CartTable from '@/components/CartTable'
import CheckOutButton from '@/components/CheckOutButton'
import BackToProductButton from '@/components/BackToProductButton'
import { useCartContext } from '@/context/Store'
import Layout from '@/components/Layout'
import { getAllArt } from '../lib/api'

export default function CartPage({ art }) {
  const pageTitle = `Cart | ${process.env.siteTitle}`
  const [cart, checkoutUrl] = useCartContext()
  const photographs = art.filter((art) => art.category === 'photographs')
  const prints = art.filter((art) => art.category === 'prints')

  return (
    <Layout prints={prints} photographs={photographs}>
      <div className="container mx-auto mb-20 min-h-screen">
        <SEO title={pageTitle} />
        <PageTitle text="Your Cart" />
        <CartTable cart={cart} />
        <div className="max-w-sm mx-auto space-y-4 px-2">
          <CheckOutButton webUrl={checkoutUrl} />
          <BackToProductButton />
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const art = await getAllArt(preview)
  return {
    props: { preview, art },
    revalidate: 1,
  }
}
