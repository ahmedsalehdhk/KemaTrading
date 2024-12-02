import React from 'react'

// components
import PrimaryLink from '../components/PrimaryLink'

const About = () => {
  return (
    <section className='outer-container' id='about'>
      <div className="inner-container padding w-full">
        <h2 className='font-open-sans uppercase margin-small text-neutral-400'>kema trading</h2>
        <div className='flex flex-col md:flex-row md:gap-10'>
          <h1 className='font-baskerville capitalize text-3xl md:w-2/5 leading-normal margin-small'>kema trading - bangladeshi <span className='text-neutral-400 italic'>tannery</span> since 1998</h1>
          <p className='font-open-sans md:w-3/5'>Kema Trading is one of Bangladesh’s historic tanneries, which has embraced the legacy of a family of tanners from Dhaka to bring the excellence of its almost century-old tradition to markets around the world.<br/><br/> We supply hides for manufacturers who put quality first. In particular, we produce tanned and dyed leather for the fashion and furniture industries.<br/><br/> Our flagship products include leather laces for nautical footwear.<br/><br/>
          <PrimaryLink title='meet the owner' goto='/owner' /></p>
        </div>
      </div>
    </section >
  )
}

export default About