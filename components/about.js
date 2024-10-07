import React from 'react';
import Image from 'next/image';
import Image1 from "../assets/about.jpg";

const About = () => {
  return (
    <div className="container mx-auto px-6" name="About" id="About">
        <div className="text-center">
            <h2 className="font-poppins text-3xl bigtablet:text-4xl font-bold text-center capitalize leading-normal">
                About Us
            </h2>
            </div>
            <div className="about-img-container py-6">
            <Image src={Image1} alt="About Us" width={600} height={200} layout="responsive" objectFit="cover"/> 
            </div>
            <p className="font-poppins text-base capitalize py-6">We are a dedicated team committed to providing exceptional services. Our focus is on delivering reliable and convenient solutions tailored to meet your needs.</p>

                 <p className="font-poppins text-base capitalize py-6">At ICare Errand Services, we understand the importance of time. That's why we offer comprehensive errand services designed to help you handle daily tasks with ease. Let us take care of your errands so you can focus on what truly matters.</p>
        </div>
 
  )
}

export default About
