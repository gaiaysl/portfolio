import styles from '../styles/Home.module.css'

export default function Contact() {
  return (
    <>
      
      <div className="mx-auto  mt-24 mb-24 flex min-h-full  py-4 sm:px-6 lg:px-8">
      
      <h2 className=" mx-auto  text-6xl font-bold tracking-tight text-white">
              Got a project in 
           <div className=''>
           <span className={styles.span}>mind?</span>
              <img src='/Images/contact.png' />
              </div>
             
            </h2>
            
           
        <div className="mx-auto">
        
         
          <form className="" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            
            <div className="flex gap-4 mb-5  " >
          
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
                  className=" mr-10 bg-gray-700 mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-700 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
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
                  className="bg-gray-700 mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-700 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
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
                  className="bg-gray-700 mt-4 h-72 mb-2 block p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-700 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="message"

                />
              </div>
              
            <div>
              <button
                type="submit"
                className="group relative flex  justify-center rounded-md border border-transparent bg-cyan-500 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
