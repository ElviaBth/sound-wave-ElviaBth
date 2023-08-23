import React from 'react'
import { Link } from 'react-router-dom'
import theLogo from '../assets/images/logo.png'
import '../styles/Logo.css'

function Logo() {
  return (
    <div className='logo'>
        <Link to= {'/sound-wave-ElviaBth'}><img src={theLogo} alt="Sound Wave webpage Logo."  /></Link>
        <span><Link to= {'/sound-wave-ElviaBth'}>Soundwave</Link></span>
    </div>
  )
}

export default Logo