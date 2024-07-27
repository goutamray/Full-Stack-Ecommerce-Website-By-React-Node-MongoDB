
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

// import pages 
import Home from "../src/pages/home/Home"
import Listing from './pages/listing/Listing';

// import components
import Header from './components/header/Header'
import Footer from './components/footer/Footer';
import ProductModal from './components/productModal/ProductModal';

// context 
const MyContext = createContext();

import ProductDetails from './pages/productDetails/ProductDetails';
import Cart from './pages/cart/Cart';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import SignIn from './pages/signIn/SignIn';
import SignUp from './pages/signUp/SignUp';
import MyAccount from './pages/myAccount/MyAccount';
import Dashboard from './pages/myAccount/dashboard/Dashboard';

import './App.css';
import Logout from './pages/myAccount/logout/Logout';
import ChangePassword from './pages/myAccount/changePassword/ChangePassword';
import AccountDetail from './pages/myAccount/accountDetails/AccountDetail';
import Address from './pages/myAccount/address/Address';
import Download from './pages/myAccount/download/Download';
import Order from './pages/myAccount/order/Order';

function App() {
  const [countryList , setCountryList ] = useState([]);
  const [selecetedCountry, setSelectedCountry ] = useState('');
  const [isOpenProductModal, setIsOpenProductModal] = useState(false);
  const [isHeaderFooterShow, setIsHeaderFooterShow] = useState(true); 
  const [isLogin, setIsLogin] = useState(false); 

 // get all countries
  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries")
  }, [])


  const getCountry = async(url) => {
     const response = await axios.get(url).then((res) => {
      setCountryList(res.data.data);
      console.log(response.data);
     })
  }

  // send all data
  const values = {
    countryList,
    selecetedCountry,
    setSelectedCountry,
    isOpenProductModal,
    setIsOpenProductModal,
    isHeaderFooterShow, 
    setIsHeaderFooterShow, 
    isLogin,
    setIsLogin,
  };   

  return (
    <>
     <BrowserRouter >
        <MyContext.Provider value={values}>
          {/* header part */}
            {
              isHeaderFooterShow === true &&  <Header />
            }
          
                <Routes >
                  <Route  path='/' exact={true} element={ <Home /> }/>
                  <Route  path='/about' exact={true} element={ <About /> }/>
                  <Route  path='/contact' exact={true} element={ <Contact /> }/>
                  <Route  path='/cat' exact={true} element={ <Listing /> }/>
                  <Route  path='/cat/:id' exact={true} element={ <Listing /> }/>
                  <Route  path='/product/:id' exact={true} element={ <ProductDetails /> }/>
                  <Route  path='/cart' exact={true} element={ <Cart /> }/>
                  <Route  path='/signIn' exact={true} element={ <SignIn /> }/>
                  <Route  path='/signUp' exact={true} element={ <SignUp /> }/>

                   {/* children routing */}
                  <Route  path='/my-account' exact={true} element={ <MyAccount /> } >
                     <Route path='dashboard'  exact={true} element={<Dashboard />}/>
                     <Route path='orders'  exact={true} element={<Order />}/>
                     <Route path='downloads'  exact={true} element={<Download />}/>
                     <Route path='address'  exact={true} element={<Address />}/>
                     <Route path='account-details'  exact={true} element={<AccountDetail />}/>
                     <Route path='change-password'  exact={true} element={<ChangePassword />}/>
                     <Route path='logout'  exact={true} element={<Logout />}/>
                  </Route >
              </Routes>

            {/* footer part  */}
             {
                isHeaderFooterShow === true &&   <Footer />
             }
           

            {/* Product modal */}
             {
                isOpenProductModal === true && <ProductModal />
             }
         
          </MyContext.Provider>
     </BrowserRouter>
    </>
  )
}

export default App
export { MyContext }



