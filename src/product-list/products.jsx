// import productA from '../assets/dell xps.jpg';
// import productB from '../assets/galaxy s21.jpg';
// import productC from '../assets/ipone14.jpg';
// import productD from '../assets/galaxy Z flip.jpg';
// import productE from '../assets/iphone SE.jpg';
// import productF from '../assets/Lg wirelss earbuds.jpg';
// import productG from '../assets/camon 20.jpg';
// import productH from '../assets/oraimo earpiece.jpg';
// import productI from '../assets/macbook air M1.jpg';
// import rating from '../assets/stars-review.jpg';
// import Add_button from './itemQuantity';
// import heartIcon from '../assets/heart-icon.png';
// import nairaIcon from '../assets/naira-Icon.png'

// function Products(){
//     return(
//         <div className="product_list"> 
//             <div className="card">
//                 <img src={productA} alt="Dell Xps 9510" />
//                 <p className="deviceName">Dell XPS 9510</p>
//                 <p className="price"><img src={nairaIcon} alt='naira-sign' /> 950,000</p>
//                 <img src={rating} className='rating' alt="rating" />
//                 <Add_button/>
                
//             </div>

//             <div className="card">
//                 <img src={productB} alt="Samsung Galaxy S21" />
//                 <p className="deviceName">Samsung Galaxy S21</p>
//                 <p className="price"><img src={nairaIcon} alt='naira-sign' />1,009,000</p>
//                 <img src={rating} className='rating' alt="rating" />
//                 <Add_button/>
//             </div>

//             <div className="card">
//                 <img src={productC}/>
//                 <p className="deviceName">iphone 14 pro max</p>
//                 <p className="price"><img src={nairaIcon} alt='naira-sign' />1,489,000</p>
//                 <img src={rating} className='rating' alt="rating"/>
//                 <Add_button/>
//             </div>

//             <div className="card">
//                 <img src={productD} />
//                 <p className="deviceName">Samsung Galaxy Z Flip</p>
//                 <p className="price"><img src={nairaIcon} alt='naira-sign' />1,559,000</p>
//                 <img src={rating} className='rating' alt="rating" />
//                 <Add_button/>
//             </div>
            
//             <div className="card">
//                 <img src={productE}/>
//                 <p className="deviceName">Iphone SE mini</p>
//                 <p className="price"><img src={nairaIcon} alt='naira-sign' />120,000</p>
//                 <img src={rating} className='rating' alt="rating" />
//                 <Add_button/>
//             </div>

//             <div className="card">
//                 <img src={productF} />
//                 <p className="deviceName">LG Wireless Earbuds</p>
//                 <p className="price"><img src={nairaIcon} alt='naira-sign' />45,000</p>
//                 <img src={rating} className='rating' alt="rating" />
//                 <Add_button/>
//             </div>

//             <div className="card">
//                 <img src={productG} alt="Tecno Camon 20" />
//                 <p className="deviceName"></p>
//                 <p className="price"><img src={nairaIcon} alt='naira-sign' />450,000</p>
//                 <img src={rating} className='rating' alt="rating" />
//                 <Add_button/>
//             </div>

//             <div className="card">
//                 <img src={productH} />
//                 <p className="deviceName">Oraimo Earpiece</p>
//                 <p className="price"><img src={nairaIcon} alt='naira-sign' />8,000</p>
//                 <img src={rating} className='rating' alt="rating" />
//                 <Add_button/>
//             </div>

//             <div className="card">
//                 <img src={productI}/>
//                 <p className="deviceName">Macbook Air M1</p>
//                 <p className="price"><img src={nairaIcon} alt='naira-sign' />1,599,000</p>
//                 <img src={rating} className='rating' alt="rating" />
//                 <Add_button/>
//             </div>

//         </div>
//     );
// }
// export default Products
import productA from '../assets/dell xps.jpg';
import productB from '../assets/galaxy s21.jpg';
import productC from '../assets/ipone14.jpg';
import productD from '../assets/galaxy Z flip.jpg';
import productE from '../assets/iphone SE.jpg';
import productF from '../assets/Lg wirelss earbuds.jpg';
import productG from '../assets/camon 20.jpg';
import productH from '../assets/oraimo earpiece.jpg';
import productI from '../assets/macbook air M1.jpg';
import rating from '../assets/stars-review.jpg';
import Add_button from './itemQuantity';
import nairaIcon from '../assets/naira-Icon.png';

const productData = [
  { src: productA, name: 'Dell XPS 9510', price: 950000, category: 'Laptops' },
  { src: productB, name: 'Samsung Galaxy S21', price: 1009000, category: 'Phones' },
  { src: productC, name: 'iPhone 14 Pro Max', price: 1489000, category: 'Phones' },
  { src: productD, name: 'Samsung Galaxy Z Flip', price: 1559000, category: 'Phones' },
  { src: productE, name: 'iPhone SE Mini', price: 120000, category: 'Phones' },
  { src: productF, name: 'LG Wireless Earbuds', price: 45000, category: 'Accessories' },
  { src: productG, name: 'Tecno Camon 20', price: 450000, category: 'Phones' },
  { src: productH, name: 'Oraimo Earpiece', price: 8000, category: 'Accessories' },
  { src: productI, name: 'Macbook Air M1', price: 1599000, category: 'Laptops' },
];

function Products({ selectedCategory }) {
  const filteredProducts = selectedCategory === 'All'
    ? productData
    : productData.filter(product => product.category === selectedCategory);

  return (
    <div className="product_list">
      {filteredProducts.map((product, index) => (
        <div key={index} className="card">
          <img src={product.src} alt={product.name} />
          <p className="deviceName">{product.name}</p>
          <p className="price"><img src={nairaIcon} alt='naira-sign' />{product.price.toLocaleString()}</p>
          <img src={rating} className='rating' alt="rating" />
          <Add_button />
        </div>
      ))}
    </div>
  );
}

export default Products;
