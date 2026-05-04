import { useRef, useState } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_fx6bo9h'
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_3ciwjk3'
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'rMGw0dYlcRcJGZS9b'

  const sendMessage = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      if (!form.current) {
        throw new Error('Contact form is not ready yet.')
      }

      await emailjs.sendForm(serviceId, templateId, form.current, {
        publicKey,
      })

      setStatus({ ok: true, msg: 'Message sent successfully.' })
      setName('')
      setEmail('')
      setMessage('')
    } catch (error) {
      setStatus({ ok: false, msg: error?.message || 'Could not send message. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id='contact' className='section contact'>
      <div className='container'>
        <p className='section_kicker'>Get In Touch</p>
        <h2 className='section_title'>Contact Me</h2>

        <div className='contact_grid'>
          <div className='contact_cards'>
            <article className='contact_card'>
              <h3>Email</h3>
              <p>bodraaeslam@gmail.com</p>
              <a href='mailto:bodraaeslam@gmail.com'>Send a message</a>
            </article>
            <article className='contact_card'>
              <h3>LinkedIn</h3>
              <p>Eslam Hussein</p>
              <a href='https://www.linkedin.com/in/eslam-hussein-09011b374/' target='_blank' rel='noopener noreferrer'>Visit profile</a>
            </article>
          </div>

          <form ref={form} className='contact_form' onSubmit={sendMessage}>
            <input name='name' value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Your Full Name' required />
            <input name='email' value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Your Email Address' required />
            <textarea name='message' value={message} onChange={(e) => setMessage(e.target.value)} rows='6' placeholder='Tell me about your project' required></textarea>
            <button type='submit' className='btn btn-primary' disabled={loading}>{loading ? 'Sending…' : 'Send Message'}</button>
            {status && (
              <p style={{ marginTop: '0.6rem', color: status.ok ? '#8ff7c7' : '#ff9b9b' }}>{status.msg}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
