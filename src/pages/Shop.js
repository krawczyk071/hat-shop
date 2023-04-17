import React from "react";

import Reviews from "../components/Reviews";
import ProdReviews from "../components/ProdReviews";
import Filter from "../components/Filter";
import { nbaFilter } from "../utils/constants";
const Shop = () => {
  return (
    <>
      <div className="cards">
        <div className="cards__box">cards</div>
      </div>
      <Reviews />
      <ProdReviews id={4044026} />
      <Filter data={nbaFilter} />
    </>
  );
};

export default Shop;
