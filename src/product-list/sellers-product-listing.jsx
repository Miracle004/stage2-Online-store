// import Product_nav from "./product-nav"
// import Products from "./products"



// function Seller_product_listing(){
//     return(
//         <>
            
//             <div className="listingContainer">
//                 <Product_nav/>
//                 <Products/>
//             </div>
            
//         </>
//     )
// }
// export default Seller_product_listing
import React, { useState } from 'react';
import Product_nav from "./product-nav";
import Products from "./products";

function Seller_product_listing() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <div className="listingContainer">
      <Product_nav setCategory={setSelectedCategory} />
      <Products selectedCategory={selectedCategory} />
    </div>
  );
}

export default Seller_product_listing;
