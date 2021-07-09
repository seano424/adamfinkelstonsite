import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";
import urlFor from "../lib/sanity/urlFor";
const Products = ({ products }) => {
  const { addItem, removeItem } = useShoppingCart();
  return (
    <section>
      {products.map((product) => (
        <div key={product.id}>
          <img src={urlFor(product.image).width(200)} alt={product.name} />
          <h2>{product.name}</h2>
          <p>
            {formatCurrencyString({
              value: product.price,
              currency: "usd",
            })}
          </p>
          <button onClick={() => addItem(product)}>Add to cart</button>
          <button onClick={() => removeItem(product.id)}>Remove</button>
        </div>
      ))}
    </section>
  );
};

export default Products;
