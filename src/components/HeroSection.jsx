// /src/components/HeroSection.jsx
import { useEffect, useRef, useState } from 'react';
import SocialLinks from './SocialLinks';
import './HeroSection.css';

// Which part of hero-pic.png to keep in frame when it gets cropped to fill
// the screen. Nudge the vertical (second) value: lower % shows more roof,
// higher % shows more of the ground floor/sign. MOBILE_IMAGE_FOCUS is used
// instead on narrow screens (see .hero-image media query in HeroSection.css),
// since phones crop the image much tighter than desktop.
const IMAGE_FOCUS = 'center 80%';
const MOBILE_IMAGE_FOCUS = 'center 50%';

const HeroSection = () => {
  const [opacity, setOpacity] = useState(1);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const height = heroRef.current?.offsetHeight || 1;
      const next = Math.max(0, 1 - window.scrollY / (height * 0.5));
      setOpacity(next);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div
        className="hero-image"
        style={{
          backgroundImage: "url('/assets/hero-pic.png')",
          backgroundPosition: IMAGE_FOCUS,
          '--hero-mobile-focus': MOBILE_IMAGE_FOCUS,
          opacity,
        }}
      />
      <div className="hero-overlay" style={{ opacity: 1 - opacity * 0.4 }} />
      <div className="hero-content">
        <img
          src="/assets/sports.png"
          alt="Sky Sports and TNT Sports shown here"
          className="hero-sports-badge"
        />
        <p className="hero-eyebrow">Beeston, Nottingham</p>
        <h1 className="hero-title">
          The Boat <span className="hero-accent">&amp;</span> Horses
        </h1>
        <p className="hero-subtitle">
          The <span className="hero-heart">heart</span> of The Rylands.
        </p>
        <SocialLinks className="hero-social" size={28} />
      </div>
    </section>
  );
};

export default HeroSection;
