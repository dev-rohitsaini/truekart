import React, { useEffect, useState } from "react";
import "../css/Cart.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "../components/feature/products/cart";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
const Cart = () => {
  const [stateData, setStateData] = useState([]);
  // const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cart.cart);
  useEffect(() => {
    setStateData(data);
  }, [data]);
  let sum = 0;
  data.map((item) => {
    sum += item.price * item.quantity;
  });
  let shippingPrice = sum === 0 ? 0 : 30;
  let totalPrice = shippingPrice + sum;
  return (
    <>
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Cart - {data.length} items</h5>
                </div>
                {stateData.map((item, i) => (
                  <div className="card-body" key={i}>
                    {/* Single item */}
                    <div className="row">
                      <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                        {/* Image */}
                        <div
                          className="bg-image hover-overlay hover-zoom ripple rounded"
                          data-mdb-ripple-color="light"
                        >
                          <Link to={"/details/" + item.id}>
                            <img
                              src={item.images[0]}
                              className="w-100"
                              alt="Blue Jeans Jacket"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                        <p>
                          <strong>{item.title}</strong>
                        </p>
                        <p>Category: {item.category.name}</p>

                        <button
                          type="button"
                          className="btn btn-danger btn-sm me-1 mb-2"
                          data-mdb-toggle="tooltip"
                          title="Remove item"
                          onClick={() => {
                            dispatch(removeItem(item.id));
                          }}
                        >
                          <i className="fas fa-trash" />
                          <FaTrash size="" />
                        </button>
                        {/* Data */}
                      </div>
                      <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        {/* Quantity */}
                        <label className="form-label" htmlFor="form1">
                          Quantity
                        </label>
                        <div className="form-outline">
                          <div
                            className="d-flex mb-4"
                            style={{ maxWidth: 300 }}
                          >
                            <button
                              className="btn btn-secondary px-3 me-2"
                              onClick={() => {
                                dispatch(decrementQuantity(item.id));
                              }}
                            >
                              <FaMinus size="" />
                            </button>

                            <span className="form-control text-center">
                              {item.quantity}
                            </span>

                            <button
                              className="btn btn-secondary px-3 ms-2"
                              onClick={() => {
                                dispatch(incrementQuantity(item.id));
                              }}
                            >
                              <FaPlus />
                            </button>
                          </div>
                        </div>

                        <p className="text-start text-md-center">
                          <strong>${item.price}</strong>
                        </p>
                        {/* Price */}
                      </div>
                    </div>
                    <hr className="my-4" />
                  </div>
                ))}
              </div>

              <div className="card mb-4 mb-lg-0">
                <div className="card-body">
                  <p>
                    <strong>We accept</strong>
                  </p>
                  <img
                    className="me-2"
                    width="45px"
                    src={"https://www.vectorlogo.zone/logos/upi/upi-ar21.svg"}
                    alt="Mastercard"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src={
                      "https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                    }
                    alt="Visa"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src={
                      "https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                    }
                    alt="American Express"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src={
                      "https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                    }
                    alt="Mastercard"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products
                      <span>${sum}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>${shippingPrice}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                        <strong>
                          <p className="mb-0">(including VAT)</p>
                        </strong>
                      </div>
                      <span>
                        <strong>${totalPrice}</strong>
                      </span>
                    </li>
                  </ul>
                  <button type="button" className="check-out">
                    Go to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Cart;
