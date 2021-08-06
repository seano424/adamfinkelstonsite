import { CartProvider } from "use-shopping-cart";

export default function Cart({ children }) {
  return (
    <CartProvider mode="checkout-session" currency={"usd"}>
      {children}
    </CartProvider>
  );
}
