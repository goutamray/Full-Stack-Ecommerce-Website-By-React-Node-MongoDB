
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from "../src/pages/home/Home"
import Header from './components/header/Header'


function App() {
  return (
    <>
     <BrowserRouter >
     {/* header part */}
       <Header />

          <Routes >
            <Route  path='/' exact={true} element={ <Home /> }/>
          </Routes>

      {/* footer part  */}

     </BrowserRouter>
    </>
  )
}

export default App
