
// react icons 
import { FaAngleDown } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import React, { useState } from "react";

// material ui button
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import { Dialog } from "@mui/material";

const Transition = React.forwardRef(function Transition( props, ref ) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const CountryDrop = () => {
  const [isOpemModal, setIsOpenModal] = useState(false);

  return (
    <>
      <div >
         <Button className="countryDrop" onClick={() => setIsOpenModal(true)}>
            <div className="my-select">
                <span className="location"> Your Location </span>
                <span className="country"> Bangladesh </span>
            </div>
            <div className="ml-auto">
               <FaAngleDown />
            </div>
          </Button>
       </div>


       <Dialog  open={isOpemModal} onClose={() => setIsOpenModal(false)}  className="location-modal"  TransitionComponent={Transition}>
           <h2> Choose your Delivery Location </h2>
          <p> Enter your address and we will specify the offer for your area. </p>
          <button className="close_" onClick={() => setIsOpenModal(false)} > <IoMdClose /> </button>
          <div className="header-search w-100 mt-4">
                <button className="search"  > <IoIosSearch /> </button>
               <input type="text"placeholder="Search your area...." />
          </div>
          <ul className="countryList">
            <li> <Button onClick={() => setIsOpenModal(false)} > Bangladesh </Button> </li>
            <li> <Button onClick={() => setIsOpenModal(false)} > India </Button> </li>
            <li> <Button onClick={() => setIsOpenModal(false)} > Sri Lanka </Button> </li>
            <li> <Button onClick={() => setIsOpenModal(false)} > Nepal </Button> </li>
            <li> <Button onClick={() => setIsOpenModal(false)} > United States </Button> </li>
            <li> <Button onClick={() => setIsOpenModal(false)} > Canada </Button> </li>
            <li> <Button onClick={() => setIsOpenModal(false)} > Netherland </Button> </li>
            <li> <Button onClick={() => setIsOpenModal(false)} > Bangladesh </Button> </li>
            <li> <Button onClick={() => setIsOpenModal(false)} > India </Button> </li>
            <li> <Button onClick={() => setIsOpenModal(false)} > Sri Lanka </Button> </li>
            <li> <Button onClick={() => setIsOpenModal(false)} > Nepal </Button> </li>
            <li> <Button onClick={() => setIsOpenModal(false)} > United States </Button> </li>
            <li> <Button onClick={() => setIsOpenModal(false)} > Canada </Button> </li>
            <li> <Button onClick={() => setIsOpenModal(false)} > Netherland </Button> </li>
            <li> <Button onClick={() => setIsOpenModal(false)} > Bangladesh </Button> </li>
            <li> <Button onClick={() => setIsOpenModal(false)} > India </Button> </li>
            <li> <Button onClick={() => setIsOpenModal(false)} > Sri Lanka </Button> </li>
            <li> <Button onClick={() => setIsOpenModal(false)} > Nepal </Button> </li>
            <li> <Button onClick={() => setIsOpenModal(false)} > United States </Button> </li>
            <li> <Button onClick={() => setIsOpenModal(false)} > Canada </Button> </li>
            <li> <Button onClick={() => setIsOpenModal(false)} > Netherland </Button> </li>
          </ul>
       </Dialog>
    </>
  )
}

export default CountryDrop



