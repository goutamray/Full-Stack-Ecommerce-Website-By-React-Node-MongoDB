import { Link } from "react-router-dom"

// react icons
import { IoMenu } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";


const Navigation = () => {
  return (
    <>
        <nav className="header-bottom ">
          <div className="container ">
             <div className="row my-custom-row">
                 <div className="col-sm-3">
                     <div className="category-tab">
                       <button> 
                            <span className="menu"> <IoMenu /> </span>
                            <span> ALL CATEGORIES  </span>
                            <span className="angle"> <FaAngleDown /> </span>
                        </button>
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
                        </li>
                        <li className="list-inline-item custom-icon ">
                           <Link href="/">  shop 
                           <span> <FaAngleDown /> </span>
                         </Link>

                        </li>
                        <li className="list-inline-item"> <Link href="/">  Meats & Seafood</Link></li>
                        <li className="list-inline-item"> <Link href="/"> backery </Link></li>
                        <li className="list-inline-item"> <Link href="/">  Beverages </Link></li>
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
