

  export default function Designer(){
    return( 
      <div id='home' className=" mb-12 sm:mt-48 sm:mb-48 flex flex-col sm:flex-row sm:justify-evenly ml-20  " >
        
        <div className=" mt-24  ">
          <div className="">
          <div className="absolute -ml-14 sm:-ml-20 sm:mt-12 mt-2 sm:mt-2">
          <img src='/Images/ok.png'className="h-56 w-12 sm:h-full sm:w-full"  />
          </div>
          <div className="flex flex-col justify-between ">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl ">CREATIVE WEBSITE </h1>
          <span className="text-4xl font-bold tracking-tight text-cyan-500 sm:text-5xl mb-14">DEVELOPER</span>
          
          </div>
        
          <div className="mt-10  flex flex-row gap-2 ">
          <button class=" bg-cyan-500 hover:bg-blue-700 text-white font-bold py-1 px-2 sm:py-2 sm:px-4 rounded-full">
  Hire me
</button>
<button class="bg-gray-700 hover:bg-blue-700 text-white font-bold px-2 py-1 sm:py-2 sm:px-4 rounded-full">
  Download CV
</button> </div>
</div>
          </div>
          <div className=" m-4 mr-10" >
          <img src='/Images/designer-group.png' className="h-full w-full object-cover object-center"/>
          </div>
        </div>

    )
  }
  
  