
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

export default function Layout({children}){
    return(
        <div className="bg-white dark:bg-gray-900 ">
            <Header/>
            
            <Navbar/>
            {children}
        
            <Footer/>
         
        
        </div>
    )
}