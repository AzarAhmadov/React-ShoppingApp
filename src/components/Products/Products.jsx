import React from "react";
import ProductItem from "../ProductItem/ProductItem";
import { useLocation } from "react-router-dom";
import { getCartContext } from "../../context/CartContext";
import useFetch from "../../hooks/useFetch";
import { toastMsg } from "../../helper/helper";
import Loading from "../ui/Loading";
import API from "../../api/api";

const Products = () => {
  const { search } = useLocation();
  const category = search.split("=")[1];
  const { cart, setCart } = getCartContext();

  const { data, loading } = useFetch(
    category
      ? `${import.meta.env.VITE_BASE_URL}/${API.category.replace("categories",category)}`
      : `${import.meta.env.VITE_BASE_URL}/${API.products}`,
    category
  );

  const selectedCart = (item) => {
    setCart((prevCart) => {
      if (!prevCart.find((cartItem) => cartItem.id === item.id)) {
        const updateCart = [...prevCart, item];
        localStorage.setItem("cart", JSON.stringify(updateCart));
        toastMsg("success", "Product added to basket");
        return updateCart;
      }
    });
  };

  if (loading) {
    return <Loading />;
  }

  const exisitingCart = (item) => {
    return cart.some((cartItem) => cartItem.id === item.id);
  };

  return (
    <div className="container px-3 py-5 mx-auto">
      <h3 className="text-center font-[500] text-[23px] md:text-[30px] mb-5">
        {category
          ? decodeURIComponent(category).replace(
              category[0],
              category[0].toUpperCase()
            )
          : "All Products"}
      </h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
        {data.map((item, index) => (
          <ProductItem
            exisitingCart={exisitingCart}
            selectedCart={selectedCart}
            item={item}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
