// /src/pages/AboutUs.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Lightbox from '../components/Lightbox';
import FadeIn from '../components/FadeIn';
import './AboutUs.css';

const LANDLORDS_IMAGE = '/assets/landlords.png';

const AboutUs = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <section className="about-page">
      <div className="about-page-inner">
        <h1 className="about-page-title">About The Boat &amp; Horses</h1>

        <FadeIn>
          <div className="about-page-owners">
            <button
              type="button"
              className="about-page-owners-photo-btn"
              onClick={() => setLightboxOpen(true)}
            >
              <img
                src={LANDLORDS_IMAGE}
                alt="Martin &amp; Jackie, landlords of The Boat &amp; Horses"
                className="about-page-owners-photo"
              />
            </button>
            <div className="about-page-owners-text">
              <p className="about-page-eyebrow">Meet The Owners</p>
              <h2 className="about-page-subtitle">Martin &amp; Jackie</h2>
              <p className="about-page-owners-placeholder">
                Placeholder for Martin &amp; Jackie&apos;s story - a few lines
                on how long they&apos;ve run the Boat &amp; Horses, what
                brought them here, and what they love about the pub and the
                community.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <p className="about-page-eyebrow">A Little Bit About Us</p>

          <div className="about-page-copy">
            <p>
              The Boat &amp; Horses is a proper community pub in Beeston
              Rylands, the kind of place where regulars are on first-name
              terms and newcomers don&apos;t stay strangers for long. No food
              menu here, but there&apos;s no shortage of choice, with street
              food vans - fish and chips, steak, burgers, pizza, Greek and
              more - regularly parked up outside. Keep an eye on our
              Facebook and Instagram to see who&apos;s in next, or get
              something delivered and settle into our beer garden, the best
              in Beeston.
            </p>

            <p>
              We also show every game going, with Sky Sports and TNT Sports
              across multiple screens throughout the pub - the place to be
              for football, rugby, cricket and more.
            </p>

            <p>
              Got an event on the horizon? Our{' '}
              <Link to="/stables-function-room">Stables Function Room</Link>{' '}
              is available for private hire, and we work with trusted local
              caterers to help make it a good one. Pop in and have a chat
              about what you need.
            </p>

            <Link to="/contact" className="btn about-page-cta">
              Enquire About The Stables
            </Link>
          </div>
        </FadeIn>

        <FadeIn>
        <div className="about-page-history">
          <p className="about-page-eyebrow">Our History</p>
          <h2 className="about-page-subtitle">The Story Of The Boat &amp; Horses</h2>

          <div className="about-page-copy">
            <p>
              The Boat &amp; Horses started out as The Boat, built by farmer
              Richard Harwood at the end of the 1830s on his Rylands Farm
              land. When the railway arrived in 1839, day trippers flooded in
              from Nottingham, and Richard built the &ldquo;room in the
              garden&rdquo;, which still stands today, to cope, buying a set
              of ninepins that same year and starting a skittles tradition
              that has carried on ever since. The area became a summer
              hotspot for boating, fishing and cricket, with the pub&apos;s
              fortunes rising alongside it, cricket even brought the famous
              W G Grace to play in the meadows nearby in 1870.
            </p>

            <p>
              After Richard&apos;s death in 1864, a string of landlords took
              the reins, including three Scotton brothers, one of whom,
              William Henry Scotton, went on to play cricket for England.
              Samuel Slater ran the pub through the 1890s and 1900s, and
              William Bower took over around 1908 as the area turned
              increasingly urban. It was under Bower that the pub, by then
              renamed the Boat and Horses, was rebuilt around 1932, keeping
              the original room in the garden, into the building we still
              see today.
            </p>
          </div>

          <div className="about-page-history-today">
            <p className="about-page-eyebrow">2023 To Today</p>
            <h3 className="about-page-history-today-title">A New Chapter</h3>

            <div className="about-page-copy">
              <p>
                We took on the pub in March 2023, Martin and Jackie Henson
                together with Neil and Debbie Fowkes, all first-time
                publicans leaving our jobs behind to turn around a pub that
                had fallen on hard times. Over the next two years we
                invested around £60,000, transforming a run-down building
                into today&apos;s spacious bar, function room and beer
                garden. Martin and Neil had both served in the Armed Forces,
                so we partnered with the Beeston charity Forces in the
                Community to make The Boat &amp; Horses a veteran-friendly
                venue, raising more than £30,000 for local causes including
                Forces in the Community and Forever Stars, and funding a
                defibrillator outside the pub. That work earned us a Star
                Pubs Recognition Award, one of only six given out
                nationally, and later a shortlisting as a finalist for a
                Star Award at the Great British Pub Awards, though we
                didn&apos;t take home the trophy on the night. Neil and
                Debbie moved on in 2025, and today Martin and Jackie carry
                that same community spirit forward.
              </p>
            </div>
          </div>
        </div>
        </FadeIn>

        <FadeIn>
        <div className="about-page-history">
          <p className="about-page-eyebrow">Beeston Through The Ages</p>
          <h2 className="about-page-subtitle">A Little Bit About Beeston</h2>

          <div className="about-page-copy">
            <p>
              Although only four miles west of the centre of Nottingham,
              Beeston has always kept its own sense of independence.
              Settlers have been drawn to its riverside meadows since the
              Stone Age, with Bronze Age canoes and Roman traces found near
              the River Trent over the years, and the Anglo-Saxons founded
              the village proper in the sixth century, giving it the name
              &ldquo;Beeston&rdquo;, from the Saxon for &ldquo;the place
              where the bent grasses grow&rdquo;.
            </p>

            <p>
              Centuries of change followed, from the Domesday Survey of
              1086 through a devastating outbreak of plague in 1593 to 1594,
              and then the arrival of the canal and railway in 1839
              transformed the village. Framework knitting and lace making
              grew into major local trades, and in 1901 the National
              Telephone Company, later GPT Ltd, brought major industry to
              Beeston Rylands itself, at its height employing around 5,000
              people until it finally closed in 2009.
            </p>

            <p>
              Since local government reorganisation in the early 1970s,
              Beeston has been part of Broxtowe Borough Council, and over the
              years the town has adapted again and again, from farmland to
              industrial powerhouse to the community we know today - the same
              community that&apos;s kept the Boat &amp; Horses at its heart
              since 1839.
            </p>

            <p>
              Today, Beeston has a range of shops, restaurants, a cinema and
              loads of things on offer in the area, making it a destination
              of choice for visitors to the county, with great connectivity
              by air, road, river, rail, tram and bus thanks to its links to
              East Midlands Airport and the M1. It&apos;s also become
              something of a hub for creativity, home to the Beeston Street
              Art Project, featuring over 50 artworks from more than 30
              artists.
            </p>

            <p>
              Nearby, Attenborough Nature Reserve draws thousands of
              visitors every year to its open water and wetlands, with a
              sailing club alongside it, while the tow-path downstream leads
              to Beeston Marina and its Canalside Heritage Centre, popular
              with anglers, boaters and walkers. For something more active,
              the Big Track Cycle Route winds from Beeston Lock through to
              Trent Bridge, taking in Nottingham city centre along the way.
              All in all, Beeston has lots of good walks and activities on
              its doorstep, a diverse, welcoming community with a rich mix
              of experiences for visitors to explore and enjoy.
            </p>
          </div>
        </div>
        </FadeIn>
      </div>

      {lightboxOpen && (
        <Lightbox
          images={[LANDLORDS_IMAGE]}
          index={0}
          onClose={() => setLightboxOpen(false)}
          onIndexChange={() => {}}
        />
      )}
    </section>
  );
};

export default AboutUs;
