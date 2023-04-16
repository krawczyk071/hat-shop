import axios from "axios";

const BASE_URL = "https://kohls.p.rapidapi.com";

const options = {
  params: {
    limit: 24,
    offset: 1,
    dimensionValueID: [
      "Brand:New Era",
      "Product:Hats",
      // "SportsTeam:Chicago Bulls",
      "SportsLeague:NFL",
      "Color:Blue",
      // 'Silhouette:Baseball Cap'
      // "Silhouette:Beanie",
    ],
  },
  paramsSerializer: {
    indexes: null, // by default: false
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "kohls.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  console.log(data);
  return data;
};

// categories/list
// products/list
// products/detail
// https://kohls.p.rapidapi.com/products/detail?webID=5814616
// reviews/list
// https://kohls.p.rapidapi.com/reviews/list?ProductId=6235047&Limit=6&Offset=0&Sort=SubmissionTime%3Adesc

// https://kohls.p.rapidapi.com/products/list?limit=24&offset=1&dimensionValueID=SportsTeam:Chicago Bulls
// &dimensionValueID=AgeAppropriate:Teens&dimensionValueID=Size:TWIN
// SportsTeam:Chicago%20Bulls+Product:Hats
// https://www.kohls.com/catalog/nba.jsp?
// CN=SportsLeague:NBA&cc=active_wellness-TN2.0-S-nba&kls_sbp=18404665551666413853928001138721473035
// https://www.kohls.com/catalog/new-era-nba-hats-accessories.jsp?
// CN=Brand:New%20Era+SportsLeague:NBA+Product:Hats+Department:Accessories&S=1&PPP=48&pfm=browse%20visual%20nav%20refine
