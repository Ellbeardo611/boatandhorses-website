import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EventsSection from './components/EventsSection';
import ContactSection from './components/ContactSection';
import FadeIn from './components/FadeIn';
import Footer from './components/Footer';
import ScrollToTop from './ScrollToTop';

import Gallery from './pages/Gallery';
import AboutUs from './pages/AboutUs';
import Events from './pages/Events';
import Stables from './pages/Stables';
import Forces from './pages/Forces';
import ContactUs from './pages/ContactUs';

function Home() {
  return (
    <>
      <HeroSection />
      <FadeIn>
        <AboutSection />
      </FadeIn>
      <FadeIn>
        <EventsSection />
      </FadeIn>
      <FadeIn>
        <ContactSection />
      </FadeIn>
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/stables-function-room" element={<Stables />} />
        <Route path="/forces" element={<Forces />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
