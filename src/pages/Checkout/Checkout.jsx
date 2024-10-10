import React from "react";
import { getCartContext } from "../../context/CartContext";

const Checkout = () => {
  const { cart, totalPrice } = getCartContext();

  return (
    <div className="px-5">
      <div className="max-w-4xl p-6 mx-auto my-10 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 font-bold text-center text-gray-800 text-[20px] md:text-2xl">
          Checkout Summary
        </h2>

        <div className="grid gap-6 mb-6">
          {cart.length === 0 ? (
            <p className="text-lg text-center text-gray-600">
              Your cart is empty.
            </p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center pb-4 mb-4 border-b last:border-b-0"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-contain w-20 h-20 mr-4 rounded-lg"
                />
                <div className="flex-grow">
                  <h3 className="font-semibold text-gray-700 line-clamp-2 text-md md:text-lg">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="pt-4 border-t">
            <div className="flex items-center justify-between text-lg font-semibold text-gray-700">
              <span>Total Amount</span>
              <span className="text-green-600">${totalPrice()}</span>
            </div>
            <button className="w-full py-3 mt-6 text-white transition-colors duration-300 bg-black rounded-lg hover:bg-blue-700">
              Proceed to Payment
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
