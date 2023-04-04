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
            <h1 className='font-bold text-center text-5xl text-green-950'>Awesome Affodable Product</h1>
            <div className='grid md:grid-cols-3 gap-4 mt-4 mx-12'>
            {
                price.map(prices=> <PriceCard
                key={prices.id}
                prices={prices}
                ></PriceCard>)
            }
            </div>
        </div>
    );
};

export default Price;