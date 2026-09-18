// /src/components/Footer.jsx
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-copyright">
        © {new Date().getFullYear()} The Boat and Horses. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
