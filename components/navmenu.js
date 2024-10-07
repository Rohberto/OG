import React from 'react';
import  { AiOutlineClose } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Nav = () => {
    const links = ["Home", "Services", "About", "Team", "Contact"];
   
  return (
    <div className='min-w-full  relative block h-full overflow-hidden sticky top-0'>
        <div className='flex w-full justify-end py-8 px-4'>
        <AiOutlineClose onClick={
            () => {
     document.querySelector('#barContent').classList.remove('barActive');
        document.querySelector('#barContent').classList.add('navBar');
     }
        } className="text-xl font-bold"/>
        </div>
        <div className="flex flex-col space-y-2 px-4 ">
        {
            links.map((link, i) => (
                <Link
                to={`${link}`}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      key={i} className="cursor-pointer font-poppins text-base hover:text-button w-full border-b border-b-fade pr-28 py-4 last:border-0" onClick={
        () => {
 document.querySelector('#barContent').classList.remove('barActive');
    document.querySelector('#barContent').classList.add('navBar');
 }
    }>
                {link}
                </Link>
            ))
        }
       </div>
       <div className='px-4 flex  py-8 space-x-4 absolute bottom-28 justify-center w-full'>
       <a href= "#" className="text-2xl twitter" >
       <FaTwitter/>   
        </a>
        <a href= "#" className="text-2xl facebook">
       <FaFacebook/>   
        </a>
        <a href= "#" className="text-2xl instagram">
       <FaInstagram/>   
        </a>
        <a href= "#" className="text-2xl linked">
       <FaLinkedinIn/>   
        </a>
       </div>
    </div>
  )
}

export default Nav;