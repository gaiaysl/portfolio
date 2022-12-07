import styles from '../styles/Home.module.css'
import { useState } from 'react'

const initValues = { name: "",
email: "",
message: "",
}
const initState = {values:initValues}

export default function Contact() {

  const [state, setState] = useState(initState)
  const {values, isLoading} = state
  const handleChange = ({target}) => setState((prev)=>({

    ...prev,
    values:{
      ...prev.values,
      [target.name]:target.value,
    }

  }))

  const onSubmit = async () =>{
    setState((prev)=>({
      ...prev,
      isLoading:true
    }))
    await sendContactForm(values)
  }

  return (
    <>
      
      <div id='contact' className=" mx-auto flex-col sm:flex-row  mt-24 mb-24 flex min-h-full sm:py-4 sm:px-4 lg:px-6 ">
    
      <h2 className=" m-6 sm:mr-24 sm:mt-4 sm:mx-auto sm:text-5xl text-4xl font-bold tracking-tight dark:text-white text-gray-600">
              Got a project in 
              <span className={styles.span}> mind?</span>
           <div className='sm:mt-12 m-10 -ml-4'>
              <img src='/Images/contact.png' className=" object-cover object-center"/>
              </div>
             
            </h2>
            
           
        <div className="mx-auto">
        
         
          <form className="" action="#" method="POST" >
            <input type="hidden" name="remember" defaultValue="true" />
            
            <div className="  w-72 sm:flex  sm:mb-5  " >
          
              <div className='m-4 sm:-m-2 '>
                <label className="  dark:text-white text-gray-600 text-xs font-semibold "  >
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                
                  autoComplete="text"
                  required
                  className=" bg-gray-700 sm:mt-3 w-72 sm:w-48 appearance-none rounded-none rounded-t-md border border-gray-700 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="email"
                />
              </div>
              <div className='m-4 sm:-mt-2 '>
                <label htmlFor="email-address" className="dark:text-white text-gray-600 text-xs font-semibold ">
                  Your email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                
                  autoComplete="email"
                  required
                  className="bg-gray-700 sm:mt-3 w-72 sm:w-48  rounded-t-md border border-gray-700 px-2 py-2 text-gray-900  placeholder-gray-500 focus:z-10  focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email"

                />
              </div>
              
            </div>
            <div className='m-4'>
                <label htmlFor="message" className="dark:text-white text-gray-600 text-xs font-semibold" >
                  Your message
                </label>
                <textarea 
                  id="message"
                  name="message"
               
                  type="text"
                  autoComplete="message"
                  rows="4"
                  required
                  className="bg-gray-700 w-72 sm:-ml-5 sm:bg-gray-700 mt-4 sm:h-72 sm:w-96 h-24 mb-2 block p-4 mr-4  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-700 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="message"

                />
              </div>
              
            <div className='m-4'>
              <button
                type="submit"
                variant="outline"
    
                className=" flex  justify-center rounded-md border border-transparent bg-cyan-500 sm:py-2 py-1 px-4 text-sm font-medium text-white hover:bg-cyan-700 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
               
                </span>
                send message
              </button>
            </div>
          </form>
         

        </div>
      </div>
    </>
  )
}
