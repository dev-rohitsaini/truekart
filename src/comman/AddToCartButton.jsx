import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../components/feature/products/cart";
const AddToCartButton =(props)=>{

    const dispatch = useDispatch();
  
    const handleAddToCart=()=>{
      dispatch(addToCart(props.productid));
    
      }
return (
    <>
      <a className="btn btn-secondary addToCart" onClick={handleAddToCart}>
                          Add to cart
                        </a>
    </>
)
}
export default AddToCartButton;