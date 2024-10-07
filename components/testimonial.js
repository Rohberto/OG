import React from 'react';
import { FaStar } from 'react-icons/fa';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ButtonGroup from './buttonGroup';
import Image from 'next/image';
import team1 from "../assets/team/member-1.png";
import team2 from "../assets/team/member-2.png";
import team3 from "../assets/team/member-3.png";
import team4 from "../assets/team/member-4.png";
import team5 from "../assets/team/member-5.png";
import team6 from "../assets/team/member-6.png";

const Testimonial = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 550 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 550, min: 0 },
      items: 1
    }
  };
  return (
    <div className='py-4 px-4 mb-8' name="Testimonial">
          <div>
        <p className='test-sm font-poppins text-button uppercase text-center font-bold'>Testimonial</p>
        <h1 className='font-poppins font-bold  text-center text-black   text-xl midtablet:text-2xl py-2  capitalize '>Meet client satisfaction</h1>
      </div>
      <div className=''>
      <Carousel
  swipeable={true}
  draggable={false}
  showDots={false}
  responsive={responsive}
  infinite={true}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  removeArrowOnDeviceType={["mobile", "tablet", "desktop"]}
  arrows={false}
  customButtonGroup={<ButtonGroup />}
  className=" laptop:ml-24 laptop:py-16 py-8"
>
    <div className='space-y-4 shadow-md  laptop:shadow-none laptop:hover:shadow-xl py-8 laptop:py-4 px-4 rounded-md mb-8 mx-4'>
      <div className='rating flex items-center'>
        <FaStar className='text-red-600'/>
        <FaStar className='text-red-600'/>
        <FaStar className='text-red-600'/>
        <FaStar className='text-red-600'/>
        <FaStar className='text-gray-400'/>
      </div>
      <h1 className='font-bold font-poppins text-lg capitalize'>
        Efficiency & Professionalism 
      </h1>
      <p className='font-poppins text-base'>ICare Errand Services has been a lifesaver! They handle my errands with such efficiency and professionalism. I can finally focus on my business while they tahe care of the little things. Highly recommend!.</p>
      <div className='flex items-center space-x-3'>
        <div>
          <p className='font-poppins text-lg font-bold'>Denny Hilguston</p>
          <p className='font-poppins text-sm font-bold text-button'>@dennyHill</p>
        </div>
      </div>
    </div>

    <div className='space-y-4 shadow-md  laptop:shadow-none laptop:hover:shadow-xl py-8 laptop:py-4 px-4 rounded-md mb-8 mx-4'>
      <div className='rating flex items-center'>
        <FaStar className='text-red-600'/>
        <FaStar className='text-red-600'/>
        <FaStar className='text-red-600'/>
        <FaStar className='text-gray-400'/>
        <FaStar className='text-gray-400'/>
      </div>
      <h1 className='font-bold font-poppins text-lg capitalize'>
       Prompt, Reliable & Top Notch
      </h1>
      <p className='font-poppins text-base'>I needed someone to help with last-minute tasks, and ICare Errand Services exceeded my expectations. They were prompt, reliable and went above and beyond. Their service is truly top-notch.</p>
      <div className='flex items-center space-x-3'>
        <div>
          <p className='font-poppins text-lg font-bold'>Robert Hilguston</p>
          <p className='font-poppins text-sm font-bold text-button'>@robertHill</p>
        </div>
      </div>
      </div>

      <div className='space-y-4 shadow-md  laptop:shadow-none laptop:hover:shadow-xl py-8 laptop:py-4 px-4 rounded-md mb-8 mx-4'>
      <div className='rating flex items-center'>
        <FaStar className='text-red-600'/>
        <FaStar className='text-red-600'/>
        <FaStar className='text-red-600'/>
        <FaStar className='text-red-600'/>
        <FaStar className='text-red-600'/>
      </div>
      <h1 className='font-bold font-poppins text-lg capitalize'>
      Seamless Experience
      </h1>
      <p className='font-poppins text-base'>I've used ICare Errand Services multiple times and each experience has been seamless. From Picking up groceries to handling important deliveries, they always come through. Great service.</p>
      <div className='flex items-center space-x-3'>
        <div>
          <p className='font-poppins text-lg font-bold'>Emily Brown</p>
          <p className='font-poppins text-sm font-bold text-button'>@emilyBrown</p>
        </div>
      </div>
      </div>

      <div className='space-y-4 shadow-md  laptop:shadow-none laptop:hover:shadow-xl py-8 laptop:py-4 px-4 rounded-md mb-8 mx-4'>
      <div className='rating flex items-center'>
        <FaStar className='text-red-600'/>
        <FaStar className='text-red-600'/>
        <FaStar className='text-red-600'/>
        <FaStar className='text-gray-400'/>
        <FaStar className='text-gray-400'/>
      </div>
      <h1 className='font-bold font-poppins text-lg capitalize'>
       Attention to Detail
      </h1>
      <p className='font-poppins text-base'>ICare Errand Service is a game-changer for busy professionals like me. Their attention to detail and friendly staff makes my life so much easier. I trust them with all my errands.</p>
      <div className='flex items-center space-x-3'>
        <div>
          <p className='font-poppins text-lg font-bold'>Michael Johnson</p>
          <p className='font-poppins text-sm font-bold text-button'>@michaeljohnson</p>
        </div>
      </div>
      </div>

      <div className='space-y-4 shadow-md  laptop:shadow-none laptop:hover:shadow-xl py-8 laptop:py-4 px-4 rounded-md mb-8 mx-4'>
      <div className='rating flex items-center'>
        <FaStar className='text-red-600'/>
        <FaStar className='text-red-600'/>
        <FaStar className='text-red-600'/>
        <FaStar className='text-red-600'/>
        <FaStar className='text-red-600'/>
      </div>
      <h1 className='font-bold font-poppins text-lg capitalize'>
       Outstanding Customer Service
      </h1>
      <p className='font-poppins text-base'>The convenience that Icare Errand Services offers is unparalleled. They save me time and hassle and their customer service is outstanding.</p>
      <div className='flex items-center space-x-3'>
        <div>
          <p className='font-poppins text-lg font-bold'>Okosun Adesuwa</p>
          <p className='font-poppins text-sm font-bold text-button'>@sleeky</p>
        </div>
      </div>
      </div>

      
      

</Carousel>
      </div>
    </div>
  )
}

export default Testimonial;