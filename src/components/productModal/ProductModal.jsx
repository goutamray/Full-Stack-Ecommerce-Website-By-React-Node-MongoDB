
// react icons 
import { Dialog } from "@mui/material"
import { IoMdClose } from "react-icons/io"
import { CiHeart } from "react-icons/ci";
import { FaCodeCompare } from "react-icons/fa6";

import Rating from '@mui/material/Rating';

import { useContext} from "react";
import { MyContext } from "../../App";


import QuantityBox from "../quantityBox/QuantityBox";

import "./ProductModal.css"; 
import ProductZoom from "../productZoom/ProductZoom";

const ProductModal = ({ closeProductModal }) => {
  const context = useContext(MyContext)


  return (
    <>
      <div>
        <Dialog  open={true} onClose={() => context.setIsOpenProductModal(false)} className="productModal">
          <div className="modal-top-part">
                <button className="close_btn" onClick={() => context.setIsOpenProductModal(false)}> <IoMdClose /> </button>
                <h3> All Natural Italian-Style Chicken Meatballs </h3>
                <div className="d-flex align-items-center"> 
                    <div className="brand d-flex align-items-center ">
                        <span> Brands </span>
                        <span className="ml-2"> <b> Welchs </b></span>
                    </div>
                    <Rating name="read-only" value={5} readOnly size="small"/>
                </div>
                <hr />
             <div>
               <div className="product-details-popup pt-3">
                  <div className="row">
                    <div className="col-md-5 ">
                      <ProductZoom />
                    </div>

                    <div className="col-md-7">
                      <div className="product-content">
                        <div className="price-total">
                             <span className="delete-price"> $24.00 </span>
                            <span className="regular-price"> $19.50 </span>
                        </div>
                        <p className="stock"> In Stock </p>
                        <p className="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus praesentium voluptate accusantium esse amet</p>
                        <div className="d-flex align-items-center gap-2">
                            <QuantityBox />
                           <button className="cart-btn"> Add To Cart </button>
                        </div>
                        <div className="wish-compare">
                            <button> <CiHeart /> Add To Wishlist </button>
                            <button> <FaCodeCompare /> compare </button>
                        </div>
                      </div>
                    </div>
               </div>
             </div>
            </div>
           </div>
         </Dialog>
      </div>
    </>
  )
}

export default ProductModal




