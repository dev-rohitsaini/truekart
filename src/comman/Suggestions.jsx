import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";

const Suggestions = (props) => {
  const [data, setdata] = useState([]);
  const dataId = props.id;
  const type = props.type;
  const categoryFilter = async (catId) => {
    await axios
      .get("https://api.escuelajs.co/api/v1/categories/" + catId + "/products")
      .then((apiDataCat) => {
        setdata(apiDataCat.data);
      })
      .catch((err) => {
        alert(err);
      });
  };
  useEffect(() => {
    if (type === "categories") categoryFilter(dataId);
  }, []);
  console.log();
  return (
    <Carousel autoPlay>
      {data.map((item, index) => (
        <div key={index}>
          <img
            alt=""
            src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg"
          />
          <p className="legend">legend 1</p>
        </div>
      ))}
    </Carousel>
  );
};

export default Suggestions;
