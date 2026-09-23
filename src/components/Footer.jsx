// /src/components/Footer.jsx
import SocialLinks from './SocialLinks';
import './Footer.css';

const ADDRESS = '137 Trent Road, Beeston Rylands, Nottingham, NG9 1LP';
const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col">
          <h4>Contact</h4>
          <p className="footer-pub-name">The Boat and Horses</p>
          <address>
            137 Trent Road
            <br />
            Beeston
            <br />
            Nottingham
            <br />
            NG9 1LP
          </address>
          <div className="footer-detail">
            <span className="footer-detail-label">Email</span>
            <a href="mailto:boatandhorses1868@gmail.com">
              boatandhorses1868@gmail.com
            </a>
          </div>
          <div className="footer-detail">
            <span className="footer-detail-label">Telephone</span>
            <a href="tel:01159677799">0115 967 7799</a>
          </div>
          <SocialLinks className="footer-social" size={26} />
        </div>

        <div className="footer-col">
          <h4>Opening Hours</h4>
          <p>Monday - Thursday: 12pm - 11pm</p>
          <p>Friday &amp; Saturday: 12pm - 12am</p>
          <p>Sunday: 12pm - 10pm</p>
        </div>

        <div className="footer-col footer-map-col">
          <h4>Find Us</h4>
          <div className="footer-map">
            <iframe
              title="The Boat and Horses location"
              src={MAP_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
