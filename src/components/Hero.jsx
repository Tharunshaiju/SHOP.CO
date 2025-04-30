import React from 'react';
import HeroImg from '../Images/Rectangle 2.png';

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex flex-col relative">

      <div className=" flex flex-1 items-center justify-between px-12">
        <div className=" absolute left-10 flex flex-col gap-6 w-1/2 z-10">
          <h1 className="text-8xl font-bold leading-20">
            FIND CLOTHES THAT MATCH YOUR STYLE
          </h1>
          <p className="text-gray-600 text-lg w-2/3">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>
          <button className="bg-black text-white rounded-full h-12 w-40 hover:bg-gray-800 transition">
            Shop Now
          </button>

          <div className="hidden md:flex flex gap-12 mt-8">
            <div className="flex flex-col items-center">
              
              <span className="text-5xl font-bold">200+</span>
              <span className="text-gray-600  text-sm">International Brands</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-bold">2,000+</span>
              <span className="text-gray-600 text-sm">High-Quality Products</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-bold">30,000+</span>
              <span className="text-gray-600 text-sm">Happy Customers</span>
            </div>
          </div>
        </div>

        <div className="hidden md:block w-screen h-screen">
             <img src={HeroImg} alt="Hero" className="object-cover w-full h-full" />
        </div>
      </div>
      

      <div className="w-full p-10 bg-black flex flex-wrap items-center justify-center gap-12 md:gap-20">
  <span className="text-white text-3xl font-serif tracking-widest uppercase">VERSACE</span>
  <span className="text-white text-3xl font-sans font-bold uppercase tracking-wider">ZARA</span>
  <span className="text-white text-3xl font-serif italic tracking-wide uppercase">GUCCI</span>
  <span className="text-white text-3xl font-sans tracking-tight uppercase">PRADA</span>
  <span className="text-white text-3xl font-light font-sans tracking-normal capitalize">Calvin Klein</span>
</div>

    </section>
  );
};

export default Hero;

