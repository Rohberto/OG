import Image from 'next/image';
import React from 'react';
import coreimg from "../assets/pet_care.webp";
import pattern from "../assets/shape-pattern2.png";

const Features5 = () => {
  return (
    <div className='flex flex-col bigtablet:flex-row w-full laptop:px-24 px-8  py-8 relative space-y-6 mb-4'>
         <div className='absolute right-0 bottom-0 '>
    <Image
         src={pattern}
         width={350}
         height={250}
         layout="intrinsic"
         alt='rec'
        />
    </div>
     <div className='w-full bigtablet:w-1/2 laptop:px-16 flex flex-col items-center space-y-4 bigtablet:space-y-2 laptop:space-y-5 laptop:py-16'>
     <div>
        <h1 className='font-poppins font-bold text-center bigtablet:text-left text-xl laptop:text-4xl py-2'>Pet Care Assistance</h1>
      </div> 
      <p className='font-poppins text-base capitalize text-center bigtablet:text-left'>
         We help with pet walking, feeding and other care tasks to keep your pets healthy and happy.
          </p>
     </div>
     <div className='w-full bigtablet:w-1/2 laptop:px-4 laptop:py-4'>
         <Image
         src={coreimg}
         layout ="responsive"
         alt='rec'/>
     </div>
    </div>
  )
}

export default Features5;