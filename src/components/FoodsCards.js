import React from "react";

const FoodsCards = ({ children, description, imgFood }) => {
  return (
    <div className="rounded-xl relative">
      <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
        <p className="font-bold text-2xl px-4 pt-4">{children}</p>
        <p className="px-4">{description}</p>
        <button
          type=""
          className="py-1 px-5 ml-4 bottom-4 absolute bg-white border border-white text-black font-semibold"
        >
          Order Now
        </button>
      </div>
      <img
        src={imgFood}
        alt="foods produk"
        className="max-h-[160px] md:max-h-[200px] w-full rounded-xl"
      />
    </div>
  );
};

export default FoodsCards;
