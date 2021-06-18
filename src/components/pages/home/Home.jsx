import React from 'react';
import './Home.css'
import FeaturedInfo from "../../featuredInfo";
import Chart from "../../chart";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart />
    </div>
  );
};

export default Home;