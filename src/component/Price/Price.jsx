import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const Price = () => {
   const [price,setPrice] = useState([]);

   useEffect(()=>{
    fetch('price.json')
    .then(res=>res.json())
    .then(data=>setPrice(data))
   }
   ,[])
      
    return (
        <div>
            <h2>Price list</h2>
            {
                price.map(prices=> <PriceCard
                key={prices.id}
                prices={prices}
                ></PriceCard>)
            }
        </div>
    );
};

export default Price;