import React from 'react'

function HomeComp7() {
  return (
    <>
     <main className='h-[1010px] md:h-[1815px] lg:h-[880px] p-5 mt-3'>
        <div>
            <h1 className=' mb-8 mr-32 ml-32 text-center text-xl md:text-xl lg:text-3xl md:ml-[300px] md:mr-[300px] lg:text-center font-bold pt-5 border-b-2 border-orange-400 lg:ml-[580px] lg:mr-[580px]'>Our Blog</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3'>
        <section className='bg-slate-500 relative'>
          <img className='h-[100%] w-[100%] relative bg-blend-darken' src="https://livedemo00.template-help.com/wt_prod-18389/images/post-01-570x321.jpg" />
          <button className='w-16 ml-5 p-2 font-semibold bg-orange-400 absolute bottom-40 md:bottom-80 lg:bottom-72'>News</button>
          <h2 className='bottom-8 text-white absolute ml-5 text-xl md:text-3xl mb-3 font-medium'>7 Important Tips for buying a <br></br>Home</h2>
          <div className='flex absolute bottom-4 gap-1 ml-5'>
            <h2 className='italic'>by</h2><h2 className='text-orange-400 italic'>John Joe</h2>
          </div>
        </section>

        <section className='bg-slate-500 relative'>
          <img className='h-[100%] w-[100%] relative bg-blend-darken' src="https://livedemo00.template-help.com/wt_prod-18389/images/post-02-570x321.jpg" />
          <button className='w-24 ml-5 p-2 font-semibold bg-orange-400 absolute bottom-40 md:bottom-80 lg:bottom-72'>Real Estate</button>
          <h2 className='bottom-8 text-white absolute ml-5 text-xl md:text-3xl mb-3 font-medium'>Useful Habit for Potential Home <br></br>Buyer</h2>
          <div className='flex absolute bottom-4 gap-1 ml-5'>
            <h2 className='italic'>by</h2><h2 className='text-orange-400 italic'>July Mao</h2>
          </div>
        </section>

        <section className='bg-slate-500 relative'>
          <img className='h-[100%] w-[100%] relative bg-blend-darken' src="https://livedemo00.template-help.com/wt_prod-18389/images/post-03-570x321.jpg" />
          <button className='w-16 ml-5 p-2 font-semibold bg-orange-400 absolute bottom-40 md:bottom-80 lg:bottom-72'>News</button>
          <h2 className='bottom-8 text-white absolute ml-5 text-xl md:text-3xl font-medium mb-3'>7 Sign Your Home Will Have <br></br>Good Resale Value</h2>
          <div className='flex absolute bottom-4 gap-1 ml-5'>
            <h2 className='italic'>by</h2><h2 className='text-orange-400 italic'>Bernard Show</h2>
          </div>
        </section>

        <section className='bg-slate-500 relative'>
          <img className='h-[100%] w-[100%] relative bg-blend-darken' src="https://livedemo00.template-help.com/wt_prod-18389/images/post-01-570x321.jpg" />
          <button className='w-16 ml-5 p-2 font-semibold bg-orange-400 absolute bottom-40 md:bottom-80 lg:bottom-72'>News</button>
          <h2 className='bottom-8 text-white absolute ml-5 text-xl md:text-3xl font-medium mb-3'>Sinle-Family Home As A  <br></br>Single Option</h2>
          <div className='flex absolute bottom-4 gap-1 ml-5'>
            <h2 className='italic'>by</h2><h2 className='text-orange-400 italic'>John Joe</h2>
          </div>
        </section>
        </div>


      </main> 
    </>
  )
}

export default HomeComp7
