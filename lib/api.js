import client, { previewClient } from './sanity'

const getUniquePosts = (posts) => {
  const slugs = new Set()
  return posts.filter((post) => {
    if (slugs.has(post.slug)) {
      return false
    } else {
      slugs.add(post.slug)
      return true
    }
  })
}

const postFields = `
  _id,
  name,
  title,
  'date': publishedAt,
  excerpt,
  'slug': slug.current,
  'coverImage': mainImage,
  'author': author->{name, 'picture': image.asset->url},
`

const getClient = (preview) => (preview ? previewClient : client)

export async function getProducts(preview) {
  const results = await getClient(preview).fetch(
    `*[_type == "product" && defined(slug.current)]`
  )
  return results
}

export async function getAllArt(preview) {
  const results = await getClient(preview).fetch(
    `*[_type == "art"] | order(publishedAt desc)`
  )
  return results
}

export async function getLandingPage(preview) {
  const results = await getClient(preview).fetch(`*[_type == "landingPage"]`)
  return results
}

export async function getAboutPage(preview) {
  const results = await getClient(preview).fetch(`*[_type == "aboutPage"]`)
  return results
}

export async function getContactPage(preview) {
  const results = await getClient(preview).fetch(`*[_type == "contactPage"]`)
  return results
}

export async function getPrints(preview) {
  const results = await getClient(preview).fetch(
    `*[_type == "art" && category == 'prints']`
  )
  return results
}

export async function getPhotographs(preview) {
  const results = await getClient(preview).fetch(
    `*[_type == "art" && category == 'photographs']`
  )
  return results
}

export async function getGallery(slug, preview) {
  const results = await getClient(preview).fetch(
    `*[_type == "art" && slug.current == "${slug}"]`
  )
  return {
    results,
    slug,
  }
}

export async function getAllArtworkWithSlug() {
  const data = await client.fetch(`*[_type == "art"]{ 'slug': slug.current }`)
  return data
}
