import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/roaming-logo.png';

function Footer() {
  return (
    <footer className='py-10 px-20 flex justify-between items-center border-t-2 border-t-black'>
        <ul>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/FAQ'>FAQ</Link>
          </li>
          <li>
            <Link to='/'>Privacy Policy</Link>
          </li>
          <li>
            <Link to='/'>Terms of Service</Link>
          </li>
          <li>
            <Link to='/'>Refund Policy</Link>
          </li>
        </ul>

        <Link to='/'>
          <img src={logo} alt="Footer Logo" className='w-72 h-full' />
        </Link>

    </footer>
  )
}

export default Footer