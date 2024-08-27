import { Link } from "react-router-dom";

// react icons
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6"; 

import { useContext } from "react";
import { MyContext } from "../../../App";

const Navigation = () => {
  const [isOpenSideNav, setIsOpemSideNav ] = useState(false); 
  
  const context = useContext(MyContext); 
  
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
                           </Link>
                        </li>

                        {
                            context.categoryData?.categoryList?.length !== 0 &&
                            context.categoryData?.categoryList?.map((item, index) => {
                              return  <li className="list-inline-item" key={index}> 
                              <Link to={`/category/${item._id}`}> {item.name } 
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
                            })
                          }
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
