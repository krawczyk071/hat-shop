import React, { useEffect, useState } from "react";
import Products from "../components/Products";
import { useSearchParams } from "react-router-dom";
import ColorsFilter from "../components/ColorsFilter";
const Shop = () => {
  const [searchParams] = useSearchParams();
  const [team, setTeam] = useState("");

  useEffect(() => {
    setTeam(searchParams.get("dimensionValueID"));
  }, [searchParams]);
  return (
    <>
      <ColorsFilter />
      <Products query={`dimensionValueID=${team}`} />
    </>
  );
};

export default Shop;
