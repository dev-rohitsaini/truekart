import React from "react";
import Banner from "../comman/Banner";
import Suggestions from "../comman/Suggestions";
import "../css/Home.css";

const Home = () => {

  return (
    <div  className="home-page gradient-custom">
      <div className="carousel-custom">
            <Suggestions id={2} type={"categories"} page={"home"}/>
      </div>
      <Banner/>
    </div>
  );
};
export default Home;
