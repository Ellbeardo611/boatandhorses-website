// /src/pages/Stables.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Lightbox from '../components/Lightbox';
import FadeIn from '../components/FadeIn';
import './Stables.css';

const GALLERY_IMAGES = [
  '/assets/function-1.png',
  '/assets/function-2.png',
  '/assets/function-3.png',
];

const HIRE_FEES = [
  { when: 'Monday to Thursday', price: '£25 per hour' },
  { when: 'Friday to Sunday', price: '£35 per hour' },
];

const Stables = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <section className="stables-page">
      <div className="stables-page-inner">
        <h1 className="stables-page-title">The Stables Function Room</h1>

        <FadeIn>
          <div className="stables-page-copy">
            <p>
              The Stables is our premium private function room, a smart,
              self-contained space with capacity for up to 125 guests,
              purpose-built to make any occasion feel special. From wedding
              receptions and milestone birthdays to anniversaries, wakes,
              meetings and sporting events, it&apos;s flexible enough for
              whatever you&apos;re planning, whether that&apos;s an intimate
              gathering or a full-scale celebration.
            </p>

            <p>
              We take care of the details so you don&apos;t have to,
              from setting up the room to your brief, to helping you sort
              catering and entertainment, all backed by the warmth,
              character and personal service of a proper community pub.
              Whatever the occasion, our team is on hand to help make it a
              night to remember.
            </p>
          </div>

          <div className="stables-page-gallery">
            {GALLERY_IMAGES.map((src, index) => (
              <button
                type="button"
                className="stables-page-gallery-item"
                key={src}
                onClick={() => setLightboxIndex(index)}
              >
                <img src={src} alt="The Stables Function Room" loading="lazy" />
              </button>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <div className="stables-page-section">
            <p className="stables-page-eyebrow">Booking</p>
            <h2 className="stables-page-subtitle">Room Hire</h2>

            <div className="stables-page-copy">
              <p>
                A £100 deposit secures your date, and is fully returned
                after your event.
              </p>
            </div>

            <div className="stables-page-table-wrap">
              <table className="stables-page-table">
                <thead>
                  <tr>
                    <th>When</th>
                    <th>Hire Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {HIRE_FEES.map((row) => (
                    <tr key={row.when}>
                      <td>{row.when}</td>
                      <td>{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="stables-page-section">
            <p className="stables-page-eyebrow">Make It Yours</p>
            <h2 className="stables-page-subtitle">Decoration &amp; Entertainment</h2>

            <div className="stables-page-copy">
              <p>
                Want to add a personal touch? We keep disposable tablecloths
                on hand for £2 each, along with a small range of table decor
                available to hire, so ask a member of staff about dressing
                the room to suit your event. Looking to book entertainment
                too? We can put you in touch with trusted local DJs and
                bands who know how to keep a room like this going, whether
                you&apos;re after background music or a full night of
                dancing.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="stables-page-section">
            <p className="stables-page-eyebrow">Food &amp; Drink</p>
            <h2 className="stables-page-subtitle">Catering</h2>

            <div className="stables-page-copy">
              <p>
                Good food makes any event, and we&apos;re happy to help sort
                it. We work with trusted local caterers, from buffets to
                sit-down meals, and are always happy to share their details
                so you can book directly, or if you&apos;d rather handle
                catering yourself, you&apos;re more than welcome to do that
                too. And with a full pub on your doorstep, drinks are never
                far away. Pop in and pick up a leaflet from a member of
                staff for the full details.
              </p>
            </div>
          </div>

          <Link to="/contact" className="btn stables-page-cta">
            Enquire About The Stables
          </Link>
        </FadeIn>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={GALLERY_IMAGES}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onIndexChange={setLightboxIndex}
        />
      )}
    </section>
  );
};

export default Stables;
