import "../styles/globals.css";
import "react-image-lightbox/style.css";
import SEO from "@/components/SEO";
import Layout from "@/components/Layout";
import { CartProvider } from "use-shopping-cart";
import getStripe from "../lib/stripe/getStripe";
import Meta from "@/components/Meta";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider mode="checkout-session" stripe={getStripe()} currency={"usd"}>
      <ThemeProvider attribute="class">
        <Layout>
          <Meta />
          <SEO title={process.env.siteTitle} />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CartProvider>
  );
}

export default MyApp;
