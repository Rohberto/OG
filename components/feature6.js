import Image from 'next/image';
import React from 'react';
import coreimg from "../assets/mail-services.jpeg";


const Features6 = () => {
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
        <h1 className='font-poppins font-bold text-center bigtablet:text-left text-xl laptop:text-4xl py-2'>Mail Services</h1>
      </div> 
      <p className='font-poppins text-base capitalize text-center bigtablet:text-left'>
      We manage your mailing tasks including sending letters, packages and retrieving your post.
          </p>
     </div>
    </div>
  )
}

export default Features6;