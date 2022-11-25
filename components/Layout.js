
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Designer from './Designer'
import AboutMe from './AboutMe'
import Works from './Works'
import Contact from './Contact'
export default function Layout({children}){
    return(
        <div>
            <Header/>
            <Navbar/>
            <Designer/>
            <AboutMe/>
            <Works/>
            <Contact/>
            <Footer/>
         
        <main>{children}</main>
        </div>
    )
}