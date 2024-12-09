import React from 'react'
import { Link } from 'react-router-dom';

// const group=[
//     {id:1, image: "", title: "", name: "32 properties", button:'' },
//     {id:2, image: "", title: "", name: "54 properties", button:'CHOOSE AN APARTMENT'},
//     {id:3, image: "", title: "", name: "32 properties", button:'CHOOSE AN APARTMENT'},
//     {id:4, image: "", title: "", name: "19 properties", button:'CHOOSE AN APARTMENT'}
//   ];

function HomeComp2() {
  return (
    <>
    <main className='mt-5 md:h-[470px] lg:h-[210px] ml-10 mr-10 mb-[50px] md:mb-[5px] lg:mb-2 p-6 md:p-3 rounded-md gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        <div className='shadow-lg rounded-md'>
           <div className='grid  overflow-y-hidden relative'>
                <img className='relative peer rounded-md' src="https://livedemo00.template-help.com/wt_prod-18389/images/home-img-01-442-280.jpg"/>
                <h2 className='absolute mt-12 ml-12 md:mt-16 md:ml-20 lg:mt-16 lg:ml-10 lg:text-xl font-bold'>With Swimming Pool</h2>
                <h2 className='absolute mt-16 ml-20 text-white font-semibold md:mt-20 md:ml-28 lg:mt-24 lg:ml-20'>32 properties</h2>
                <button className='absolute p-4 bg-orange-400 font-bold rounded-md ml-10 md:ml-20 text-xs lg:text-xs lg:ml-14 bottom-[-50px] peer-hover:bottom-[20px] transition-all duration-700'>
                    <h2>CHOOSE AN APARTMENT</h2>
                </button>
            </div> 
        </div>

        <div className='shadow-lg rounded-md'>
           <div className='grid  overflow-y-hidden relative'>
                <img className='relative peer rounded-md' src="https://livedemo00.template-help.com/wt_prod-18389/images/home-img-02-442-280.jpg"/>
                <h2 className='absolute mt-12 ml-20 md:mt-16 md:ml-28 lg:mt-16 lg:ml-20 lg:text-xl font-bold'>Cozy Houses</h2>
                <h2 className='absolute mt-16 ml-20 md:mt-20 md:ml-28 text-white font-semibold lg:mt-24 lg:ml-24'>54 properties</h2>
                <button className='absolute p-4 bg-orange-400 font-bold rounded-md ml-10 md:ml-20 text-xs lg:text-xs lg:ml-14 bottom-[-50px] peer-hover:bottom-[20px] transition-all duration-700'>
                    <h2>CHOOSE AN APARTMENT</h2>
                </button>
            </div> 
        </div>

        <div className='shadow-lg rounded-md'>
           <div className='grid  overflow-y-hidden relative'>
                <img className='relative peer rounded-md' src="https://livedemo00.template-help.com/wt_prod-18389/images/home-img-03-442-280.jpg"/>
                <h2 className='absolute mt-12 ml-12 md:mt-16 md:ml-28 lg:mt-16 lg:ml-14 lg:text-xl font-bold'>Studio Apartments</h2>
                <h2 className='absolute mt-16 ml-20 md:mt-20 md:ml-32 text-white font-semibold lg:mt-24 lg:ml-28'>32 properties</h2>
                <button className='absolute p-4 bg-orange-400 font-bold rounded-md ml-10 md:ml-20 text-xs lg:text-xs lg:ml-14 bottom-[-50px] peer-hover:bottom-[20px] transition-all duration-700'>
                    <h2>CHOOSE AN APARTMENT</h2>
                </button>
            </div> 
        </div>

        <div className='shadow-lg rounded-md'>
           <div className='grid  overflow-y-hidden relative'>
                <img className='relative peer rounded-md' src="https://livedemo00.template-help.com/wt_prod-18389/images/home-img-04-442-280.jpg"/>
                <h2 className='absolute mt-12 ml-20 md:mt-16 md:ml-28 lg:mt-16 lg:ml-20 lg:text-xl font-bold'>Luxury Houses</h2>
                <h2 className='absolute mt-16 ml-20 md:mt-20 md:ml-32 text-white font-semibold lg:mt-24 lg:ml-24'>19 properties</h2>
                <button className='absolute p-4 bg-orange-400 font-bold rounded-md ml-10 md:ml-20 text-xs lg:text-xs lg:ml-14 bottom-[-50px] peer-hover:bottom-[20px] transition-all duration-700'>
                    <h2>CHOOSE AN APARTMENT</h2>
                </button>
            </div> 
        </div>
    </main>

    </>
  )
}

export default HomeComp2