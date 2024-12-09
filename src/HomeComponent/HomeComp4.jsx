import React from 'react'
import { Link } from 'react-router-dom'

function HomeComp4() {
  return (
    <>
      <main className='h-[600px] mb-[2430px] md:mb-[980px] lg:mb-[570px] mt-3'>
        <div>
          <h1 className='text-center font-bold text-xl mb-7 md:text-2xl lg:text-3xl pt-6'>Recent Properties</h1>
        </div>

        <div className='grid h-[2880px] md:h-[1400px] lg:h-[1010px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-5'>

          <section className='grid'>
            <img className='w-full p-2 shadow-sm rounded-md' src="https://livedemo00.template-help.com/wt_prod-18389/images/home-img-05-370x250.jpg"/>
            <h2 className='-mt-6 ml-2 text-xl font-bold text-orange-400'>AVA Nobs Hill</h2>
            <h2 className='-mt-4 ml-2 text-[15px] font-semibold'>$1199.00/mon</h2>
            <h1 className='-mt-5 text-[15px] ml-2 '>1200 sq ft .       4 bedrooms .      2 bathrooms</h1>
            <h2 className='-mt-5 ml-2 text-[13px] text-justify mr-2'>AVA Nob Hill includes studios and 1 and 2 bedroom apartments that feature an urban-inspired design that extends beyond your walls and throughout the entire community.</h2>
          </section>

          <section className='grid'>
            <img className='w-full p-2 shadow-sm rounded-md' src="https://livedemo00.template-help.com/wt_prod-18389/images/home-img-06-370x250.jpg"/>
            <h2 className='-mt-6 ml-2 text-xl font-bold text-orange-400'>Aston San Francisco</h2>
            <h2 className='-mt-4 ml-2 text-[15px] font-semibold'>$1595.00/mon</h2>
            <h1 className='-mt-5 text-[15px] ml-2 '>1200 sq ft . 2 bedrooms . 2 bathrooms</h1>
            <h2 className='-mt-5 ml-2 text-[13px] text-justify mr-2'>Ashton San Francisco offers luxury apartments, eco-friendly features, and remarkable on-site resident amenities. Enjoy premier services and access to our state-of-the-art fitness center, clubhouse, business center, and outdoor fire pit lounge.</h2>
          </section>

          <section className='grid'>
            <img className='w-full p-2 shadow-sm rounded-md' src="https://livedemo00.template-help.com/wt_prod-18389/images/home-img-07-370x250.jpg"/>
            <h2 className='-mt-6 ml-2 text-xl font-bold text-orange-400'>The Presido Resisdence</h2>
            <h2 className='-mt-4 ml-2 text-[15px] font-semibold'>$1199.00/mon</h2>
            <h1 className='-mt-5 text-[15px] ml-2 '>2200 sq ft . 4 bedrooms . 3 bathrooms</h1>
            <h2 className='-mt-5 ml-2 text-[13px] text-justify mr-2'>The Presidio Residences offer a unique opportunity to live in a national park setting and enjoy quiet neighborhoods, convenient location, beautiful open spaces, and outstanding recreational amenities.</h2>
          </section>

          <section className='grid'>
            <img className='w-full p-2 shadow-sm rounded-md' src="https://livedemo00.template-help.com/wt_prod-18389/images/home-img-08-370x250.jpg"/>
            <h2 className='-mt-6 ml-2 text-xl font-bold text-orange-400'>Alchemy by Alta</h2>
            <h2 className='-mt-4 ml-2 text-[15px] font-semibold'>$1199.00/mon</h2>
            <h1 className='-mt-5 text-[15px] ml-2 '>1200 sq ft .       4 bedrooms .      2 bathrooms</h1>
            <h2 className='-mt-5 ml-2 text-[15px] '>One month FREE on select apartment homes for a limited time</h2>
          </section>

          <section className='grid'>
            <img className='w-full p-2 shadow-sm rounded-md' src="https://livedemo00.template-help.com/wt_prod-18389/images/home-img-09-370x250.jpg"/>
            <h2 className='-mt-6 ml-2 text-xl font-bold text-orange-400'>Avalon at Mission Bay</h2>
            <h2 className='-mt-4 ml-2 text-[15px] font-semibold'>$1595.00/mon</h2>
            <h1 className='-mt-5 text-[15px] ml-2 '>1200 sq ft .       2 bedrooms .      2 bathrooms</h1>
            <h2 className='-mt-5 ml-2 text-[13px] text-justify mr-2'>Avalon at Mission Bay located in San Francisco near the San Francisco Caltrain Station offers thoughtfully designed studio, 1, 2 and 3 bedroom apartments and town homes.</h2>
          </section>

          <section className='grid'>
            <img className='w-full p-2 shadow-sm rounded-md' src="https://livedemo00.template-help.com/wt_prod-18389/images/home-img-10-370x250.jpg"/>
            <h2 className='-mt-6 ml-2 text-xl font-bold text-orange-400'>Bayside Village Apartment</h2>
            <h2 className='-mt-4 ml-2 text-[15px] font-semibold'>$1199.00/mon</h2>
            <h1 className='-mt-5 text-[15px] ml-2 '>2200 sq ft . 4 bedrooms . 3 bathrooms</h1>
            <h2 className='-mt-5 ml-2 text-[13px] text-justify mr-2'>Pick your pleasure from a vantage point that puts all the best of the city's lively South Beach neighborhood within easy reach.</h2>
          </section>
        </div>

        <div className='flex justify-center items-center mt-2'>
            <button className='bg-orange-400 w-56 p-3 rounded-lg text-white font-bold hover:scale-95 transition-all duration-500'>
              <Link to='/catalogue'>VIEW ALL PROPERTIES</Link>
            </button>
        </div>
      </main>
    </>
  )
}

export default HomeComp4