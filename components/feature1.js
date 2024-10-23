import Image from 'next/image';
import React from 'react';
import coreimg from "../assets/dry-cleaning1.jpg";


const Features1 = () => {
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
        <h1 className='font-poppins font-bold text-center bigtablet:text-left text-xl laptop:text-4xl py-2'>Dry Cleaning Drop-off & Pick up </h1>
      </div> 
      <p className='font-poppins text-base capitalize text-center bigtablet:text-left'>
         Fresh, Clean and Convenient! Keeping your clothes looking their best has never been easier. ICare errand & Delivery Services offers reliable dry cleaning drop-off and pick-up, saving you time and effort. Simply schedule a pick-up and weíi handle the rest. Enjoy the convienience of professional cleaning without leaving your home. With Icare, we care for your clothes as much as you do.
          </p>
     </div>
    </div>
  )
}

export default Features1;