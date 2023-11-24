// components/NavBar.js
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars,FaAngleDown, FaTwitter, FaInstagram ,FaTiktok, FaUser,FaSearch,FaShoppingCart } from 'react-icons/fa';
import './globals.css';


const NavBar = () => {
  const [isShopHovered, setIsShopHovered] = useState(false);
  const [isBrandHovered, setIsBrandHovered] = useState(false);
  const customStyle = {
    color: 'rgba(225, 195, 0, 1)',
    
  };
  const handleShopMouseEnter = () => {
    setIsShopHovered(true);
  };

  const handleShopMouseLeave = () => {
    setIsShopHovered(false);
  };

  const handleBrandMouseEnter = () => {
    setIsBrandHovered(true);
  };

  const handleBrandMouseLeave = () => {
    setIsBrandHovered(false);
  };

  return (
  
    <nav className="bg-black p-4 fixed w-full top-10 z-10">
        <ul className='hidden lg:flex justify-between  '>
          <li className='self-center'>
            <ul className="hidden md:flex space-x-5">
              <li>
                <Link className="text-white flex" href="/">
                  brand <FaAngleDown className="ml-1 self-center" />
                </Link>
                {isBrandHovered && (
                <ul className="submenu">
                  <li><Link className='text-white' href="/brand/item1"></Link></li>
                  <li><Link  className='text-white' href="/brand/item2">Item 2</Link></li>
                  <li><Link className='text-white'href="/brand/item3">Item 3</Link></li>
                </ul>
              )}
              </li>
              <li>
                <Link className="text-white flex" href="/about">
                  shop<FaAngleDown className="ml-1 self-center" />
                </Link>
              </li>
              <li><Link className="text-white" href="/contact">premium</Link></li>
              <li><Link className="text-white" href="/store">gift cards</Link></li>
            </ul>
          </li>

          <li><p className='text-xl font-cursive shadow ' style={customStyle}> brava</p></li>

          <li className='self-center'>
            <ul className="flex space-x-5 p-3">
                <li><Link href='/' className='text-white'>become a affiliate</Link></li>
              <li className='self-center'>
                <Link href='/'><FaTwitter color="#fff"/></Link>
              </li>
              <li className='self-center'>
                <Link href='/'><FaInstagram color="#fff" /></Link>
              </li>
              <li className='self-center'>
                <Link href='/'><FaTiktok color="#fff" /></Link>
              </li>
              <li className='self-center'>
                <Link href='/'><FaUser color="#fff"/></Link>
              </li>
              <li className='self-center'>
                <Link href='/'><FaSearch  color="#fff" /></Link>
              </li>
              <li className='self-center'>
                <Link href='/'><FaShoppingCart  color="#fff" /></Link>
              </li>
             
            </ul>
          </li>
        </ul>

        <div className="lg:hidden flex justify-between ">
            <button className="text-white">
          <FaBars size={30} />
          </button>

          <p className='text-xl font-cursive shadow ' style={customStyle}>brava</p>
          <ul className='flex space-x-4'>

          <li className='self-center'>
                <Link href='/'><FaUser color="#fff"/></Link>
              </li>
              <li className='self-center'>
                <Link href='/'><FaSearch  color="#fff" /></Link>
              </li>
              <li className='self-center'>
                <Link href='/'><FaShoppingCart  color="#fff" /></Link>
              </li>
             

          </ul>


        </div>
      
      
    </nav>
  
  );
};

export default NavBar;
