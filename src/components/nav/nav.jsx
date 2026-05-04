import React from 'react'
import './nav.css'

function nav() {
  return (
    <nav className='floating_nav'>
      <a href='#home'>Home</a>
      <a href='#about'>About</a>
      <a href='#services'>Services</a>
      <a href='#skills'>Skills</a>
      <a href='#projects'>Projects</a>
      <a href='#contact'>Contact</a>
    </nav>
  )
}

export default nav
