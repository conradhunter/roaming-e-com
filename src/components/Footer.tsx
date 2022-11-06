import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='my-10 mx-20'>
        <ul>
          <li>
            <Link to='/'>About</Link>
          </li>
          <li>
            <Link to='/'>Contact</Link>
          </li>
          <li>
            <Link to='/'>FAQ</Link>
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


    </footer>
  )
}

export default Footer