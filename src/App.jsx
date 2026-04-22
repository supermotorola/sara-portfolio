import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ScrollStackProjects from './components/ScrollStackProjects';
import Strengths from './components/Strengths';
import Skills from './components/Skills';
import Marquee from './components/Marquee';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import './index.css';

export default function App() {
  useEffect(() => {
    let scrollY = 0;
    let targetScrollY = 0;

    const onScroll = () => { scrollY = window.scrollY; };
    window.addEventListener('scroll', onScroll);

    let rafId;
    const updateParallax = () => {
      targetScrollY += (scrollY - targetScrollY) * 0.1;
      document.querySelectorAll('.hero-title, .hero-description, .project-card, .skill-item').forEach(el => {
        el.style.transform = `translateY(${(targetScrollY - window.scrollY) * 0.05}px)`;
      });
      rafId = requestAnimationFrame(updateParallax);
    };
    rafId = requestAnimationFrame(updateParallax);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('observed')) {
          entry.target.classList.add('observed');
          entry.target.querySelectorAll('.section-title h2, .project-card, .cta-section h2, .cta-section .cta-text')
            .forEach((child, i) => {
              child.style.animation = `parallaxDown 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.1}s both`;
            });
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

    document.querySelectorAll('.projects, .skills, .cta-section').forEach(s => observer.observe(s));

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <ScrollStackProjects />
      <Strengths />
      <Skills />
      <Marquee />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}
