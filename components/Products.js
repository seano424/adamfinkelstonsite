import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";
import { urlFor, imageBuilder } from "../lib/sanity";
const Products = ({ products }) => {
  const { addItem, removeItem } = useShoppingCart();
  return (
    <section>
      {products.map((product) => (
        <div key={product.id}>
          <img src={imageBuilder(product.image).url()} alt={product.name} />
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
