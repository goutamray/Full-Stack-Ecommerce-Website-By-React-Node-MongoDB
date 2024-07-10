import { Link } from "react-router-dom";

// react icons
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6"; 

const Navigation = () => {

  const [isOpenSideNav, setIsOpemSideNav ] = useState(true); 
  
  return (
    <>
        <nav className="header-bottom ">
          <div className="container ">
             <div className="row my-custom-row">
                 <div className="col-sm-3">
                     <div className="category-tab">
                       <button onClick={() => setIsOpemSideNav(!isOpenSideNav)}> 
                            <span className="menu"> <IoMenu /> </span>
                            <span> ALL CATEGORIES  </span>
                            <span className="angle"> <FaAngleDown /> </span>
                        </button>
                        <div className={`sidebarnav ${isOpenSideNav === true ? "open" : ""}`}>
                           <ul>
                             <li className="angle"> 
                              <Link href="#"> Men <FaAngleRight />  </Link>
                              <div className="submenu shadow">
                                <li> <Link href="/">  Clothing </Link> </li>
                                <li> <Link href="/">  FoodWear </Link> </li>
                                <li> <Link href="/">  Watches </Link> </li>
                                <li> <Link href="/">  Clothing </Link> </li>
                                <li> <Link href="/">  FoodWear </Link> </li>
                                <li> <Link href="/">  Watches </Link> </li>
                              </div>
                            </li>
                            <li> <Link href="#"> Women </Link></li>
                            <li> <Link href="#"> Beauty </Link></li>
                            <li> <Link href="#"> Watches </Link></li>
                            <li> <Link href="#"> Kids </Link></li>
                            <li> <Link href="#"> Gifts </Link></li>
                            <li> <Link href="#"> Beauty </Link></li>
                            <li> <Link href="#"> Watches </Link></li>
                            <li> <Link href="#"> Kids </Link></li>
                            <li> <Link href="#"> Gifts </Link></li>
                           </ul>
                        </div>
                     </div>
                 </div>
                 <div className="col-sm-9">
                   <div className="main-menu">
                      <ul className="list list-inline">
                        <li className="list-inline-item custom-icon "> 
                          <Link href="/">         
                               Home 
                              <span> <FaAngleDown /> </span>
                           </Link>
                           <div className="submenu shadow">
                             <li> <Link href="/"> Home 1 </Link> </li>
                             <li> <Link href="/"> Home 2 </Link> </li>
                             <li> <Link href="/"> Home 3 </Link> </li>
                            
                         </div>
                        </li>
                        <li className="list-inline-item custom-icon ">
                           <Link href="/">  Men 
                           <span> <FaAngleDown /> </span>
                         </Link>
                         <div className="submenu shadow">
                             <li> <Link href="/">  Clothing </Link> </li>
                             <li> <Link href="/">  FoodWear </Link> </li>
                             <li> <Link href="/">  Watches </Link> </li>
                             <li> <Link href="/">  Clothing </Link> </li>
                             <li> <Link href="/">  FoodWear </Link> </li>
                             <li> <Link href="/">  Watches </Link> </li>
                         </div>
                        </li>
                        <li className="list-inline-item"> 
                          <Link href="/">  Women  <span> <FaAngleDown /> </span> </Link>
                          <div className="submenu shadow">
                             <li> <Link href="/">  Clothing </Link> </li>
                             <li> <Link href="/">  FoodWear </Link> </li>
                             <li> <Link href="/">  Watches </Link> </li>
                             <li> <Link href="/">  Clothing </Link> </li>
                             <li> <Link href="/">  FoodWear </Link> </li>
                             <li> <Link href="/">  Watches </Link> </li>
                         </div>
                        </li>
                        <li className="list-inline-item"> 
                          <Link href="/"> Beauty  <span> <FaAngleDown /> </span>  </Link>
                          <div className="submenu shadow">
                             <li> <Link href="/">  Clothing </Link> </li>
                             <li> <Link href="/">  FoodWear </Link> </li>
                             <li> <Link href="/">  Watches </Link> </li>
                             <li> <Link href="/">  Clothing </Link> </li>
                             <li> <Link href="/">  FoodWear </Link> </li>
                             <li> <Link href="/">  Watches </Link> </li>
                         </div>
                        </li>
                        <li className="list-inline-item"> <Link href="/">  Watches </Link></li>
                        <li className="list-inline-item"> <Link href="/">  Kids </Link></li>
                        <li className="list-inline-item"> <Link href="/">  Gifts </Link></li>
                        <li className="list-inline-item"> <Link href="/">  blog </Link></li>
                        <li className="list-inline-item"> <Link href="/">  contact </Link></li>
                      </ul>
                   </div>
                 </div>
             </div>
          </div>
       </nav>
    </>
  )
}

export default Navigation
