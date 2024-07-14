
import { useState } from "react";
import { Link } from "react-router-dom";

// import components 
import SideBar from "../../components/sidebar/SideBar";
import ProductItem from "../../components/productItem/ProductItem";

// react icons 
import { FaAngleDown } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { RiGridFill } from "react-icons/ri";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";

// react icons 
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// material ui
import Pagination from '@mui/material/Pagination';


import "./Listing.css";
const Listing = () => {
  const [productView, setProductView ] = useState('four');

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <>
       <div className="bradcrumb py-10">
          <div className="container">
            <div className="col">
                <h2 className="pt-5"> <Link to="/"> Home </Link> / Shop</h2>
            </div>
          </div>
       </div>
        <div className="product-listing-page">
          <div className="container">
            <div className="productListing d-flex">
                <SideBar />
                <div className="content_right">
                   <div className="showBy d-flex align-items-center justify-content-between">
                      <div className="left-grid d-flex align-items-center gap-2 ">
                         <button className={productView === "one" && "acti" } 
                         onClick={() => setProductView('one')}> <FiMenu /> </button>
                         <button className={productView === "three" && "acti" } 
                          onClick={() => setProductView('three')}> <RiGridFill /> </button>
                         <button className={productView === "four" && "acti" } 
                         onClick={() => setProductView('four')}> <TfiLayoutGrid4Alt /> </button>
                      </div>
                      <div className="drop-btn">
                      <Button
                          id="basic-button"
                          aria-controls={open ? 'basic-menu' : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? 'true' : undefined}
                          onClick={handleClick}
                        >
                          show 9 <span> <FaAngleDown  /> </span> 
                        </Button>
                        <Menu
                          className="showPerPageDrop"
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          MenuListProps={{
                            'aria-labelledby': 'basic-button',
                          }}
                        >
                          <MenuItem onClick={handleClose}> 10 </MenuItem>
                          <MenuItem onClick={handleClose}> 20 </MenuItem>
                          <MenuItem onClick={handleClose}> 30 </MenuItem>
                          <MenuItem onClick={handleClose}> 40 </MenuItem>
                        </Menu>
                      </div>
                   </div>
                   <div className="productListingGrid">
                      <ProductItem itemView={productView} />
                      <ProductItem itemView={productView} />
                      <ProductItem itemView={productView} />
                      <ProductItem itemView={productView} />
                      <ProductItem itemView={productView} />
                      <ProductItem itemView={productView} />
                      <ProductItem itemView={productView} />
                      <ProductItem itemView={productView} />     
                      <ProductItem itemView={productView} />     
                      <ProductItem itemView={productView} />     
                      <ProductItem itemView={productView} />     
                      <ProductItem itemView={productView} />     
                      <ProductItem itemView={productView} />     
                      <ProductItem itemView={productView} />     
                      <ProductItem itemView={productView} />     
                      <ProductItem itemView={productView} />     
                      <ProductItem itemView={productView} />     
                   </div>

                   {/* pagination */}
                   <div className="d-flex justify-content-center align-items-center mt-5">
                       <Pagination count={10} color="primary" />
                   </div>
                </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Listing




