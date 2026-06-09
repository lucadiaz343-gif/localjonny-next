'use client';
import { useEffect, useRef } from 'react';

const words = ['Dallas.', 'Good coffee.', 'Real tacos.', 'Your local.'];

export default function Hero() {
  const wordsRef = useRef<HTMLSpanElement[]>([]);
  const currentRef = useRef(0);

  useEffect(() => {
    const els = wordsRef.current;
    if (!els.length) return;
    els[0].classList.add('active');

    const interval = setInterval(() => {
      const cur = currentRef.current;
      els[cur].classList.remove('active');
      els[cur].classList.add('exit');
      setTimeout(() => {
        const prev = cur === 0 ? els.length - 1 : cur - 1;
        els[prev].classList.remove('exit');
      }, 500);
      const next = (cur + 1) % els.length;
      currentRef.current = next;
      els[next].classList.add('active');
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero">
      <video autoPlay muted loop playsInline id="hero-video" preload="auto">
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <div className="hero-content">
        <p className="hero-eyebrow">Coffee Bar + General Store &nbsp;·&nbsp; North Dallas, TX</p>
        <h1 className="hero-headline">
          Howdy,<br />
          <span className="hero-rotating-wrap">
            {words.map((word, i) => (
              <span
                key={word}
                className="hero-rotating-word"
                ref={el => { if (el) wordsRef.current[i] = el; }}
              >
                {word}
              </span>
            ))}
          </span>
        </h1>
        <p className="hero-sub">Specialty coffee. Breakfast tacos. Good things, Texas-made.</p>
        <div className="hero-ctas">
          <a className="btn-red" href="#menu">See the Menu →</a>
          <a className="btn-outline" href="#visit">Find Us</a>
        </div>
      </div>
    </section>
  );
}
