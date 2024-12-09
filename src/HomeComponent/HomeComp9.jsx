import React from 'react'

function HomeComp9() {
  return (
    <>
    <main className='boom h-[700px]'>
        <div>
            <h1 className=' mb-5 mr-32 ml-32 text-center text-xl md:text-xl lg:text-3xl md:ml-72 md:mr-72 lg:text-center font-bold pt-16 md:pt-20 lg:pt-24 border-b-2 border-orange-400 lg:ml-[550px] lg:mr-[550px]'>Get in Touch</h1>
        </div>
        <form className='flex justify-center items-center mt-12'>
            <div className='lg:flex gap-3 hidden md:hidden'>
              <input className='p-4 focus:outline-none placeholder:text-xs border-[1px] border-white placeholder:text-black rounded-md w-80 bg-none text-xs' type="text" name="" id="" placeholder='First Name:' required/>
              <input className='p-4 focus:outline-none placeholder:text-xs border-[1px] border-white placeholder:text-black rounded-md w-80 bg-none text-xs' type="text" name="" id="" placeholder='Last Name:' required/>
            </div>
        </form>

        <form className='flex justify-center items-center mt-7'>
            <div className='lg:flex gap-3 hidden md:hidden'>
              <input className='p-4 focus:outline-none placeholder:text-xs border-[1px] border-white placeholder:text-black rounded-md w-80 bg-none text-xs' type="tel" name="" id="" placeholder='Phone:' required/>
              <input className='p-4 focus:outline-none placeholder:text-xs border-[1px] border-white placeholder:text-black rounded-md w-80 bg-none text-xs' type="email" name="" id="" placeholder='E-mail:' required/>
            </div>
        </form>

        <form className='flex justify-center items-center mt-7'>
            <div className='lg:flex gap-3 hidden md:hidden'>
              <textarea className='p-5 focus:outline-none placeholder:text-xs border-[1px] border-white placeholder:text-black rounded-md w-[650px] bg-none text-xs' name="" id="" placeholder='Write a Mesage'></textarea>
            </div>
        </form>
        <div className='hidden  justify-center items-center mt-7 lg:flex gap-3 md:hidden'>
          <button className='p-4 bg-orange-400 w-40 font-bold rounded-md text-white hover:scale-95 transition-all duration-500'>SEND MESSAGE</button>
        </div>


        <form className='flex justify-center items-center -mt-16'>
          <div className='hidden md:grid lg:hidden gap-8'>
            <input className='p-4 focus:outline-none placeholder:text-xs border-[1px] border-white placeholder:text-black rounded-md w-96 bg-none text-xs' type="text" name="" id="" placeholder='First Name:' required/>
            <input className='p-4 focus:outline-none placeholder:text-xs border-[1px] border-white placeholder:text-black rounded-md w-96 bg-none text-xs' type="text" name="" id="" placeholder='Last Name:' required/>
            <input className='p-4 focus:outline-none placeholder:text-xs border-[1px] border-white placeholder:text-black rounded-md w-96 bg-none text-xs' type="tel" name="" id="" placeholder='Phone:' required/>
            <input className='p-4 focus:outline-none placeholder:text-xs border-[1px] border-white placeholder:text-black rounded-md w-96 bg-none text-xs' type="email" name="" id="" placeholder='E-mail:' required/>
            <textarea className='p-5 focus:outline-none placeholder:text-xs border-[1px] border-white placeholder:text-black rounded-md w-96 bg-none text-xs' name="" id="" placeholder='Write a Mesage'></textarea>
            <button className='p-4 bg-orange-400 ml-28 w-40 font-bold rounded-md text-white hover:scale-95 transition-all duration-500'>SEND MESSAGE</button>
          </div>
        </form>

        
        <form className='flex justify-center items-center'>
          <div className='grid md:hidden lg:hidden gap-8'>
            <input className='p-4 ml-3 mr-3 focus:outline-none placeholder:text-xs border-[1px] border-white placeholder:text-black rounded-md w-96 bg-none text-xs' type="text" name="" id="" placeholder='First Name:' required/>
            <input className='p-4 ml-3 mr-3 focus:outline-none placeholder:text-xs border-[1px] border-white placeholder:text-black rounded-md w-96 bg-none text-xs' type="text" name="" id="" placeholder='Last Name:' required/>
            <input className='p-4 ml-3 mr-3 focus:outline-none placeholder:text-xs border-[1px] border-white placeholder:text-black rounded-md w-96 bg-none text-xs' type="tel" name="" id="" placeholder='Phone:' required/>
            <input className='p-4 ml-3 mr-3 focus:outline-none placeholder:text-xs border-[1px] border-white placeholder:text-black rounded-md w-96 bg-none text-xs' type="email" name="" id="" placeholder='E-mail:' required/>
            <textarea className='p-5 ml-3 mr-3 focus:outline-none placeholder:text-xs border-[1px] border-white placeholder:text-black rounded-md w-96 bg-none text-xs' name="" id="" placeholder='Write a Mesage'></textarea>
            <button className='p-4  mr-3 bg-orange-400 ml-28 w-40 font-bold rounded-md text-white hover:scale-95 transition-all duration-500'>SEND MESSAGE</button>
          </div>
        </form>
    </main> 
    </>
  )
}

export default HomeComp9
