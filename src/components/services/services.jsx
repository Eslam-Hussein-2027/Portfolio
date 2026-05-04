import React from 'react'
import './services.css'

function services() {
  return (
    <section id='services' className='section services'>
      <div className='container'>
        <p className='section_kicker'>What I Offer</p>
        <h2 className='section_title'>Services</h2>

        <div className='services_grid'>
          <article className='service_card'>
            <h3>Frontend Development</h3>
            <ul>
              <li>Responsive React websites</li>
              <li>Reusable component systems</li>
              <li>Modern CSS and animation</li>
            </ul>
          </article>

          <article className='service_card'>
            <h3>Backend Development</h3>
            <ul>
              <li>REST APIs with PHP</li>
              <li>Authentication and security basics</li>
              <li>Database integration</li>
            </ul>
          </article>

          <article className='service_card'>
            <h3>UI and Product Polish</h3>
            <ul>
              <li>Design-to-code implementation</li>
              <li>Performance-focused refinements</li>
              <li>Cross-device testing</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

export default services
