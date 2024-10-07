import React from 'react';


const Product = () => {
  return (
    <div className='product py-12'>
          <div>
        <p className='test-sm font-poppins text-white uppercase text-center '>Whats the function</p>
        <h1 className='font-poppins font-bold  text-center text-white   text-xl midtablet:text-2xl py-2  capitalize '>Meet the feature of our product</h1>
      </div>
      <div className='grid grid-cols-1 midtablet:grid-cols-2 laptop:grid-cols-4 card-container px-4 gap-x-4
      gap-y-8 midtablet:gap-y- laptop:gap-x-16 py-8'>
        <div className='card' id="first">
            <div className=' bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto midtablet:mx-0'>
            <p className='text-xl text-black font-poppins font-bold'>01</p>
            </div>
            <h3 className='text-lg font-poppins text-center midtablet:text-left font-bold text-white py-2'>Set disbursement instructions</h3>
            <p className='font-poppins text-sm text-white text-center midtablet:text-left '>Get your blood tests delivered at home, collect a sample from the your blood tests.</p>
        </div>
          
        <div className='card ' id="second">
            <div className=' bg-white rounded-full w-16 h-16 flex items-center justify-center  mx-auto midtablet:mx-0' >
            <p className='text-xl text-black font-poppins font-bold'>02</p>
            </div>
            <h3 className='text-lg font-poppins font-bold text-white py-2 text-center midtablet:text-left '>Assembly receives funds from your account</h3>
            <p className='font-poppins text-sm text-white text-center midtablet:text-left '>Get your blood tests delivered at home, collect a sample from the your blood tests.</p>
        </div>

        <div className='card '>
            <div className=' bg-white rounded-full w-16 h-16 flex items-center justify-center  mx-auto midtablet:mx-0' id="third">
            <p className='text-xl text-black font-poppins font-bold'>03</p>
            </div>
            <h3 className='text-lg font-poppins font-bold text-white py-2 text-center midtablet:text-left '>Assembly initiates disbursement</h3>
            <p className='font-poppins text-sm text-white text-center midtablet:text-left '>Get your blood tests delivered at home, collect a sample from the your blood tests.</p>
        </div>

        <div className='card '>
            <div className=' bg-white rounded-full w-16 h-16 flex items-center justify-center  mx-auto midtablet:mx-0' id="fourth">
            <p className='text-xl text-black font-poppins font-bold'>04</p>
            </div>
            <h3 className='text-lg font-poppins font-bold text-white py-2 text-center midtablet:text-left '>Customer receives fund payments</h3>
            <p className='font-poppins text-sm text-white text-center midtablet:text-left '>Get your blood tests delivered at home, collect a sample from the your blood tests.</p>
        </div>
      </div>
    </div>
  )
}

export default Product;