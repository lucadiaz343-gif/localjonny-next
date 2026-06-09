'use client';
import { useEffect, useRef } from 'react';

export default function About() {
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
    <section id="about" ref={ref}>
      <div className="about-photo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/fotos/DSC06369.webp" alt="Local Jonny's exterior" />
      </div>
      <div className="about-copy">
        <span className="s-tag reveal">The Story</span>
        <h2 className="s-title reveal">Not a chain.<br /><em>Never will be.</em></h2>
        <p className="reveal">Local Jonny&apos;s is a <strong>coffee bar and general store</strong> in North Dallas that actually gives a damn. Every cup starts with beans from Monomyth, roasted in Texas. Every taco comes from our partnership with Deep Cuts Butcher Shop.</p>
        <p className="reveal">We carry gifts that are genuinely Texas-made. Come in, stay a while, grab a beer after 11. <strong>This is your local.</strong></p>
        <div className="partners reveal">
          <p className="partner">Coffee by Monomyth Coffee Roasters</p>
          <p className="partner">Meat by Deep Cuts Butcher Shop</p>
          <p className="partner">Gifts: Texas-made, always</p>
        </div>
      </div>
    </section>
  );
}
