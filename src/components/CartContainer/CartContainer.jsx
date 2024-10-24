import React from 'react';
import './CartContainer.css'
import Cart from '../Cart/Cart';
import About from '../About/About'

const CartContainer = ({ handleActiveStatus, isActive, selectedProduct, handleDelete }) => {
    return (
        <div>
            <h1>Cartcontainer</h1>
            <div className='flex'>
                <div onClick={() => { handleActiveStatus("cart") }} className={`${isActive.cart ? 'btn btn-active' : 'btn'}`}>CART</div>
                <div onClick={() => { handleActiveStatus("about") }} className={`${isActive.cart ? 'btn' : 'btn btn-active'}`}>About</div>

            </div>
            {isActive.cart ? <Cart selectedProduct={selectedProduct} handleDelete={handleDelete}></Cart> : <About></About>}
        </div>
    );
};

export default CartContainer;