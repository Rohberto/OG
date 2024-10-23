import Image from 'next/image';
import React from 'react';
import coreimg from "../assets/prescription.jpg";
import pattern from "../assets/shape-pattern2.png";

const Features2 = () => {
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
        <h1 className='font-poppins font-bold text-center bigtablet:text-left text-xl laptop:text-4xl py-2'>Prescription Pick-up</h1>
      </div> 
      <p className='font-poppins text-base capitalize text-center bigtablet:text-left'>
        Your Health, Delivered. Managing Your medications just got easier with Icare Errand & Delivery Services. We offer a reliable & discreet prescription pick-up service, ensuring you never miss a dose. Simply provide your prescription details and we will handle the rest, picking up your medications from your preffered pharmacy and delivering them directly to your door. Trust Icare to make getting your medications safe, simple and stress-free.
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

export default Features2;