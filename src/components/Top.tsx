import React from "react";
import { hotData } from "../utils/constants";
import { useNavigate } from "react-router-dom";

type Hat = {
  webID: number;
  productTitle: string;
  price: string;
  url: string;
};
type Props = {
  hat: Hat;
};

const TopItem: React.FC<Props> = ({ hat }) => {
  const navigate = useNavigate();

  return (
    <div className="top__item" onClick={() => navigate(`/detail/${hat.webID}`)}>
      <div className="top__img">
        <img src={hat.url} alt="" />
      </div>
      <p>New Era {hat.price}$</p>
    </div>
  );
};

const Top = () => {
  const hots = hotData.map((h: Hat) => <TopItem key={h.webID} hat={h} />);
  return (
    <div className="top">
      <h2>Hottest Items:</h2>
      <div className="top__box">{hots}</div>
    </div>
  );
};

export default Top;
