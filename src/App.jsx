import {Routes, Route} from 'react-router-dom'
import Header from "./header";
import Footer from "./footer";
import Cart from "./cart-page/cart";
import Seller_product_listing from "./product-list/sellers-product-listing";
import './index.js'

function App() {
  return (
    <>
    <Header />
       <Routes>
       <Route path='/' element={<Seller_product_listing/>}/>
        <Route path='cart' element={<Cart/>}/>
      </Routes>  
      {/* <Seller_product_listing/> */}
      <Footer />
    </>
  )
}

export default App;
