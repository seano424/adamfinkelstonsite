import Head from 'next/head'

function SEO({ title }) {
  // customize meta properties
  // you can pass them as an argument like title in case you want to change for each page

  const description =
    'Artist website for Adam Finkelston who is an artist, publisher, and educator based in Prairie Village, KS.'
  const keywords = 'Prints Photography Prairie Village, Kansas.'
  const siteURL = 'https://adamfinkelston.com'
  const twitterHandle = '@finkelston'
  const imagePreview = `${siteURL}/images/home-page.png`

  return (
    <Head>
      <title>
        Adam Finkelston - Photographer, art educator, publisher of The Hand
        Magazine.
      </title>
      <link rel="shortcut icon" href="/images/favicon.ico" />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" key="twcard" />
      <meta name="twitter:creator" content={twitterHandle} key="twhandle" />

      {/* Open Graph */}
      <meta property="og:url" content={siteURL} key="ogurl" />
      <meta property="og:image" content={imagePreview} key="ogimage" />
      <meta property="og:site_name" content={siteURL} key="ogsitename" />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
      <title>{title}</title>

      <link rel="manifest" href="/manifest.json" />

      <link rel="apple-touch-icon" href="/apple-icon.png"></link>
      <meta name="theme-color" content="#EF4444" />
    </Head>
  )
}

export default SEO
