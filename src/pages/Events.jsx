// /src/pages/Events.jsx
import FadeIn from '../components/FadeIn';
import './Events.css';

const WEEKLY_REGULARS = [
  { when: 'Every Monday & Friday, 6.30pm', what: "Sticky 13's", price: '£1 a go' },
  { when: 'Every Friday, 8pm', what: 'Snowball Stickies', price: '£1 a go' },
  { when: 'Every Friday, 8.30pm', what: 'Karaoke Night', price: 'Free' },
  {
    when: 'Last Saturday of the month, 10am - 12pm',
    what: 'Classic Car Meet',
    price: 'Free',
  },
];

const UPCOMING_EVENTS = [
  {
    date: 'September 19th',
    time: '7.30pm',
    name: 'Ceilidh with Schuggie',
    price: 'Free',
  },
  {
    date: 'September 26th',
    time: '7pm',
    name: 'Meet & Greet with Razor Ruddock',
    price: 'From £30',
  },
  {
    date: 'October 10th',
    time: '8pm',
    name: 'Live Music with Martin Gregory',
    price: 'Free',
  },
  {
    date: 'October 24th',
    time: '',
    name: 'Live Music with Blurred Mondays',
    price: 'Free',
  },
  {
    date: 'October 24th & 25th',
    time: '',
    name: 'Christmas Makers Market',
    price: 'Free',
  },
  {
    date: 'November 7th',
    time: 'From 7pm',
    name: 'Live Music with The Modest and Verbal Warning',
    price: 'Free',
  },
  {
    date: 'November 21st',
    time: '8pm',
    name: "1980's Glow Party with Mark Stuart Wood",
    price: 'Free',
  },
  {
    date: 'December 12th',
    time: '',
    name: 'Christmas Carol Concert, plus a Scooter Xmas Party with The Skarantinos',
    price: 'Free',
  },
  {
    date: 'December 15th',
    time: '',
    name: 'Christmas Party with live music from Eternal Star of Queen (buffet included)',
    price: '£12.50 a ticket',
  },
  {
    date: 'December 19th',
    time: '',
    name: 'The Boat & Horses Christmas Panto',
    price: 'Free',
  },
];

const Events = () => {
  return (
    <section className="events-page">
      <div className="events-page-inner">
        <h1 className="events-page-title">Events &amp; Weekly Schedule</h1>

        <FadeIn>
          <div className="events-page-copy">
            <p>
              There&apos;s always something happening at The Boat &amp;
              Horses. From live music, oompah bands and our very own RYJAM
              festival to legendary SKA, MOD and Motown days, we host
              something for everyone, whatever your age or background. Bank
              holiday weekends are especially busy, often with multiple
              bands playing across the day, so keep an eye on our Facebook
              and Instagram for the latest updates and one-off events
              throughout the year, from Oktoberfest and Halloween to our
              unique Boat &amp; Horses Adult Panto every Christmas.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="events-page-section">
            <p className="events-page-eyebrow">Every Game, Every Week</p>
            <div className="events-page-title-row">
              <h2 className="events-page-subtitle">Live Sport</h2>
              <img
                src="/assets/sports.png"
                alt="Sky Sports and TNT Sports shown here"
                className="events-page-sports-badge"
              />
            </div>

            <div className="events-page-copy">
              <p>
                We show it all - Sky Sports and TNT Sports across multiple
                screens throughout the pub, so you&apos;ll never miss a
                kick, over or try. Whether it&apos;s the football, rugby or
                cricket, come and watch the game with us.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="events-page-section">
            <p className="events-page-eyebrow">Every Week</p>
            <h2 className="events-page-subtitle">Weekly Regulars</h2>

            <div className="events-page-table-wrap">
              <table className="events-page-table">
                <thead>
                  <tr>
                    <th>When</th>
                    <th>What&apos;s On</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {WEEKLY_REGULARS.map((row) => (
                    <tr key={row.what}>
                      <td>{row.when}</td>
                      <td>{row.what}</td>
                      <td>{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="events-page-section">
            <p className="events-page-eyebrow">2026</p>
            <h2 className="events-page-subtitle">Upcoming Events</h2>

            <div className="events-page-table-wrap">
              <table className="events-page-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Event</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {UPCOMING_EVENTS.map((row) => (
                    <tr key={row.date + row.name}>
                      <td>
                        {row.date}
                        {row.time ? (
                          <span className="events-page-time"> - {row.time}</span>
                        ) : null}
                      </td>
                      <td>{row.name}</td>
                      <td>{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="events-page-footnote">
              Follow us on Facebook and Instagram for the latest event
              updates and any new dates as they&apos;re announced.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Events;
