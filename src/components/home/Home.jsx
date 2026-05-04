import React from 'react'
import './home.css'
import ME from '../../assets/MyPicture.png'
import CV from '../../assets/cv.pdf'

function Home() {
  return (
    <section id='home' className='home'>
      <div className="home_cover">
        <img src={ME} alt="Islam Hussein" />
      </div>
      <div className="home_overlay"></div>
      <div className="home_texture"></div>
      <div className="container home_container">
        <p className='home_badge'>Available for freelance work</p>
        <h4>Hello, I am</h4>
        <h1>Islam Hussein</h1>
        <h4 className='text-light'>Full Stack Web Developer</h4>
        <p className='home_intro'>
          I build modern websites and web apps with clean UI, responsive layouts,
          and smooth user experiences.
        </p>
        <div className="btns">
          <a href={CV} className='btn' download>Download CV</a>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Home
