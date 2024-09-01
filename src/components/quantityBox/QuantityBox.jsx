import { useEffect, useState } from "react";

// react icons 
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

const QuantityBox = (props) => {
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

   // Handle manual input
 const handleInputChange = (e) => {
  const value = Math.max(1, parseInt(e.target.value) || 1); // Ensures minimum value of 1
  setInputVal(value);
};

  // update quantity in cart page 
  useEffect(() => {
       if (props?.value !== undefined && props?.value !== null && props?.value !== "") {
        setInputVal(props?.value)
       }
  }, [props?.value]); 
  


  useEffect(() => {
    props.quantity(inputVal);
    if (typeof props.selectedItem === 'function') {
      props.selectedItem(props?.item, inputVal);
    }
  }, [inputVal]);

  return (
    <>
         <div className="quantityDrop d-flex align-items-center ">
            <button onClick={minus}> <FaMinus /> </button>
                 <input type="text" value={inputVal} onChange={handleInputChange}/>
             <button onClick={plus}> <FaPlus /> </button>
          </div>
    </>
  )
}

export default QuantityBox
