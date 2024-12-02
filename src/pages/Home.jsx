import React from 'react'

// sections
import Hero from '../sections/Hero'
import About from '../sections/About'
import Products from '../sections/Products'
import Contact from '../sections/Contact'

const Home = () => {
  return (
    <section className=''>
        <Hero />
        <About />
        <Products />
        <Contact />
    </section>
  )
}

export default Home