'use client';
import { useEffect, useRef } from 'react';

const gifts = [
  { num: '01', name: 'Coffee Bags', desc: 'Monomyth whole bean. Single origin and blends. For the home brewer who won\'t settle.' },
  { num: '02', name: 'Matcha Tins', desc: 'Ceremonial grade. Bright, smooth, nothing added. The exact same thing we use daily.' },
  { num: '03', name: 'Local Candles', desc: 'Small-batch, hand-poured in Texas. Scents that actually smell like something.' },
  { num: '04', name: 'Branded Mugs', desc: 'Drink well every morning. The cup matters more than people think.' },
  { num: '05', name: 'Totes + Hats', desc: 'Wear your local. Clean, minimal, not obnoxious about it.' },
  { num: '06', name: 'Seasonal Items', desc: 'Always something rotating. Ask in-store what just came in.' },
];

export default function Gifts() {
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
    <section id="gifts" ref={ref}>
      <div className="gifts-header">
        <div>
          <span className="s-tag reveal">Take Texas Home</span>
          <h2 className="s-title reveal">Gifts that<br /><em>mean something.</em></h2>
        </div>
        <p className="reveal">Every item we carry is made in Texas by people we trust. Coffee, candles, ceramics, apparel. No fluff, nothing generic.</p>
      </div>
      <div className="gifts-grid">
        {gifts.map(g => (
          <div className="gift-card reveal" key={g.num}>
            <p className="gift-num">{g.num}</p>
            <h3 className="gift-name">{g.name}</h3>
            <p className="gift-desc">{g.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
