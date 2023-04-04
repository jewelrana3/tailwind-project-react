import React from 'react';

const Navbar = () => {
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Contact', path: '/contact' }
      ];
      
    return (
        <div>
            <h1>Navbar side </h1>
        </div>
    );
};

export default Navbar;