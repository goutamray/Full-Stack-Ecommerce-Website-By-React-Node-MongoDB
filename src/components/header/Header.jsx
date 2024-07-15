
// components 
import CountryDrop from "../countryDropDown/CountryDrop";
import SearchBox from "./searchBox/SearchBox";
import Navigation from "./navigation/Navigation";

// react icons 
import { MdOutlineSecurity } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { BsMinecartLoaded } from "react-icons/bs";

// images
import logo from "../../assets/logo/logo.png"
import { Link } from "react-router-dom";

// context 
import { useContext } from "react";
import { MyContext } from "../../App";

import "./Header.css";
const Header = () => {

  const context = useContext(MyContext); 


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
                      <Link href="/about"> About Us </Link>
                    </li>
                    <li> 
                      <Link href="/my-account"> My account </Link>
                    </li>
                    <li> 
                      <Link href="/wishlist"> Wishlist </Link>
                    </li>
                    <li> 
                      <Link href="/order-trucking"> Order Tracking </Link>
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
             <div className="col-sm-2">
                <div className="logo">
                   <Link to={"/"}> <img src={logo} alt="logo" className="logo-main"/> </Link>
                   <p> Online Grocery Shopping Center </p>
                </div>
             </div>
             <div className="col-sm-10">
                <div className="menu-part-middle">
                  {
                     context.countryList.length !== 0 &&  <CountryDrop /> 
                  }
                   

                    {/* search btn  */}
                   <SearchBox /> 

                    {/* cart section */}
                    <div className="cart-section">
                        <div className="user">
                           {
                              context.isLogin !== true 
                                ? 
                               <Link  to="/signIn"> Sign In </Link> 
                                 : 
                                <button> <FiUser /> </button>
                           }
                       
                        
                        </div>
                        <div className="price">
                          <span> $ 19.56 </span>
                          <button> <BsMinecartLoaded /> </button>    
                          <div className="total-count">
                                <span> 1 </span>
                            </div>
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


