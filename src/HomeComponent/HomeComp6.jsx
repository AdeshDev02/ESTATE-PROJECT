import React from 'react'
import { Link } from 'react-router-dom'

function HomeComp6() {
  return (
    <>
      <main className='h-[1580px] md:h-[930px] lg:h-[630px] bg-slate-200'>
        <div>
          <h2 className='text-center text-black font-bold text-xl mb-7 md:text-3xl lg:text-4xl pt-16'>Real Estate Agents</h2>
        </div>
        <div className='h-[400px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6 '>
            <section className=''>
                <div className='flex justify-center items-center'>
                    <div className='' >
                        <img className='h-[150px] w-[150px] bg-orange-300 rounded-full mt-5 md:mt-8 lg:mt-14' src="https://livedemo00.template-help.com/wt_prod-18389/images/user-john-doe-140x140.jpg" alt="" />   
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <h2 className='mt-3 hover:text-orange-400 text-xl font-bold'>John Joe</h2>
                </div>
                <div className='flex justify-center items-center'>
                    <h2 className='text-orange-400 text-xs font-bold'>Software Developer</h2>
                </div>
                <div className='flex justify-center items-center gap-2 mt-8'>
                    <section className='bg-slate-500 flex hover:bg-blue-600 justify-center items-center p-2 h-[50px] w-[50px] rounded-full'>
                    <span className='text-xl text-white'><i class="fa-brands fa-facebook"></i></span>
                    </section>
                    <section className='bg-slate-500 flex hover:bg-blue-400 justify-center items-center p-2 h-[50px] w-[50px] rounded-full'>
                    <span className='text-xl text-white'><i class="fa-brands fa-twitter"></i></span>
                    </section>
                    <section className='bg-slate-500 flex hover:bg-orange-400 justify-center items-center p-2 h-[50px] w-[50px] rounded-full'>
                    <span className='text-xl text-white'><i class="fa-brands fa-google-plus-g"></i></span>
                    </section>
                </div>
            </section>

            <section className=''>
                <div className='flex justify-center items-center'>
                    <div className='' >
                        <img className='h-[150px] w-[150px] bg-orange-300 rounded-full mt-5 md:mt-8 lg:mt-14' src="https://livedemo00.template-help.com/wt_prod-18389/images/user-july-mao-140x140.jpg" alt="" />   
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <h2 className='mt-3 hover:text-orange-400 text-xl font-bold'>July Mao</h2>
                </div>
                <div className='flex justify-center items-center'>
                    <h2 className='text-orange-400 text-xs font-bold'>Support Operator</h2>
                </div>
                <div className='flex justify-center items-center gap-2 mt-8'>
                    <section className='bg-slate-500 flex hover:bg-blue-600 justify-center items-center p-2 h-[50px] w-[50px] rounded-full'>
                    <span className='text-xl text-white'><i class="fa-brands fa-facebook"></i></span>
                    </section>
                    <section className='bg-slate-500 flex hover:bg-blue-400 justify-center items-center p-2 h-[50px] w-[50px] rounded-full'>
                    <span className='text-xl text-white'><i class="fa-brands fa-twitter"></i></span>
                    </section>
                    <section className='bg-slate-500 flex hover:bg-orange-400 justify-center items-center p-2 h-[50px] w-[50px] rounded-full'>
                    <span className='text-xl text-white'><i class="fa-brands fa-google-plus-g"></i></span>
                    </section>
                </div>
            </section>

            <section className=''>
                <div className='flex justify-center items-center'>
                    <div className='' >
                        <img className='h-[150px] w-[150px] bg-orange-300 rounded-full mt-5 md:mt-8 lg:mt-14' src="https://livedemo00.template-help.com/wt_prod-18389/images/user-bernard-show-140x140.jpg" alt="" />   
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <h2 className='mt-3 hover:text-orange-400 text-xl font-bold'>Bernad Show</h2>
                </div>
                <div className='flex justify-center items-center'>
                    <h2 className='text-orange-400 text-xs font-bold'>Creative Director</h2>
                </div>
                <div className='flex justify-center items-center gap-2 mt-8'>
                    <section className='bg-slate-500 flex hover:bg-blue-600 justify-center items-center p-2 h-[50px] w-[50px] rounded-full'>
                    <span className='text-xl text-white'><i class="fa-brands fa-facebook"></i></span>
                    </section>
                    <section className='bg-slate-500 flex hover:bg-blue-400 justify-center items-center p-2 h-[50px] w-[50px] rounded-full'>
                    <span className='text-xl text-white'><i class="fa-brands fa-twitter"></i></span>
                    </section>
                    <section className='bg-slate-500 flex hover:bg-orange-400 justify-center items-center p-2 h-[50px] w-[50px] rounded-full'>
                    <span className='text-xl text-white'><i class="fa-brands fa-google-plus-g"></i></span>
                    </section>
                </div>
            </section>

            <section className=''>
                <div className='flex justify-center items-center'>
                    <div className='' >
                        <img className='h-[150px] w-[150px] bg-orange-300 rounded-full mt-5 md:mt-8 lg:mt-14' src="https://livedemo00.template-help.com/wt_prod-18389/images/user-ronald-oswald-140x140.jpg" alt="" />   
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <h2 className='mt-3 hover:text-orange-400 text-xl font-bold'>Ronald Oswald</h2>
                </div>
                <div className='flex justify-center items-center'>
                    <h2 className='text-orange-400 text-xs font-bold'>Founder Sales</h2>
                </div>
                <div className='flex justify-center items-center gap-2 mt-8'>
                    <section className='bg-slate-500 flex hover:bg-blue-600 justify-center items-center p-2 h-[50px] w-[50px] rounded-full'>
                    <span className='text-xl text-white'><i class="fa-brands fa-facebook"></i></span>
                    </section>
                    <section className='bg-slate-500 flex hover:bg-blue-400 justify-center items-center p-2 h-[50px] w-[50px] rounded-full'>
                    <span className='text-xl text-white'><i class="fa-brands fa-twitter"></i></span>
                    </section>
                    <section className='bg-slate-500 flex hover:bg-orange-400 justify-center items-center p-2 h-[50px] w-[50px] rounded-full'>
                    <span className='text-xl text-white'><i class="fa-brands fa-google-plus-g"></i></span>
                    </section>
                </div>
            </section>
        </div>

        <div className='flex justify-center items-center lg:mt-5 md:mt-80 mt-[950px]'>
            <button className='bg-orange-400 w-56 p-3 rounded-lg text-white font-bold hover:scale-95 transition-all duration-500'>
                <Link to='/about'>VIEW ALL AGENT</Link>
            </button>
        </div>
      </main>
    </>
  )
}

export default HomeComp6