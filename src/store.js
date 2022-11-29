import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './components/feature/products/cart.js'
import productReducer from "./components/feature/products/products.js"
export default configureStore({
  reducer: {
    productPages: productReducer,
    cart:cartReducer,
  },
})