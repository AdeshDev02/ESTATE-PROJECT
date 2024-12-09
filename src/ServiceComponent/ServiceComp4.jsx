import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ServiceComp4() {

    const settings = {
        // autoplay: true,
        // autoplaySpeed: 3000, // 2 seconds
        infinite: true,
        speed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        // fade: true, // Enable fading between slides
        // arrows: false, // Hide arrows for a smoother background transition
      };

  return (
    <>
     <main className='h-[250px] md:h-[320px] lg:h-[350px] mt-1 bg-slate-300' >
      <section className=' p-5 lg:p-8 ml-2 mr-2'>
        <Slider {...settings}>
            <div className='h-[200px] md:h-[280px] p-2 rounded-md lg:h-[300px]'>
              <img className='h-[90px] mb-2 w-[90px] md:h-[130px] md:w-[130px] md:ml-64 lg:ml-[550px] lg:h-[150px] lg:w-[150px] rounded-full mt-3 ml-24' src='https://livedemo00.template-help.com/wt_prod-18389/images/users/user-lisa-evans-80x80.jpg'/>
              <h1 className='text-center text-xs md:text-xl lg:text-xl p-2 lg:p-5'>Thank you for your prompt response and the help that you gave me. You always have a quick solution to any problem. What an excellent level of customer service!</h1>
              <h2 className='text-center -mt-1 font-bold text-xl'>-Lisa Evan-</h2>
            </div>

            <div className='h-[200px] md:h-[280px] p-2 rounded-md lg:h-[300px]'>
              <img className='h-[90px] mb-2 w-[90px] md:h-[130px] md:w-[130px] md:ml-64 lg:ml-[550px] lg:h-[150px] lg:w-[150px] rounded-full mt-3 ml-24' src='https://livedemo00.template-help.com/wt_prod-18389/images/users/user-nicholas-lane-80x80.jpg'/>
              <h1 className='text-center text-xs md:text-xl lg:text-xl p-2 lg:p-5'>I just want to thank you for your help. I was so pleased and grateful. Keep up the excellent work. Your site provides the best support I have ever encountered.</h1>
              <h2 className='text-center -mt-1 font-bold text-xl'>-Nicholas Lane-</h2>
            </div>

            <div className='h-[200px] md:h-[280px] p-2 rounded-md lg:h-[300px]'>
              <img className='h-[90px] mb-2 w-[90px] md:h-[130px] md:w-[130px] md:ml-64 lg:ml-[550px] lg:h-[150px] lg:w-[150px] rounded-full mt-3 ml-24' src='https://livedemo00.template-help.com/wt_prod-18389/images/users/user-ethan-dean-80x80.jpg'/>
              <h1 className='text-center text-xs md:text-xl lg:text-xl p-2 lg:p-5'>Thank you very much for your rapid response. It's no doubt that your company is worth admiring! I have experienced the fastest support ever.Thank you a thousand </h1>
              <h2 className='text-center -mt-1 font-bold text-xl'>-Ethan Dean-</h2>
            </div>
        </Slider>
        </section>
      </main> 
    </>
  )
}

export default ServiceComp4
