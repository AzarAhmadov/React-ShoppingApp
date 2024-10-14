import React, { useEffect, useState } from "react";
import { getLogin } from "../../../service/authService";
import { getCartContext } from "../../../context/CartContext";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/ui/Button";
import FormGroup from "../../../components/FormGroup/FormGroup";
import FormInput from "../../../components/FormInput/FormInput";

const Login = () => {
  const { token, setToken } = getCartContext();
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const isFormEmpty =
    formData.username.trim() === "" || formData.password.trim() === "";

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value.trim(),
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
          <FormGroup label="Username">
            <FormInput
              handleInputChange={handleInputChange}
              value={formData.username}
              name="username"
              placeholder="Enter a username"
              type="text"
              info="username: mor_2314"
            />
          </FormGroup>

          <FormGroup label="Password">
            <FormInput
              handleInputChange={handleInputChange}
              value={formData.password}
              name="password"
              placeholder="Enter a password"
              type="password"
              info="password: 83r5^_"
            />
          </FormGroup>
          {error && (
            <span className="flex justify-center mb-4 text-red-600">
              Username or password incorrect
            </span>
          )}
          <Button disabled={isFormEmpty} type="submit">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
