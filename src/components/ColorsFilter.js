import React from "react";
import { colors } from "../utils/constants";
import { Link } from "react-router-dom";

const ColorsFilter = () => {
  return (
    <div className="colorsfilter">
      <h1>Pick your color:</h1>
      {colors.map((c) => {
        return (
          <Link to={`?dimensionValueID=Color:${c}`}>
            <div
              className="colorsfilter__color"
              style={{ background: c }}
            ></div>
          </Link>
        );
      })}
      <Link to=".">
        <div className="colorsfilter__color" style={{ background: "silver" }}>
          reset
        </div>
      </Link>
    </div>
  );
};

export default ColorsFilter;
