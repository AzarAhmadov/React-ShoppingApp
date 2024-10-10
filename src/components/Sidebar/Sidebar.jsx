import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { getCartContext } from "../../context/CartContext";
import { toastMsg } from "../../helper/helper";

const Sidebar = () => {
  const { cart, setCart, isShow, setIsShow, totalPrice } = getCartContext();

  const removeItem = (index) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((_, i) => i !== index);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      toastMsg("success", "Product remove to basket");
      return updatedCart;
    });
  };

  return (
    <aside
      className={`fixed z-20 flex flex-col justify-between top-0 max-w-[350px] w-full right-0 h-screen bg-white border-l py-5 px-4 transform transition-transform duration-300 ease-in-out ${
        isShow ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div>
        <button
          onClick={() => setIsShow(!isShow)}
          className="flex items-center gap-x-1"
        >
          <MdKeyboardArrowLeft className="text-[25px]" />
          Shopping Cart
        </button>

        {cart.length > 0 ? (
          <ul className="max-h-[75vh] p-3 mt-2 space-y-3 overflow-auto">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between border"
              >
                <div className="flex items-center">
                  <img
                    className="size-[70px] object-contain p-2"
                    src={item.image}
                    alt={item.title}
                  />
                  <span className="text-[12px] line-clamp-2 me-3">
                    {item.title}
                  </span>
                </div>
                <div className="flex items-center gap-x-3 pe-2">
                  <strong>${item.price}</strong>
                  <button onClick={() => removeItem(index)}>
                    <IoCloseSharp />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-10 text-center">There is no product</p>
        )}
      </div>

      <div className="flex flex-col pt-3 border-t">
        <div>
          <strong>Total: </strong> ${totalPrice()}
        </div>
        <Link
          onClick={() => setIsShow(!isShow)}
          className="py-2 mt-2 text-center text-white bg-black rounded-lg"
          to={"/checkout"}
        >
          Checkout
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
