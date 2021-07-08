import StoreHeading from '@/components/StoreHeading'
import ProductListings from '@/components/ProductListings'
import {
  getAllProductsInCollection,
  getAllSubscriptionsInCollection,
  getAllCollections,
} from '@/lib/shopify'
import { getAllArt } from '../../lib/api'
import Layout from '@/components/Layout'

function IndexPage({ products, art, subscriptions, collections }) {
  console.log('collections', collections)
  console.log('subscriptions', subscriptions)
  const photographs = art.filter((art) => art.category === 'photographs')
  const prints = art.filter((art) => art.category === 'prints')
  return (
    <Layout photographs={photographs} prints={prints}>
      <div className="mx-auto max-w-6xl">
        <StoreHeading />
        <ProductListings products={products} />
        {/* <StoreHeading /> */}
        {/* <ProductListings products={subscriptions} /> */}
      </div>
    </Layout>
  )
}

export async function getStaticProps({ preview }) {
  const products = await getAllProductsInCollection()
  const subscriptions = await getAllSubscriptionsInCollection()
  const collections = await getAllCollections()
  const art = await getAllArt(preview)
  return {
    props: {
      products,
      art,
      subscriptions,
      collections,
    },
  }
}

export default IndexPage
