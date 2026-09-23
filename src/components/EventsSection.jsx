// /src/components/EventsSection.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Lightbox from './Lightbox';
import './EventsSection.css';

// Drop your own photos in public/assets/ with these filenames (or update the
// paths/captions here) - swap in real dates/details as they're booked in.
const EVENTS = [
  { image: '/assets/event-1.png', caption: 'Come along and enjoy some authentic Irish live music!' },
  { image: '/assets/event-2.png', caption: 'Tickets from only £30, contact us for a ticket before it\'s too late!' },
  { image: '/assets/event-3.png', caption: 'Not to be missed!' },
];

const EVENT_IMAGES = EVENTS.map((event) => event.image);

const EventsSection = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <section className="events" id="events">
      <div className="events-inner">
        <p className="events-eyebrow">What&apos;s On</p>
        <h2 className="events-title">What&apos;s Happening Next</h2>
        <div className="events-scroller">
          {EVENTS.map((event, index) => (
            <figure className="events-card" key={event.image}>
              <button
                type="button"
                className="events-card-image"
                onClick={() => setLightboxIndex(index)}
              >
                <img src={event.image} alt={event.caption} loading="lazy" />
              </button>
              <figcaption>{event.caption}</figcaption>
            </figure>
          ))}
        </div>

        <Link to="/events" className="btn events-cta">
          Go To Full Event List
        </Link>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={EVENT_IMAGES}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onIndexChange={setLightboxIndex}
        />
      )}
    </section>
  );
};

export default EventsSection;
