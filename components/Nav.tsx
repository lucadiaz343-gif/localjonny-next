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

  const links = ['menu', 'about', 'gallery', 'gifts', 'visit'];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[200] flex justify-between items-center px-14 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md py-3' : 'py-6 bg-transparent'}`}>
        <a href="#">
          <Image
            src="/logo/logo.png"
            alt="Local Jonny's"
            width={120} height={40}
            className="h-10 w-auto"
            style={{ filter: scrolled ? 'none' : 'brightness(0) invert(1)' }}
          />
        </a>

        <ul className="hidden md:flex gap-10 list-none">
          {links.map(item => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={`text-[0.7rem] font-semibold tracking-[0.14em] uppercase relative transition-opacity hover:opacity-100 opacity-55
                  after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#FF1616] hover:after:w-full after:transition-all after:duration-300
                  ${scrolled ? 'text-[#111]' : 'text-white'}`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="https://order.toasttab.com"
            target="_blank"
            className="hidden md:block text-[0.68rem] font-bold tracking-[0.1em] uppercase text-white bg-[#FF1616] px-6 py-[0.65rem] rounded-full hover:bg-red-700 transition-all hover:-translate-y-0.5 hover:tracking-[0.14em]"
          >
            Order Online
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
            aria-label="Menu"
          >
            <span className={`block w-6 h-[2px] rounded transition-all duration-300 ${scrolled ? 'bg-[#111]' : 'bg-white'} ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`}/>
            <span className={`block w-6 h-[2px] rounded transition-all duration-300 ${scrolled ? 'bg-[#111]' : 'bg-white'} ${menuOpen ? 'opacity-0' : ''}`}/>
            <span className={`block w-6 h-[2px] rounded transition-all duration-300 ${scrolled ? 'bg-[#111]' : 'bg-white'} ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}/>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`fixed top-0 right-0 h-full w-[75vw] max-w-[300px] bg-[#111] z-[180] flex flex-col pt-20 px-8 transition-transform duration-350 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {links.map(item => (
          <a
            key={item}
            href={`#${item}`}
            onClick={() => setMenuOpen(false)}
            className="block py-4 text-[0.85rem] font-semibold uppercase tracking-[0.14em] text-white/80 border-b border-white/8 hover:text-white transition-colors"
          >
            {item}
          </a>
        ))}
        <a
          href="https://order.toasttab.com"
          target="_blank"
          className="mt-6 text-center text-[0.7rem] font-bold tracking-[0.1em] uppercase text-white bg-[#FF1616] px-6 py-3 rounded-full"
        >
          Order Online
        </a>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[150] backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
