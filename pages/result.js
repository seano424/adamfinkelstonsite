import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import useSWR from "swr";
import PrintObject from "../components/PrintObject";
import { fetchGetJSON } from "../utils/apiHelpers";
import { useShoppingCart } from "use-shopping-cart";

const ResultPage = () => {
  const { clearCart } = useShoppingCart();
  const router = useRouter();

  useEffect(() => {
    clearCart();
  }, []);
  // Fetch CheckoutSession from static page via
  // https://nextjs.org/docs/basic-features/data-fetching#static-generation
  const { data, error } = useSWR(
    router.query.session_id
      ? `/api/checkout_sessions/${router.query.session_id}`
      : null,
    fetchGetJSON
  );

  if (error) {
    return <div>failed to load</div>;
  }

  return (
    <div className="mx-auto w-5/12 text-center flex flex-col gap-2 mt-20">
      <h1 className="font-black text-xl">Order confirmed!</h1>

      <h3 className="text-3xl font-black">
        Thank you, {data?.payment_intent.charges.data[0].billing_details.name}.
      </h3>
      <p>
        We've sent a confirmation email to{" "}
        {data?.payment_intent.charges.data[0].billing_details.email}
      </p>
      <hr />
      {/* <h2>Status: {data?.payment_intent?.status ?? "loading..."}</h2> */}
      {/* <h3>CheckoutSession response:</h3> */}
      {/* <PrintObject content={data ?? "loading..."} /> */}
      <Link href="/">
        <a className="bg-palette-primary hover:text-gray-50 hover:shadow-sm w-max mx-auto px-4 py-3 rounded text-white shadow">
          Back home
        </a>
      </Link>
    </div>
  );
};

export default ResultPage;
