
// components 
import CountryDrop from "../countryDropDown/CountryDrop";
import SearchBox from "./searchBox/SearchBox";
import Navigation from "./navigation/Navigation";

// react icons 
import { MdOutlineSecurity } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { BsMinecartLoaded } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";
import { PiShieldWarningFill } from "react-icons/pi";
import { RiLock2Fill } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";

// images
import logo from "../../assets/logo/logo.png"
import { Link, useNavigate } from "react-router-dom";

// context 
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App"

import createToast from "../../utils/toastify";
  

import "./Header.css";
const Header = ( ) => {
  const [openDrop, setOpenDrop ] = useState(false); 
  const context = useContext(MyContext); 
  const navigate = useNavigate();


   // handle open 
 const handleOpen  = () => {
   setOpenDrop(() => !openDrop);
  };
 
  // handle close
  const handleClose  = () => {
   setOpenDrop(false);
  };

   //user logout 
   const handleLogout = () => {
      localStorage.clear();

      setTimeout(() => {
            navigate("/signIn");
            createToast("User Logout Successful", "success");
      }, 2000);
   };  

    // Check login status on component mount
    useEffect(() => {
      const token = localStorage.getItem("token");
   
      if (token) {
        context.setIsLogin(true); 
        const userData = JSON.parse(localStorage.getItem("user"));
        context.setUser(userData); 
      } else {
        context.setIsLogin(false); 
        context.setUser({
          name: "",
          email: "",
          userId: ""
        });
      }
    }, [context]);

  return (
    <>
    {/* top bar part */}
      <div className="top-bar">
        <div className="container">
           <p className="text-center text-white "> Due to the <b className="text-bold">COVID 19 </b> epidemic, orders may be processed with a slight delay </p>
        </div>
      </div>

      {/* second bar part  */}
      <div className="second-bar">
        <div className="container">
            <div className="row align-items-center">
               <div className="col-sm-4">
                 <div className="menu-top">
                   <ul>
                    <li> 
                      <Link to="/about"> About Us </Link>
                    </li>
                    <li> 
                      <Link to="/my-account"> My account </Link>
                    </li>
                    <li> 
                      <Link to="/wishlist"> Wishlist </Link>
                    </li>
                    <li> 
                      <Link to="/order-trucking"> Order Tracking </Link>
                    </li>
                    <li> 
                      <Link to="/contact"> Contact </Link>
                    </li>
                   </ul>
                 </div>
               </div>
               <div className="col-sm-4">
                 <div className="offer-text">
                    <span> <MdOutlineSecurity /> </span>
                    <p> 100% Secure delivery without contacting the courier
                    </p>
                 </div>
               </div>
               <div className="col-sm-4">
                  <div className="info">
                      <p> Need help? Call Us </p>
                      <a href="#"> + 0020 500 </a>
                      <div className="right-select-part">
                         <div className="language">
                            <select name="" >
                               <option value="english"> English </option>
                               <option value="spanish"> Spanish </option>
                               <option value="german"> German </option>
                               <option value="dutch"> Dutch </option>
                            </select>
                         </div>
                         <div className="currency">
                            <select name="" >
                               <option value="USD"> USD </option>
                               <option value="INR"> INR </option>
                               <option value="BDT"> BDT </option>
                               <option value="GBP"> GBP </option>
                            </select>
                         </div>
                      </div>
                  </div>
               </div>
            </div>
        </div>
      </div>

      {/* middle header part start */}
       <div className="container middle-header-bar ">
          <div className="row">
            {/* logo part */}
             <div className="col-sm-2 logo-part ">
                <button> <IoMdMenu /> </button>
                <div className="logo">
                   <Link to={"/"}> <img src={logo} alt="logo" className="logo-main"/> </Link>
                   <p> Online Grocery Shopping Center </p>
                </div>
             </div>
             <div className="col-sm-10">
                <div className="menu-part-middle">
                  {
                     context?.countryList?.length !== 0 &&  <CountryDrop /> 
                  }
                   

                    {/* search btn  */}
                   <SearchBox /> 

                    {/* cart section */}
                    <div className="cart-section">
                        <div className="user">
                           {
                              context?.isLogin !== true 
                                ? 
                               <Link  to="/signIn"> Sign In </Link> 
                                 : 
                                 <button className="myAcc d-flex align-items-center justify-content-center" onClick={handleOpen}>
                                     <FiUser />
                                </button>
                                
                           }

                           {
                                 openDrop === true && 
                                 <ul className="dropdown-menu-item shadow">
                                    <li>
                                       <Link className="dropdown-item my-custom" to="" onClick={handleClose} > 
                                       <FaRegUserCircle /> my account 
                                    </Link>
                                    </li>
                                    <li>
                                       <Link className="dropdown-item my-custom" to="" onClick={handleClose}> <PiShieldWarningFill /> reset password </Link>
                                    </li>
                                    <li onClick={handleLogout}>
                                       <Link className="dropdown-item my-custom" to="" onClick={handleClose}> <RiLock2Fill /> logout  </Link>
                                    </li>
                                 </ul>
                              }
                      
                        </div>
                        <div className="price">
                         <Link to="/cart" > 
                             <span className="total-amonut"> 
                             Tk.  
                               { 
                                  context.cartData?.length !== 0 ?  
                                  context.cartData?.map(item => parseInt(item.price) * item.quantity).reduce((total, value) => total + value, 0)  : 0
                                  
                               }
                               
                              
                             </span>
                             <button> <BsMinecartLoaded /> </button>    
                             <div className="total-count">
                                 <span>      
                                   {context.cartData?.length}
                                </span>
                             </div>
                        </Link>
                        </div>
                    </div>

                </div>
             </div>
          </div>
       </div>

       {/* header bottom part  */}
      
        <Navigation />

    </>
  )
}

export default Header;


