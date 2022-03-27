import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    const {products,handleAddToCart} =props
    const {img,name,price}= props.product
    return (
        <div className='product'>
        <img src={img} alt="" />
        <p>{name}</p>
        <p>${price}</p> 
        
        <button onClick={()=>props.handleAddToCart(props.product)} className='btn-cart'>
            add to cart
       <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </button>
        </div>
    );
};

export default Product;