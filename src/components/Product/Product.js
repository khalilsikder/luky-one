import React from 'react';
import './Product.css'
const Product = (props) => {
    const {img,name,price}= props.product
    return (
        <div className='product'>
        <img src={img} alt="" />
        <p>{name}</p>
        <p>${price}</p>
        
        <button onClick={()=>props.handleAddToCart(props.product)} className='btn-cart'>
            add to cart
        </button>
        </div>
    );
};

export default Product;