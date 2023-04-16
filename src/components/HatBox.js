import React from "react";

const HatBox = ({ detail }) => {
  const photos = detail.altImages
    .map((i) => i.url.replace(/=50/g, "=180"))
    .slice(0, -1)
    .map((url) => <img src={url} alt="additional" />);

  return (
    <div className="hat__box">
      <h1>{detail.brand}</h1>
      <div className="hat__more">
        <div className="hat__reviews">
          Rating: {detail.avgRating} ({detail.ratingCount})
        </div>
      </div>
      <div className="hat__photo">
        <img src={detail.images[0].url} alt="main" />
      </div>
      <div className="hat__photo-more">{photos}</div>
      <h2>{detail.productTitle}</h2>
      <div
        dangerouslySetInnerHTML={{ __html: detail.description.longDescription }}
      ></div>
    </div>
  );
};

export default HatBox;

// brand
// payload.products[0].description.shortDescription
// payload.products[0].images[0].url
// altImages.url
