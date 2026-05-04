import React from 'react'
import './footer.css'

function footer() {
  return (
    <footer className='footer'>
      <a href='#home' className='footer_logo'>Islam Hussein</a>

      <ul className='footer_links'>
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <p className='footer_copy'>
        Contact: <a href='mailto:bodraaeslam@gmail.com'>bodraaeslam@gmail.com</a>
      </p>

      <p className='footer_copy'>Copyright 2026. All rights reserved.</p>
    </footer>
  )
}

export default footer
