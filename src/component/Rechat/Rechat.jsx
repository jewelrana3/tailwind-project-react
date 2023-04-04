import axios from 'axios';
import React, { useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Rechat = () => {
    const [data,setData] = useState([]);

    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(data =>{
        const dataAdd = data.data.data;
        console.log(dataAdd);
        const loadData = dataAdd.map(phone=>{
            const parts = phone.slug.split('-');
            const price = parseInt(parts[1]);
            const phoneInfo = {
                name:phone.phone_name,
                price:price
            } 
            return phoneInfo;
        })

        setData(loadData)
    })
    return (
        <div>
             <BarChart width={900} height={400} data={data}>
             <Bar dataKey="price" fill="#8884d8" />
                <YAxis name="name"></YAxis>
                <XAxis></XAxis>
             </BarChart>
        </div>
    );
};

export default Rechat;