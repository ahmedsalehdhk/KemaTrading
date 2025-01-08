import React from 'react'
import { Link } from 'react-router-dom';

// icons
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa"; 
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <section className='outer-container text-white bg-gradient-to-tl from-[#3D2825] to-[#8B6159]'>
        <div className="inner-container w-full h-full">
          <div className="footer-upper padding-x py-8">
            <h1 className='font-playfair-display text-3xl leading-normal'>Your one stop solution to a world of<br className='hidden md:block' /> leather</h1>
          </div>
          {/* divider */}
          <hr className='border-1 border-[#4E3430] w-screen' />
          <div className="footer-lower padding-x py-8 font-playfair-display text-xl">
            <div className="row-1 grid grid-cols-1 md:grid-cols-5 margin-small">
              <div className="company-branding col-span-1 md:col-span-3 margin-large md:mb-0">
                <h2 className='text-2xl mb-1'>Kema Trading Logo</h2>
                <p className='font-open-sans italic text-sm'>Website by <a href='/' className='duration-100 hover:text-[#4E3430]'>Proteron Digital</a ></p>
              </div>
              <a href='/#about' className="link-item col-span-1 h-fit w-fit margin-small">
                <h3>About</h3>
                <p className='font-open-sans text-sm text-[#D7B2AC]'>About the company</p>
              </a>
              <a href='/#products' className="link-item col-span-1 h-fit w-fit">
                <h3>Products</h3>
                <p className='font-open-sans text-sm text-[#D7B2AC]'>What we provide</p>
              </a>
            </div>
            <div className="row-2 grid grid-cols-1 md:grid-cols-5 margin-small">
              <div className="empty col-span-1 md:col-span-3"></div>
              <a href='/#services' className="link-item col-span-1 h-fit w-fit margin-small">
                <h3>Services</h3>
                <p className='font-open-sans text-sm text-[#D7B2AC]'>What we offer</p>
              </a>
              <Link to='/sustainability' className="link-item col-span-1 h-fit w-fit">
                <h3>Sustainability</h3>
                <p className='font-open-sans text-sm text-[#D7B2AC]'>How we keep it going</p>
              </Link>
            </div>
            <div className="row-3 grid grid-cols-1 md:grid-cols-5 margin-small">
              <div className="social-links col-span-1 md:col-span-3 flex gap-5">
                  <Link><FaFacebook size={32} /></Link>
                  <Link><FaInstagram size={32}/></Link>
                  <Link><FaWhatsapp size={32}/></Link>
              </div>
              <Link to='/blogs' className="link-item col-span-1 h-fit w-fit margin-small
              max-md:-order-2">
                <h3>Blog</h3>
                <p className='font-open-sans text-sm text-[#D7B2AC]'>Articles from the team</p>
              </Link>
              <a href='/#contact' className="link-item col-span-1 h-fit w-fit margin-small max-md:-order-1 max-md:margin-large">
                <h3>Contact</h3>
                <p className='font-open-sans text-sm text-[#D7B2AC]'>Get in touch</p>
              </a>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Footer