import React from 'react';
import left from '../assets/shape-left.png';
import right from '../assets/shape-right.png';
import center from '../assets/grocery2.jpeg';

import Image from 'next/image';

const Banner = () => {
  return (
    <div className=' w-screen relative' name="Home" id="Home">
      <div className='pt-12 mb-4'>
     <h1 className='font-poppins text-3xl bigtablet:text-4xl font-bold text-center capitalize leading-normal'> Simplify Life, Optimize Your Day<br className='py-4'/>ICare Errand Services.</h1>
     </div>
     <p className='font-poppins text-base text-center py-4 leading-normal bigtablet:w-1/2 bigtablet:mx-auto'>Your Trusted partner for Convenience, reliability and care. We specialize in taking the stress out of your day by handling your errands and deliveries with precision and punctuality. Whether it's grocery shopping, prescription pick-ups, document delivery, we ensure that your items reach their destination safely and on time. Experience the ease of having everything you need brought straight to your doorstep.</p>
     <div className='w-full flex justify-center'>
     <a href="#Services"> <button className='bg-button py-2 px-8 text-base font-poppins rounded-xl text-white font-bold drop-shadow-lg hover:drop-shadow-xl'>Explore</button></a>
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