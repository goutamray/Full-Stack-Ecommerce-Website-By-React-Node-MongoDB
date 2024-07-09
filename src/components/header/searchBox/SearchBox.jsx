import { IoIosSearch } from "react-icons/io";

const SearchBox = () => {
  return (
    <>
          <div className="header-search">
               <input type="text"placeholder="Search for products...." />
                <button className="search"> <IoIosSearch /> </button>
          </div>
    </>
  )
}

export default SearchBox



