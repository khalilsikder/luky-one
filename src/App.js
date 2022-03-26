import React, { useEffect, useState } from 'react';
import Card from './components/Card/Card';

const App = () => {
    const[laptops,setLaptops] = useState([])
    useEffect( ()=>{
        fetch('data.json')
        .then(res =>res.json())
        .then(data =>setLaptops(data))
    },[]);
    return (
        <div> 
          
        {
            laptops.map((laptop) => (<Card key ={laptop.id} data={laptop}/>
            ))}    
        </div>
    );
};

export default App;