import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='outer-container fixed top-0 left-0 z-50 bg-white shadow-sm'>
        <div className="inner-container w-full padding-x py-3 flex justify-between items-center">
            <div className="search hover:cursor-pointer">
                Srch
            </div>
            <div className="logo text-center hover:cursor-pointer select-none">
                <h1 className='font-baskerville capitalize text-2xl whitespace-nowrap'>kema trading</h1>
                <h2 className='font-open-sans uppercase text-xs'>bangladesh</h2>
            </div>
            <div className="menu">
                <div className="hamburger flex flex-col gap-1.5 hover:cursor-pointer">
                    <div className="line bg-black h-0.5 w-6"></div>
                    <div className="line bg-black h-0.5 w-6"></div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar