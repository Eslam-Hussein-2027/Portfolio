import React from 'react'
import './about.css'
import ABOUT_IMAGE from '../../assets/MyPicture.png'

function about() {
  return (
    <section id='about' className='section about'>
      <div className='container'>
        <p className='section_kicker'>Get To Know</p>
        <h2 className='section_title'>About Me</h2>

        <div className='about_grid'>
          <div className='about_image_wrap'>
            <img src={ABOUT_IMAGE} alt='Islam Hussein portrait' />
          </div>

          <div className='about_content'>
            <div className='about_cards'>
              <article className='about_card'>
                <h3>Learning</h3>
                <p>Currently building skills through projects and practice</p>
              </article>
              <article className='about_card'>
                <h3>Projects</h3>
                <p>Completed interfaces</p>
              </article>
              <article className='about_card'>
                <h3>Focus</h3>
                <p>React, PHP, and UI engineering</p>
              </article>
            </div>

            <p>
              I am a developer focused on learning and building products that are both
              visually strong and technically reliable. I enjoy turning ideas into
              polished, responsive web projects with maintainable code.
            </p>

            <a href='#contact' className='btn btn-primary'>Talk With Me</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default about
