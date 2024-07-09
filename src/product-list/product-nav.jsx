/* import React, { useRef, useEffect } from 'react';


    function Product_nav(){
     const navRef = useRef(null);
    // console.log(navRef.current.children);
     return(
         <nav ref={navRef} className="ourProducts" id="productNav">
             <li>All Products</li>
             <li>Laptops</li>
             <li>Phone</li>
             <li>Accessories</li>
         </nav>
     )
 }

    export default Product_nav
 */

import React, { useRef } from 'react';

function Product_nav({ setCategory }) {
  const navRef = useRef(null);

  const handleCategoryClick = (category) => {
    setCategory(category);
  };

  return (
    <nav ref={navRef} className="ourProducts" id="productNav">
      <li onClick={() => handleCategoryClick('All')}>All Products</li>
      <li onClick={() => handleCategoryClick('Laptops')}>Laptops</li>
      <li onClick={() => handleCategoryClick('Phones')}>Phones</li>
      <li onClick={() => handleCategoryClick('Accessories')}>Accessories</li>
    </nav>
  );
}

export default Product_nav;
