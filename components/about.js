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
            <p className="font-poppins text-base capitalize py-6">At ICare Errand, we specialize in providing efficiency and lifestyle management services designed to help busy individuals and businesses enhance their productivity. <span className='font-bold'>Our mission is to allow you to focus on what truly matters by taking care of the tasks that consumes your valuable time.</span>
            Founded with the mission to simplify daily tasks for individuals,families and businesses, we offer a range of personalized errand and delivery services that prioritize your time and convenience. From ggrocery shopping and prescription pick-ups to dry cleaning, pet care and package deliveries, we handle the errands you don't have time for efficiently, safely and with care. <br/> 
            <br/>
            <br/>
            Our dedicated team is committed to delivering top-notch service with a personal touch. We understand that every clients needs are unique and thats why we offer flexible scheduling, customized solutions and reliable support you can count on. Whether it's a one-time request or regular assistance , ICare is here to make your day easier and more manageable.
            <br/>
            <br/>
            <br/>
            What sets us apart is our attention to detail and our passion for helping others. We take pride in building trust with our clients by providing dependable, timely and discreet services. Your errands are handled with the utmost care and professionalism, so you can relax knowing that ICare has everything covered.
            <br/>
            <br/>
            <br/>
            AT ICare errand & Delivery Services, we're more than just a service provider -- we're your partner in making everyday life simpler. Let us take care of the little things, so you can focus on what matters most.</p>

        </div>
 
  )
}

export default About
