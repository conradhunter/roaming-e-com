import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/roaming-logo.png';

function Footer() {
  return (
    <footer className='py-10 px-20 flex flex-row-reverse justify-between items-center border-t-2 border-t-black'>
        <ul>
          <li className='text-right'>
            <Link to='/contact'>Contact</Link>
          </li>
          <li className='text-right'>
            <Link className='text-right' to='/FAQ'>FAQ</Link>
          </li>
          <li className='text-right'>
            <Link className='text-right' to='/privacy-policy'>Privacy Policy</Link>
          </li>
          <li className='text-right'>
            <Link className='text-right' to='/terms-of-service'>Terms of Service</Link>
          </li>
          <li className='text-right'>
            <Link className='text-right' to='/refund-policy'>Refund Policy</Link>
          </li>
        </ul>

        <Link to='/'>
          <img src={logo} alt="Footer Logo" className='w-72 h-full' />
        </Link>

    </footer>
  )
}

export default Footer