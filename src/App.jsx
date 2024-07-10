
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

// import pages 
import Home from "../src/pages/home/Home"

// import components
import Header from './components/header/Header'

// context 
const MyContext = createContext();

import './App.css'
function App() {
  const [countryList , setCountryList ] = useState([]);
  const [selecetedCountry, setSelectedCountry ] = useState('')

 // get all countries
  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries")
  }, [])


  const getCountry = async(url) => {
     const response = await axios.get(url).then((res) => {
      setCountryList(res.data.data);
      console.log(res.data.data);
     })
  }

  // send all data
  const values = {
    countryList,
    selecetedCountry,
    setSelectedCountry,
  };   

  return (
    <>
     <BrowserRouter >
        <MyContext.Provider value={values}>
          {/* header part */}
            <Header />

                <Routes >
                  <Route  path='/' exact={true} element={ <Home /> }/>
                </Routes>

            {/* footer part  */}

  
          </MyContext.Provider>
     </BrowserRouter>
    </>
  )
}

export default App
export { MyContext }
