import { useEffect, useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const header = document.querySelector('header');
    const onScroll = () => {
      header.style.borderBottomColor = window.scrollY > 50
        ? 'rgba(62, 234, 10, 0.4)'
        : 'rgba(62, 234, 10, 0.2)';
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNav = (e, target) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header>
      <a href="#" className="logo">
        <img src="/sara-logo.svg" alt="Sara Wang" className="logo-img" />
      </a>

      <nav className="nav-center">
        <a href="#about"          onClick={e => handleNav(e, '#about')}>About</a>
        <a href="#projects-stack" onClick={e => handleNav(e, '#projects-stack')}>Projects</a>
        <a href="#skills"         onClick={e => handleNav(e, '#skills')}>Skills</a>
      </nav>

      <a href="#contact" className="nav-contact" onClick={e => handleNav(e, '#contact')}>Contact</a>

      <button className={`hamburger${menuOpen ? ' hidden' : ''}`} onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
        <span className="ham-line" />
        <span className="ham-line" />
        <span className="ham-line" />
      </button>

      {menuOpen && (
        <div className="mobile-menu">
          <button className="mobile-menu-close" onClick={() => setMenuOpen(false)}>
            close <span>✕</span>
          </button>
          <nav className="mobile-menu-nav">
            <a href="#" onClick={e => { e.preventDefault(); setMenuOpen(false); }} className="mobile-nav-item mobile-nav-item--dim">Home</a>
            <a href="#about"          onClick={e => handleNav(e, '#about')}          className="mobile-nav-item">About</a>
            <a href="#projects-stack" onClick={e => handleNav(e, '#projects-stack')} className="mobile-nav-item">Projects</a>
            <a href="#strengths"      onClick={e => handleNav(e, '#strengths')}      className="mobile-nav-item">Skills</a>
            <a href="#contact"        onClick={e => handleNav(e, '#contact')}        className="mobile-nav-item">Contact</a>
          </nav>
          <div className="mobile-menu-footer">
            <p className="mobile-menu-tagline">Design Lead & Product Designer<br />based in Sydney.</p>
          </div>
        </div>
      )}
    </header>
  );
}
