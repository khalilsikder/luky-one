import React from 'react';
import './Card.css'
import {BsFillCartCheckFill} from 'react-icons/bs';
const Card = ({data,handleAddToCart}) => {
    const {name,img,price,id}= data;
    // console.log(data);
   
    return (    
    <div className='card'>
         <div className='img-container'>
            <img src={img} alt=''></img>
        </div>
            <h1>{name}</h1>
            <p>price :{price}</p>
        <div className='add-to-cart'>
            <button onClick={()=>handleAddToCart(data)}>
             <BsFillCartCheckFill className ='icon'/>
            </button>
        </div>
             
    </div>

        
    );
};

export default Card;