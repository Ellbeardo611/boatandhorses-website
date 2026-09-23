// /src/components/SocialLinks.jsx
import './SocialLinks.css';

const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=100090484647109';
const INSTAGRAM_URL = 'https://www.instagram.com/theboatandhorses';

const SocialLinks = ({ className = '', size = 18 }) => {
  return (
    <div className={`social-links ${className}`.trim()}>
      <a
        href={FACEBOOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="social-link"
      >
        <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
          <path
            fill="currentColor"
            d="M13.5 22v-8.5h2.85l.43-3.3h-3.28V8.05c0-.96.27-1.61 1.64-1.61h1.75V3.5c-.3-.04-1.34-.13-2.55-.13-2.52 0-4.24 1.54-4.24 4.36v2.43H9.1v3.3h1.95V22h2.45z"
          />
        </svg>
      </a>
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="social-link"
      >
        <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm0 6.15a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8zm4.85-6.3a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0zM21.94 7.6a5.9 5.9 0 0 0-1.5-2.09 5.9 5.9 0 0 0-2.1-1.5C17 3.6 15.7 3.5 12 3.5s-5 .1-6.34.51a5.9 5.9 0 0 0-2.1 1.5A5.9 5.9 0 0 0 2.06 7.6C1.6 8.94 1.5 10.24 1.5 12s.1 3.06.56 4.4a5.9 5.9 0 0 0 1.5 2.09 5.9 5.9 0 0 0 2.1 1.5c1.34.4 2.64.5 6.34.5s5-.1 6.34-.5a5.9 5.9 0 0 0 2.1-1.5 5.9 5.9 0 0 0 1.5-2.09c.45-1.34.55-2.64.55-4.4s-.1-3.06-.55-4.4zM12 19.5c-3.6 0-4.75-.1-5.86-.45a4.4 4.4 0 0 1-1.57-1.02 4.4 4.4 0 0 1-1.02-1.57C3.1 15.35 3 14.2 3 12s.1-3.35.55-4.46a4.4 4.4 0 0 1 1.02-1.57c.44-.44.98-.78 1.57-1.02C7.25 4.6 8.4 4.5 12 4.5s4.75.1 5.86.45c.59.24 1.13.58 1.57 1.02.44.44.78.97 1.02 1.57.45 1.11.55 2.26.55 4.46s-.1 3.35-.55 4.46a4.4 4.4 0 0 1-1.02 1.57c-.44.44-.98.78-1.57 1.02-1.11.35-2.26.45-5.86.45z"
          />
        </svg>
      </a>
    </div>
  );
};

export default SocialLinks;
