const STUDIO_REWRITE = {
  source: "/studio/:path*",
  destination:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3333/studio/:path*"
      : "/studio/index.html",
};

module.exports = {
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
  },
  rewrites: () => [STUDIO_REWRITE],
  images: {
    domains: ["cdn.sanity.io", "cdn.shopify.com"],
  },
  env: {
    siteTitle: "Adam Finkelston",
    siteDescription:
      "Artist website for Adam Finkelston who is an artist, publisher, and educator based in Prairie Village, KS. ",
    siteKeywords: "Prints Photography Prairie Village",
    siteUrl: "https://adamfinkelston.com",
    siteImagePreviewUrl: "/images/home-page.png",
    twitterHandle: "@finkelston",
  },
};
