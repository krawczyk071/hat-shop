import React, { useEffect, useState } from "react";
import NbaFilter from "../components/NbaFilter";
import Products from "../components/Products";
import { useSearchParams } from "react-router-dom";
const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [team, setTeam] = useState("");

  useEffect(() => {
    setTeam(searchParams.get("dimensionValueID"));
  }, [searchParams]);
  return (
    <div>
      <NbaFilter />
      <Products query={`dimensionValueID=${team}`} />
    </div>
  );
};

export default Shop;
