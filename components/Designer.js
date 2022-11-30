

  export default function Designer(){
    return( 
      <div id='home' className=" mb-12 sm:mt-48 sm:mb-48 mx-auto flex flex-col sm:flex-row sm:justify-evenly ml-20  " >
        
        <div className=" mt-24  ">
          <div className=" ml-24 ">
          <h1 className=" font text-5xl font-bold tracking-tight text-white sm:text-5xl">CREATIVE UI </h1>
          
          <span className='  absolute sm:text-6xl font text-5xl font-bold tracking-tight text-cyan-500'>DESIGNER</span>
          </div>
          <div className=" ">
          <img src='/Images/ok.png'  />
          </div>
        <div className=" -mt-12 ml-24 ">
          <button class=" mr-4 bg-cyan-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Hire me
</button>
<button class="bg-gray-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Download CV
</button> </div>

          </div>
          <div className=" m-4" >
          <img src='/Images/designer-group.png' className="h-full w-full object-cover object-center"/>
          </div>
        </div>

    )
  }
  
  