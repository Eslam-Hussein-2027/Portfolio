import React from 'react'
import './skills.css'

function skills() {
  const frontendSkills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 88 },
    { name: 'HTML/CSS', level: 92 },
    { name: 'Tailwind CSS', level: 80 },
  ]

  const backendSkills = [
    { name: 'PHP', level: 84 },
    { name: 'Laravel', level: 82 },
    { name: 'SQL Server', level: 78 },
    { name: 'REST APIs', level: 86 },
  ]

  const renderSkill = (skill) => (
    <div key={skill.name} className='skill_item'>
      <div className='skill_head'>
        <h4>{skill.name}</h4>
        <span>{skill.level}%</span>
      </div>
      <div className='skill_track'>
        <span style={{ width: `${skill.level}%` }}></span>
      </div>
    </div>
  )

  return (
    <section id='skills' className='section skills'>
      <div className='container'>
        <p className='section_kicker'>What I Use</p>
        <h2 className='section_title'>Skills</h2>

        <div className='skills_grid'>
          <article className='skills_card'>
            <h3>Frontend</h3>
            {frontendSkills.map(renderSkill)}
          </article>

          <article className='skills_card'>
            <h3>Backend</h3>
            {backendSkills.map(renderSkill)}
          </article>
        </div>
      </div>
    </section>
  )
}

export default skills
