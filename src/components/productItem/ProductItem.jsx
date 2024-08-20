

import { Link } from "react-router-dom";

// material ui 
import Rating from '@mui/material/Rating';



// react icons 
import { SlSizeFullscreen } from "react-icons/sl";
import { IoIosHeartEmpty } from "react-icons/io";

import { useContext } from "react";
import { MyContext } from "../../App";

const ProductItem = (props) => {
 const context = useContext(MyContext)

  const viewProductDetails = (id) => {
    context.setIsOpenProductModal(true); 
  }; 


  return (
    <>
       <div className={`item product-item ${props.itemView} `}>
            <div className="imagewrapper">
                  <img src={props?.item?.photo[0]} alt="product" />
                    <div className="discount">
                         <span> 10% </span>
                   </div>
                   <div className="actions">
                      <button className="screen" onClick={() => viewProductDetails(1)}> <SlSizeFullscreen /> </button>
                      <button className="cart"> <IoIosHeartEmpty /> </button>
                   </div>
            </div>
             <div className="all-details">
                  <Link href="#"> {props?.item?.name.length > 30 ? props?.item?.name.substring(0, 35) + ". . ." : props?.item?.name } </Link>
                   <p> In Stock </p>
                  <Rating name="read-only" value={props?.item?.rating} readOnly size="small" precision={0.5} />
                   <div className="price-total">
                      <span className="delete-price"> {props?.item?.price} </span>
                      <span className="regular-price"> {props?.item?.oldPrice}  </span>
                      <span className="currency-data"> BDT  </span>
                   </div>
                    <Link href="#" className="cart-btn"> Add to cart </Link>
               </div>                     
         </div>

   
    </>
  )
}

export default ProductItem
