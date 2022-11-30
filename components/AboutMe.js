
export default function AboutMe(){
  return(
    <div id='aboutme' className="  sm:mx-auto flex sm:mb-40 mb-20 sm:max-w-7xl sm:px-4 sm:px-6 sm:flex-row lg:px-8 flex-col ml-20" >
      <div  className=" h-72 w-96 mr-48 ">
        <h1 className="mb-4 font text-4xl font-bold tracking-tight text-white sm:text-6xl">About <span className='text-cyan-500'>me</span></h1>
       <div className="break-words overflow-hidden ">
        <p >
          deneme yazısıdır. deneme yazısıdır deneme yazısıdır deneme yazısıdır
          deneme yazısıdır deneme yazısıdır deneme yazısıdır deneme yazısıdır
          deneme yazısıdır
          deneme yazısıdır
          deneme yazısıdır
     
        </p>
        </div>
      </div>
      <div className=" ">
        <img src='/Images/man-background.png' className="h-full  object-cover object-center"/>
      </div>
      

    </div>
  )
}