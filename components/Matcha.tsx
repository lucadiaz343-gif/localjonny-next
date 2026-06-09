'use client';
import { useEffect, useRef } from 'react';

export default function Matcha() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll<HTMLElement>('.reveal');
    if (!els) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const siblings = [...(e.target.parentElement?.querySelectorAll<HTMLElement>('.reveal:not(.in)') ?? [])];
        const i = siblings.indexOf(e.target as HTMLElement);
        setTimeout(() => e.target.classList.add('in'), i * 90);
        io.unobserve(e.target);
      });
    }, { threshold: 0.1 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="matcha" ref={ref}>
      <div className="matcha-photo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/fotos/DSC06494.webp" alt="Matcha" style={{ objectPosition: 'center center' }} />
      </div>
      <div className="matcha-copy">
        <span className="s-tag reveal">The Ritual</span>
        <h2 className="s-title reveal">Matcha<br />done <em>right.</em></h2>
        <p className="reveal">Ceremonial grade, prepared properly. Oat milk or whole — smooth, grassy, no bitterness. The real stuff, not a powder mix. Seasonal flavors on the board every week.</p>
        <a className="btn-white reveal" href="#menu">Order Matcha →</a>
      </div>
    </section>
  );
}
