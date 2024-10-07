import React from 'react';
import Star from "../assets/IC.svg";
import { Link } from 'react-scroll';
const Footer = () => {
    const links = ["Home", "Services","About", "Team"];
  return (
    <div className='flex flex-col justify-center w-screen py-4 space-y-2 bg-button rounded-t-2xl'>
           <div className='LogoContainer flex justify-center footerContainer'>
             <Star className="animate-pulse"/>
       </div>

       <div className="menuLinks flex  items-center w-full justify-center space-x-4">
        {
            links.map((link, i) => (
                <Link
                to={link}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      key={i} className="cursor-pointer font-poppins text-base text-white font-bold hover:text-button">
                {link}
                </Link>
            ))
        }
       </div> 
       <p className='font-poppins text-base text-center text-white'> &copy;2022, ICare Errand Services. </p>
    </div>
  )
}

export default Footer;