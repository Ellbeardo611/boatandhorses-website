// /src/pages/Forces.jsx
import { useState } from 'react';
import Lightbox from '../components/Lightbox';
import FadeIn from '../components/FadeIn';
import './Forces.css';

const TOUR_STOPS = [
  'Derby Royal Marines Association',
  'Army Navy Rugby at Twickenham',
  'Boatoberfest, Oktoberfest at The Boat',
  'Bridlington Sea Fishing',
  'The Manx Arms, Barnsley',
  'The Last Post, Stockton on Tees',
  'Remembrance Sunday in Gibraltar',
];

const ZEEBRUGGE_IMAGES = ['/assets/forces-2.png', '/assets/forces-3.png'];

const MANX_ARMS_IMAGES = [
  '/assets/forces-4.png',
  '/assets/forces-5.png',
  '/assets/forces-6.png',
  '/assets/forces-7.png',
];

const Forces = () => {
  // Which gallery is open in the lightbox ('zeebrugge' or 'manx-arms'), and
  // which image within it - null means the lightbox is closed.
  const [lightbox, setLightbox] = useState(null);

  return (
    <section className="forces-page">
      <div className="forces-page-inner">
        <h1 className="forces-page-title">Boat &amp; Horses Forces</h1>

        <FadeIn>
          <div className="forces-page-overview">
            <img
              src="/assets/forces-1.png"
              alt="Boat and Horses Forces"
              className="forces-page-overview-photo"
            />
            <div className="forces-page-copy">
              <p>
                Martin, landlord of The Boat &amp; Horses, is a Royal Navy
                veteran, and supporting our serving and veteran forces
                personnel is close to his heart. It&apos;s part of what
                makes this pub what it is, a place where anyone who has
                served knows they&apos;ll always find a warm welcome.
              </p>

              <p>
                Our Veterans Darts Team plays every Tuesday evening, and
                throughout the year we host events that bring veterans from
                right across the country to The Boat &amp; Horses for
                reunions and get-togethers. We&apos;re proud to be a
                gathering point for the forces community, and we invite all
                serving and veteran forces personnel to join us at any of
                our forces events.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="forces-page-section">
            <p className="forces-page-eyebrow">On The Road</p>
            <h2 className="forces-page-subtitle">Forces On Tour</h2>

            <div className="forces-page-copy">
              <p>
                As well as welcoming veterans to The Boat &amp; Horses, we
                take a small group out and about across the UK to visit
                other forces groups and lend our support to their events
                too. Below are the stops on our 2026 Forces on Tour, some
                already done and dusted, others still to come.
              </p>
            </div>

            <ul className="forces-page-tour-list">
              {TOUR_STOPS.map((stop) => (
                <li key={stop}>{stop}</li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="forces-page-section">
            <p className="forces-page-eyebrow">2026</p>
            <h2 className="forces-page-subtitle">
              Derby Royal Marines Association Zeebrugge Day Commemoration
            </h2>

            <div className="forces-page-copy">
              <p>
                Our Forces on Tour group joined the Derby Royal Marines
                Association for their Zeebrugge Day Commemoration, marking
                one of the Royal Marines&apos; most significant actions
                with standards raised, respects paid and old friendships
                renewed.
              </p>
            </div>

            <div className="forces-page-gallery">
              {ZEEBRUGGE_IMAGES.map((src, imgIndex) => (
                <button
                  type="button"
                  className="forces-page-gallery-item"
                  key={src}
                  onClick={() => setLightbox({ group: 'zeebrugge', index: imgIndex })}
                >
                  <img
                    src={src}
                    alt="Derby Royal Marines Association Zeebrugge Day Commemoration"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="forces-page-section">
            <p className="forces-page-eyebrow">2026</p>
            <h2 className="forces-page-subtitle">The Manx Arms, Barnsley</h2>

            <div className="forces-page-copy">
              <p>
                The tour also took our group up to The Manx Arms in
                Barnsley, where fellow veterans and forces personnel made
                everyone feel right at home for a great day of camaraderie.
              </p>
            </div>

            <div className="forces-page-gallery">
              {MANX_ARMS_IMAGES.map((src, imgIndex) => (
                <button
                  type="button"
                  className="forces-page-gallery-item"
                  key={src}
                  onClick={() => setLightbox({ group: 'manx-arms', index: imgIndex })}
                >
                  <img
                    src={src}
                    alt="The Manx Arms, Barnsley"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      {lightbox && (
        <Lightbox
          images={lightbox.group === 'zeebrugge' ? ZEEBRUGGE_IMAGES : MANX_ARMS_IMAGES}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
          onIndexChange={(nextIndex) =>
            setLightbox((current) => ({ ...current, index: nextIndex }))
          }
        />
      )}
    </section>
  );
};

export default Forces;
