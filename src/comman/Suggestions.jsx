import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import ReactDOM from 'react-dom';
import { BounceLoader } from "react-spinners";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
const Suggestions = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setdata] = useState([]);
  const dataId = props.id;
  const type = props.type;
  const page = props.page;
  var url;
  if(page==="home"){ url="https://api.escuelajs.co/api/v1/categories/"};
  if(page==="details"){url="https://api.escuelajs.co/api/v1/categories/" + dataId + "/products"}
  const categoryFilter = async (catId) => {
    await axios
      .get(url)
      .then((apiDataCat) => {
        setdata(apiDataCat.data);
        setLoading(false)
      })
      .catch((err) => {
        alert(err);
      });
  };
  useEffect(() => {
     categoryFilter();
  }, []);
  if(loading){
    return(
    <div
        style={{ minHeight: "400px" }}
        className="d-flex align-items-center justify-content-center "
      >
        <BounceLoader color="grey" size={55} />
      </div>)
    }

  return (

    <Carousel autoPlay axis="horizontal" >
      {data.map((item, index) => (
        <div key={index}>
          <img
            alt=""
            src={(page==="details")?item.images[0]:item.image}
          />
          <p className="legend"><Link   >
          See Details
          </Link>
          </p>
        </div>
      ))}
    </Carousel>
  );
};

export default Suggestions;
