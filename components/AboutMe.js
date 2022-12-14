
export default function AboutMe(){
  return(
    <div id='aboutme' className=" text-white sm:mx-auto flex sm:mb-40 mb-20 sm:max-w-7xl sm:px-4 sm:px-6 sm:flex-row lg:px-8 flex-col ml-10  " >
      <div  className=" h-72 w-72  mr-48 sm:w-96 ">
        <h1 className="mb-4 font text-4xl  font-bold tracking-tight dark:text-white text-gray-600 sm:text-6xl">About <span className='text-cyan-500'>me</span></h1>
       <div className=" text-gray-700 dark:text-white break-words overflow-hidden h-48 ">
        <p >
        I have 2 years of experience in frontend developer field.
I am a student at Istanbul University Computer Programming Department. The projects I have developed are available on my github account.
        </p>
        <a href='https://github.com/gaiaysl' className="underline hover:text-cyan-500"> my github account</a>
        </div>
      </div>
      <div className="  mr-8">
        <img src='/Images/man-background.png' className="h-full  object-cover object-center"/>
      </div>
      

    </div>
  )
}