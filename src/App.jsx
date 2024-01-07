import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Popular from './components/Popular/Popular'
import Recommended from './components/Recommended/Recommended'

function App() {
  

  return (
 <div>
     <div className='max-w-6xl mx-auto'>
     
      
     <Navbar></Navbar>
     <Banner></Banner>
     <Popular></Popular>
     <Recommended></Recommended>
     
     
   </div>
   <Footer></Footer>
 </div>

  )
}

export default App
