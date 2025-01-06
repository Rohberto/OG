import React from 'react';
import Image from 'next/image';
import babySitter from "../assets/babysitting.jpg";
import dropOff from "../assets/dropoff.jpg";
import printing from "../assets/printing.jpg";
import customer from "../assets/customer.jpg";
import pickup from "../assets/pickup.jpg";
import Link from 'next/link';
import Data from "../assets/data.jpg";
import Admin from "../assets/admin.jpg";

const Career = () => {
  return (
    <div className="job-vacancies font-poppins"> 
        <h2 className='font-poppins'>Job Opportunities</h2> 
        <p className="employment-note font-poppins">Employment ongoing for:</p> 
        <div className="vacancy-cards font-poppins"> 
        <Link href="/careers">
                             <div className="card"> 
                                <Image src={pickup} alt="Pick Up Service"/>
                                 <h3 className='font-poppins'>Errand Runner</h3> 
                                 <p className='font-poppins'>Need a helping hand? Our Errand Runner service is here for you! From grocery shopping and package delivery to picking up prescriptions or running personal errands, we take the stress out of your day. Fast, reliable, and tailored to your needs</p> </div>
                                 </Link>
       
        <Link href="/careers">
                             <div className="card"> 
                                <Image src={Data} alt="Pick Up Service"/>
                                 <h3 className='font-poppins'>Data Entry Clerk</h3> 
                                 <p className='font-poppins'>Efficient and detail-oriented Data Entry Clerk skilled in accurately inputting, managing, and maintaining data. With a focus on speed and precision, I ensure data integrity and streamline information processing.</p> </div>
                                 </Link>
        <Link href="/careers">
                             <div className="card"> 
                                <Image src={Admin} alt="Pick Up Service"/>
                                 <h3 className='font-poppins'>Administrative Assistant</h3> 
                                 <p className='font-poppins'>Organized and proactive Administrative Assistant with expertise in managing schedules, coordinating meetings, and ensuring smooth office operations. </p> </div>
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

                           
                                  </div>
                                   </div>
  )
}

export default Career;
