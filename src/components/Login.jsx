import axios from "axios";
import React, { useState } from "react";
import "../css/Login.css";
const Login = () => {
  let formData = {
    email: "",
    password: "",
  };
  const emailHandle =(email)=>{
    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){return true}
    return false;
  }

  const emptyValidation =(data)=>{
    if(data.email===""){
      alert("Email field can not be empty!");
      return false;
    }else{
      if(!(emailHandle(data.email))){
          alert("Please enter a valid  email address");
          return false;
      }
    }
    if(data.password===""){
      alert("Password field can not be empty!");
      return false;
    }
    return true;
  }
  const [data, setData] = useState(formData);

  const handleChange = (e) => {
    setData({...data,[e.target.id]:e.target.value})
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    const value= emptyValidation(data);
    if(value){
      authenticate(data)
    }
    
  };
const url ="https://api.escuelajs.co/api/v1/auth/login";
  const authenticate = async (data)=>{
      await axios.get(url,{
        params:{
          data:data,
        }
      }).then((res)=>{
        console.log(res);
      }).catch((errs)=>{
        console.log(errs);
      })

  }


  return (
    <>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card shadow-2-strong"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <form action="" method="GET" onSubmit={handleSubmit}>
                    <h3 className="mb-5">Sign in</h3>
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="email"
                        className="form-control form-control-lg"
                        placeholder="Enter Email"
                        onChange={handleChange}
                      />
                      {/* <label className="form-label" htmlFor="typeEmailX-2">
                Email
              </label> */}
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="password"
                        className="form-control form-control-lg"
                        placeholder="Enter Password"
                        onChange={handleChange}
                      />
                      {/* <label className="form-label" htmlFor="typePasswordX-2">
                Password
              </label> */}
                    </div>
                    {/* Checkbox */}
                    <div className="form-check d-flex justify-content-start mb-4">
                      <input
                        className="form-check-input "
                        type="checkbox"
                        defaultValue=""
                        id="form1Example3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="form1Example3"
                      >
                        Remember password
                      </label>
                    </div>
                    <button
                      className="btn btn-primary btn-lg btn-block"
                      type="submit"
                    >
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
