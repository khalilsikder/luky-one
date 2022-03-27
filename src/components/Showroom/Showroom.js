import React, { useEffect, useState } from 'react';
import './Showroom.css'

const Showroom = () => {
    const[products,setProducts]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res =>res.json())
        .then(data =>setProducts(data))
    },[])
    return (
        <div className='showroom-container'>
            <div className="products-container">
                {
                    products.map(product =><Product
                     key ={product.id}
                     product={product}
                     >
                    </Product>)
                }
            </div>
            <div className="card-container">
               <h3>Order summary</h3> 
            </div>
        </div>
    );
};

export default Showroom;