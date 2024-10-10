import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Hero = () => {
  const { data } = useFetch("https://fakestoreapi.com/products/categories");

  const navigate = useNavigate();
  const location = decodeURIComponent(useLocation().search.split("=")[1]);

  const handleCategoryClick = (category) => {
    navigate(`?category=${category}`);
  };

  return (
    <section className="relative h-[250px] md:h-[300px] grid place-items-center bg-cover bg-no-repeat bg-center text-white bg-[url('https://images.pexels.com/photos/1634278/pexels-photo-1634278.jpeg?auto=compress&cs=tinysrgb&w=2000')]">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="z-10">
        <h3 className="text-center text-[30px] md:text-[40px]"> Sale Store </h3>
        <ul className="flex mt-6 md:mt-10 gap-x-4">
          {data.map((item, index) => (
            <li
              onClick={() => handleCategoryClick(item)}
              key={index}
              className={`${
                item === location && "!bg-[#000] text-white"
              } bg-white hover:scale-105 transition-all cursor-pointer text-center border border-dashed size-[75px] md:size-[100px] text-[11px] md:text-sm rounded-full text-black grid place-items-center`}
            >
              {item.replace(item[0], item[0].toUpperCase())}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
