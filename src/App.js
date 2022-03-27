import React, { useEffect, useState } from 'react';
import Card from './components/Card/Card';
import Header from './components/Header/Header';


const App = () => {
    const[laptops,setLaptops] = useState([])
    useEffect( ()=>{
        fetch('data.json')
        .then(res =>res.json())
        .then(data =>setLaptops(data))
      },[]);

    const handleAddToCart =() =>{
        // console.log('AddToCart')
    };

    return (
        <div>
           <Header></Header> 
        </div>

    );
};

export default App;