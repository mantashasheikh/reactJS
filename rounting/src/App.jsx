import {Route , Routes , Link} from 'react-router-dom'
import Home from './home'
import About from './about'
import Contact from './contact'
import Services from './services'
function App() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/services">Services</Link>
    
      <Routes>
          <Route index  element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
      </Routes>
    </>
    
  )
}
export default App