import React from 'react'
import { Link } from 'react-router-dom'

const PrimaryLink = (props) => {
  return (
    <Link to={props.goto} className='font-open-sans capitalize border-b-2 border-black text-sm duration-200 hover:text-neutral-400 hover:border-neutral-400'>{props.title}</Link>
  )
}

export default PrimaryLink