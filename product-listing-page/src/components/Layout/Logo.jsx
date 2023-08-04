import React from 'react';
import { Link } from 'react-router-dom';


const Logo = () => {
  return (
    <div className='logo'>
      <Link to="/"><img className="logo" src="/assets/shop_logo.png" alt="Logo" /></Link>
    </div>
  );
}

export default Logo;