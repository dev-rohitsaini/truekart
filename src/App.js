import logo from './logo.svg';
import './App.css';
import Products from './components/Products.jsx';
import ProductDetails from './components/ProductDetails.jsx';
import Header from './comman/Header.jsx';
import Footer from './comman/Footer.jsx';
import { createBrowserRouter,RouterProvider,Route ,Outlet} from 'react-router-dom';
import Home from './components/Home.jsx';
import Cart from './components/Cart';
import Login from './components/Login';
function App() {
  const Layout =()=>{
    return (
      <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    );
  }
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        
        },
        {
          path: "/products",
          element: <Products />,
        
        },
        {
          path:"/details/:id",
          element:<ProductDetails/>
        },
        {
          path:"/cart",
          element:<Cart/>
        }
      ],
    },
    {
      path:"/login",
          element:<Login/>
    }

  ])
  
  
  return (

    <div className="App">
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
