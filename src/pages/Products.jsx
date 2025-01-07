import React from 'react'

import ProductCard from '../components/ProductCard'

const Products = () => {
  return (
    <div className='outer-container'>
      <div className="inner-container padding text-center w-full">
        <h1 className='font-playfair-display text-3xl leading-normal margin-small sm:mb-0 mt-12'>Products we provide</h1>
        <p className='font-open-sans margin-large text-neutral-400'>At Kema Trading, you can chose from a wide range of products based on your needs</p>
        <div className="product-cards grid grid-cols-1 md:grid-cols-2 gap-3 margin-large">
          <ProductCard title='shoe leather' category='animal origin'/>
          <ProductCard title='shoe leather' category='animal origin'/>
          <ProductCard title='shoe leather' category='animal origin'/>
        </div>
      </div>
    </div>
  )
}

export default Products