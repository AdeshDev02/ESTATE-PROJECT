import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
     <main className='h-[400px] gap-3 hidden md:hidden lg:p-4 bg-black lg:grid  lg:grid-cols-4'>
       <div className='p-4 grid'>
          <img className='mt-10 ml-12 ' src="https://livedemo00.template-help.com/wt_prod-18389/images/logo-light-207x41.png" alt="" srcset="" />
          <div className='gap-3 flex ml-12 -mt-24'>
            <section className='bg-slate-500 flex hover:bg-blue-600 justify-center items-center p-2 h-[40px] w-[40px] rounded-full'>
              <span className='text-xl text-white'><i class="fa-brands fa-facebook"></i></span>
            </section>
            <section className='bg-slate-500 flex hover:bg-blue-400 justify-center items-center p-2 h-[40px] w-[40px] rounded-full'>
              <span className='text-xl text-white'><i class="fa-brands fa-twitter"></i></span>
            </section>
            <section className='bg-slate-500 flex hover:bg-orange-400 justify-center items-center p-2 h-[40px] w-[40px] rounded-full'>
              <span className='text-xl text-white'><i class="fa-brands fa-google-plus-g"></i></span>
            </section>
            <section className='bg-slate-500 flex hover:bg-blue-400 justify-center items-center p-2 h-[40px] w-[40px] rounded-full'>
              <span className='text-xl text-white'><i class="fa-brands fa-linkedin-in"></i></span>
            </section>
          </div>
       </div>

       <div className=' w-[390px]'>
          <h2 className='font-bold text-xl mt-14 mb-5 text-white'>
            NEWSLETTER
          </h2>
          <h2 className='text-[14px] text-white font-bold text-justify mb-5'>
            Keep up with the latest company news and events. <br></br>Enter your e-mail and subscribe to our newsletter.
          </h2>
          <div>
            <button className='p-2 ml-1 rounded-s-md bg-black'><span className='text-white'><i class="fa-solid fa-envelope"></i></span></button><input className='p-2 placeholder:text-xs focus:outline-none placeholder:text-black w-64' type="email" name="" id="" placeholder='Type your E-mail' required/><button className='bg-orange-400 w-24 p-2 font-bold text-white rounded-e-md'>SUBSCRIBE</button>
          </div>
       </div>

       <div className='ml-16'>
          <h2 className='font-bold ml-1 text-xl mt-14 mb-5 text-white'>
            USEFUL LINK
          </h2>
          <div className='grid'>
            <h2 className='text-[15px] hover:underline text-white -mt-2 ml-5 font-bold mb-3'><button className='text-2xl text-orange-400'>▪ </button><Link to='/'>           Properties</Link></h2>
          </div>
          <div className='grid'>
            <h2 className='text-[15px] hover:underline text-white -mt-2 ml-5 font-bold mb-3'><button className='text-2xl text-orange-400'>▪ </button><Link to='/'>           Amenties</Link></h2>
          </div>
          <div className='grid'>
            <h2 className='text-[15px] hover:underline text-white -mt-2 ml-5 font-bold mb-3'><button className='text-2xl text-orange-400'>▪ </button><Link to='/'>           Rentals</Link></h2>
          </div>
          <div className='grid'>
            <h2 className='text-[15px] hover:underline text-white -mt-2 ml-5 font-bold mb-3'><button className='text-2xl text-orange-400'>▪ </button><Link to='/'>           Mortages</Link></h2>
          </div>
          <div className='grid'>
            <h2 className='text-[15px] hover:underline text-white -mt-2 ml-5 font-bold mb-3'><button className='text-2xl text-orange-400'>▪ </button><Link to='/'>           Agents</Link></h2>
          </div>
       </div>

       <div className=''>
          <h2 className='font-bold ml-1 text-xl mt-14 mb-5 text-white'>
            LASTEST NEWS
          </h2>
          <div className='grid mb-6 text-white hover:text-orange-400'>
            <h2 className='ml-3 text-xs mb-1 hover:ml-5 hover:text-orange-400 transition-all duration-700 font-semibold'>→ 05/04/2022</h2> 
            <h2 className='ml-3 font-bold '>Top 10 Apartment in LA</h2>
          </div>

          <div className='grid mb-6 text-white hover:text-orange-400'>
            <h2 className='ml-3 text-xs mb-1 hover:ml-5 hover:text-orange-400 transition-all duration-700 font-semibold'>→ 05/04/2022</h2> 
            <h2 className='ml-3 font-bold '>Choosing a Rental Property</h2>
          </div>

          <div className='grid mb-6 text-white hover:text-orange-400'>
            <h2 className='ml-3 text-xs mb-1 hover:ml-5 hover:text-orange-400 transition-all duration-700 font-semibold'>→ 05/04/2022</h2> 
            <h2 className='ml-3 font-bold '>Feature of Mortage Loans</h2>
          </div>
       </div>
      </main> 

      <main className='md:grid p-10 hidden lg:hidden md:grid-cols-1 h-[1000px] gap-3 bg-black'>

        <div className=' h-[250px]'>
            <h2 className='font-bold ml-1 text-xl mt-5 mb-5 text-white'>
              LASTEST NEWS
            </h2>
            <div className='grid mb-6 text-white hover:text-orange-400'>
              <h2 className='ml-3 text-xs mb-1 hover:ml-5 hover:text-orange-400 transition-all duration-700 font-semibold'>→ 05/04/2022</h2> 
              <h2 className='ml-3 font-bold '>Top 10 Apartment in LA</h2>
            </div>

            <div className='grid mb-6 text-white hover:text-orange-400'>
              <h2 className='ml-3 text-xs mb-1 hover:ml-5 hover:text-orange-400 transition-all duration-700 font-semibold'>→ 05/04/2022</h2> 
              <h2 className='ml-3 font-bold '>Choosing a Rental Property</h2>
            </div>

            <div className='grid mb-6 text-white hover:text-orange-400'>
              <h2 className='ml-3 text-xs mb-1 hover:ml-5 hover:text-orange-400 transition-all duration-700 font-semibold'>→ 05/04/2022</h2> 
              <h2 className='ml-3 font-bold '>Feature of Mortage Loans</h2>
            </div>
        </div>

          <div className=' h-[250px]'>
              <h2 className='font-bold ml-1 text-xl mt-5 mb-5 text-white'>
                USEFUL LINK
              </h2>
              <div className='grid'>
                <h2 className='text-[15px] hover:underline text-white -mt-2 ml-5 font-bold mb-3'><button className='text-2xl text-orange-400'>▪ </button><Link to='/'>           Properties</Link></h2>
              </div>
              <div className='grid'>
                <h2 className='text-[15px] hover:underline text-white -mt-2 ml-5 font-bold mb-3'><button className='text-2xl text-orange-400'>▪ </button><Link to='/'>           Amenties</Link></h2>
              </div>
              <div className='grid'>
                <h2 className='text-[15px] hover:underline text-white -mt-2 ml-5 font-bold mb-3'><button className='text-2xl text-orange-400'>▪ </button><Link to='/'>           Rentals</Link></h2>
              </div>
              <div className='grid'>
                <h2 className='text-[15px] hover:underline text-white -mt-2 ml-5 font-bold mb-3'><button className='text-2xl text-orange-400'>▪ </button><Link to='/'>           Mortages</Link></h2>
              </div>
              <div className='grid'>
                <h2 className='text-[15px] hover:underline text-white -mt-2 ml-5 font-bold mb-3'><button className='text-2xl text-orange-400'>▪ </button><Link to='/'>           Agents</Link></h2>
              </div>
          </div>

          <div className='text-center'>
          <h2 className='font-bold text-xl mt-5 mb-5 text-white'>
            NEWSLETTER
          </h2>
          <h2 className='text-[15px] text-white font-bold text-center mb-5'>
            Keep up with the latest company news and events. <br></br>Enter your e-mail and subscribe to our newsletter.
          </h2>
          <div>
            <button className='p-2 ml-1 rounded-s-md bg-black'><span className='text-white'><i class="fa-solid fa-envelope"></i></span></button><input className='p-2 placeholder:text-xs focus:outline-none placeholder:text-black w-64' type="email" name="" id="" placeholder='Type your E-mail' required/><button className='bg-orange-400 w-24 p-2 font-bold text-white rounded-e-md'>SUBSCRIBE</button>
          </div>
       </div>

       <div className='p-4 grid '>
          <img className='mt-5 h-[90%] ml-40 text-center' src="https://livedemo00.template-help.com/wt_prod-18389/images/logo-light-207x41.png" alt="" srcset="" />
          <div className='gap-3 flex mt-8 justify-center items-center'>
            <section className='bg-slate-500 flex hover:bg-blue-600 justify-center items-center p-2 h-[40px] w-[40px] rounded-full'>
              <span className='text-xl text-white'><i class="fa-brands fa-facebook"></i></span>
            </section>
            <section className='bg-slate-500 flex hover:bg-blue-400 justify-center items-center p-2 h-[40px] w-[40px] rounded-full'>
              <span className='text-xl text-white'><i class="fa-brands fa-twitter"></i></span>
            </section>
            <section className='bg-slate-500 flex hover:bg-orange-400 justify-center items-center p-2 h-[40px] w-[40px] rounded-full'>
              <span className='text-xl text-white'><i class="fa-brands fa-google-plus-g"></i></span>
            </section>
            <section className='bg-slate-500 flex hover:bg-blue-400 justify-center items-center p-2 h-[40px] w-[40px] rounded-full'>
              <span className='text-xl text-white'><i class="fa-brands fa-linkedin-in"></i></span>
            </section>
          </div>
       </div>
      </main>

      <main className='md:hidden lg:hidden grid grid-cols-1 p-4 h-[900px] bg-black'>

      <div className='p-4 grid h-[200px]'>
          <img className='h-[70%] mt-5 text-center' src="https://livedemo00.template-help.com/wt_prod-18389/images/logo-light-207x41.png" alt="" srcset="" />
          <div className='gap-3 flex mt-2 justify-center items-center'>
            <section className='bg-slate-500 flex hover:bg-blue-600 justify-center items-center p-2 h-[40px] w-[40px] rounded-full'>
              <span className='text-xl text-white'><i class="fa-brands fa-facebook"></i></span>
            </section>
            <section className='bg-slate-500 flex hover:bg-blue-400 justify-center items-center p-2 h-[40px] w-[40px] rounded-full'>
              <span className='text-xl text-white'><i class="fa-brands fa-twitter"></i></span>
            </section>
            <section className='bg-slate-500 flex hover:bg-orange-400 justify-center items-center p-2 h-[40px] w-[40px] rounded-full'>
              <span className='text-xl text-white'><i class="fa-brands fa-google-plus-g"></i></span>
            </section>
            <section className='bg-slate-500 flex hover:bg-blue-400 justify-center items-center p-2 h-[40px] w-[40px] rounded-full'>
              <span className='text-xl text-white'><i class="fa-brands fa-linkedin-in"></i></span>
            </section>
          </div>
       </div>

       <div className='h-[200px] -mt-[30px]'>
          <h2 className='font-bold text-xl mt-5 mb-5 text-white'>
            NEWSLETTER
          </h2>
          <h2 className='text-[13px] text-white font-bold mb-5'>
            Keep up with the latest company news and events. <br></br>Enter your e-mail and subscribe to our newsletter.
          </h2>
          <div>
            <button className='p-2 ml-1 rounded-s-md bg-black'><span className='text-white'><i class="fa-solid fa-envelope"></i></span></button><input className='p-2 placeholder:text-xs focus:outline-none placeholder:text-black w-56' type="email" name="" id="" placeholder='Type your E-mail' required/><button className='bg-orange-400 w-24 p-2 font-bold text-white rounded-e-md'>SUBSCRIBE</button>
          </div>
       </div>


       <div className='h-[250px] -mt-[30px]'>
              <h2 className='font-bold ml-1 text-xl mt-5 mb-5 text-white'>
                USEFUL LINK
              </h2>
              <div className='grid'>
                <h2 className='text-[15px] hover:underline text-white -mt-2 ml-5 font-bold mb-3'><button className='text-2xl text-orange-400'>▪ </button><Link to='/'>           Properties</Link></h2>
              </div>
              <div className='grid'>
                <h2 className='text-[15px] hover:underline text-white -mt-2 ml-5 font-bold mb-3'><button className='text-2xl text-orange-400'>▪ </button><Link to='/'>           Amenties</Link></h2>
              </div>
              <div className='grid'>
                <h2 className='text-[15px] hover:underline text-white -mt-2 ml-5 font-bold mb-3'><button className='text-2xl text-orange-400'>▪ </button><Link to='/'>           Rentals</Link></h2>
              </div>
              <div className='grid'>
                <h2 className='text-[15px] hover:underline text-white -mt-2 ml-5 font-bold mb-3'><button className='text-2xl text-orange-400'>▪ </button><Link to='/'>           Mortages</Link></h2>
              </div>
              <div className='grid'>
                <h2 className='text-[15px] hover:underline text-white -mt-2 ml-5 font-bold mb-3'><button className='text-2xl text-orange-400'>▪ </button><Link to='/'>           Agents</Link></h2>
              </div>
          </div>

          <div className='h-[250px] -mt-[30px]'>
            <h2 className='font-bold ml-1 text-xl mt-5 mb-5 text-white'>
              LASTEST NEWS
            </h2>
            <div className='grid mb-6 text-white hover:text-orange-400'>
              <h2 className='ml-3 text-xs mb-1 hover:ml-5 hover:text-orange-400 transition-all duration-700 font-semibold'>→ 05/04/2022</h2> 
              <h2 className='ml-3 font-bold '>Top 10 Apartment in LA</h2>
            </div>

            <div className='grid mb-6 text-white hover:text-orange-400'>
              <h2 className='ml-3 text-xs mb-1 hover:ml-5 hover:text-orange-400 transition-all duration-700 font-semibold'>→ 05/04/2022</h2> 
              <h2 className='ml-3 font-bold '>Choosing a Rental Property</h2>
            </div>

            <div className='grid mb-6 text-white hover:text-orange-400'>
              <h2 className='ml-3 text-xs mb-1 hover:ml-5 hover:text-orange-400 transition-all duration-700 font-semibold'>→ 05/04/2022</h2> 
              <h2 className='ml-3 font-bold '>Feature of Mortage Loans</h2>
            </div>
        </div>

      </main>
    </>
  )
}

export default Footer
