
// material ui 
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

// range slider 
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { useState } from 'react';

import sidebarImg from "../../assets/banner/sidebar.png"


const SideBar = () => {
  const [value, setValue] = useState([100, 60000]);
  const [value2, setValue2] = useState(0);


  return (
    <>
      <div className="sidebar">
        <div className="sticky">
          <div className="filterBox">
              <h6> PRODUCT CATEGORIES </h6>
              <div className="scroll">
                <ul>
                  <li>
                     <FormControlLabel control={<Checkbox />} label="Man" />
                  </li>
                  <li>
                     <FormControlLabel control={<Checkbox />} label="Woman" />
                  </li>
                  <li>
                     <FormControlLabel control={<Checkbox />} label="Beauty" />
                  </li>
                  <li>
                     <FormControlLabel control={<Checkbox />} label="Kids" />
                  </li>
                  <li>
                     <FormControlLabel control={<Checkbox />} label="Woman" />
                  </li>
                  <li>
                     <FormControlLabel control={<Checkbox />} label="Beauty" />
                  </li>
                  <li>
                     <FormControlLabel control={<Checkbox />} label="Woman" />
                  </li>
                  <li>
                     <FormControlLabel control={<Checkbox />} label="Kids" />
                  </li>
                  <li>
                     <FormControlLabel control={<Checkbox />} label="Beauty" />
                  </li>
                </ul>
                 
              </div>
          </div>

          <div className="filterBox">
              <h6 >  FILTER BY PRICE </h6>
              <RangeSlider min={100} max={60000}  step={5} value={value} onInput={setValue} />
              <div className="d-flex pt-2 pb-2 priceRange">
                 <span> From: <strong className='text-dark'>Tk : {value[0]} </strong> </span>
                 <span className='ml-auto second-price'> From: <strong className='text-dark'>Tk : {value[1]} </strong> </span>
              </div>
          </div>

          {/* stock */}
          <div className="filterBox">
              <h6> PRODUCT STATUS </h6>
              <div className="scroll">
                <ul>
                  <li>
                     <FormControlLabel control={<Checkbox />} label="In Stock" />
                  </li>
                  <li>
                     <FormControlLabel control={<Checkbox />} label="On Sale" />
                  </li>
                </ul>
              </div>
          </div>
          {/* Brand */}
          <div className="filterBox">
              <h6> BRANDS</h6>
              <div className="scroll">
                <ul>
                  <li>
                     <FormControlLabel control={<Checkbox />} label="Frito Lay" />
                  </li>
                  <li>
                     <FormControlLabel control={<Checkbox />} label="Nespresso" />
                  </li>
                  <li>
                     <FormControlLabel control={<Checkbox />} label="Oreo" />
                  </li>
                  <li>
                     <FormControlLabel control={<Checkbox />} label="Quaker" />
                  </li>
                </ul>
              </div>
          </div>
          <div className="image">
            <img src={sidebarImg} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default SideBar





