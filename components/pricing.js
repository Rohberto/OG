import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import  { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";


const Pricing = ({isMonthly, setPeriod}) => {

    
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
    <div name="Pricing" className='py-8'>
           <div>
        <p className='test-sm font-poppins text-button uppercase text-center font-bold'>Pricing Plan</p>
        <h1 className='font-poppins font-bold  text-center text-black   text-xl midtablet:text-2xl py-2  capitalize '>Choose your pricing plan</h1>
      </div>
      <div className='mx-auto bg-body w-72 rounded mt-4'>
          <button className={isMonthly ? 'px-4 py-2 text-base font-poppins w-1/2 bg-button drop-shadow-lg text-white rounded' : 'px-4 py-2 text-base font-poppins w-1/2'}onClick={() => setPeriod(true)}>Monthly Plan</button>
          
          <button className={isMonthly ? 'px-4 py-2 text-base font-poppins w-1/2' : 'px-4 py-2 text-base font-poppins w-1/2 bg-button drop-shadow-md text-white rounded'}onClick={() => setPeriod(false)}>Annual Plan</button>
      </div>
   
      <div className='px-4 bigtablet:px-8 laptop:px-24 laptop:py-8 py-4'>
    
  {isMonthly &&   <Carousel
  swipeable={true}
  draggable={false}
  showDots={false}
  responsive={responsive}
  infinite={true}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  removeArrowOnDeviceType={[ "desktop"]}
 className=" py-4"
 
>
<div className="bg-white border border-body px-4 py-8 rounded-lg hover:drop-shadow-xl mx-4">
    <h1 className='text-base font-bold font-poppins py-2'>Free Plan</h1>
    <p className='text-sm font-poppins capitalize'>For small teams or office</p>
    <ul className='py-4'>
      <li className='flex font-poppins items-center py-2'><AiOutlineCheck className='text-white text-base bg-button rounded-full w-4 h-4 mr-4'/> Drag & Drop Builder</li>  
      <li className='flex font-poppins items-center py-2'><AiOutlineCheck className='text-white text-base bg-button rounded-full w-4 h-4 mr-4'/>1000s of templates</li>
      <li className='flex font-poppins items-center py-2'><AiOutlineCheck className='text-white text-base bg-button rounded-full w-4 h-4 mr-4'/>Blog Support Tools</li>
      <li className='flex font-poppins items-center py-2'><AiOutlineClose className='text-white text-base bg-button rounded-full w-4 h-4 mr-4'/>eCommerce Store</li>
    </ul>
     <div className='flex justify-center items-center'><p className='font-poppins font-bold text-3xl py-2 text-center '>$0</p><span className='text-sm font-poppins font-light'>/Monthly</span></div>
     <div className='flex py-8 w-full justify-center'><button className='text-white  font-poppins text-base py-2 px-4 bg-button rounded-xl'>Start free trial</button></div>
</div> 

<div className="bg-white border border-body px-4 py-8 rounded-lg hover:drop-shadow-xl mx-4">
    <h1 className='text-base font-bold font-poppins py-2'>Business king</h1>
    <p className='text-sm font-poppins capitalize'>For enterprise business</p>
    <ul className='py-4'>
      <li className='flex font-poppins items-center py-2'><AiOutlineCheck className='text-white text-base bg-button rounded-full w-4 h-4 mr-4'/> Drag & Drop Builder</li>  
      <li className='flex font-poppins items-center py-2'><AiOutlineCheck className='text-white text-base bg-button rounded-full w-4 h-4 mr-4'/>1000s of templates</li>
      <li className='flex font-poppins items-center py-2'><AiOutlineCheck className='text-white text-base bg-button rounded-full w-4 h-4 mr-4'/>Blog Support Tools</li>
      <li className='flex font-poppins items-center py-2'><AiOutlineClose className='text-white text-base bg-button rounded-full w-4 h-4 mr-4'/>eCommerce Store</li>
    </ul>
     <div className='flex justify-center items-center'><p className='font-poppins font-bold text-3xl py-2 text-center '>$15</p><span className='text-sm font-poppins font-light'>/Monthly</span></div>
     <div className='flex py-4 w-full justify-center'><button className='text-white  font-poppins text-base py-2 px-4 bg-button rounded-xl'>Create Account</button></div>
     <p className='font-bold font-poppins cursor-pointer text-base text-center'>or start 14 days trial</p>
</div> 


<div className="bg-white border border-body px-4 py-8  rounded-lg hover:drop-shadow-xl relative mx-8">
<div className=' suggested text-white text-base font-poppins bg-yellow-500 px-4 py-2 rounded-md  z-50'>Suggested</div>
    <h1 className='text-base font-bold font-poppins py-2'>Pro Master</h1>
    <p className='text-sm font-poppins capitalize'>For pro level developers</p>
    <ul className='py-4'>
      <li className='flex font-poppins items-center py-2'><AiOutlineCheck className='text-white text-base bg-button rounded-full w-4 h-4 mr-4'/> Drag & Drop Builder</li>  
      <li className='flex font-poppins items-center py-2'><AiOutlineCheck className='text-white text-base bg-button rounded-full w-4 h-4 mr-4'/>1000s of templates</li>
      <li className='flex font-poppins items-center py-2'><AiOutlineCheck className='text-white text-base bg-button rounded-full w-4 h-4 mr-4'/>Blog Support Tools</li>
      <li className='flex font-poppins items-center py-2'><AiOutlineClose className='text-white text-base bg-button rounded-full w-4 h-4 mr-4'/>eCommerce Store</li>
    </ul>
     <div className='flex justify-center items-center'><p className='font-poppins font-bold text-3xl py-2 text-center '>$24</p><span className='text-sm font-poppins font-light'>/Monthly</span></div>
     <div className='flex py-4 w-full justify-center'><button className='text-white  font-poppins text-base py-2 px-4 bg-button rounded-xl'>Create Account</button></div>
     <p className='font-bold font-poppins cursor-pointer text-base text-center'>or start 14 days trial</p>
</div> 

</Carousel>}

{!isMonthly &&   <Carousel
  swipeable={true}
  draggable={false}
  showDots={false}
  responsive={responsive}
  infinite={true}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  removeArrowOnDeviceType={[ "desktop"]}
 className=" py-4"

>
<div className="bg-white border border-body px-4 py-8 rounded-lg hover:drop-shadow-xl mx-4">
    <h1 className='text-base font-bold font-poppins py-2'>Free Plan</h1>
    <p className='text-sm font-poppins capitalize'>For small teams or office</p>
    <ul className='py-4'>
      <li className='flex font-poppins items-center py-2'><AiOutlineCheck className='text-white text-base bg-button rounded-full w-4 h-4 mr-4'/> Drag & Drop Builder</li>  
      <li className='flex font-poppins items-center py-2'><AiOutlineCheck className='text-white text-base bg-button rounded-full w-4 h-4 mr-4'/>1000s of templates</li>
      <li className='flex font-poppins items-center py-2'><AiOutlineCheck className='text-white text-base bg-button rounded-full w-4 h-4 mr-4'/>Blog Support Tools</li>
      <li className='flex font-poppins items-center py-2'><AiOutlineClose className='text-white text-base bg-button rounded-full w-4 h-4 mr-4'/>eCommerce Store</li>
    </ul>
     <div className='flex justify-center items-center'><p className='font-poppins font-bold text-3xl py-2 text-center '>$0</p><span className='text-sm font-poppins font-light'>/Annualy</span></div>
     <div className='flex py-8 w-full justify-center'><button className='text-white  font-poppins text-base py-2 px-4 bg-button rounded-xl'>Start free trial</button></div>
</div> 

<div className="bg-white border border-body px-4 py-8 rounded-lg hover:drop-shadow-xl mx-4">
    <h1 className='text-base font-bold font-poppins py-2'>Business king</h1>
    <p className='text-sm font-poppins capitalize'>For enterprise business</p>
    <ul className='py-4'>
      <li className='flex font-poppins items-center py-2'><AiOutlineCheck className='text-white text-base bg-button rounded-full w-4 h-4 mr-4'/> Drag & Drop Builder</li>  
      <li className='flex font-poppins items-center py-2'><AiOutlineCheck className='text-white text-base bg-button rounded-full w-4 h-4 mr-4'/>1000s of templates</li>
      <li className='flex font-poppins items-center py-2'><AiOutlineCheck className='text-white text-base bg-button rounded-full w-4 h-4 mr-4'/>Blog Support Tools</li>
      <li className='flex font-poppins items-center py-2'><AiOutlineClose className='text-white text-base bg-button rounded-full w-4 h-4 mr-4'/>eCommerce Store</li>
    </ul>
     <div className='flex justify-center items-center'><p className='font-poppins font-bold text-3xl py-2 text-center '>$70</p><span className='text-sm font-poppins font-light'>/Annualy</span></div>
     <div className='flex py-4 w-full justify-center'><button className='text-white  font-poppins text-base py-2 px-4 bg-button rounded-xl'>Create Account</button></div>
     <p className='font-bold font-poppins cursor-pointer text-base text-center'>or start 14 days trial</p>
</div> 


<div className="bg-white border border-body px-4 py-8  rounded-lg hover:drop-shadow-xl relative mx-8">
<div className=' suggested text-white text-base font-poppins bg-yellow-500 px-4 py-2 rounded-md  z-50'>Suggested</div>
    <h1 className='text-base font-bold font-poppins py-2'>Pro Master</h1>
    <p className='text-sm font-poppins capitalize'>For pro level developers</p>
    <ul className='py-4'>
      <li className='flex font-poppins items-center py-2'><AiOutlineCheck className='text-white text-base bg-button rounded-full w-4 h-4 mr-4'/> Drag & Drop Builder</li>  
      <li className='flex font-poppins items-center py-2'><AiOutlineCheck className='text-white text-base bg-button rounded-full w-4 h-4 mr-4'/>1000s of templates</li>
      <li className='flex font-poppins items-center py-2'><AiOutlineCheck className='text-white text-base bg-button rounded-full w-4 h-4 mr-4'/>Blog Support Tools</li>
      <li className='flex font-poppins items-center py-2'><AiOutlineClose className='text-white text-base bg-button rounded-full w-4 h-4 mr-4'/>eCommerce Store</li>
    </ul>
     <div className='flex justify-center items-center'><p className='font-poppins font-bold text-3xl py-2 text-center '>$120</p><span className='text-sm font-poppins font-light'>/Annualy</span></div>
     <div className='flex py-4 w-full justify-center'><button className='text-white  font-poppins text-base py-2 px-4 bg-button rounded-xl'>Create Account</button></div>
     <p className='font-bold font-poppins cursor-pointer text-base text-center'>or start 14 days trial</p>
</div> 

</Carousel>}

      </div>
    </div>
  )
}

export default Pricing;