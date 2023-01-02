import React, { useEffect, useState } from "react";
import "../css/Products.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BounceLoader } from "react-spinners";
import Pagination from "../comman/Pagination.jsx";
import Sidebar from "../comman/Sidebar.jsx";
import AddToCartButton from "../comman/AddToCartButton";
import { useMemo } from "react";

const Products = () => {
  const pageChange = useSelector((state) => state.productPages.value);
  const [data, setData] = useState([]);
  const [cat, setCat] = useState([]);
  const [totalData, setTotalData] = useState();
  const [noDataFound, setNoDataFound] = useState(false);
  const [loading, setLoading] = useState(true);

  // User is currently on this page-------------------------------------------
  const [currentPage, setCurrentPage] = useState(1);
  // No of Records to be displayed on each page
  const [recordsPerPage, setRecordsPerPage] = useState(20);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  // Records to be displayed on the current page

  //fetching all data-------------------
  const fetchData = async () => {
    await axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((apiData) => {
        setData(apiData.data);
        setTotalData(data.length);
      })
      .catch((err) => {
        alert(err);
      });
  };

  //getting categories--------------
  const getCategories = async () => {
    await axios
      .get("https://api.escuelajs.co/api/v1/categories")
      .then((apiDataCat) => {
        setCat(apiDataCat.data);
        setLoading(false);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    //getiing all data----------------------
    fetchData();
    //getting all categories ---------
    getCategories();
  }, [pageChange, recordsPerPage]);
  //calculation for paginations---------------------------
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage);

  //applying filter for category-------
  const categoryFilter = async (catId) => {
    await axios
      .get("https://api.escuelajs.co/api/v1/categories/" + catId + "/products")
      .then((apiDataCat) => {
        setLoading(false);
        apiDataCat.data.length === 0
          ? setNoDataFound(true)
          : setNoDataFound(false);
        setData(apiDataCat.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  //category filter ------------
  const handleClick = (catId) => {
    categoryFilter(catId);
  };
  const sideBar=useMemo(()=>{
    return( <Sidebar
     totalData={totalData}
     currentLength={currentPage}
     cat={cat}
     handleClick={handleClick}
     recordsPerPage={recordsPerPage}
     setRecordsPerPage={setRecordsPerPage}
   />
    )
   },[])
  //add to cart -------------------
  if (loading === true)
    return (
      <div
        style={{ minHeight: "400px" }}
        className="d-flex align-items-center justify-content-center gradient-custom"
      >
        <BounceLoader color="grey" size={55} />
      </div>
    );
  return (
    <>
      <div
        style={{ minHeight: "400px" }}
        className="d-flex align-items-center justify-content-center gradient-custom m-0"
      >
        <div className="container ">
          <div className="row">
          {sideBar}
            {noDataFound ? (
              <div className="col-sm-9 col-lg-9 col-md-9 mt-3 ">
                <div
                  className="row d-flex align-items-center justify-content-center"
                  style={{ height: "350px" }}
                >
                  No Data Found!
                </div>
              </div>
            ) : (
              <div className="col-sm-9 col-lg-9 col-md-9 mt-3 ">
                <div className="row">
                  {currentRecords.map((productData) => (
                    <div
                      className="card m-2"
                      style={{ width: "16rem" }}
                      key={productData.id}
                    >
                      <div className="product-image p-3">
                        <Link to={"/details/" + productData.id}>
                          <img
                            className="card-img-top"
                            src={productData.images[0]}
                            style={{
                              maxHeight: "100%",
                              maxWidth: "100%",
                            }}
                            alt="Card image cap"
                          />
                        </Link>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title product-title">
                          {productData.title}
                        </h5>
                        <p className="card-text">
                          {productData.description.substr(0, 70)}
                        </p>
                        <div className="product-category">
                          <strong>
                            Category:{" "}
                            <small> {productData.category.name}</small>
                          </strong>
                        </div>
                        <AddToCartButton productid={productData} />
                      </div>
                    </div>
                  ))}
                  <div className="col-12">
                    <Pagination
                      nPages={nPages}
                      currentPage={currentPage}
                      setCurrentPage={setCurrentPage}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Products;
