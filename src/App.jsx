 import React from 'react';
import Navbar from './component/Navbar/Navbar';
import Price from './component/Price/Price';
import DashBoard from './component/DashBoard/DashBoard';
 
 const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <h1 className='text-center text-7xl bg-lime-900 mt-4 text-yellow-50 p-2'>Tailwind Css Hellow</h1>
      <Price></Price>
      <DashBoard></DashBoard>
    </div>
  );
 };
 
 export default App;