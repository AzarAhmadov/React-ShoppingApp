import React, { memo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProductItem = ({ item, selectedCart, exisitingCart }) => {
  const { title, image, price, category } = item;

  return (
    <div className="overflow-hidden transition-shadow duration-300 ease-in-out border rounded-lg shadow-md hover:shadow-lg">
      <figure className="flex justify-center bg-gray-100">
        <LazyLoadImage
          className="w-full h-[200px] object-contain p-3"
          effect="blur"
          src={image}
          alt={title}
        />
      </figure>
      <div className="flex flex-col justify-between p-4">
        <div className="mb-4">
          <h3 className="mb-2 text-lg font-semibold text-gray-700 line-clamp-1">
            {title}
          </h3>
          <span className="text-xl font-bold text-green-600">${price}</span>
        </div>
        <p className="mb-4">
          Category: <strong>{category}</strong>
        </p>
        <button
          disabled={exisitingCart(item)}
          onClick={() => selectedCart(item)}
          className="w-full py-2 text-white transition duration-300 bg-black rounded-lg disabled:opacity-50 hover:bg-blue-700"
        >
          {exisitingCart(item) ? "Added to your cart" : "Add to cart"}
        </button>
      </div>
    </div>
  );
};

export default memo(ProductItem);
