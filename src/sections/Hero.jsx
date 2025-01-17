import React from 'react'

const Hero = () => {
  return (
    <section className='w-screen h-screen min-h-[600px]' id='hero'>
        <div className="w-full h-[95%] bg-hero-bg bg-cover bg-fixed bg-center flex flex-col justify-center items-center text-center padding-x select-none">
            <h1 className="font-playfair-display capitalize text-3xl md:text-4xl leading-normal md:leading-loose margin-small text-white overflow-hidden">finest quality animal hide leather</h1>
            <h2 className='text-md font-open-sans uppercase text-white'>since 1997</h2>
        </div>
    </section>
  )
}

export default Hero