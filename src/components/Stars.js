import React from "react";

const Stars = ({ rating }) => {
  const coloring = (max = 5) => {
    const full = Math.floor(rating);
    const starArr = [];
    for (let i = 0; i < full; i++) {
      starArr.push(<i className="fa-solid fa-star" key={`f${i}`}></i>);
    }
    for (let i = 0; i < max - full; i++) {
      starArr.push(<i className="fa-regular fa-star" key={`e${i}`}></i>);
    }
    return starArr;
  };
  return <div className="rating">{coloring()}</div>;
};

export default Stars;
