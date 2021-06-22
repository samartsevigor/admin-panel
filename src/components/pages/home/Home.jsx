import React from 'react';
import './Home.css'
import FeaturedInfo from "../../featuredInfo";
import Chart from "../../chart";
import WidgetSm from "../../widgetSm";
import WidgetLg from "../../widgetLg";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;