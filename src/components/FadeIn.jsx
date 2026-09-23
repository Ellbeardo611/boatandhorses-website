// /src/components/FadeIn.jsx
import { useEffect, useRef, useState } from 'react';
import './FadeIn.css';

// Cheap, phone-friendly reveal: opacity/transform only (compositor-only, no
// layout cost), triggered once via IntersectionObserver instead of a scroll
// listener, and switched off entirely for prefers-reduced-motion.
const FadeIn = ({ children }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`fade-in${visible ? ' fade-in-visible' : ''}`}>
      {children}
    </div>
  );
};

export default FadeIn;
