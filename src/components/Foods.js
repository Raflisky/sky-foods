import React, { useState } from "react";
import { data } from "./data/data.js";

const Foods = () => {
  const [foods, setFoods] = useState(data);
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };
  console.log(data);
  return (
    <div className="max-w-[1640px] m-auto px-5 py-12">
      <h1 className="text-4xl font-bold text-center text-orange-600">
        Top Rated Menu Items
      </h1>

      <div className="">
        <p className="font-bold text-gray-700">Filter Type</p>
        <div className="flex justify-between flex-wrap py-5 max-w-[500px]">
          <button
            onClick={() => setFoods(data)}
            className="text-orange-600 transition-all border-orange-600 hover:bg-orange-600 hover:text-white"
          >
            All
          </button>
          <button
            onClick={() => filterType("burger")}
            className="text-orange-600 transition-all border-orange-600 hover:bg-orange-600 hover:text-white"
          >
            Burgers
          </button>
          <button
            onClick={() => filterType("pizza")}
            className="text-orange-600 transition-all border-orange-600 hover:bg-orange-600 hover:text-white"
          >
            Pizza
          </button>
          <button
            onClick={() => filterType("salad")}
            className="text-orange-600 transition-all border-orange-600 hover:bg-orange-600 hover:text-white"
          >
            Salads
          </button>
          <button
            onClick={() => filterType("chicken")}
            className="text-orange-600 transition-all border-orange-600 hover:bg-orange-600 hover:text-white"
          >
            Chicken
          </button>
        </div>
      </div>
      <div>
        <p className="font-bold text-gray-700">Filter Price</p>
        <div className="py-5 flex justify-between max-w-[300px] w-full">
          <button
            onClick={() => filterPrice("$")}
            className="text-orange-600 transition-all border-orange-600 hover:bg-orange-600 hover:text-white"
          >
            $
          </button>
          <button
            onClick={() => filterPrice("$$")}
            className="text-orange-600 transition-all border-orange-600 hover:bg-orange-600 hover:text-white"
          >
            $$
          </button>
          <button
            onClick={() => filterPrice("$$$")}
            className="text-orange-600 transition-all border-orange-600 hover:bg-orange-600 hover:text-white"
          >
            $$$
          </button>
          <button
            onClick={() => filterPrice("$$$$")}
            className="text-orange-600 transition-all border-orange-600 hover:bg-orange-600 hover:text-white"
          >
            $$$$
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 pt-4 lg:grid-cols-4">
        {foods.map((item, index) => (
          <div
            key={index}
            className="duration-300 border rounded-lg shadow-lg hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="px-2 py-1 text-white bg-orange-600 rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Foods;
