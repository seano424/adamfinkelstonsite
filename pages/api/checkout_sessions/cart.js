import Stripe from "stripe";
import { imageBuilder } from "../../../lib/sanity";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: "2020-03-02",
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Create Checkout Sessions from body params.
      let cartItems = Object.entries(req.body)
        .flat()
        .filter((c) => c._type !== undefined && c);
      const items_to_objects = cartItems.map((c) => {
        return {
          price_data: {
            currency: c.currency,
            product_data: {
              name: c.title ? c.title : "Adam Finkelston Artwork",
              images: [imageBuilder(c.asset).url()],
            },
            unit_amount: c.price,
          },
          quantity: c.quantity,
        };
      });
      // const session = await stripe.checkout.sessions.create({
      //   payment_method_types: ["card"],
      //   // TODO: replace line_items with your products here
      //   line_items: items_to_objects,
      //   mode: "payment",
      //   success_url: `${req.headers.origin}/?success=true&session_id={CHECKOUT_SESSION_ID}`,
      //   cancel_url: `${req.headers.origin}/?canceled=true`,
      // });
      const params = {
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        shipping_address_collection: {
          allowed_countries: ["US", "CA"],
        },
        //The validated cart items are inserted.
        line_items: items_to_objects,
        receipt_email: "jenny.rosen@example.com",
        success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}`,
      };
      const checkoutSession = await stripe.checkout.sessions.create(params);
      res.status(200).json(checkoutSession);
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
