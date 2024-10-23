import Image from 'next/image';
import React from 'react';
import coreimg from "../assets/package.jpg";


const Features4 = () => {
  return (
    <div className='flex flex-col bigtablet:flex-row w-full laptop:px-24 px-8  py-8 relative space-y-6 mb-4'>
     <div className='w-full bigtablet:w-1/2 laptop:px-4 laptop:py-4'>
         <Image
         src={coreimg}
         layout ="responsive"
         alt='rec'/>
     </div>
    
     <div className='w-full bigtablet:w-1/2 laptop:px-16 flex flex-col items-center space-y-4 bigtablet:space-y-2 laptop:space-y-5 laptop:py-16'>
     <div>
        <h1 className='font-poppins font-bold text-center bigtablet:text-left text-xl laptop:text-4xl py-2'>Package Delivery Service </h1>
      </div> 
      <p className='font-poppins text-base capitalize text-center bigtablet:text-left'>
       Fast, Secure and Reliable. Need to send or receive a package? ICare Errand and Delivery Services has you covered. Whether its an important doacument, a gift or a special delivery. we ensure your package gets to its destination safely and on-time. Our trusted couriers handle your items with care, providing door-to-door service that's convenient and efficient. Schedule your pick-up or delivery with and let us take the hassle out of your day. With ICare, you can send and receive packages with confidence, knowing that we deliver more than just items-- we deliver peace of mind.
          </p>
     </div>
    </div>
  )
}

export default Features4;