// /src/components/AboutSection.jsx
import { Link } from 'react-router-dom';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about" id="about">
      <div className="about-inner">
        <p className="about-eyebrow">Us In A Nutshell</p>

        <div className="about-copy">
          <p>
            The Boat &amp; Horses is a traditional British pub at the heart of
            Beeston Rylands, welcoming locals and visitors alike. Steeped in
            the history of good, old-fashioned hospitality, it&apos;s a warm,
            sociable spot that&apos;s become the true hub of the community -
            and dogs are always welcome too.
          </p>

          <p>
            We don&apos;t serve food ourselves - pubs are what we do
            best - but there&apos;s plenty on offer nearby. Street food
            vendors serving fish and chips, steak, burgers, pizza, Greek and
            more regularly pull up outside, so keep an eye on our Facebook and
            Instagram for updates.
          </p>

          <p>
            Fancy getting something delivered instead? We&apos;re all for it.
            Or bring your own picnic and make the most of our beer garden -
            the best in Beeston.
          </p>

          <p>
            We also show every game going, with Sky Sports and TNT Sports
            across multiple screens throughout the pub - the place to be for
            football, rugby, cricket and more.
          </p>

          <p>
            Planning something special? Our{' '}
            <Link to="/stables-function-room">Stables Function Room</Link> is
            available for private hire, and we work with trusted local
            caterers to help make your event right - pop in and have a chat
            about what you need.
          </p>

          <Link to="/contact" className="btn about-cta">
            Enquire About The Stables
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
