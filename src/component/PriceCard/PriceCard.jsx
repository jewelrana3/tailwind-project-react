import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({prices}) => {
    return (
        <div className='bg-emerald-950 p-4 rounded text-center text-emerald-500'>
                <h2>
                    <span className='text-3xl text-bold'>{prices.price}</span>
                    <span>/Month</span>
                </h2>
            <h1 className='text-2xl font-extrabold'>{prices.name}</h1>
            <p className='text-left font-bold text-emerald-500'>Features:</p>
            {
                prices.features.map((feature,idx) => <Feature
                key={idx}
                feature={feature}
                ></Feature>)
            }
            <button className='w-full bg-green-600 mt-4 p-2 rounded hover:bg-lime-700 text-white '>Buy Now</button>
        </div>
    );
};

export default PriceCard;