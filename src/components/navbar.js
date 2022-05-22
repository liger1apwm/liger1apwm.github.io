import React from 'react';
import {  Link } from "react-router-dom";
import '../styles/navbar.css'
const Navbar= () =>{
  return (
  <div className='navbar'>
    <li className='navbarChild'>
      <Link to="/" className='link'>Home </Link>
    </li>
    {/* <li>
      <Link to="/home">HOME</Link>
    </li> */}
    <li className='navbarChild'>
      <Link to="/wordle" className='link'>Wordle-mockup</Link>
    </li>
    <li className='navbarChild'>
      <Link to="/about" className='link'>About</Link>
    </li>
    <li className='navbarChild'>
      <Link to="/contact" className='link'>Contact</Link>
    </li>
  </div>
  );
}
export default Navbar;