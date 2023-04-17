import React, { useState } from "react";
import { filterData } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const FilterMany = () => {
  const navigate = useNavigate();
  const [filters] = useState(filterData);
  return (
    <div className="filter-bar">
      {filters.map((filter) => (
        <div className="selector" key={filter.queryName}>
          <div className="select">
            <select
              id="standard-select"
              onChange={(e) =>
                navigate(`?${filter.queryName}=${e.target.value}`)
              }
              placeholder={filter.placeholder}
            >
              {filter?.items?.map((item) => (
                <option value={item.value} key={item.value}>
                  {item.name}
                </option>
              ))}
            </select>
            <span className="focus"></span>
          </div>
        </div>
      ))}
    </div>
  );
};

const Filter = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="filter-bar">
      <div className="selector" key={data.queryName}>
        <div className="select">
          <select
            id="standard-select"
            onChange={(e) => navigate(`?${data.queryName}=${e.target.value}`)}
            placeholder={data.placeholder}
          >
            {data?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </select>
          <span className="focus"></span>
        </div>
      </div>
    </div>
  );
};
export default Filter;
