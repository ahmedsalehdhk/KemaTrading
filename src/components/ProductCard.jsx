import React from 'react'

const ProductCard = (props) => {
  return (
    <div className='col-span-1 w-auto aspect-square flex flex-col justify-end items-center p-8 bg-shoe-bg bg-cover text-white relative group'>
        <div className="overlay absolute top-0 left-0 h-full w-full group-hover:bg-black/25 duration-200"></div>
        <h1 className='font-baskerville capitalize text-xl z-10'>{props.title}</h1>
        <p className='font-open-sans capitalize text-sm z-10'>{props.category}</p>
    </div>
  )
}

export default ProductCard;