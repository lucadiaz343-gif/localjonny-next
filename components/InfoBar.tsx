'use client';
import { useEffect, useRef } from 'react';

export default function InfoBar() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cells = ref.current?.querySelectorAll<HTMLElement>('.reveal');
    if (!cells) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const siblings = [...(e.target.parentElement?.querySelectorAll<HTMLElement>('.reveal:not(.in)') ?? [])];
        const i = siblings.indexOf(e.target as HTMLElement);
        setTimeout(() => e.target.classList.add('in'), i * 90);
        io.unobserve(e.target);
      });
    }, { threshold: 0.1 });
    cells.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div id="infobar" ref={ref}>
      <div className="info-cell reveal">
        <p className="info-label">Hours</p>
        <p className="info-value">Mon–Sat 7am–5:30pm<br />Sunday 8am–4pm</p>
      </div>
      <div className="info-cell reveal">
        <p className="info-label">Location</p>
        <p className="info-value">5471 Belt Line Rd<br />Dallas, TX 75254</p>
      </div>
      <div className="info-cell reveal">
        <p className="info-label">Coffee by</p>
        <p className="info-value">Monomyth Coffee Roasters</p>
      </div>
    </div>
  );
}
