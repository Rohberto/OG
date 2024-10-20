import React from 'react';
import Image from 'next/image';
import Image1 from "../assets/about.jpg";

const About = () => {
  return (
    <div className="container mx-auto px-6" name="About" id="About">
        <div className="text-center">
            <h2 className="font-poppins text-3xl bigtablet:text-4xl font-bold text-center capitalize leading-normal">
                Welcome to ICare Errand
            </h2>
            </div>
            <div className="about-img-container py-6">
            <Image src={Image1} alt="About Us" width={600} height={200} layout="responsive" objectFit="cover"/> 
            </div>
            <p className="font-poppins text-base capitalize py-6">At ICare Errand, we specialize in providing efficiency and lifestyle management services designed to help busy individuals and businesses enhance their productivity. <span className='font-bold'>Our mission is to allow you to focus on what truly matters by taking care of the tasks that consumes your valuable time.</span></p>

            <h2 className="font-poppins text-3xl bigtablet:text-4xl font-bold text-center capitalize leading-normal py-4">
               Our Story
            </h2>
                 <p className="font-poppins text-base capitalize py-6">Founded with the goal of transforming productivity for our clients, ICare errand has become a trusted partner in managing day-to-day activities efficiently. We understand the challenges of a busy lifestyle and are dedicated to offering solutions that help you acheive more.</p>
        </div>
 
  )
}

export default About
