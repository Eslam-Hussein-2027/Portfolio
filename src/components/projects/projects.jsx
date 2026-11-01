import './projects.css'
import thumbA from '../../assets/portfolio1.jpg'
import thumbB from '../../assets/portfolio2.jpg'
import kobrahLogo from '../../assets/kobrah-logo.png'

/*
 * Each project supports:
 *  - title, description           (required)
 *  - badge                        e.g. 'Graduation Project', 'New'
 *  - tags                         tech stack shown as pills
 *  - liveUrl                      shows a "Live Demo" button
 *  - repoUrl                      shows a "Source Code" button
 *  - image                        screenshot (fills the card header)
 *  - cover                        used when there is no screenshot:
 *      { type: 'logo',  src, alt, className }
 *      { type: 'brand', name, tagline, className }
 */
const PROJECTS = [
  {
    title: 'Herfaa — Craftsmen Booking Platform',
    badge: 'Graduation Project',
    description:
      'A bilingual (Arabic / English) marketplace that connects customers in Libya with verified craftsmen: carpenters, plumbers, electricians and painters. Customers search by trade and city, book jobs and leave reviews. Craftsmen manage their services, portfolio and incoming bookings, and admins approve providers and moderate content.',
    tags: ['React', 'Laravel 13', 'Sanctum Auth', 'Tailwind CSS', 'React Query', 'REST API', 'i18n'],
    repoUrl: 'https://github.com/Eslam-Hussein-2027/Herfaa',
    cover: {
      type: 'brand',
      name: 'حِرفة',
      tagline: 'منصّة الخدمات المهنية',
      className: 'cover_herfaa',
    },
  },
  {
    title: 'Great Arabia Insurance — Company Website',
    badge: 'New',
    description:
      'Official Arabic (RTL) website for The Great Arabia Insurance Company. A React frontend backed by a Laravel JSON API for products, business sectors, downloadable forms and a rate-limited contact form. The site ships with bundled fallback content, so it still loads if the API is down.',
    tags: ['React 19', 'React Router', 'Laravel 13', 'REST API', 'RTL'],
    liveUrl: 'https://akobrah.ly/',
    repoUrl: 'https://github.com/Eslam-Hussein-2027/a-kobrah',
    cover: {
      type: 'logo',
      src: kobrahLogo,
      alt: 'The Great Arabia Insurance Company logo',
      className: 'cover_kobrah',
    },
  },
  {
    title: 'E-Commerce Demo (A)',
    description: 'A deployed e‑commerce demo showcasing product listings, cart flow and responsive layouts.',
    liveUrl: 'https://e-commerce-eta-lyart-27.vercel.app/',
    image: thumbA,
  },
  {
    title: 'E-Commerce Demo (B)',
    description: 'Alternate e‑commerce implementation with login flow and checkout.',
    liveUrl: 'https://e-commerce-website-mu-navy.vercel.app/login#',
    image: thumbB,
  },
]

function HammerIcon() {
  return (
    <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
      <path d='m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9' />
      <path d='m18 15 4-4' />
      <path d='m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5' />
    </svg>
  )
}

function ProjectMedia({ project }) {
  const { image, cover, title } = project

  if (image) {
    return <img src={image} alt={title} />
  }

  if (cover?.type === 'logo') {
    return (
      <div className={`project_cover ${cover.className ?? ''}`}>
        <img src={cover.src} alt={cover.alt ?? title} />
      </div>
    )
  }

  if (cover?.type === 'brand') {
    return (
      <div className={`project_cover ${cover.className ?? ''}`} role='img' aria-label={title}>
        <span className='cover_icon'>
          <HammerIcon />
        </span>
        <span className='cover_name' lang='ar' dir='rtl'>{cover.name}</span>
        <span className='cover_tagline' lang='ar' dir='rtl'>{cover.tagline}</span>
      </div>
    )
  }

  return null
}

function Projects() {
  return (
    <section id='projects' className='section projects'>
      <div className='container'>
        <p className='section_kicker'>Featured Projects</p>
        <h2 className='section_title'>Projects</h2>

        <div className='projects_grid'>
          {PROJECTS.map((p) => (
            <article className='project_card' key={p.title}>
              {(p.image || p.cover) && (
                <div className='project_image'>
                  {p.badge && <span className='project_badge'>{p.badge}</span>}
                  <ProjectMedia project={p} />
                </div>
              )}
              <div className='project_content'>
                <h3>{p.title}</h3>
                <p>{p.description}</p>

                {p.tags?.length > 0 && (
                  <ul className='project_tags'>
                    {p.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                )}

                <div className='project_actions'>
                  {p.liveUrl && (
                    <a href={p.liveUrl} target='_blank' rel='noopener noreferrer' className='btn btn-primary'>
                      Live Demo
                    </a>
                  )}
                  {p.repoUrl && (
                    <a href={p.repoUrl} target='_blank' rel='noopener noreferrer' className='btn'>
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
