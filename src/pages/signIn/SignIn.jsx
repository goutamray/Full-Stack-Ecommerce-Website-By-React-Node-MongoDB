import { useContext, useEffect } from "react"
import { MyContext } from "../../App";

import logo from "../../assets/logo/logo.png"
import google from "../../assets/logo/google.png"


import TextField from '@mui/material/TextField'; 
import { Link } from "react-router-dom";

import "./SignIn.css"; 
const SignIn = () => {

  const context = useContext(MyContext)

  useEffect(() => {
    context.setIsHeaderFooterShow(false); 
  }, []);  

  return (
    <>
      <div className="section signInpage">
        <div className="container">
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                  <div className="card p-5 shadow">
                     <img src={logo} alt="logo" />
                     <h1> Sign In </h1>
                     <div className="form mt-4">
                      {/* login form  */}
                        <form action="">
                          <div className="form-group">
                             <TextField id="standard-basic" label="Email" type="email" required variant="standard" className="w-100" />
                          </div>
                          <div className="form-group">
                             <TextField id="standard-basic" label="Password" type="password" required variant="standard" className="w-100" />
                          </div>
                          <div className="py-3">
                             <Link to="/forget-password"> Forget Password </Link> 
                          </div>
                          <div className="login-btn">
                              <button className="my-button btn btn-lg "> Sign In </button>
                              <Link to="/" onClick={() => context.setIsHeaderFooterShow(true)}>Cancel</Link>
                          </div>
                        </form>

                        <div className="not-account mt-3">
                          <p className="text-center">  Not have an Acount <Link to="/signUp">  <b>  Sign Up </b> </Link>  </p>
                        </div>
                        <div className="text-center mt-3 text-black">
                          <p> Or continue with social account </p>
                        </div>
                        <button className="google-btn">
                          <img src={google} alt="google" />
                          <span>  Sign In with Google </span>
                        </button>
                     </div>
                  </div>
              </div>
              <div className="col-md-4"></div>
            </div>
        </div>
      </div>
    </>
  )
}

export default SignIn




