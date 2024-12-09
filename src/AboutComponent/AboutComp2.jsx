import React from 'react'

let Team = [

{ id:1,
  image:'https://livedemo00.template-help.com/wt_prod-18389/images/users/user-ashley-mason-270x270.jpg',
  name: 'Ashley Mason',
  phone: '1-800-7650-986',
  email:'ashley@demolink.org'
},

{ id:2,
  image:'https://livedemo00.template-help.com/wt_prod-18389/images/users/user-russel-myers-270x270.jpg',
  name: 'Russell Myers',
  phone: '1-800-7650-986',
  email:'russell@demolink.org'
},

{ id:3,
  image:'https://livedemo00.template-help.com/wt_prod-18389/images/users/user-shirley-vasques-270x270.jpg',
  name: 'Shirley Vasquez',
  phone: '1-800-7650-986',
  email:'shirley@demolink.org'
},

{ id:4,
  image:'https://livedemo00.template-help.com/wt_prod-18389/images/users/user-terry-sandoval-270x270.jpg',
  name: 'Terry Sandoval',
  phone: '1-800-7650-986',
  email:'terry@demolink.org'
},

{ id:5,
  image:'https://livedemo00.template-help.com/wt_prod-18389/images/users/user-randy-shneider-270x270.jpg',
  name: 'Randy Schneider',
  phone: '1-800-7650-986',
  email:'Randy@demolink.org'
},

{ id:6,
  image:'https://livedemo00.template-help.com/wt_prod-18389/images/users/user-olivia-marshall-270x270.jpg',
  name: 'Olivia Mashall',
  phone: '1-800-7650-986',
  email:'olivia@demolink.org'
},

{ id:7,
  image:'https://livedemo00.template-help.com/wt_prod-18389/images/users/user-samanta-nelson-270x270.jpg',
  name: 'Samantha Nelson',
  phone: '1-800-7650-986',
  email:'samantha@demolink.org'
},

{ id:8,
  image:'https://livedemo00.template-help.com/wt_prod-18389/images/users/user-maria-george-270x270.jpg',
  name: 'Maria George',
  phone: '1-800-7650-986',
  email:'maria@demolink.org'
}
]

function AboutComp2() {
  return (
    <>
      <main className='h-[2000px] mb-[1850px] lg:mb-1 md:mb-1 lg:h-[1050px] '>
      <div>
            <h1 className=' mb-5 mr-32 ml-32 text-center text-xl md:text-xl lg:text-3xl md:ml-96 md:mr-80 lg:text-center font-bold pt-8 border-b-2 border-orange-400 lg:ml-[555px] lg:mr-[555px]'>OUR TEAM</h1>
        </div>
        <div className='gap-5  p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>

          {
            Team.map((index)=>(
              <div key={index.id} className='h-[430px] lg:h-[400px]'>
                  <img src={index.image} height='100%' width='100%' alt="" />
                  <div className='grid mt-1 gap-1'>
                    <h2 className='text-orange-400 font-bold text-xl'>{index.name}</h2>
                  <span ><i class="fa-solid fa-phone"></i><h2 className='ml-6 -mt-5'>{index.phone}</h2></span>
                  <span><i class="fa-solid fa-envelope"></i><h2 className='ml-6 -mt-6'>{index.email}</h2></span>
                  </div>
              </div> 
            ))
          }

        </div>
      </main>
    </>
  )
}

export default AboutComp2
