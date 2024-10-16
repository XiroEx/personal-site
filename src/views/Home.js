import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const Home = () => {

  //<Testimonial topDivider />
  return (
    <>
      <Header navPosition="right" className="reveal-from-bottom" />
      <main className="site-content">
        <Hero className="illustration-section-01" />
        <FeaturesTiles />
        <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" /> 
        <Cta split />
      </main>
      <Footer />
    </>
  );
}

export default Home;