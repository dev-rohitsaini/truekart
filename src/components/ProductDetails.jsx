import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import AddToCartButton from "../comman/AddToCartButton";

const ProductDetails = () => {
  const params = useParams();
  const [data, setData] = useState([]);
  const imgRef = useRef();
  const productId =  params.id;

  const fetchData = async () => {
    const apiData = await axios.get(
      "https://api.escuelajs.co/api/v1/products/" + productId
    );
    setData(apiData.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const changeImage = (e) => {
    imgRef.current.src = e.target.getAttribute("src");
  };
  return (
    <div
      style={{ minHeight: "600px" }}
      className="d-flex align-items-center justify-content-center gradient-custom"
    >
      {data.length === 0 ? (
        <BounceLoader color="grey" size={55} />
      ) : (
        <div className="container mt-5  pt-5 mb-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-10">
              <div className="card">
                <div className="row">
                  <div className="col-md-6">
                    <div className="images p-3">
                      <div className="text-center p-4">
                        <img
                          id="main-image"
                          src={data.images[0]}
                          width={450}
                          ref={imgRef}
                        />
                      </div>
                      <div className="thumbnail d-flex justify-content-around align-items-center">
                        {data.images.map((img, t) => (
                          <img
                            key={t}
                            onClick={changeImage}
                            src={img}
                            width={90}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="product p-4">
                      <div className="d-flex justify-content-between align-items-center">
                        <i className="fa fa-shopping-cart text-muted" />
                      </div>
                      <div className="mt-4 mb-3">
                        <h5 className="text-uppercase mt-3">{data.title}</h5>
                      </div>
                      <p className="about">{data.description}</p>
                      <div className="price d-flex flex-row align-items-center justify-content-center">
                        <div className="act-price text-center">
                          Category: <strong>{data.category.name} &nbsp;</strong>
                        </div>
                        <div className="act-price text-center">
                          Price: <strong>${data.price}.00 &nbsp;</strong>
                        </div>
                      </div>
                      <div className="price d-flex r">Rating :</div>
                      <AddToCartButton productid={data} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductDetails;
