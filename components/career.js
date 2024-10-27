import React from 'react';
import Image from 'next/image';
import babySitter from "../assets/babysitting.jpg";
import dropOff from "../assets/dropoff.jpg";
import printing from "../assets/printing.jpg";
import customer from "../assets/customer.jpg";
import pickup from "../assets/pickup.jpg";
import Link from 'next/link';

const Career = () => {
  return (
    <div className="job-vacancies font-poppins"> 
        <h2 className='font-poppins'>Job Opportunities</h2> 
        <p className="employment-note font-poppins">Employment ongoing for:</p> 
        <div className="vacancy-cards font-poppins"> 
        <Link href="/careers">
                  <div className="card"> 
                    <Image src={dropOff} alt="Drop Off Shipping"/> 
                    <h3 className='font-poppins'>Drop Off Shipping</h3> 
                    <p className='font-poppins'>Delivering packages to various locations.</p>
                     </div> 
                     </Link>
           
            <Link href="/careers">
            <div className="card"> 
                <Image src={babySitter} alt="Baby Sitter"/> 
                <h3 className='font-poppins'>Baby Sitter</h3>
                 <p className='font-poppins'>Caring for children while parents are away.</p> </div>
                 </Link>

                     <Link href="/careers">
                     <div className="card"> 
                        <Image src={printing} alt="Printing Services"/>
                         <h3 className='font-poppins'>Printing Services</h3> 
                         <p className='font-poppins'>Providing high-quality print services for various needs.</p> 
                         </div> 
                         </Link>

                         <Link href="/careers">
                         <div className="card"> 
                            <Image src={customer} alt="Customer's Demands"/>
                             <h3 className='font-poppins'>Customer's Demands</h3> 
                             <p className='font-poppins'>Handling and fulfilling special customer requests.</p> </div> 
                             </Link>

                             <Link href="/careers">
                             <div className="card"> 
                                <Image src={pickup} alt="Pick Up Service"/>
                                 <h3 className='font-poppins'>Pick Up Service</h3> 
                                 <p className='font-poppins'>Collecting items from specified locations for delivery.</p> </div>
                                 </Link>
                                  </div>
                                   </div>
  )
}

export default Career;
