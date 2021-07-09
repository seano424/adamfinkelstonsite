import { imageBuilder } from "@/lib/sanity";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";

export default function HorizontalImages({ images, state }) {
  console.log(images);
  const { addItem, removeItem } = useShoppingCart();
  return (
    <>
      {images.map((image, idx) => (
        <div key={idx} className="min-w-max">
          <div className="cursor-pointer">
            {image !== undefined && image.asset && (
              <img
                className={`${
                  state ? "h-600" : "h-400"
                } transition-all delay-700 duration-1000 ease-in-out`}
                src={imageBuilder(image.asset).url()}
                alt="Adam Finkelston"
              />
            )}
            <div className="flex text-sm relative shadow-2xl px-8 py-1 justify-center w-80 bg-gray-100 gap-x-10 uppercase tracking-widest m-auto">
              <h1 className="italic">{image.title}</h1>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
