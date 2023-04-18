import React, { useEffect, useState } from "react";
import Products from "../components/Products";
import { useSearchParams } from "react-router-dom";
import NbaFilter from "../components/NbaFilter";

const Sale = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [team, setTeam] = useState("");

  useEffect(() => {
    setTeam(searchParams.get("dimensionValueID"));
  }, [searchParams]);
  return (
    <>
      <NbaFilter />
      <Products query={`dimensionValueID=${team}`} />
    </>
  );
};

export default Sale;
