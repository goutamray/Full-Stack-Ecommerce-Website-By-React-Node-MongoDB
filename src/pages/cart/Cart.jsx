
import QuantityBox from "../../components/quantityBox/QuantityBox";

// react icons
import { RiDeleteBin6Fill } from "react-icons/ri"
import { PiSignOutBold } from "react-icons/pi";
import { FaLongArrowAltLeft } from "react-icons/fa";

import { Link } from "react-router-dom"

import Rating from '@mui/material/Rating';

import "./Cart.css";
const Cart = () => {
  return (
    <>
      <div className="section cart-section">
        <div className="container">
          <div className="row">
            <div className="col">
               <div className="top-part-cart">
                   <h1 className="head-cart"> Your Carts </h1>
                    <p> There are <span> 1 </span> products in your cart </p>                    
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
                    {/* cart body start  */}
                    <div className="cart-body">
                      <div className="table-responsive">
                      <table className="table table-bordered ">
                            <thead>
                                  <tr > 
                                    <th> Product </th>
                                    <th> Unit Price </th>
                                    <th> Quantity </th>
                                    <th> Subtotal </th>
                                    <th> Remove </th>
                                  </tr>           
                            </thead>
                            <tbody>   
                                <tr >
                                  <td> 
                                    <div className="table-box d-flex align-items-center">
                                        <div className="image">
                                            <Link to=""> 
                                                <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-60-600x600.jpg" alt="" />
                                            </Link>  
                                        </div>
                                        <div className="product-content">
                                          <Link to=""> <h5> Angies Boomchickapop Sweet & Salty Kettle Corn  </h5> </Link>  
                                          <Rating name="half-rating" defaultValue={4.5} precision={0.5} readOnly  size="small" />               
                                        </div>
                                    </div>
                                  </td>
                                  <td className="product-price"> $ 20 </td>
                                  <td> 
                                    <div className="cart-counter">
                                         <QuantityBox />
                                    </div>
                                  </td>
                                  <td className="subTotal"> $120.00 </td>
                                  <td className="delete-product"> 
                                      <span >  <RiDeleteBin6Fill  /> 
                                      </span>
                                  </td>
                                </tr>
                                <tr >
                                  <td> 
                                    <div className="table-box d-flex align-items-center">
                                        <div className="image">
                                            <Link to=""> 
                                                <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-60-600x600.jpg" alt="" />
                                            </Link>  
                                        </div>
                                        <div className="product-content">
                                          <Link to=""> <h5> Angies Boomchickapop Sweet & Salty Kettle Corn  </h5> </Link>  
                                          <Rating name="half-rating" defaultValue={4.5} precision={0.5} readOnly  size="small" />               
                                        </div>
                                    </div>
                                  </td>
                                  <td className="product-price"> $ 20 </td>
                                  <td> 
                                    <div className="cart-counter">
                                         <QuantityBox />
                                    </div>
                                  </td>
                                  <td className="subTotal"> $120.00 </td>
                                  <td className="delete-product"> 
                                      <span >  <RiDeleteBin6Fill  /> 
                                      </span>
                                  </td>
                                </tr>
                                <tr >
                                  <td> 
                                    <div className="table-box d-flex align-items-center">
                                        <div className="image">
                                            <Link to=""> 
                                                <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-60-600x600.jpg" alt="" />
                                            </Link>  
                                        </div>
                                        <div className="product-content">
                                          <Link to=""> <h5> Angies Boomchickapop Sweet & Salty Kettle Corn  </h5> </Link>  
                                          <Rating name="half-rating" defaultValue={4.5} precision={0.5} readOnly  size="small" />               
                                        </div>
                                    </div>
                                  </td>
                                  <td className="product-price"> $ 20 </td>
                                  <td> 
                                    <div className="cart-counter">
                                         <QuantityBox />
                                    </div>
                                  </td>
                                  <td className="subTotal"> $120.00 </td>
                                  <td className="delete-product"> 
                                      <span >  <RiDeleteBin6Fill  /> 
                                      </span>
                                  </td>
                                </tr>
                                <tr >
                                  <td> 
                                    <div className="table-box d-flex align-items-center">
                                        <div className="image">
                                            <Link to=""> 
                                                <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-60-600x600.jpg" alt="" />
                                            </Link>  
                                        </div>
                                        <div className="product-content">
                                          <Link to=""> <h5> Angies Boomchickapop Sweet & Salty Kettle Corn  </h5> </Link>  
                                          <Rating name="half-rating" defaultValue={4.5} precision={0.5} readOnly  size="small" />               
                                        </div>
                                    </div>
                                  </td>
                                  <td className="product-price"> $ 20 </td>
                                  <td> 
                                    <div className="cart-counter">
                                         <QuantityBox />
                                    </div>
                                  </td>
                                  <td className="subTotal"> $120.00 </td>
                                  <td className="delete-product"> 
                                      <span >  <RiDeleteBin6Fill  /> 
                                      </span>
                                  </td>
                                </tr>
                                <tr >
                                  <td> 
                                    <div className="table-box d-flex align-items-center">
                                        <div className="image">
                                            <Link to=""> 
                                                <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-60-600x600.jpg" alt="" />
                                            </Link>  
                                        </div>
                                        <div className="product-content">
                                          <Link to=""> <h5> Angies Boomchickapop Sweet & Salty Kettle Corn  </h5> </Link>  
                                          <Rating name="half-rating" defaultValue={4.5} precision={0.5} readOnly  size="small" />               
                                        </div>
                                    </div>
                                  </td>
                                  <td className="product-price"> $ 20 </td>
                                  <td> 
                                    <div className="cart-counter">
                                         <QuantityBox />
                                    </div>
                                  </td>
                                  <td className="subTotal"> $120.00 </td>
                                  <td className="delete-product"> 
                                      <span >  <RiDeleteBin6Fill  /> 
                                      </span>
                                  </td>
                                </tr>
                                <tr >
                                  <td> 
                                    <div className="table-box d-flex align-items-center">
                                        <div className="image">
                                            <Link to=""> 
                                                <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-60-600x600.jpg" alt="" />
                                            </Link>  
                                        </div>
                                        <div className="product-content">
                                          <Link to=""> <h5> Angies Boomchickapop Sweet & Salty Kettle Corn  </h5> </Link>  
                                          <Rating name="half-rating" defaultValue={4.5} precision={0.5} readOnly  size="small" />               
                                        </div>
                                    </div>
                                  </td>
                                  <td className="product-price"> $ 20 </td>
                                  <td> 
                                    <div className="cart-counter">
                                         <QuantityBox />
                                    </div>
                                  </td>
                                  <td className="subTotal"> $120.00 </td>
                                  <td className="delete-product"> 
                                      <span >  <RiDeleteBin6Fill  /> 
                                      </span>
                                  </td>
                                </tr>
                            </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="continue-btn mb-3">
                     <Link to="/"> <span> <FaLongArrowAltLeft /></span> Continue Shopping </Link>
            </div>
               </div>

               {/**** cart total part  ******/}
                <div className="col-md-4 cart-part-right">
                  <div className="total-box">
                    <div className="card p-2">
                      <div className="card-body">
                        <h3 className="cart-total"> Cart Totals </h3>
                        <div className="sub-total d-flex align-items-center justify-content-between">
                            <p className="top-total"> Subtotal </p>
                            <h4 className="sub-price">  $120.00 </h4>
                        </div>
                        <div className='border-info d-flex align-items-center justify-content-between mb-4'>
                            <h5 className='mb-0 same-text'>Shipping</h5>
                            <h3 className='right-text ml-auto mb-0 font-weight-bold'><span >Free</span></h3>
                          </div>


                        <div className='d-flex align-items-center justify-content-between mb-4'>
                            <h5 className='mb-0 same-text'>Estimate for</h5>
                            <h3 className='right-text ml-auto mb-0 font-weight-bold'>United Kingdom</h3>
                        </div>

                        <div className='d-flex align-items-center justify-content-between  mb-4'>
                          <h5 className='mb-0 same-text'>Total</h5>
                          <h3 className='right-text ml-auto mb-0 font-weight-bold'> $120.00 <span className='text-g'>                
                            </span></h3>
                        </div>
                        <div className="process-btn ">
                                <Link to=""> Proceed To Checkout <PiSignOutBold className='cart-icon'/> </Link>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart





