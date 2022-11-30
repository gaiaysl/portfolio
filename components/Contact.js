import styles from '../styles/Home.module.css'

export default function Contact() {
  return (
    <>
      
      <div id='contact' className="mx-auto  mt-24 mb-24 flex min-h-full sm:py-4 sm:px-4 lg:px-6 ">
      
      <h2 className="sm:mr-24 sm:mt-4 sm:mx-auto sm:text-5xl text-4xl font-bold tracking-tight text-white">
              Got a project in 
              <span className={styles.span}> mind?</span>
           <div className='sm:mt-12'>
              <img src='/Images/contact.png' className=" object-cover object-center"/>
              </div>
             
            </h2>
            
           
        <div className="mx-auto">
        
         
          <form className="" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            
            <div className="sm:flex sm:gap-4 sm:mb-5  " >
          
              <div>
                <label className="  text-white text-xs font-semibold "  >
                  Your name
                </label>
                <input
                  id="name"
                  name="text"
                  type="text"
                  autoComplete="text"
                  required
                  className=" sm:mr-10 bg-gray-700 sm:mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-700 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Name"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="text-white text-xs font-semibold">
                  Your email
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="bg-gray-700 mt-3  relative block w-full appearance-none rounded-none rounded-t-md border border-gray-700 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email"

                />
              </div>
              
            </div>
            <div>
                <label htmlFor="message" className="text-white text-xs font-semibold" >
                  Your message
                </label>
                <textarea 
                  id="message"
                  name="message"
                  type="text"
                  autoComplete="message"
                  required
                  className="bg-gray-600 mt-4 sm:h-72 h-24 mb-2 block p-4 mr-4 w-96 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-700 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="message"

                />
              </div>
              
            <div>
              <button
                type="submit"
                className="group relative flex  justify-center rounded-md border border-transparent bg-cyan-500 sm:py-2 py-1 sm:px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center sm:pl-3">
                  
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
