
// react icons 
import { FaAngleDown } from "react-icons/fa6";

// material ui button
import Button from '@mui/material/Button';

const CountryDrop = () => {
  return (
    <>
      <div >
         <Button className="countryDrop">
            <div className="my-select">
                <span className="location"> Your Location </span>
                <span className="country"> Bangladesh </span>
            </div>
            <div className="ml-auto">
               <FaAngleDown />
            </div>
          </Button>
       </div>
    </>
  )
}

export default CountryDrop



