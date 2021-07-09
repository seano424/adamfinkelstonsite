import "../styles/globals.css";
import "react-image-lightbox/style.css";
import SEO from "@/components/SEO";
import Layout from "@/components/Layout";
import { CartProvider } from "use-shopping-cart";
import getStripe from "../lib/stripe/getStripe";
import Meta from "@/components/Meta";

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider mode="checkout-session" stripe={getStripe()} currency={"usd"}>
      <Layout>
        <Meta />
        <SEO title={process.env.siteTitle} />
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}

export default MyApp;
