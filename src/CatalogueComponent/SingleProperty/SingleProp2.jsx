import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SingleProp2() {

  const settings = {
    autoplay: true,
    autoplaySpeed: 1000, // 2 seconds
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // fade: true, // Enable fading between slides
    // arrows: false, // Hide arrows for a smoother background transition
  };

  return (
    <>
        <div>
            <h1 className=' mb-5 mr-16 ml-16 text-center text-xl md:text-xl lg:text-3xl md:ml-60 md:mr-60 lg:text-center font-bold pt-8 border-b-2 border-orange-400 lg:ml-[500px] lg:mr-[500px]'>The Presidio Resisdence</h1>
        </div>
         <div className='lg:grid grid-cols-1 lg:grid-cols-[70%,30%] h-[500px] mb-[3270px] md:mb-[2160px] lg:mb-[750px] hidden md:hidden'>
         <div className='lg:ml-24 lg:block md:hidden hidden'>
         <Slider {...settings}>
          <div className='p-3'>
            <img className='h-full w-full' src='https://livedemo00.template-help.com/wt_prod-18389/images/single-property-page-02-770x510.jpg' /> 
          </div>
          <div className='p-3'>
          <img className='h-full w-full' src='https://livedemo00.template-help.com/wt_prod-18389/images/single-property-page-03-770x510.jpg' />
          </div>
          <div className='p-3'>
            <img className='h-full w-full' src='https://livedemo00.template-help.com/wt_prod-18389/images/single-property-page-01-770x510.jpg'/>
          </div>
          <div className='p-3'>
            <img className='h-full w-full' src='https://livedemo00.template-help.com/wt_prod-18389/images/single-property-page-05-770x510.jpg' />
          </div>
          <div className='p-3'>
            <img className='h-full w-full' src='https://livedemo00.template-help.com/wt_prod-18389/images/single-property-page-06-770x510.jpg' />
          </div>
          <div className='p-3'>
            <img className='h-full w-full' src='https://livedemo00.template-help.com/wt_prod-18389/images/single-property-page-07-770x510.jpg' />
          </div>
          <div className='p-3'>
          <img className='h-full w-full' src='https://livedemo00.template-help.com/wt_prod-18389/images/single-property-page-08-770x510.jpg' />
          </div>
         </Slider> 

          <main>
            <h1 className='pt-2 lg:ml-2 mb-3 text-xl md:hidden hidden lg:block font-bold'>Description</h1>
            <h2 className='text-justify lg:ml-2 mr-2 lg:text-[15px] hidden text-black md:hidden lg:block '>The Presidio Residences offer a unique opportunity to live in a national park setting and enjoy quiet neighborhoods, convenient location, beautiful open spaces, and outstanding recreational amenities that you won’t find anywhere else in the area.</h2>
            <h2 className='mt-2 text-justify lg:ml-2 mr-2 lg:text-[15px] hidden text-black md:hidden lg:block '>
            This property includes a wide variety of facilities that can make your dwelling in the picturesque area of Southern Los Angeles very comfortable. There is everything modern citizen may need, even the most up-to-date technologies that are organically integrated with all the communications of the house. If you are looking for a calm place to live, the Presidential Residences have something to offer you. With effective planning and additional amenities available as a part of the property, these apartments can give you an unprecedented level of comfort with a quick access to the airport, train station, and the city center.
            </h2>
          </main> 

                <main className='mt-6'>
                  <h1 className='text-[15px] font-bold hidden md:hidden lg:block ml-2'>Property Details</h1>
                </main>

                <div className="lg:flex hidden md:hidden ml-2 mr-2 p-1 border-b-[1px] border-b-slate-500 bg-slate-300 mb-2">
                  <div className='lg:flex hidden md:hidden ml-2 mr-2'>
                    <h1 className='font-semibold text-[15px]'>Features:</h1><h2 className='text-xs ml-[110px]'>Lawn, Sprinkler System, Marble Floors</h2>
                </div>
                </div>

                <div className="lg:flex hidden md:hidden ml-2 mr-2 p-1 border-b-[1px] border-b-slate-500 mb-2">
                  <div className='lg:flex hidden md:hidden ml-2 mr-3'>
                    <h1 className='font-semibold text-[15px]'>MLS Listing ID:</h1><h2 className='text-xs ml-[70px]'>12345678</h2>
                  </div>
                </div>

                <div className="lg:flex hidden md:hidden ml-2 mr-2 p-1 border-b-[1px] border-b-slate-500 bg-slate-300 mb-2">
                  <div className='lg:flex hidden md:hidden ml-2 mr-2'>
                    <h1 className='font-semibold text-[15px]'>Year Built:</h1><h2 className='text-xs ml-[105px]'>1868</h2>
                </div>
                </div>

                <div className="lg:flex hidden md:hidden ml-2 mr-2 p-1 border-b-[1px] border-b-slate-500 mb-2">
                  <div className='lg:flex hidden md:hidden ml-2 mr-3'>
                    <h1 className='font-semibold text-[15px]'>Lot Size:</h1><h2 className='text-xs ml-[120px]'>5.45</h2>
                  </div>
                </div>
                
                <div className="lg:flex hidden md:hidden ml-2 mr-2 p-1 border-b-[1px] border-b-slate-500 bg-slate-300 mb-2">
                  <div className='lg:flex hidden md:hidden ml-2 mr-2'>
                    <h1 className='font-semibold text-[15px]'>Parking Type:</h1><h2 className='text-xs ml-[85px]'>Garage - Attached</h2>
                </div>
                </div>

                <div className="lg:flex hidden md:hidden ml-2 mr-2 p-1 border-b-[1px] border-b-slate-500 mb-2">
                  <div className='lg:flex hidden md:hidden ml-2 mr-3'>
                    <h1 className='font-semibold text-[15px]'>Room Count:</h1><h2 className='text-xs ml-[90px]'>6</h2>
                  </div>
                </div>

                <div className="lg:flex hidden md:hidden ml-2 mr-2 p-1 border-b-[1px] border-b-slate-500 bg-slate-300 mb-2">
                  <div className='lg:flex hidden md:hidden ml-2 mr-2'>
                    <h1 className='font-semibold text-[15px]'>Roof Type:</h1><h2 className='text-xs ml-[105px]'>Tile</h2>
                </div>
                </div>

                <div className="lg:flex hidden md:hidden ml-2 mr-2 p-1 border-b-[1px] border-b-slate-500 mb-2">
                  <div className='lg:flex hidden md:hidden ml-2 mr-3'>
                    <h1 className='font-semibold text-[15px]'>View Type:</h1><h2 className='text-xs ml-[105px]'>Mountain</h2>
                  </div>
                </div>

                <div className="lg:flex hidden md:hidden ml-2 mr-2 p-1 border-b-[1px] border-b-slate-500 bg-slate-300 mb-2">
                  <div className='lg:flex hidden md:hidden ml-2 mr-2'>
                    <h1 className='font-semibold text-[15px]'>Exterior Type:</h1><h2 className='text-xs ml-[85px]'>Stucco</h2>
                </div>
                </div>

                {/* <div>
                  <h1 className=' mb-5  text-center lg:text-3xl  lg:text-center font-bold pt-8 border-b-2 border-orange-400 lg:ml-[100px] lg:mr-[100px]'>Similiar Properties</h1>
                </div> */}
         </div>
          <section className='sticky z-10 top-[130px]'>
            <div className='flex gap-1 ml-7 pt-10'>
              <span>📆</span><h2>April 12, 2022</h2>
            </div>
              <h2 className='pt-10 ml-7 gap-2'>2200 sq ft . 4 bedrooms . 3 bathrooms</h2>
              <h2 className='pt-10 ml-7 font-bold text-2xl'>$2699.00/mon</h2>
              <div className='mt-8'>
                <button className='w-48 ml-7 mb-3 p-3 rounded-sm text-white font-semibold bg-orange-400'>CONTACT AN AGENT</button>
                <button className='w-40 ml-7 mb-16 p-3 rounded-sm text-white font-semibold bg-blue-400'>REQUEST A VISIT</button>
              </div>

              <main className='flex gap-2 mt-5 '>
                <div>
                  <img className='ml-7' src="https://livedemo00.template-help.com/wt_prod-18389/images/users/user-shirley-vasquez-120x120.jpg" alt="" />
                </div>
                <div className='grid'>
                  <h2 className='text-orange-400 text-xl font-bold pt-3'>Shirley Vasquez</h2>
                  <span><i class="fa-solid fa-phone"></i></span><h2 className='ml-8 -mt-8'>1-800-7650-986</h2>
                  <span><i class="fa-solid fa-envelope"></i></span><h2 className='ml-8 -mt-8'>Shirley@demolink.org</h2>
                </div>
              </main>
            </section>
            </div> 


        <main className='lg:hidden'>
            <div className='grid grid-cols-1 md:grid-cols-1'>
              <div className='p-5'>
              <Slider {...settings}>
                  <div className='p-3'>
                    <img className='h-full w-full' src='https://livedemo00.template-help.com/wt_prod-18389/images/single-property-page-02-770x510.jpg' /> 
                  </div>
                  <div className='p-3'>
                  <img className='h-full w-full' src='https://livedemo00.template-help.com/wt_prod-18389/images/single-property-page-03-770x510.jpg' />
                  </div>
                  <div className='p-3'>
                    <img className='h-full w-full' src='https://livedemo00.template-help.com/wt_prod-18389/images/single-property-page-01-770x510.jpg'/>
                  </div>
                  <div className='p-3'>
                    <img className='h-full w-full' src='https://livedemo00.template-help.com/wt_prod-18389/images/single-property-page-05-770x510.jpg' />
                  </div>
                  <div className='p-3'>
                    <img className='h-full w-full' src='https://livedemo00.template-help.com/wt_prod-18389/images/single-property-page-06-770x510.jpg' />
                  </div>
                  <div className='p-3'>
                    <img className='h-full w-full' src='https://livedemo00.template-help.com/wt_prod-18389/images/single-property-page-07-770x510.jpg' />
                  </div>
                  <div className='p-3'>
                  <img className='h-full w-full' src='https://livedemo00.template-help.com/wt_prod-18389/images/single-property-page-08-770x510.jpg' />
                  </div>
                </Slider> 
              </div>

              <main>
                <h1 className='pt-2 ml-4 mb-3 text-xl lg:hidden font-bold'>Description</h1>
                <h2 className='text-justify ml-4 mr-2 text-[13px] text-black lg:hidden'>The Presidio Residences offer a unique opportunity to live in a national park setting and enjoy quiet neighborhoods, convenient location, beautiful open spaces, and outstanding recreational amenities that you won’t find anywhere else in the area.</h2>
                <h2 className='mt-2 text-justify ml-4 mr-2 text-[13px]  text-black lg:hidden'>
                This property includes a wide variety of facilities that can make your dwelling in the picturesque area of Southern Los Angeles very comfortable. There is everything modern citizen may need, even the most up-to-date technologies that are organically integrated with all the communications of the house. If you are looking for a calm place to live, the Presidential Residences have something to offer you. With effective planning and additional amenities available as a part of the property, these apartments can give you an unprecedented level of comfort with a quick access to the airport, train station, and the city center.
                </h2>
              </main> 

              <main className='mt-6'>
                  <h1 className='text-[15px] font-bold lg:hidden ml-4'>Property Details</h1>
              </main>

              <div className="lg:hidden ml-4 mr-2 p-1 border-b-[1px] border-b-slate-500 bg-slate-300 mb-2">
                  <div className='lg:hidden ml-4 mr-4'>
                    <h1 className='font-semibold text-[15px]'>Features:</h1><h2 className='text-xs -mt-5 ml-36'>Lawn, Sprinkler System, Marble Floors</h2>
                </div>
                </div>

                <div className="lg:hidden ml-4 mr-4 p-1 border-b-[1px] border-b-slate-500 mb-2">
                  <div className='lg:hidden ml-4 mr-3'>
                    <h1 className='font-semibold text-[15px]'>MLS Listing ID:</h1><h2 className='text-xs -mt-5 ml-36'>12345678</h2>
                  </div>
                </div>

                <div className="lg:hidden ml-4 mr-4 p-1 border-b-[1px] border-b-slate-500 bg-slate-300 mb-2">
                  <div className='lg:hidden ml-4 mr-4'>
                    <h1 className='font-semibold text-[15px]'>Year Built:</h1><h2 className='text-xs -mt-5 ml-36'>1868</h2>
                </div>
                </div>

                <div className="lg:hidden ml-4 mr-4 p-1 border-b-[1px] border-b-slate-500 mb-2">
                  <div className='lg:hidden ml-4 mr-3'>
                    <h1 className='font-semibold text-[15px]'>Lot Size:</h1><h2 className='text-xs -mt-5 ml-36'>5.45</h2>
                  </div>
                </div>
                
                <div className="lg:hidden ml-4 mr-4 p-1 border-b-[1px] border-b-slate-500 bg-slate-300 mb-2">
                  <div className='lg:hidden ml-4 mr-4'>
                    <h1 className='font-semibold text-[15px]'>Parking Type:</h1><h2 className='text-xs -mt-5 ml-36'>Garage - Attached</h2>
                </div>
                </div>

                <div className="lg:hidden ml-4 mr-4 p-1 border-b-[1px] border-b-slate-500 mb-2">
                  <div className='lg:hidden ml-4 mr-3'>
                    <h1 className='font-semibold text-[15px]'>Room Count:</h1><h2 className='text-xs -mt-5 ml-36'>6</h2>
                  </div>
                </div>

                <div className="lg:hidden ml-4 mr-4 p-1 border-b-[1px] border-b-slate-500 bg-slate-300 mb-2">
                  <div className='lg:hidden ml-4 mr-4'>
                    <h1 className='font-semibold text-[15px]'>Roof Type:</h1><h2 className='text-xs -mt-5 ml-36'>Tile</h2>
                </div>
                </div>

                <div className="lg:hidden ml-4 mr-4 p-1 border-b-[1px] border-b-slate-500 mb-2">
                  <div className='lg:hidden ml-4 mr-3'>
                    <h1 className='font-semibold text-[15px]'>View Type:</h1><h2 className='text-xs -mt-5 ml-36'>Mountain</h2>
                  </div>
                </div>

                <div className="lg:hidden ml-4 mr-4 p-1 border-b-[1px] border-b-slate-500 bg-slate-300 mb-2">
                  <div className='lg:hidden ml-4 mr-4'>
                    <h1 className='font-semibold text-[15px]'>Exterior Type:</h1><h2 className='text-xs -mt-5 ml-36'>Stucco</h2>
                </div>
                </div>

                <section className='sticky z-10 top-[130px]'>
            <div className='flex gap-1 ml-7 pt-10'>
              <span>📆</span><h2>April 12, 2022</h2>
            </div>
              <h2 className='pt-10 ml-7 gap-2'>2200 sq ft . 4 bedrooms . 3 bathrooms</h2>
              <h2 className='pt-10 ml-7 font-bold text-2xl'>$2699.00/mon</h2>
              <div className='mt-8'>
                <button className='w-48 ml-7 mb-3 p-3 rounded-sm text-white font-semibold bg-orange-400'>CONTACT AN AGENT</button>
                <button className='w-40 ml-7 mb-16 p-3 rounded-sm text-white font-semibold bg-blue-400'>REQUEST A VISIT</button>
              </div>

              <main className='flex gap-2 mt-5 '>
                <div>
                  <img className='ml-7' src="https://livedemo00.template-help.com/wt_prod-18389/images/users/user-shirley-vasquez-120x120.jpg" alt="" />
                </div>
                <div className='grid'>
                  <h2 className='text-orange-400 text-xl font-bold pt-3'>Shirley Vasquez</h2>
                  <span><i class="fa-solid fa-phone"></i></span><h2 className='ml-8 -mt-8'>1-800-7650-986</h2>
                  <span><i class="fa-solid fa-envelope"></i></span><h2 className='ml-8 -mt-8'>Shirley@demolink.org</h2>
                </div>
              </main>
            </section>

            </div>
        </main>



    </> 
  )
}

export default SingleProp2
