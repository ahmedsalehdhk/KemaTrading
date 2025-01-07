import React from 'react'

// components
import ProductCard from '../components/ProductCard'
import PrimaryLink from '../components/PrimaryLink'

const Products = () => {
  return (
    <section className='outer-container' id='products'>
      <div className="inner-container padding text-center w-full">
        <h1 className='font-playfair-display text-3xl leading-normal margin-small sm:mb-0'>Check out our range of products</h1>
        <p className='font-open-sans margin-large text-neutral-400'>Made by the finest craftsman at work</p>
        <div className="product-cards grid grid-cols-1 md:grid-cols-3 gap-3 margin-large">
            <ProductCard title='shoe leather' category='animal origin'/>
            <ProductCard title='shoe leather' category='animal origin'/>
            <ProductCard title='shoe leather' category='animal origin'/>
        </div>
        <PrimaryLink title='view our full range of leather' goto='/products' />
      </div>
    </section>
  )
}

export default Products