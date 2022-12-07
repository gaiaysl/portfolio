
import Layout from '../components/Layout'
import Designer from '../components/Designer'
import AboutMe from '../components/AboutMe'
import Works from '../components/Works'
import Contact from '../components/Contact'



export default function Home() {
  return (
    <Layout  >
   
     <Designer />
  <AboutMe/>
            <Works/>
            <Contact/>
    
    </Layout>
  )
}
