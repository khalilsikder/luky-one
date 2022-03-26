import React from 'react';
import './Card.css'
const Card = ({data}) => {
    const {name,img,price}= data;
    console.log(data);
    return (
        <div className='card'>
            <div className='img-container'>
            <img src={img} alt=''></img>
            </div>
            <h1>{name}</h1>
            <p>price :{price}</p>
            <div>
                <button>
                    add to card
                </button>
            </div>
        </div>
        
    );
};

export default Card;