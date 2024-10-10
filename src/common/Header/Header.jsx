import React from "react";
import { CiShop } from "react-icons/ci";
import { FaShoppingBasket } from "react-icons/fa";
import { getCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { getLogout } from "../../service/authService";
import Button from "../../components/ui/Button";

const Header = () => {
  const { cart, isShow, setIsShow, token } = getCartContext();

  return (
    <header className="px-3 py-5 border-b">
      <div className="container flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-x-2 text-[#000000] text-xl"
        >
          <CiShop className="text-[30px]" /> Sale App
        </Link>
        <div className="flex items-center gap-x-5">
          <div className="relative cursor-pointer">
            {token && (
              <FaShoppingBasket
                className="text-[30px]"
                onClick={() => setIsShow(!isShow)}
              />
            )}

            {token && cart.length > 0 && (
              <span className="absolute -top-[10px] -right-[10px] text-sm rounded-full bg-black text-white size-[20px] grid place-items-center">
                {cart.length}
              </span>
            )}
          </div>
          {token ? (
            <button
              onClick={() => getLogout()}
              className="flex items-center px-4 py-2 text-white bg-black rounded-full gap-x-2"
            >
              Logout
              <CiLogout />
            </button>
          ) : (
            <Button to="login" type="button">
              Login
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
