import React from 'react';
import left from '../assets/shape-left.png';
import right from '../assets/shape-right.png';
import center from '../assets/grocery2.jpeg';

import Image from 'next/image';

const Banner = () => {
  return (
    <div className=' w-screen relative' name="Home" id="Home">
      <div className='pt-12 mb-4'>
     <h1 className='font-poppins text-3xl bigtablet:text-4xl font-bold text-center capitalize leading-normal'> Simplify Life <br/>ICare Errand Services.</h1>
     </div>
     <p className='font-poppins text-base text-center py-4 leading-normal bigtablet:w-1/2 bigtablet:mx-auto'>At Icare Errand Services, we handle the tasks you dont have time for. we're here to make your life easier. Let us take care of the little things, so you can focus on what matters most.</p>
     <div className='w-full flex justify-center'>
     <a href="#S ervices"> <button className='bg-button py-2 px-8 text-base font-poppins rounded-xl text-white font-bold drop-shadow-lg hover:drop-shadow-xl'>Explore</button></a>
     </div>
        <div className='left'>
        <Image
      src={left}
      alt="design"
      sizes="50vw"
      height={600}
      layout= "responsive"
    />
    </div>
        <div className='right'>
        <Image
      src={right}
      alt="design"
      height={600}
      sizes="50vw"
layout= "responsive"
    />
        </div>
        <div className='home_img pt-8 w-full flex justify-center mb-12'>
        <Image
      src={center}
      alt="design"
      width={800}
      height={500}
    />
        </div>
      </div>
  )
}

export default Banner;