'use client';
import { useEffect, useRef } from 'react';

const categories = [
  {
    icon: <svg viewBox="0 0 24 24"><path d="M17 8h1a4 4 0 010 8h-1"/><path d="M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4V8z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></svg>,
    title: 'Coffee', sub: 'Monomyth Coffee Roasters',
    items: [
      { name: 'Espresso', desc: 'Double shot, bright + clean', price: '$3.50' },
      { name: 'Cortado', desc: 'Equal espresso + steamed milk', price: '$4.50' },
      { name: 'Latte', desc: '12oz · oat or whole milk', price: '$5.50' },
      { name: 'Cold Brew', desc: '12-hour steep, smooth finish', price: '$5.00' },
      { name: 'Seasonal Special', desc: 'Ask your barista', price: 'mkt' },
    ],
  },
  {
    icon: <svg viewBox="0 0 24 24"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/></svg>,
    title: 'Breakfast Tacos', sub: 'Deep Cuts Butcher Shop',
    items: [
      { name: 'Egg + Cheese', desc: 'Scrambled, flour tortilla', price: '$4.00' },
      { name: 'Bacon + Egg', desc: 'House-cured bacon', price: '$5.00' },
      { name: 'Chorizo + Potato', desc: 'Spicy, always popular', price: '$5.00' },
      { name: 'Veggie', desc: 'Black bean, peppers, egg', price: '$4.50' },
      { name: 'Taco of the Day', desc: 'Board changes daily', price: 'mkt' },
    ],
  },
  {
    icon: <svg viewBox="0 0 24 24"><path d="M11 20A7 7 0 0118 13V7a7 7 0 00-7 7"/><path d="M11 20H5a7 7 0 017-7"/></svg>,
    title: 'Matcha & Tea', sub: 'Ceremonial Grade',
    items: [
      { name: 'Matcha Latte', desc: 'Ceremonial, oat or whole', price: '$6.00' },
      { name: 'Iced Matcha', desc: 'Shaken, no sweetener', price: '$6.00' },
      { name: 'Seasonal Matcha', desc: 'Banana, berry, pistachio…', price: '$6.50' },
      { name: 'Chai Latte', desc: 'House spiced, not too sweet', price: '$5.50' },
      { name: 'Orange Espresso Tonic', desc: 'Sparkling + espresso', price: '$5.00' },
    ],
  },
  {
    icon: <svg viewBox="0 0 24 24"><path d="M8 22h8"/><path d="M12 11v11"/><path d="M7 3H5l3 9a4 4 0 008 0l3-9h-2"/></svg>,
    title: 'Beer + Wine', sub: 'Texas Craft Selection',
    items: [
      { name: 'Draft Beer', desc: 'Rotating Texas taps', price: '$7' },
      { name: 'Canned Beer', desc: 'Curated local selection', price: '$5–7' },
      { name: 'Red Wine', desc: 'Glass or bottle', price: '$9' },
      { name: 'White Wine', desc: 'Light and dry', price: '$9' },
      { name: 'Cider', desc: 'Seasonal', price: '$6' },
    ],
  },
];

export default function MenuSection() {
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
    <section id="menu" ref={ref}>
      <div className="menu-header">
        <div>
          <span className="s-tag reveal">What We Serve</span>
          <h2 className="s-title reveal">The good<br /><em>stuff.</em></h2>
        </div>
        <p className="reveal">Seasonal specials on the board daily. Gluten-free and dairy-free options — just ask your barista.</p>
      </div>
      <div className="menu-grid">
        {categories.map(cat => (
          <div className="menu-cat reveal" key={cat.title}>
            <div className="cat-head">
              <div className="cat-icon">{cat.icon}</div>
              <div>
                <div className="cat-title">{cat.title}</div>
                <div className="cat-sub">{cat.sub}</div>
              </div>
            </div>
            <ul className="menu-items">
              {cat.items.map(item => (
                <li className="menu-row" key={item.name}>
                  <div>
                    <span className="item-name">{item.name}</span>
                    <span className="item-desc">{item.desc}</span>
                  </div>
                  <span className="item-price">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
