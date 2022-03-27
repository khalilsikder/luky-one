import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Showroom.css'

const Showroom = () => {
    const[products,setProducts]=useState([])
    const[cart,setCart] =useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res =>res.json())
        .then(data =>setProducts(data))
    },[])

    const handleAddToCart = (product)=>{
        // console.log(product);
        const newCart =[...cart,product]
        setCart(newCart);
    }
    return (
        <div className='showroom-container'>
            <div className="products-container">
                {
                    products.map(product =><Product
                     key ={product.id}
                     product={product}
                     handleAddToCart={handleAddToCart}
                     >
                    </Product>)
                }
            </div>
            <div className="card-container">
               <h3>Order summary</h3>
               <p>Select Iteams:  {cart.length}</p> 
            </div>
        </div>
    );
};

export default Showroom;