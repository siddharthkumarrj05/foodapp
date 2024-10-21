
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/navbar/Navbar';
import Home from './component/pages/Home/Home';
import PlaceOrder from './component/pages/PlaceOrder/PlaceOrder';
import Card from './component/pages/card/Cart';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/card/:id" element={<Card/>} />
            <Route path="/order" element={<PlaceOrder/>} />
          </Routes>
      </BrowserRouter>
    </>
      
  )
}

export default App

