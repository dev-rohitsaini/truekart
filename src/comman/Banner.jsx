import React from "react";
import img from "../images/home-hero-2.png"
const Banner = () => {

  return (
    <section className="jumbotron text-center ">
      <div className="container">
        <h1 className="jumbotron-heading bg-transparent mb-3 text-light"> The One-stop Shopping Destination</h1>
        <div className="row">
            <div className="col-6 ">
              <div className="mb-0 border-left-1 rounded-3 p-2 m-2 mt-4"> 
                <img src={img} alt="" style={{maxWidth: 400,}} />
              </div>
              </div>  
              <div className="col-6">
              <p className="lead text-white mb-0  border-left-1 rounded-3 p-2 m-2 mt-4 ">
          E-commerce is revolutionizing the way we all shop in India. Why do you
          want to hop from one store to another in search of the latest phone
          when you can find it on the Internet in a single click? Not only
          mobiles. Truekart houses everything you can possibly imagine, from
          trending electronics like laptops. You name it, and you can stay
          assured about finding them all here. For those of you with erratic
          working hours, Truekart is your best bet. Shop in your PJs, at night
          or in the wee hours of the morning. This e-commerce never shuts down.
        </p>
              </div>  
        </div>
       
      </div>
    </section>
  );
};
export default Banner;
