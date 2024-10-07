import React, {useState} from 'react';
import Star from "../assets/IC.svg";
import { Link } from 'react-scroll';
import {FaBars} from "react-icons/fa";
 

const Header
 = () => {
     const links = ["Home", "Services","About", "Team", "Contact"];
     const toggle = () => {
     if( document.querySelector('#barContent').classList.contains('navBar')) {
        document.querySelector('#barContent').classList.remove('navBar');
        document.querySelector('#barContent').classList.add("barActive");
     }
     }
  return (
    <div className='headerContainer flex justify-between h-20 items-center px-4 bigtablet:px-12 bg-white w-screen drop-shadow-xl z-40'>
       <div className='LogoContainer'>
             <Star/>
             <h1 className='h1_Logo'>ICare Errand Services.</h1>
       </div>
       <div className="menuLinks w-1/2 bigtablet:flex justify-between items-center h-full hidden ">
        {
            links.map((link, i) => (
                <Link
                to={link}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      key={i} className="cursor-pointer font-poppins text-base hover:text-button">
                {link}
                </Link>
            ))
        }
       </div>
        <FaBars className='cursor-pointer text-2xl bigtablet:hidden' onClick={() => toggle()}/>
    </div>
  )
}

export default Header
