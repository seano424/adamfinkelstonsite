import React from 'react'
import Head from 'next/head'

export default function Meta() {
  return (
    <Head>
      <title>
        Adam Finkelston - Photographer, art educator, publisher of The Hand
        Magazine.
      </title>
      <link rel="shortcut icon" href="/images/favicon.ico" />
      <meta charset="utf-8"></meta>
      <meta
        name="description"
        content="Adam Finkelston prints and photographs"
      ></meta>
      <meta
        property="og:title"
        content="Adam Finkelston - prints and photographs"
      />
      {/* <meta property="og:image" content="/images/home-image.png" /> */}
      <meta
        property="og:description"
        content="Adam Finkelston is an artist, publisher, and educator based in Prairie Village, KS. He has shown his art work in solo exhibitions in Kansas City, MO as well as group and juried exhibitions throughout the United States and internationally. Mr. Finkelston is also the owner, publisher and co-editor of the quarterly photography and printmaking magazine, The Hand Magazine: A Magazine For Reproduction-based Art. "
      />
      <meta
        property="og:site_name"
        content="Adam Finkelston - prints and photographs"
      />
    </Head>
  )
}
