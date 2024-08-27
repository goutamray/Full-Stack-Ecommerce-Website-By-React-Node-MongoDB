
// material ui 
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio'; 
import RadioGroup from '@mui/material/RadioGroup'; 
import Rating from '@mui/material/Rating'; 

// range slider 
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { useState } from 'react';

import sidebarImg from "../../assets/banner/sidebar.png"
import { useContext } from 'react';
import { MyContext } from '../../App';


const SideBar = (props) => {
  const [value, setValue] = useState([100, 60000]);
  const [radioData, setRadioData] = useState();

  const context = useContext(MyContext); 

  // handle category 
  const handleChange = (event) => {
     setRadioData(event.target.value);
     props.filterData(event.target.value);
  };

  return (
    <>
      <div className="sidebar">
        <div className="sticky">
          <div className="filterBox">
              <h6> PRODUCT CATEGORIES </h6>
              <div className="scroll">
                <ul>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={radioData}
                  onChange={handleChange}
                  >
                     {
                        context?.categoryData?.categoryList?.length !== 0 &&
                        context?.categoryData?.categoryList?.map((item, index) => {
                           return <li key={index}> 
                           <FormControlLabel value={item?._id}  control={<Radio />} label={item?.name} />
                        </li>
                        })
                     } 
                  </RadioGroup>
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

          {/* Brand */}
          <div className="filterBox">
              <h6> Filter By Rating </h6>
              <div className="scroll">
                <ul>
                     <li>
                        <Rating name="read-only" value={5} readOnly size="small" />
                     </li>
                     <li>
                        <Rating name="read-only" value={4} readOnly size="small" />
                     </li>
                     <li>
                        <Rating name="read-only" value={3} readOnly size="small" />
                     </li>
                     <li>
                        <Rating name="read-only" value={2} readOnly size="small" />
                     </li>
                     <li>
                        <Rating name="read-only" value={1} readOnly size="small" />
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





