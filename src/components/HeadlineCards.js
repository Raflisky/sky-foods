import React from "react";
import FoodsCards from "./FoodsCards";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-5 py-12 grid md:grid-cols-3 gap-6">
      <FoodsCards
        children="Fast foods"
        description="Harga mulai dari 15K"
        imgFood="/food-1.jpeg"
      />
      <FoodsCards
        children="Desserts"
        description="Harga mulai dari 20K"
        imgFood="/food-2.jpeg"
      />
      <FoodsCards
        children="Drinks"
        description="Harga mulai dari 12K"
        imgFood="/food-5.webp"
      />
    </div>
  );
};

export default HeadlineCards;
