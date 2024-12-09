import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {

  let[drop, setDrop]= useState('0px')
  let[open, setOpen]= useState('+')

  let[down, setDown]= useState('0px')
  let[close, setClose]= useState('+')

  // function aa() {
  //   if (drop == '0px') {
  //     setDrop('265px')
  //     setOpen('-')
  //   } else {
  //     setDrop('0px')
  //     setOpen('+')
  //   }
  // }

  function bb() {
    if (down == '0px') {
      setDown('40px')
      setClose('-')
    } else {
      setDown('0px')
      setClose('+')
    }
  }

  let[show,setShow] = useState('-320px')
  let[icon,setIcon]= useState('Ξ')

  function dd() {
    if (show == '-320px') {
      // alert('hiii')
      setShow('0px')
      setIcon('X')
    } 
    else{
      setShow('-320px')
      setIcon('Ξ')
    }
  }
  return (
    <>
      <header className='h-[90px] bg-white shadow-lg w-full flex justify-around items-center sticky top-[0px] transition-all duration-700 ease-in-out z-50'>
        <div className='flex'>
          <img className='hidden md:hidden lg:block' src="https://livedemo00.template-help.com/wt_prod-18389/images/logo-207x41.png" alt="" />
        </div>
        <nav className="hidden sm:hidden lg:block">
          <ul className="flex gap-9 sm:gap-1 lg:gap-8 lg:pl-[300px]">
          <h1 className="rounded-md pl-4 hover:border-b-[2px] border-b-orange-400 w-20 h-9 font-bold">
            <Link to='/home'>HOME</Link>
          </h1>
          <h1 className="rounded-md pl-4 hover:border-b-[2px] border-b-orange-400 w-20 h-9 font-bold">
            <Link to='/about'>ABOUT</Link>
          </h1>
          <h1 className="rounded-md pl-4 hover:border-b-[2px] border-b-orange-400 w-32 h-9 font-bold group">
            <Link to='/catalogue'>CATALOGUE</Link>
             <div className='h-[53px] p-2 w-[180px] ml-5 bg-white mt-3 absolute z-10 hidden group-hover:block'>
                <h2 className='font-bold text-xs hover:p-3 p-3 transition-all duration-700 hover:bg-orange-300 text-black'>
                  <Link to='/singleprop'>SINGLE PROPERTY</Link>
                </h2>
             </div>
          </h1>
          <h1 className="rounded-md pl-4 hover:border-b-[2px] border-b-orange-400 w-28 h-9 font-bold">
            <Link to='/service'>SERVICES</Link>
          </h1>

          {/* <h1 className="pl-4 rounded-md hover:border-b-[2px] border-b-orange-400 w-20 h-8 font-bold group">
            PAGES
            <div className="bg-white h-[270px] w-[220px] ml-[-60px] p-3 mt-3 absolute z-10 hidden group-hover:block">
              <ol>
                <h2 className="font-bold text-xs hover:p-3  transition-all duration-700 hover:bg-orange-300 text-black p-3 mb-3">
                  TEAM
                </h2>
                <h2 className="font-bold text-xs hover:p-3  transition-all duration-700 hover:bg-orange-300 text-black p-3 mb-3">
                 OUR TEAM MEMBER
                </h2>
                <h2 className="font-bold text-xs hover:p-3  transition-all duration-700 hover:bg-orange-300 text-black p-3 mb-3">
                  PRIVACY POLICY
                </h2>
                <h2 className="font-bold text-xs hover:p-3  transition-all duration-700 hover:bg-orange-300 text-black p-3 mb-3">
                  COMING SOON
                </h2>
                <h2 className="font-bold text-xs hover:p-3  transition-all duration-700 hover:bg-orange-300 text-black p-3 mb-3">
                  ERROR 404
                </h2>
              </ol>
            </div>
          </h1> */}
          <h1 className="rounded-md pl-4 hover:border-b-[2px] border-b-orange-400 w-28 h-9 font-bold">
            <Link to='/contact'>CONTACT</Link>
          </h1>
          </ul>
        </nav>
          <button className='font-bold text-5xl md:block md:ml-[-250px] lg:hidden -ml-[1050px]' onClick={dd}>{icon}</button>
          <main className='hidden lg:hidden md:flex '>
            <div>
              <img className='hidden md:block lg:hidden h-[130%] mr-[250px]' src="https://livedemo00.template-help.com/wt_prod-18389/images/logo-207x41.png" alt="" />
            </div>
        </main>
      </header>

      <main className='lg:hidden md:block hidden absolute h-[400px] w-[289px] z-10'>
          <div className='lg:hidden hidden md:block h-[700px] shadow-lg absolute w-[289px] top-0 bg-white mr-40 transition-all duration-700 ease-in-out ' style={{left:show}}>
            <div>
              <img className='ml-5 mt-3 lg:hidden md:block hidden' src="https://livedemo00.template-help.com/wt_prod-18389/images/logo-207x41.png" alt="" />
            </div>
            <div className=''>
            <nav className="lg:hidden md:block hidden mt-5">
          <ul className="grid gap-2">
              <div className='w-72'>
                <h2 className="p-3 pl-4 hover:bg-black text-black hover:text-white font-bold">
                <Link to='/home'>HOME</Link>
                </h2>
              </div>
            <div className='w-72'>
              <h2 className="p-3 pl-4 hover:bg-black text-black hover:text-white font-bold">
              <Link to='/about'>ABOUT</Link>
              </h2>
            </div>

              <h2 className="w-72 p-3 pl-4 relative hover:bg-black text-black hover:text-white font-bold" onClick={bb}>
              <Link to='/catalogue'>CATALOGUE</Link><span className='text-2xl text-white ml-36'>{close}</span>

              <div className='bg-white hover:text-white duration-150 mt-[30px] -ml-4 z-10 overflow-hidden' style={{height:down}}>
                <h2 className='font-bold text-xs hover:p-4 p-5 transition-all duration-700 hover:bg-orange-300 text-black'><Link to='/singleprop'>SINGLE PROPERTY</Link></h2>
              </div>
              </h2>

            <div className='w-72'>
              <h2 className="pl-4 p-3 hover:bg-black text-black hover:text-white font-bold">
              <Link to='/service'>SERVICES</Link>
              </h2>
            </div>
            
                {/* <h2 className="w-72 pl-4 relative p-3 hover:bg-black text-black hover:text-white font-bold" onClick={aa}>
                  PAGES<span className='text-2xl text-white ml-40'>{open}</span>

                  <div className="bg-white hover:text-white duration-150 w-[220px] mt-[20px] ml-[10px]  z-10 overflow-hidden" style={{height:drop}}>
                    <h2 className="font-bold text-xs hover:p-3  transition-all duration-700 hover:bg-orange-300 text-black p-3 mb-3">
                      TEAM
                    </h2>
                    <h2 className="font-bold text-xs hover:p-3  transition-all duration-700 hover:bg-orange-300 text-black p-3 mb-3">
                    OUR TEAM MEMBER
                    </h2>
                    <h2 className="font-bold text-xs hover:p-3  transition-all duration-700 hover:bg-orange-300 text-black p-3 mb-3">
                      PRIVACY POLICY
                    </h2>
                    <h2 className="font-bold text-xs hover:p-3  transition-all duration-700 hover:bg-orange-300 text-black p-3 mb-3">
                      COMING SOON
                    </h2>
                    <h2 className="font-bold text-xs hover:p-3  transition-all duration-700 hover:bg-orange-300 text-black p-3 mb-3">
                      ERROR 404
                    </h2>
                  </div>
                </h2> */}

            <div className='w-72'>
            <h2 className="pl-4 p-3 hover:bg-black text-black hover:text-white font-bold">
            <Link to='/contact'>CONTACT</Link>
          </h2>
            </div>
          </ul>
        </nav>
            </div>
          </div>
        </main>

        <main className='lg:hidden md:hidden absolute h-[400px] w-[289px] z-10'>
          <div className='lg:hidden h-[410px] shadow-lg absolute w-[289px] top-0 bg-white mr-40 transition-all duration-700 ease-in-out ' style={{left:show}}>
            <div>
              <img className='ml-5 mt-3 lg:hidden md:hidden block' src="https://livedemo00.template-help.com/wt_prod-18389/images/logo-207x41.png" alt="" />
            </div>
            <div className=''>
            <nav className="lg:hidden sm:hidden block mt-5">
          <ul className="grid gap-2">
              <div className='w-72'>
                <h2 className="p-3 pl-4 hover:bg-black text-black hover:text-white font-bold">
                <Link to='/home'>HOME</Link>
                </h2>
              </div>
            <div className='w-72'>
              <h2 className="p-3 pl-4 hover:bg-black text-black hover:text-white font-bold">
              <Link to='/about'>ABOUT</Link>
              </h2>
            </div>
            <div className='w-72'>
              <h2 className="pl-4 p-3 hover:bg-black text-black hover:text-white font-bold group">
              <Link to='/catalogue'>CATALOGUE</Link>
                <div className='h-[60px] p-4 w-[180px] mt-[-90px] ml-[190px] bg-white absolute z-10 hidden group-hover:block'>
                    <h2 className='font-bold text-xs hover:p-3 p-3 transition-all duration-700 hover:bg-orange-300 text-black'>
                      <Link to='/singleprop'>SINGLE PROPERTY</Link>
                    </h2>
                </div>
              </h2>
            </div>
            <div className='w-72'>
              <h2 className="pl-4 p-3 hover:bg-black text-black hover:text-white font-bold">
              <Link to='/service'>SERVICES</Link>
              </h2>
            </div>
              {/* <div className='w-72'>
                <h2 className="pl-4 p-3 hover:bg-black text-black hover:text-white font-bold group">
                  PAGES
                  <div className="bg-white hover:text-white h-[265px] w-[220px] mt-[-270px] ml-[120px] p-3 absolute z-10 hidden group-hover:block">
                  <ol>
                    <h2 className="font-bold text-xs hover:p-3  transition-all duration-700 hover:bg-orange-300 text-black p-3 mb-3">
                      TEAM
                    </h2>
                    <h2 className="font-bold text-xs hover:p-3  transition-all duration-700 hover:bg-orange-300 text-black p-3 mb-3">
                    OUR TEAM MEMBER
                    </h2>
                    <h2 className="font-bold text-xs hover:p-3  transition-all duration-700 hover:bg-orange-300 text-black p-3 mb-3">
                      PRIVACY POLICY
                    </h2>
                    <h2 className="font-bold text-xs hover:p-3  transition-all duration-700 hover:bg-orange-300 text-black p-3 mb-3">
                      COMING SOON
                    </h2>
                    <h2 className="font-bold text-xs hover:p-3  transition-all duration-700 hover:bg-orange-300 text-black p-3 mb-3">
                      ERROR 404
                    </h2>
                  </ol>
                </div>
                </h2>
              </div> */}

            <div className='w-72'>
            <h2 className="pl-4 p-3 -pt-3 hover:bg-black text-black hover:text-white font-bold">
            <Link to='/contact'>CONTACT</Link>
          </h2>
            </div>
          </ul>
        </nav>
            </div>
          </div>
        </main>
    </>
  )
}

export default Header