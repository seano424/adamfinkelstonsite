import { getProductSlugs, getProduct } from '@/lib/shopify'
import ProductSection from '@/components/ProductSection'
import { getAllArtworkWithSlug, getGallery, getAllArt } from 'lib/api'
import Layout from '@/components/Layout'

function ProductPage({ productData, art }) {
  const photographs = art.filter((art) => art.category === 'photographs')
  const prints = art.filter((art) => art.category === 'prints')
  return (
    <Layout photographs={photographs} prints={prints}>
      <div className="min-h-screen py-12 sm:pt-20">
        <ProductSection productData={productData} />
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const productSlugs = await getProductSlugs()

  const paths = productSlugs.map((slug) => {
    const product = String(slug.node.handle)
    return {
      params: { product },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const productData = await getProduct(params.product)
  const art = await getAllArt(params)
  return {
    props: {
      productData,
      art,
    },
  }
}

export default ProductPage
