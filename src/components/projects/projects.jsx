import React from 'react'
import './projects.css'
import thumbA from '../../assets/portfolio1.jpg'
import thumbB from '../../assets/portfolio2.jpg'

function projects() {
  const projects = [
    {
      title: 'E-Commerce Demo (A)',
      description: 'A deployed e‑commerce demo showcasing product listings, cart flow and responsive layouts.',
      url: 'https://e-commerce-eta-lyart-27.vercel.app/',
      image: thumbA,
    },
    {
      title: 'E-Commerce Demo (B)',
      description: 'Alternate e‑commerce implementation with login flow and checkout.',
      url: 'https://e-commerce-website-mu-navy.vercel.app/login#',
      image: thumbB,
    }
  ]

  return (
    <section id='projects' className='section projects'>
      <div className='container'>
        <p className='section_kicker'>Featured Projects</p>
        <h2 className='section_title'>Projects</h2>

        <div className='projects_grid'>
          {projects.map((p) => (
            <article className='project_card' key={p.url}>
              {p.image && (
                <div className='project_image'>
                  <img src={p.image} alt={p.title} />
                </div>
              )}
              <div className='project_content'>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className='project_actions'>
                  <a href={p.url} target='_blank' rel='noopener noreferrer' className='btn btn-primary'>View Site</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default projects
