import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
import Owner from './pages/Owner';
import Products from './pages/Products';
import Sustainability from './pages/Sustainability';
import Blogs from './pages/Blogs';

// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className='relative'>
      <Router>
        <Navbar />
        <Routes>  
          <Route exact path='/' element={<Home />} />
          <Route exact path='/owner' element={<Owner />} /> 
          <Route exact path='/products' element={<Products />} /> 
          <Route exact path='/sustainability' element={<Sustainability />} /> 
          <Route exact path='/blogs' element={<Blogs />} /> 
        </Routes>
        <Footer />
      </Router>
    </main>
    
  )
}