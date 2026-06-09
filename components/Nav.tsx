'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  };

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? 'hidden' : '';
  };

  const links = ['menu', 'about', 'gallery', 'gifts', 'visit'];

  return (
    <>
      <nav className={`lj-nav${scrolled ? ' solid' : ''}`}>
        <a className="nav-logo" href="#">
          <Image src="/logo/logo.png" alt="Local Jonny's" width={120} height={40} className="nav-logo-img" style={{ filter: 'brightness(0) invert(1)' }} />
        </a>
        <ul className="nav-links" id="nav-links" style={{ display: menuOpen ? undefined : undefined }}>
          {links.map(item => (
            <li key={item}>
              <a href={`#${item}`} onClick={closeMenu}>{item}</a>
            </li>
          ))}
        </ul>
        <div className="nav-right">
          <a className="nav-order" href="https://order.toasttab.com" target="_blank" rel="noopener noreferrer">Order Online</a>
          <button
            className={`nav-burger${menuOpen ? ' open' : ''}`}
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>
      <div className={`nav-overlay${menuOpen ? ' open' : ''}`} onClick={closeMenu} />
    </>
  );
}
