// /src/pages/ContactUs.jsx
import { useState } from 'react';
import FadeIn from '../components/FadeIn';
import './ContactUs.css';

// This is a static site with no backend, so the form needs a free form
// service to actually deliver the email. Set one up in two minutes:
//   1. Go to https://formspree.io, sign up free.
//   2. Create a form with the target address boatandhorses1868@gmail.com
//   3. Copy the endpoint it gives you and paste it in below.
// Until you do that, submitting the form will fail with a clear error
// message rather than silently doing nothing.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

const ContactUs = () => {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');
    const form = event.target;

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });

      if (response.ok) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="contact-page">
      <div className="contact-page-inner">
        <h1 className="contact-page-title">Contact Us</h1>

        <FadeIn>
          <p className="contact-page-eyebrow">Get In Touch</p>

          <div className="contact-page-copy">
            <p>
              Got a question, want to talk about a private event, or looking
              to book The Stables function room? Send us a message and
              we&apos;ll get back to you, or reach us directly using the
              details below.
            </p>
          </div>

          <div className="contact-page-details">
            <div className="contact-page-detail">
              <span className="contact-page-detail-label">Email</span>
              <a href="mailto:boatandhorses1868@gmail.com">
                boatandhorses1868@gmail.com
              </a>
            </div>
            <div className="contact-page-detail">
              <span className="contact-page-detail-label">Telephone</span>
              <a href="tel:01159677799">0115 9677799</a>
            </div>
          </div>

          <form className="contact-page-form" onSubmit={handleSubmit}>
            <label htmlFor="contact-name">
              Name
              <input id="contact-name" type="text" name="name" required />
            </label>
            <label htmlFor="contact-email">
              Email
              <input id="contact-email" type="email" name="email" required />
            </label>
            <label htmlFor="contact-message">
              Message
              <textarea id="contact-message" name="message" rows="5" required />
            </label>
            <button type="submit" className="btn" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>

            {status === 'sent' && (
              <p className="contact-page-status contact-page-status-ok">
                Thanks, we&apos;ve got your message and will be in touch soon.
              </p>
            )}
            {status === 'error' && (
              <p className="contact-page-status contact-page-status-error">
                That didn&apos;t send, try again or email us directly at{' '}
                boatandhorses1868@gmail.com.
              </p>
            )}
          </form>
        </FadeIn>
      </div>
    </section>
  );
};

export default ContactUs;
