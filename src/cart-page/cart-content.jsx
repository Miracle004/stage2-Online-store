import bigCart from '../assets/big-cart.png'
import { Link } from 'react-router-dom'

function Cartcontent(){
    return(
        <main id='cartMain'>
            <img src={bigCart} alt='cart-image'  id='big-cart'/>
            <h1>Your Cart Is Empty</h1>
            <Link to='/' id='product-page-link'>Continue Shopping</Link>
        </main>

    )
}

export default Cartcontent