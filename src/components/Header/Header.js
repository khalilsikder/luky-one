import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <h2> Fancy Laptops Collection</h2>
            <div>
                <a href="Home">Home</a>
                <a href="order">Order</a>
                <a href="contact">Contact</a>
                <a href="about">About</a>
            </div>
        </nav>

    );
};

export default Header;