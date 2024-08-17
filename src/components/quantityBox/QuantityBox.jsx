import { useState } from "react";

// react icons 
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

const QuantityBox = () => {
  const [inputVal, setInputVal ] = useState(1);

  // plus 
  const plus = () => {
    setInputVal( inputVal + 1)
  };

  // minus 
  const minus = () => {
    if (inputVal > 1) {
      setInputVal( inputVal - 1);
    }
  };

  return (
    <>
         <div className="quantityDrop d-flex align-items-center ">
            <button onClick={minus}> <FaMinus /> </button>
            <input type="text" value={inputVal}/>
             <button onClick={plus}> <FaPlus /> </button>
          </div>
    </>
  )
}

export default QuantityBox
