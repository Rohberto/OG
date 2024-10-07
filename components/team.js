import React from 'react';
import Image from 'next/image';
import team1 from "../assets/team/member-1.png";
import team2 from "../assets/team/member-2.png";
import team3 from "../assets/team/member-3.png";
import team4 from "../assets/team/member-4.png";
import team5 from "../assets/team/member-5.png";
import team6 from "../assets/team/member-6.png";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Team = () => {
  return (
    <div className='py-8 px-4' name="Team" id="Team">
          <div>
        <p className='test-sm font-poppins text-button uppercase text-center font-bold'>our team</p>
        <h1 className='font-poppins font-bold  text-center text-black   text-xl midtablet:text-2xl py-2  capitalize '>The most qualified and talented individuals</h1>
      </div>
      <div className='px-4 grid grid-cols-1 bigtablet:grid-cols-2 laptop:grid-cols-3 py-8 gap-8'>
        <div className='flex flex-col items-center teamcard relative px-4 py-8 rounded-lg'>
            <div  className="border-2 border-button rounded-full w-32 h-32 ">
            <Image
            src={team1}
            alt="rec"
           />
           </div>
            <div className=''>
            <h1 className='text-center font-poppins text-lg font-bold py-2'>Saimon Harmer</h1>
            <p className='text-center font-poppins text-base'>CEO and Founder</p>
            </div>
            <div className='absolute bottom-8 right-8 space-y-2 soc'>
                <FaTwitter className='font-poppins text-base cursor-pointer'/>
                <FaFacebook className='font-poppins text-base cursor-pointer'/>
                <FaInstagram className='font-poppins text-base cursor-pointer'/>
            </div>
        </div>

        <div className='flex flex-col items-center teamcard relative px-4 py-8 rounded-lg'>
            <div  className="border-2 border-button rounded-full w-32 h-32 ">
            <Image
            src={team2}
            alt="rec"
           />
           </div>
            <div className=''>
            <h1 className='text-center font-poppins text-lg font-bold text-button py-2'>Aaron Nunez</h1>
            <p className='text-center font-poppins text-base text-button'>Founder</p>
            </div>
            <div className='absolute bottom-8 right-8 space-y-2 soc'>
                <FaTwitter className='font-poppins text-base cursor-pointer'/>
                <FaFacebook className='font-poppins text-base cursor-pointer'/>
                <FaInstagram className='font-poppins text-base cursor-pointer'/>
            </div>
        </div> 

        <div className='flex flex-col items-center teamcard relative px-4 py-8 rounded-lg'>
            <div  className="border-2 border-button rounded-full w-32 h-32 ">
            <Image
            src={team3}
            alt="rec"
           />
           </div>
            <div className=''>
            <h1 className='text-center font-poppins text-lg font-bold py-2'>Robert Oluwaseun</h1>
            <p className='text-center font-poppins text-base'>Web designer</p>
            </div>
            <div className='absolute bottom-8 right-8 space-y-2 soc'>
                <FaTwitter className='font-poppins text-base cursor-pointer'/>
                <FaFacebook className='font-poppins text-base cursor-pointer'/>
                <FaInstagram className='font-poppins text-base cursor-pointer'/>
            </div>
        </div>

        <div className='flex flex-col items-center teamcard relative px-4 py-8 rounded-lg'>
            <div  className="border-2 border-button rounded-full w-32 h-32 ">
            <Image
            src={team4}
            alt="rec"
           />
           </div>
            <div className=''>
            <h1 className='text-center font-poppins text-lg font-bold py-2'>Igein Favor</h1>
            <p className='text-center font-poppins text-base'>Web developer</p>
            </div>
            <div className='absolute bottom-8 right-8 space-y-2 soc'>
                <FaTwitter className='font-poppins text-base cursor-pointer'/>
                <FaFacebook className='font-poppins text-base cursor-pointer'/>
                <FaInstagram className='font-poppins text-base cursor-pointer'/>
            </div>
        </div>

        <div className='flex flex-col items-center teamcard relative px-4 py-8 rounded-lg'>
            <div  className="border-2 border-button rounded-full w-32 h-32 ">
            <Image
            src={team5}
            alt="rec"
           />
           </div>
            <div className=''>
            <h1 className='text-center font-poppins text-lg font-bold py-2'>Saimon Harmer</h1>
            <p className='text-center font-poppins text-base'>CEO and Founder</p>
            </div>
            <div className='absolute bottom-8 right-8 space-y-2 soc'>
                <FaTwitter className='font-poppins text-base cursor-pointer'/>
                <FaFacebook className='font-poppins text-base cursor-pointer'/>
                <FaInstagram className='font-poppins text-base cursor-pointer'/>
            </div>
        </div>

         <div className='flex flex-col items-center teamcard relative px-4 py-8 rounded-lg'>
            <div  className="border-2 border-button rounded-full w-32 h-32 ">
            <Image
            src={team6}
            alt="rec"
           />
           </div>
            <div className=''>
            <h1 className='text-center font-poppins text-lg font-bold py-2'>Alli favor</h1>
            <p className='text-center font-poppins text-base'> Founder</p>
            </div>
            <div className='absolute bottom-8 right-8 space-y-2 soc'>
                <FaTwitter className='font-poppins text-base cursor-pointer'/>
                <FaFacebook className='font-poppins text-base cursor-pointer'/>
                <FaInstagram className='font-poppins text-base cursor-pointer'/>
            </div>
        </div>

        
      </div>
    </div>
  )
}

export default Team;