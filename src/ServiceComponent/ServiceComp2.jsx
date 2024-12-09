import React from 'react'

function ServiceComp2() {
  return (
    <>
      <main className='h-[1000px] md:h-[750px] lg:h-[500px]'>
        <div>
            <h1 className=' mb-5 mr-32 ml-32 text-center text-xl md:text-xl lg:text-3xl md:ml-96 md:mr-80 lg:text-center font-bold pt-8 border-b-2 border-orange-400 lg:ml-[600px] lg:mr-[600px]'>OVERVIEW</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2'>
            <div className='md:ml-9 mt-10'> 
                <img className='h-[100%] ml-20' src="https://livedemo00.template-help.com/wt_prod-18389/images/services-img-01-470x310.jpg"/>
            </div>
            <div>
                <h2  className='text-[15px] ml-3 mr-3 md:mr-9 text-justify mt-9'>
                   Immovables is a national Real Estate Agency established in 2006 in Los Angeles. Our company was initially designed to help people who are looking for a rental or an apartment for sale. Today we provide video demonstrations of millions of apartments and houses across the country as well as free access to our database for our clients. Awarded with “the Most Innovative Real Estate Agency” prize in 2012, Immovables strives to make your housing experience as comfortable as it can be. We care about our clients and help them get the most money and comfort out of their purchases. Moreover, the area of our operation covers many states of the country, so you can be sure you will find the proper house.
                </h2>
                <h2 className='text-[15px] ml-3 mr-3 md:mr-9 text-justify mt-5'>
                  Our agents widely cooperate with professional property owners and business companies generating calls from prospects looking for commercial real estate. Thanks to our website, it can be done easier and faster than ever. Whether you are a private individual or a business representative, here you will find the property you are looking for and service you deserve.
                </h2>
            </div>
        </div>
        <div>
            <h2></h2>
        </div>
      </main>
    </>
  )
}

export default ServiceComp2
