import React from "react";
import Banner from "../components/Banner";
import Headline from "../components/Headline";
import Hero from "../components/Hero";
import Top from "../components/Top";
import Reviews from "../components/Reviews";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Top />

      <Headline />
      <Banner />
      <Reviews />
    </>
  );
};

export default Homepage;
