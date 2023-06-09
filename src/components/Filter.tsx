import React from "react";
// import { filterData } from "../utils/constants";
import { useSearchParams } from "react-router-dom";
import { Filter as Ftype } from "../utils/constants";
// const FilterMany = () => {
//   const navigate = useNavigate();
//   const [filters] = useState(filterData);
//   return (
//     <div className="filter-bar">
//       {filters.map((filter) => (
//         <div className="selector" key={filter.queryName}>
//           <div className="select">
//             <select
//               id="standard-select"
//               onChange={(e) =>
//                 navigate(`?${filter.queryName}=${e.target.value}`)
//               }
//               placeholder={filter.placeholder}
//             >
//               {filter?.items?.map((item) => (
//                 <option value={item.value} key={item.value}>
//                   {item.name}
//                 </option>
//               ))}
//             </select>
//             <span className="focus"></span>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

type FilterParams = {
  data: Ftype;
};
const Filter = ({ data }: FilterParams) => {
  // const navigate = useNavigate();
  const [, setSearchParams] = useSearchParams();

  return (
    <div className="filter-bar">
      <div className="selector" key={data.queryName}>
        <div className="select">
          <select
            id="standard-select"
            // onChange={(e) => navigate(`?${data.queryName}=${e.target.value}`)}
            onChange={(e) =>
              setSearchParams({ [data.queryName]: e.target.value })
            }
            placeholder={data.placeholder}
          >
            {data?.items.map((item) => (
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

// function handleFilterChange(key, value) {
//   setSearchParams(prevParams => {
//     if (value === null) {
//       prevParams.delete(key)
//     } else {
//       prevParams.set(key, value)
//     }
//     return prevParams
//   })
// }
