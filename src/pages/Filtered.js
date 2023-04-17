import React, { useEffect, useState } from "react";
import Filter from "../components/Filter";
import { nbaFilter } from "../utils/constants";
import Products from "../components/Products";
import { useParams, useSearchParams } from "react-router-dom";

const Filtered = () => {
  const [q, setQ] = useSearchParams();
  const team = q.get("SportsTeam");
  return (
    <div>
      <Filter data={nbaFilter} />
      <Products query={`dimensionValueID=SportsTeam:${team}`} />
    </div>
  );
};

export default Filtered;
