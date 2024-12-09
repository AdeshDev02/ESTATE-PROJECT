import React from 'react'

function HomeComp5() {
  return (
    <>
      <main className='bool h-[950px] lg:h-[600px] md:h-[900px]'>
      <div>
          <h2 className='text-center text-white font-bold text-xl mb-7 md:text-3xl lg:text-4xl pt-20'>Real Estate Tools and Resources</h2>
        </div>

        <div className='h-[400px] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 p-9 gap-9'>
            <section className=''>
              <div className='flex justify-center items-center'>
                <div className='h-[70px] w-[70px] mt-5 md:mt-8 lg:mt-14 bg-orange-400 rounded-full flex justify-center items-center'>
                  <span className='text-2xl text-white'><i class="fa-solid fa-message"></i></span>
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <h2 className='mt-2 text-xl font-bold text-white'>MORE LISTING</h2>
              </div>
              <div className='flex justify-center items-center text-center'>
                <h2 className='text-[15px] text-white mt-5'>Check up to 40% more houses for sale. See pictures of your new life at a new place. See maps, markets, etc.</h2>
              </div>
            </section>

            <section className=''>
              <div className='flex justify-center items-center'>
                <div className='h-[70px] w-[70px] mt-5 md:mt-8 lg:mt-14 bg-orange-400 rounded-full flex justify-center items-center'>
                  <span className='text-2xl text-white'><i class="fa-solid fa-star"></i></span>
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <h2 className='mt-2 text-xl font-bold text-white'>TOP-RATED AGENTS</h2>
              </div>
              <div className='flex justify-center items-center text-center'>
                <h2 className='text-[15px] text-white mt-5'>All our real estate agents are professionals in your neighborhood, which are ready to help you find your new home.</h2>
              </div>
            </section>

            <section className=''>
              <div className='flex justify-center items-center'>
                <div className='h-[70px] w-[70px] mt-5 md:mt-8 lg:mt-14 bg-orange-400 rounded-full flex justify-center items-center'>
                  <span className='text-2xl text-white'><i class="fa-solid fa-house"></i></span>
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <h2 className='mt-2 text-xl font-bold text-white'>HOUSE ESTIMATES</h2>
              </div>
              <div className='flex justify-center items-center text-center'>
                <h2 className='text-[15px] text-white mt-5'>Wanna know how much your new home will cost? See estimates for any neighborhood and check prices for similar homes.</h2>
              </div>
            </section>
        </div>
      </main>
    </>
  )
}

export default HomeComp5