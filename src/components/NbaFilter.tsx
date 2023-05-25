import React from "react";
import Filter from "./Filter";
import { nbaFilter } from "../utils/constants";
import { Link } from "react-router-dom";

const NbaFilter = () => {
  return (
    <div className="nbafilter">
      <h1>Check out hats of your favorite NBA team:</h1>
      <Filter data={nbaFilter} />
      <Link to=".">go back to all products</Link>
    </div>
  );
};

export default NbaFilter;
