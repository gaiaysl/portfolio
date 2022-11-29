
export default function Designer() {
    return (
      <div className="relative h-[640px]">
       
        <div className=" absulute pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
         
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
            <div className='absolute top-56 left'>
        <img src="/Images/ok.png" alt=""/>
        </div>
        <div className='absolute left-40'>
           <h1 className=" font text-8xl font-bold tracking-tight text-white sm:text-7xl">
                CREATIVE UI  
              </h1>
              <span className="font-bold text-cyan-500 text-7xl">DESIGNER</span>
              <div className='mt-16'>
              <a
                  href="#"
                  className=" rounded-md border border-transparent bg-teal-500 py-2 px-8 text-center font-medium text-white m-3  hover:bg-teal-700"
                >
                  Hire me
                </a>
               
                <a
                  href="#"
                  className=" rounded-md border border-transparent bg-gray-400 py-2 px-8 text-center font-medium text-white hover:bg-gray-700"
                >
                  Download CV 
                </a>
                </div>
                </div>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  
                  <div className="absolute transform sm:left-1/2 sm:top-60 sm:translate-x-8 lg:left-1/2 lg:-translate-y-1/2 lg:translate-x-8  h-48 w-96">
                
<img src='/Images/designer-group.png'  className="object-fill w-full"/>


                 
                  </div>
                </div>
  
              
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  