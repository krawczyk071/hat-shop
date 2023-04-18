import React, { useEffect, useState } from "react";
import Filter from "../components/Filter";
import { nbaFilter } from "../utils/constants";
import Products from "../components/Products";
import { useSearchParams } from "react-router-dom";

const Filtered = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [team, setTeam] = useState("");
  // searchParams.toString()

  useEffect(() => {
    setTeam(searchParams.get("dimensionValueID"));
  }, [searchParams]);
  return (
    <div>
      <Filter data={nbaFilter} />
      <Products query={`dimensionValueID=${team}`} />
    </div>
  );
};

export default Filtered;
