import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaAddressBook } from "react-icons/fa";
import { TbClockHour10Filled } from "react-icons/tb";

function ContactComp2() {
  return (
    <>
      <main className='bg-slate-400 h-[200px] p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
        <div className='p-4 '>
            <div className='flex gap-1 mt-4'>
                <span className='text-orange-400 text-xl'><FaPhoneAlt /></span>
                <h2 className='font-bold text-xl -mt-2'>Phone</h2>
            </div>
            <div className='grid mt-3'>
                <h2 className='text-[15px] ml-6'>1-800-1234-567</h2>
                <h2 className='text-[15px] ml-6'>1-800-1234-567</h2>
            </div>
        </div>
        <div className='p-4'>
            <div className='flex gap-1 mt-4'>
                    <span className='text-orange-400 text-2xl'><HiOutlineMailOpen /></span>
                    <h2 className='font-bold text-xl'>Email</h2>
                </div>
                <div className='grid mt-3'>
                    <h2 className='text-[15px] ml-6'>info@demolink.org</h2>
            </div>
        </div>
        <div className='p-4'>
            <div className='flex gap-1 mt-4'>
                    <span className='text-orange-400 text-2xl'><FaAddressBook /></span>
                    <h2 className='font-bold text-xl'>Address</h2>
                </div>
                <div className='grid mt-3'>
                    <h2 className='text-[15px] ml-6'>213, New Lenox, Chicago, IL 60606</h2>
            </div>
        </div>
        <div className='p-4'>
        <div className='flex gap-1 mt-4'>
                    <span className='text-orange-400 text-2xl'><TbClockHour10Filled /></span>
                    <h2 className='font-bold text-xl'>Open Hours</h2>
                </div>
                <div className='grid mt-3'>
                    <h2 className='text-[15px] ml-6'>8:00 – 19:00 Mon – Fri<br></br>
                    9:00 – 17:00 Sat
                    </h2>
            </div>
        </div>
      </main>
    </>
  )
}

export default ContactComp2
