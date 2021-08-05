import { useState, useEffect } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";
import { fetchPostJSON } from "../utils/apiHelpers";
import { imageBuilder } from "@/lib/sanity";
import { FaTimes, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function CartSummary() {
  //setting up some React states for our cart
  const [succeeded, setSucceeded] = useState(false);
  const [paypalErrorMessage, setPaypalErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);
  const [billingDetails, setBillingDetails] = useState("");

  const [loading, setLoading] = useState(false);
  const [cartEmpty, setCartEmpty] = useState(true);
  // destructuring all the building blocks we get from use-shopping-cart
  const {
    formattedTotalPrice,
    cartCount,
    cartDetails,
    clearCart,
    incrementItem,
    decrementItem,
    removeItem,
    totalPrice,
  } = useShoppingCart();

  //sets our cartEmpty state with cart data
  useEffect(() => setCartEmpty(!cartCount), [cartCount]);
  const delay = 3;
  useEffect(() => {
    let timer1 = setTimeout(() => setSucceeded(false), delay * 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, [succeeded]);

  const entries = [];
  for (const key in cartDetails) {
    const entry = cartDetails[key];
    entries.push(entry);
  }

  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: {
              value: totalPrice,
            },
          },
        ],
        // remove the applicaiton_context object if you need your users to add a shipping address
        // application_context: {
        //   shipping_preference: "NO_SHIPPING",
        // },
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  };

  const onApprove = (data, actions) => {
    return actions.order
      .capture()
      .then(function (details) {
        const { payer } = details;
        setBillingDetails(payer);
        setSucceeded(true);
        clearCart();
        setCartEmpty(true);
      })
      .catch((err) => setPaypalErrorMessage("Something went wrong."));
  };

  const updateItem = (quantity, value, id) => {
    value > quantity && incrementItem(id);
    value < quantity && decrementItem(id);
  };

  return (
    <>
      {succeeded && (
        <div className="h-96 w-full py-10 absolute flex flex-col items-center text-3xl backdrop-filter backdrop-grayscale backdrop-blur z-50 gap-8">
          {/* <h1>Thanks Sean</h1> */}
          <h1>
            Thanks {billingDetails.name.given_name}{" "}
            {billingDetails.name.surname}
          </h1>
          <p>We have received your order and it's on it's way!</p>
        </div>
      )}
      <div className="min-h-80 max-w-4xl my-4 sm:my-8 mx-auto w-full">
        <table className="mx-auto">
          <thead>
            <tr className="uppercase text-xs sm:text-sm text-palette-primary border-b border-palette-light">
              <th className="font-primary font-normal px-6 py-4">Product</th>
              <th className="font-primary font-normal px-6 py-4">
                Description
              </th>
              <th className="font-primary font-normal px-6 py-4">Quantity</th>
              <th className="font-primary font-normal px-6 py-4 hidden sm:table-cell">
                Price
              </th>
              <th className="font-primary font-normal px-6 py-4">Remove</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-palette-lighter">
            {entries.map((item) => (
              <tr
                key={item.id}
                className="text-sm sm:text-base text-gray-600 text-center"
              >
                <td className="font-primary font-medium px-4 sm:px-6 py-4 flex items-center">
                  <img
                    src={imageBuilder(item.asset).url()}
                    alt={
                      item.title
                        ? item.title
                        : "Artwork for sale by Adam Finkelston"
                    }
                    height={200}
                    width={200}
                    layout="responsive"
                    className={`inline-flex w-20 sm:w-full`}
                  />
                </td>
                <td className="font-primary font-medium px-4 sm:px-6 py-4">
                  {item.title && (
                    <h1 className="pt-1 flex-1 hover:text-palette-dark">
                      {item.title}, {item.description && item.description}
                    </h1>
                  )}
                </td>
                <td className="font-primary font-medium px-4 sm:px-6 py-4">
                  <input
                    type="number"
                    inputMode="numeric"
                    id="variant-quantity"
                    name="variant-quantity"
                    min="1"
                    step="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateItem(item.quantity, e.target.value, item.id)
                    }
                    className="text-gray-900 pl-1 py-1 form-input border bg-white dark:bg-white border-gray-300 w-16 rounded-sm focus:border-palette-light focus:ring-palette-light"
                  />
                </td>
                <td className="font-primary text-base font-light px-4 sm:px-6 py-4 hidden sm:table-cell">
                  <p className="text-lg">
                    {formatCurrencyString({
                      value: item.price * 100,
                      currency: "usd",
                    })}
                  </p>
                </td>
                <td className="font-primary font-medium px-4 sm:px-6 py-4">
                  <button
                    aria-label="delete-item"
                    className=""
                    onClick={() => removeItem(item.id)}
                  >
                    <FaTimes className="w-8 h-8 text-palette-primary border border-palette-primary p-1 hover:bg-palette-lighter" />
                  </button>
                </td>
              </tr>
            ))}
            {formattedTotalPrice === 0 ? null : (
              <tr className="text-center">
                <td></td>
                <td className="font-primary text-base text-gray-600 font-semibold uppercase px-4 sm:px-6 py-4">
                  Subtotal
                </td>
                <td className="font-primary text-lg text-palette-primary font-medium px-4 sm:px-6 py-4">
                  <span className="text-xl">
                    {formatCurrencyString({
                      value: totalPrice * 100,
                      currency: "usd",
                    })}
                  </span>
                </td>
                <td></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <section className="max-w-sm mx-auto space-y-4 px-2">
        {/* <form onSubmit={handleCheckout} className="border">
          <button
            className="bg-palette-primary text-white text-lg font-primary font-semibold pt-2 pb-1 leading-relaxed flex 
          justify-center items-center focus:ring-1 focus:ring-palette-light focus:outline-none w-full hover:bg-palette-dark rounded-sm"
            type="submit"
            disabled={cartEmpty || loading}
            >
            Checkout <div className="card-number"></div>
            <FaArrowRight className="w-4 ml-2 inline-flex" />
            </button>
          </form> */}

        <PayPalButtons
          style={{
            // color: "blue",
            // shape: "pill",
            label: "pay",
            tagline: false,
            layout: "horizontal",
          }}
          disabled={cartEmpty || loading}
          createOrder={createOrder}
          onApprove={onApprove}
        />

        <Link href="/" passHref>
          <a
            aria-label="back-to-products"
            className="border border-palette-primary text-palette-primary text-lg font-primary font-semibold pt-2 pb-1 leading-relaxed flex 
      justify-center items-center focus:ring-1 focus:ring-palette-light focus:outline-none w-full hover:bg-palette-lighter rounded-sm"
          >
            <FaArrowLeft className="w-4 mr-2 inline-flex" />
            Back To All Art
          </a>
        </Link>
      </section>
    </>
  );
}
