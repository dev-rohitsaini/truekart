import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { homePage } from "../components/feature/products/products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FaSearch } from "react-icons/fa";
const Header = () => {
  const dispatch = useDispatch();
  const getCartCount = useSelector((state) => state.cart.cart);
  const handleClick = (e) => {
    dispatch(homePage());
  };
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to={"/"}>
          True Kart
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav m-auto  d-flex align-items-center justify-content-around">
            <li className="nav-item active">
              <Link className="nav-link" to={"/products"} onClick={handleClick}>
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={"/cart"}>Cart</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Contact</Link>
            </li>
            <li className="nav-item">
              {" "}
              <form className="form-inline mr-2 my-lg-2 col-lg-12 ">
                <div className="input-group input-group-sm">
                  <div>
                    <input
                      type="text"
                      className="form-control "
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                      placeholder="Search..."
                    />
                    <div className="input-group-append"></div>
                  </div>
                </div>
              </form>
            </li>
            <li className="nav-item" style={{ marginLeft: "14px" }}>
              <FaSearch className="text-white " />
            </li>
          </ul>

          <div className="ml-5" >
            <div className="shopping-cart">
             <Link to={"/cart"}> <FontAwesomeIcon
                className="text-white ml-3"
                size="lg"
                icon={faCartShopping}
              />
             </Link>
            </div>
          </div>
          <span className="text-danger p-0 " style={{"margin":" -3px -9px 23px 0px"}}>{getCartCount.length || 0}</span>
        </div>
      </div>
    </nav>
  );
};
export default Header;
