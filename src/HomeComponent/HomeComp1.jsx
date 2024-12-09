import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

function HomeComp1() {
    const settings = {
        autoplay: true,
        autoplaySpeed: 3000, // 2 seconds
        infinite: true,
        speed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        // fade: true, // Enable fading between slides
        // arrows: false, // Hide arrows for a smoother background transition
      };
    
  return (
    <>
      
      <main className=''>
        <Slider {...settings}>
        <div className='boo h-[400px] md:h-[600px] lg:h-[600px]'>
            <h2 className='flex justify-center mt-60 text-white font-bold text-2xl sm:text-3xl lg:text-6xl'>THE REAL ESTATE HOUSE</h2>
            <div className='flex gap-4 justify-center items-center mt-7'>
                <button className='w-[160px] bg-orange-300 hover:bg-orange-500 rounded-md p-3 font-bold sm:w-[250px] sm:text-xl lg:p-4 lg:text-2xl lg:w-[200px]'>
                <Link to='/catalogue'>View More</Link></button>
                <button className='w-[160px] border-white border-[2px] hover:bg-white rounded-md p-3 font-bold sm:w-[250px] sm:text-xl lg:p-4 lg:text-2xl lg:w-[200px]'>
                <Link to='/contact'>Contact us</Link></button>
            </div>
        </div>
        <div className='book h-[400px] md:h-[600px] lg:h-[600px]'>
            <h2 className='flex justify-center mt-60 text-white font-bold text-2xl sm:text-3xl lg:text-6xl'>THE REAL ESTATE HOUSE</h2>
            <div className='flex gap-4 justify-center items-center mt-7'>
                <button className='w-[160px] bg-orange-300 hover:bg-orange-500 rounded-md p-3 font-bold sm:w-[250px] sm:text-xl lg:p-4 lg:text-2xl lg:w-[200px]'>
                <Link to='/catalogue'>View More</Link></button>
                <button className='w-[160px] border-white border-[2px] hover:bg-white rounded-md p-3 font-bold sm:w-[250px] sm:text-xl lg:p-4 lg:text-2xl lg:w-[200px]'>
                <Link to='/contact'>Contact us</Link></button>
            </div>
        </div>
        <div className='books h-[400px] md:h-[600px] lg:h-[600px]'>
            <h2 className='flex justify-center mt-60 text-white font-bold text-2xl sm:text-3xl lg:text-6xl'>THE REAL ESTATE HOUSE</h2>
            <div className='flex gap-4 justify-center items-center mt-7'>
                <button className='w-[160px] bg-orange-300 hover:bg-orange-500 rounded-md p-3 font-bold sm:w-[250px] sm:text-xl lg:p-4 lg:text-2xl lg:w-[200px]'>
                <Link to='/catalogue'>View More</Link></button>
                <button className='w-[160px] border-white border-[2px] hover:bg-white rounded-md p-3 font-bold sm:w-[250px] sm:text-xl lg:p-4 lg:text-2xl lg:w-[200px]'>
                <Link to='/contact'>Contact us</Link></button>
            </div>
        </div>
      </Slider>
        </main>  
    </>
  )
}

export default HomeComp1






