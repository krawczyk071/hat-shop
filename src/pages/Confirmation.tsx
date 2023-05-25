import React from "react";
import { useSearchParams } from "react-router-dom";
import { formatPrice } from "../utils/helpers";

const Confirmation = () => {
  const [searchParams] = useSearchParams();
  // console.log(searchParams);
  return (
    <div className="confirm">
      <h2>Please pay {formatPrice(Number(searchParams.get("t")))}</h2>
      <h1>You will recieve your order soon</h1>
    </div>
  );
};

export default Confirmation;
