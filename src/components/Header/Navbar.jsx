import React from 'react';

const Navbar = ({ selectedProduct, price }) => {
    return (
        <div className="navbar flex bg-base-100">
            <div className="logo">
                Logo
            </div>
            <div className="menus flex">
                <li className='item'>Home</li>
                <li className='item'>Product</li>
                <li className='item'>cart:{selectedProduct.length}</li>
                <li className='item'>{price}</li>

            </div>
        </div>
    );
};

export default Navbar;