import React from 'react'
import { IoMdLocate } from "react-icons/io";
import { GiPadlock } from "react-icons/gi";
import { TiHome } from "react-icons/ti";
import { TbBuildingEstate } from "react-icons/tb";
import { FaCar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function ServiceComp3() {
  return (
    <>
      <main className='bool h-[950px] lg:h-[800px] md:h-[900px]'>
      <div>
          <h2 className='text-center text-white font-bold text-xl mb-7 md:text-3xl lg:text-4xl pt-20'>OUR SERVICES</h2>
        </div>

        <div className='h-[400px] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 p-9 gap-9'>
            <section className=''>
              <div className='flex justify-center items-center'>
                <div className='h-[70px] w-[70px] mt-5 md:mt-8 lg:mt-14 bg-orange-400 rounded-full flex justify-center items-center'>
                  <span className='text-4xl font-bold text-white'><IoMdLocate /></span>
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <h2 className='mt-2 text-xl font-bold text-white'>FIND AN AGENT</h2>
              </div>
              <div className='flex justify-center items-center text-center'>
                <h2 className='text-[15px] text-white mt-5'>Our real estate agents are professional in everything they do. Just call our office or contact the agent you like via email or his/her social profile.</h2>
              </div>
            </section>

            <section className=''>
              <div className='flex justify-center items-center'>
                <div className='h-[70px] w-[70px] mt-5 md:mt-8 lg:mt-14 bg-orange-400 rounded-full flex justify-center items-center'>
                  <span className='text-4xl text-white'><GiPadlock /></span>
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <h2 className='mt-2 text-xl font-bold text-white'>PROPERTY INSURANCE</h2>
              </div>
              <div className='flex justify-center items-center text-center'>
                <h2 className='text-[15px] text-white mt-5'>You can insure your property at our company immediately after buying or renting. Take care of the safety of your home and family.</h2>
              </div>
            </section>

            <section className=''>
              <div className='flex justify-center items-center'>
                <div className='h-[70px] w-[70px] mt-5 md:mt-8 lg:mt-14 bg-orange-400 rounded-full flex justify-center items-center'>
                  <span className='text-4xl text-white'><TiHome /></span>
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <h2 className='mt-2 text-xl font-bold text-white'>PROPERTY MANAGEMENT</h2>
              </div>
              <div className='flex justify-center items-center text-center'>
                <h2 className='text-[15px] text-white mt-5'>We deal with different kinds of properties. No matter what you need - a house, an apartment or garage – you’ll find a good option on our site.</h2>
              </div>
            </section>

            <section className=''>
              <div className='flex justify-center items-center'>
                <div className='h-[70px] w-[70px] mt-5 md:mt-8 lg:mt-14 bg-orange-400 rounded-full flex justify-center items-center'>
                  <span className='text-4xl text-white'><TbBuildingEstate /></span>
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <h2 className='mt-2 text-xl font-bold text-white'>HOME FOR SALE AND RENT</h2>
              </div>
              <div className='flex justify-center items-center text-center'>
                <h2 className='text-[15px] text-white mt-5'>Don’t have enough money at the moment to buy a house? We have good offers both for rent and purchase. So, every client will be satisfied with our services</h2>
              </div>
            </section>

            <section className=''>
              <div className='flex justify-center items-center'>
                <div className='h-[70px] w-[70px] mt-5 md:mt-8 lg:mt-14 bg-orange-400 rounded-full flex justify-center items-center'>
                  <span className='text-4xl text-white'><FaCar /></span>
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <h2 className='mt-2 text-xl font-bold text-white'>PARKING</h2>
              </div>
              <div className='flex justify-center items-center text-center'>
                <h2 className='text-[15px] text-white mt-5'>Our parking facilities are located within a minute walk from the properties we provide, and they all are equipped with 24/7 security.</h2>
              </div>
            </section>

            <section className=''>
              <div className='flex justify-center items-center'>
                <div className='h-[70px] w-[70px] mt-5 md:mt-8 lg:mt-14 bg-orange-400 rounded-full flex justify-center items-center'>
                  <span className='text-4xl text-white'><FaLocationDot /></span>
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <h2 className='mt-2 text-xl font-bold text-white'>COMFORTABLE LOCATION</h2>
              </div>
              <div className='flex justify-center items-center text-center'>
                <h2 className='text-[15px] text-white mt-5'>Our properties, apartments, and houses are situated in comfortable locations that allow our clients to easily select the proper house.</h2>
              </div>
            </section>
        </div>
      </main>
    </>
  )
}

export default ServiceComp3
