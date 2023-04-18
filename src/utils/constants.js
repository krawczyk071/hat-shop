export const nbaTeams = [
  "Atlanta Hawks",
  "Boston Celtics",
  "Brooklyn Nets",
  "Charlotte Hornets",
  "Chicago Bulls",
  "Cleveland Cavaliers",
  "Dallas Mavericks",
  "Denver Nuggets",
  "Detroit Pistons",
  "Golden State Warriors",
  "Houston Rockets",
  "Indiana Pacers",
  "Los Angeles Clippers",
  "Los Angeles Lakers",
  "Memphis Grizzlies",
  "Miami Heat",
  "Milwaukee Bucks",
  "Minnesota Timberwolves",
  "New Orleans Pelicans",
  "New York Knicks",
  "Oklahoma City Thunder",
  "Orlando Magic",
  "Philadelphia 76ers",
  "Phoenix Suns",
  "Portland Trail Blazers",
  "Sacramento Kings",
  "San Antonio Spurs",
  "Toronto Raptors",
  "Utah Jazz",
  "Washington Wizards",
];

export const hotData = [
  {
    webID: 5845569,
    productTitle:
      "Men's New Era Red Los Angeles Angels 2022 City Connect 59FIFTY Fitted Hat",
    price: "45.99",
    url: "https://media.kohlsimg.com/is/image/kohls/5845569?wid=180&hei=180&op_sharpen=1",
  },
  {
    webID: 5007245,
    productTitle:
      "Men's New Era Aqua Miami Dolphins Classic Trucker 9FIFTY Snapback Hat",
    price: "31.99",
    url: "https://media.kohlsimg.com/is/image/kohls/5007245?wid=180&hei=180&op_sharpen=1",
  },
  {
    webID: 4609980,
    productTitle:
      "Men's New Era Kelly Green Philadelphia Eagles Throwback 9FIFTY Adjustable Snapback Hat",
    price: "30.00",
    url: "https://media.kohlsimg.com/is/image/kohls/4609980?wid=180&hei=180&op_sharpen=1",
  },
];
export const reviewData = [
  {
    text: "Men's Blitzing Cap is a must-have accessory for anyone with a love of caps. In addition to its durability, this cap's design ensures a snug and comfortable fit. You'll stay cool and dry thanks to a built-in HeatGear® sweatband and breathable threads. The UA Blitzing Cap is the perfect accessory to look your best and exhibit your love for baseball caps.",
    short:
      "Men's Blitzing Cap is a must-have accessory for anyone with a love of caps. In addition to its durability, this cap's design ensures a snug and comfortable fit.",
    name: "John",
    rating: 4.3,
  },
  {
    text: "Carhartt's Odessa cap achieves the perfect balance of ruggedness and comfort. It is made from 100% cotton duck with a Coolmax sweatband to keep you cool on hot days. Adjustable rear closure and a pre-curved visor makes it ideal for various head shapes and sizes. With the Carhartt logo stitched on the front, this cap also adds to your aesthetic.",
    short:
      "Carhartt's Odessa cap achieves the perfect balance of ruggedness and comfort. It is made from 100% cotton duck with a Coolmax sweatband to keep you cool on hot days.",
    name: "Kate",
    rating: 3.8,
  },
  {
    text: "Whether you're looking for a stylish sports cap to wear on your outdoor adventures, during your fitness routines, or to give a final touch to your casual clothes, this baseball cap has you covered. Stop putting your health and well-being in danger by venturing into the sun unprotected.",
    short:
      "Whether you're looking for a stylish sports cap to wear on your outdoor adventures, during your fitness routines, or to give a final touch to your casual clothes.",
    name: "Lisa",
    rating: 4.9,
  },
  {
    text: "The 100% cotton makes it snug and comfy, especially for everyday activities. Not only are they designed to keep kids safe from the sun and wind, but they are also stylish enough to wear at any time of day or night. It can be paired with your child's everyday attire.",
    short:
      "The 100% cotton makes it snug and comfy, especially for everyday activities. Not only are they designed to keep kids safe from the sun and wind, but they are also stylish enough to wear at any time of day or night. ",
    name: "Tony",
    rating: 4.1,
  },
];
export const filterData = [
  {
    items: [
      { name: "Buy", value: "for-sale" },
      { name: "Rent", value: "for-rent" },
    ],
    placeholder: "Purpose",
    queryName: "purpose",
  },
  {
    items: nbaTeams.map((t) => ({ name: t, value: t })),
    placeholder: "Select Your Team",
    queryName: "SportsTeam",
  },
];
export const getFilterValues = (filterValues) => {
  const { purpose, rentFrequency } = filterValues;

  const values = [
    {
      name: "purpose",
      value: purpose,
    },
    {
      name: "rentFrequency",
      value: rentFrequency,
    },
  ];
  return values;
};

export const nbaFilter = {
  items: nbaTeams.map((t) => ({ name: t, value: "SportsTeam:" + t })),
  placeholder: "Select Your Team",
  queryName: "dimensionValueID",
};

export const colors = [
  "Black",
  "Blue",
  "Green",
  "Grey",
  "Red",
  "White",
  "Purple",
  "Brown",
  "Orange",
];
