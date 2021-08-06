import "../styles/globals.css";
import "react-image-lightbox/style.css";
import SEO from "@/components/SEO";
import Layout from "@/components/Layout";
import { CartProvider } from "use-shopping-cart";
import Meta from "@/components/Meta";
import { ThemeProvider } from "next-themes";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { PAYPAL_CLIENT_ID } from "../utils/constants";

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider mode="checkout-session" currency={"usd"}>
      <ThemeProvider attribute="class">
        <PayPalScriptProvider
          options={{ "client-id": PAYPAL_CLIENT_ID.clientId }}
        >
          <Layout>
            <Meta />
            <SEO title={process.env.siteTitle} />
            <Component {...pageProps} />
          </Layout>
        </PayPalScriptProvider>
      </ThemeProvider>
    </CartProvider>
  );
}

export default MyApp;
