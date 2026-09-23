// /src/components/ContactSection.jsx
import { useState } from 'react';
import './ContactSection.css';

// This is a static site with no backend, so the form needs a free form
// service to actually deliver the email. Set one up in two minutes:
//   1. Go to https://formspree.io, sign up free.
//   2. Create a form with the target address boatandhorses1868@gmail.com
//   3. Copy the endpoint it gives you and paste it in below.
// Until you do that, submitting the form will fail with a clear error
// message rather than silently doing nothing.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

// Swap these for real reviews/quotes whenever you have them.
const REVIEWS = [
  {
    quote: 'Booked The Stables for my 40th, brilliant night, couldn’t fault it.',
    name: 'Local regular',
  },
  {
    quote: 'Best beer garden in the Rylands. Always a warm welcome.',
    name: 'Google review',
  },
  {
    quote: 'Sorted our work Christmas do with no fuss at all. Highly recommend.',
    name: 'Function room guest',
  },
];

const ContactSection = () => {
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
    <section className="contact" id="contact">
      <div className="contact-inner">
        <div className="contact-form-col" id="contact-form">
          <p className="contact-eyebrow">Get In Touch</p>
          <h2 className="contact-title">Enquiries &amp; Bookings</h2>
          <p className="contact-copy">
            Got a question, want to talk about a private event, or looking to
            book The Stables function room? Send us a message and
            we&apos;ll get back to you.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
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
              <p className="contact-status contact-status-ok">
                Thanks, we&apos;ve got your message and will be in touch soon.
              </p>
            )}
            {status === 'error' && (
              <p className="contact-status contact-status-error">
                That didn&apos;t send, try again or email us directly at{' '}
                boatandhorses1868@gmail.com.
              </p>
            )}
          </form>
        </div>

        <aside className="contact-reviews" id="reviews">
          <p className="contact-eyebrow">What People Say</p>
          {REVIEWS.map((review) => (
            <blockquote className="contact-review" key={review.name}>
              <p>&ldquo;{review.quote}&rdquo;</p>
              <cite>{review.name}</cite>
            </blockquote>
          ))}
        </aside>
      </div>
    </section>
  );
};

export default ContactSection;
