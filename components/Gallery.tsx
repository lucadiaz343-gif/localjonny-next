'use client';
import { useState, useEffect } from 'react';

const photos = [
  { src: '/fotos/DSC06341.webp', label: 'Inside the Store', span: true },
  { src: '/fotos/DSC06345.webp', label: 'Local Vibes', span: false },
  { src: '/fotos/DSC06350.webp', label: 'The Space', span: false },
  { src: '/fotos/DSC06374.webp', label: "Local Jonny's", span: false },
  { src: '/fotos/DSC06478.webp', label: 'Monomyth Coffee', span: true },
  { src: '/fotos/DSC06487.webp', label: 'Fresh Daily', span: false },
  { src: '/fotos/DSC06494.webp', label: 'Matcha Bar', span: false },
  { src: '/fotos/DSC06526.webp', label: 'Ceremonial Matcha', span: true },
  { src: '/fotos/DSC06647.webp', label: 'Cold Brew', span: false },
  { src: '/fotos/DSC06656.webp', label: 'Morning Ritual', span: false },
  { src: '/fotos/DSC06773.webp', label: 'Breakfast Tacos', span: true },
  { src: '/fotos/DSC06785.webp', label: 'Taco of the Day', span: false },
  { src: '/fotos/DSC06865.webp', label: 'Good Things', span: false },
];

export default function Gallery() {
  const [modal, setModal] = useState<string | null>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setModal(null); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = modal ? 'hidden' : '';
  }, [modal]);

  return (
    <section id="gallery">
      <div className="gallery-header">
        <span className="s-tag">The Space</span>
        <h2 className="s-title">A look<br /><em>inside.</em></h2>
      </div>
      <div className="bento-grid">
        {photos.map(p => (
          <div
            key={p.src}
            className={`bento-cell${p.span ? ' span-2' : ''}`}
            onClick={() => setModal(p.src)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.src} alt={p.label} loading="lazy" />
            <span className="bento-label">{p.label}</span>
          </div>
        ))}
      </div>

      {modal && (
        <div className="gallery-modal open" onClick={() => setModal(null)}>
          <div className="modal-inner" onClick={e => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="modal-img" src={modal} alt="" />
            <button className="modal-close" onClick={() => setModal(null)}>✕</button>
          </div>
        </div>
      )}
    </section>
  );
}
