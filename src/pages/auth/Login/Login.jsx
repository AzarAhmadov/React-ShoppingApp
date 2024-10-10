import React, { useEffect, useState } from "react";
import { getLogin } from "../../../service/authService";
import { getCartContext } from "../../../context/CartContext";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/ui/Button";

const Login = () => {
  const { token, setToken } = getCartContext();
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await getLogin(formData, setToken, setError);
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div className="flex items-center px-5 justify-center h-[calc(100vh_-_130px)] bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-2xl font-bold text-center">Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="username"
            >
              Username
            </label>
            <input
              onChange={handleInputChange}
              value={formData.username}
              id="username"
              name="username"
              type="text"
              placeholder="Enter your username"
              className="w-full px-3 py-2 mb-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
            <small>Username : mor_2314</small>
          </div>

          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              onChange={handleInputChange}
              value={formData.password}
              name="password"
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 mb-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
            <small>Password : 83r5^_</small>
          </div>

          {error && (
            <p className="mb-3 text-sm text-center text-red-500">
              username or password in incorrect
            </p>
          )}
          <div className="flex items-center justify-between">
            <Button type="submit">Login</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
