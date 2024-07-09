
function Add_button(){
    const cartImage = './src/assets/cart.png'; 
    return(
        <button id='add_to_cart' type="button">ADD TO CART <img src={cartImage} alt=""/></button>
    );
}

export default Add_button