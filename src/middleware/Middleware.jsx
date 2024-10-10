import { useEffect } from "react";
import { getCartContext } from "../context/CartContext";
import { useLocation, useNavigate } from "react-router-dom";

const Middleware = ({ children }) => {
  const { token } = getCartContext();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (token === null) {
      navigate("/login");
    }
  }, [token, pathname]);

  return children;
};

export default Middleware;
