
import styles from '../styles/Home.module.css'
export default function AboutMe() {
    return (
      <div className="relative mb-24 " id='aboutme'>
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="font text-3xl font-bold tracking-tight text-white sm:text-6xl">
                About <span className={styles.span}>me</span>
              </h1>
              <div className=" mt-4 text-xl text-gray-500">
                lorem
              </div>
            </div>
            <div>
              <div className="">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="  lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className=" h-48 w-96 absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8  lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <img src="/Images/man-background.png" className=' w-full object-fill'/>
                
                  </div>
       
                </div>
     
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  