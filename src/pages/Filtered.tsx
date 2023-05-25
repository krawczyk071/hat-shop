import React from "react";
import Products from "../components/Products";

const Filtered = () => {
  return (
    <div className="winter">
      <Products query={`dimensionValueID=Silhouette:Beanie`} />
    </div>
  );
};

export default Filtered;
