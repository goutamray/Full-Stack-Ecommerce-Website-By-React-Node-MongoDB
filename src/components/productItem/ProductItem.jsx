

import { Link } from "react-router-dom";
import product from "../../assets/banner/product.jpg"
import Rating from '@mui/material/Rating';

import { SlSizeFullscreen } from "react-icons/sl";
import { IoIosHeartEmpty } from "react-icons/io";

const ProductItem = () => {
  return (
    <>
       <div className="item product-item ">
            <div className="imagewrapper">
                  <img src={product} alt="product" />
                    <div className="discount">
                         <span> 10% </span>
                   </div>
                   <div className="actions">
                      <button className="screen"> <SlSizeFullscreen /> </button>
                      <button className="cart"> <IoIosHeartEmpty /> </button>
                   </div>
            </div>
             <div className="all-details">
                  <Link href="#"> Field Roast Chao Cheese Creamy Original </Link>
                   <p> In Stock </p>
                  <Rating name="read-only" value={5} readOnly size="small" precision={0.5} />
                   <div className="price-total">
                      <span className="delete-price"> $24.00 </span>
                      <span className="regular-price"> $19.50 </span>
                   </div>
                    <Link href="#" className="cart-btn"> Add to cart </Link>
               </div>                     
         </div>
    </>
  )
}

export default ProductItem
