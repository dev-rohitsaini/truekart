import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="text-light">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-lg-4 col-xl-3">
              <h5>About</h5>
              <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25" />
              <p className="mb-0">
              The eCommerce industry is a constantly evolving space, and as such the
               terminology you need to know evolves too. This dictionary will help keep
                your expertise up-to date with all of these changes by providing
                 definitions for over 200 important terms in this ever changing field.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
              <h5>Informations</h5>
              <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25" />
              <ul className="list-unstyled">
                <li className="mb-1">
                  <Link to={"/details/8"}>Pringles</Link>
                </li>
                <li>
                  <Link to={"/details/33"}>Tasty Cotton Ball </Link>
                </li>
                <li className="mb-1">
                  <Link to={"/details/59"}>GENERIC CONCRETE SAUSAGES </Link>
                </li>
                <li className="mb-1">
                  <Link to={"/details/4"}>Mens Casual Slim </Link>
                </li>
               
              </ul>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto">
              <h5>Resources</h5>
              <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25" />
              <ul className="list-unstyled">
                <li className="mb-1">
                  <Link to={"https://reactjs.org/"}>React</Link>
                </li>
                <li className="mb-1">
                  <Link to={"https://redux.js.org/"}>Redux</Link>
                </li>
                <li className="mb-1">
                  <Link to={"https://getbootstrap.com/"}>Bootstrap</Link>
                </li>
              

              </ul>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3">
              <h5>Contact</h5>
              <hr className="bg-white mb-2 mt-0 d-inline-block mx-auto w-25" />
              <ul className="list-unstyled">
                <li className="mb-1">
                  <i className="fa fa-home mr-2" /> My company
                </li>
                <li className="mb-1">
                  <Link to={"https://github.com/dev-rohitsaini"}> Github</Link>
                </li>
                <li>
                  <i className="fa fa-phone mr-2 mb-1" /> +91 8199065730
                </li>
               
              </ul>
            </div>
            <div className="col-12 copyright mt-3">
             
              <p className="text-right text-muted">
                
                
                  <i>React</i>
                {" "}
                | <span>v. 0.1.0</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;