import Head from 'next/head';
import Header from '../components/header';
import Banner from '../components/banner';
import Nav from '../components/navmenu';
import Features from '../components/feature';
import Features1 from '../components/feature1';
import Team from '../components/team';
import Testimonial from '../components/testimonial';
import Footer from '../components/footer';
import React, { useState } from 'react';
import Features2 from '../components/feature2';
import Features4 from '../components/feature4';
import About from '../components/about';
import Location from '../components/location';
import Contact from '../components/contact';
import Features5 from '../components/feature5';
import Features6 from '../components/feature6';

export default function Home() {
  const [isMonthly, setPeriod] = useState(true);
  return (
    <div className='w-screen overflow-hidden flex  bigtablet:block'>
      <Head>
        <title>ICare Errand</title>
        <meta name="description" content="Efficient errand and delivery services for individuals & businesses. Maximize productivity, Contact Us!" />
      <meta property='og:title' content="ICare Errand"/>
      <meta property="og:url" content="https://www.icareerrand.org"/>
      <meta property='og:description' content="Efficient errand and delivery services for individuals & businesses. Maximize productivity, Contact Us!"/>
      <meta property='og:image' content='https://www.Icareerrand.org/og.png'/>
    </Head>
    <div className='navBar bg-white fixed top-0 bigtablet:hidden z-50 h-screen' id='barContent'>
        <Nav/>
      </div>
    <div className=' overflow-y-scroll w-full overflow-x-hidden block '>
      <div className='fixed top-0 z-40'>
      <Header/>
      </div>
  <div className='mt-20'>
  <Banner/>
  <div name="Services" id="Services" className="w-full py-6">
  <p className='font-poppins text-3xl bigtablet:text-4xl font-bold text-center capitalize leading-normal'>Our Services</p>
<Features/>
<Features1/>
<Features2/>
<Features4/>
<Features5/>
<Features6/>
</div>
<About/>
<Testimonial/>
<Location/>
<Contact/>
  </div>
  <Footer/>
  </div> 
    </div>
  )
}
