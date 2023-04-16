import React from "react";

import Card from "../components/Card";
import Reviews from "../components/Reviews";
import ProdReviews from "../components/ProdReviews";
const Shop = () => {
  return (
    <>
      <div className="cards">
        <div className="cards__box">cards</div>
      </div>
      <Reviews />
      <ProdReviews id={4044026} />
    </>
  );
};

export default Shop;
