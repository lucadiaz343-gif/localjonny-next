'use client';
import { useEffect, useRef } from 'react';

const cells = [
  { src: '/fotos/DSC06478.webp', alt: 'Coffee', label: 'Monomyth Coffee' },
  { src: '/fotos/DSC06365.webp', alt: "Local Jonny's", label: "Local Jonny's" },
  { src: '/fotos/DSC06773.webp', alt: 'Tacos', label: 'Breakfast Tacos' },
  { src: '/fotos/DSC06494.webp', alt: 'Matcha', label: 'Matcha Bar' },
  { src: '/fotos/DSC06341.webp', alt: 'Interior', label: 'The Space' },
  { src: '/fotos/DSC06647.webp', alt: 'Drinks', label: 'Good Coffee' },
  { src: '/fotos/DSC06526.webp', alt: 'Matcha 2', label: 'Ceremonial Matcha' },
  { src: '/fotos/DSC06374.webp', alt: 'Exterior', label: 'North Dallas' },
];

export default function PhotoStrip() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const original = track.innerHTML;
    track.innerHTML = original + original + original;
    track.style.willChange = 'transform';
    track.style.backfaceVisibility = 'hidden';

    let pos = 0;
    let dragging = false;
    let startX = 0;
    let startPos = 0;
    let paused = false;
    let momentum = 0;
    let lastX = 0;
    let lastTime = 0;
    const AUTO_SPEED = 1.8;
    const getLimit = () => track.scrollWidth / 3;

    let raf: number;
    function loop() {
      if (!dragging) {
        if (!paused) pos += AUTO_SPEED;
        if (Math.abs(momentum) > 0.5) { pos += momentum; momentum *= 0.95; } else { momentum = 0; }
      }
      if (pos >= getLimit()) pos -= getLimit();
      if (pos < 0) pos += getLimit();
      track.style.transform = `translate3d(-${pos}px, 0, 0)`;
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);

    const onMouseDown = (e: MouseEvent) => {
      dragging = true; paused = true; startX = e.clientX; startPos = pos;
      lastX = e.clientX; lastTime = Date.now(); momentum = 0;
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!dragging) return;
      const now = Date.now(); const dt = now - lastTime || 1;
      momentum = (lastX - e.clientX) / dt * 16; lastX = e.clientX; lastTime = now;
      pos = startPos + (startX - e.clientX);
      if (pos >= getLimit()) pos -= getLimit(); if (pos < 0) pos += getLimit();
    };
    const onMouseUp = () => { if (!dragging) return; dragging = false; setTimeout(() => { paused = false; momentum = 0; }, 2000); };

    const onTouchStart = (e: TouchEvent) => {
      paused = true; startX = e.touches[0].clientX; startPos = pos;
      lastX = e.touches[0].clientX; lastTime = Date.now(); momentum = 0;
    };
    const onTouchMove = (e: TouchEvent) => {
      const now = Date.now(); const dt = now - lastTime || 1;
      momentum = (lastX - e.touches[0].clientX) / dt * 14; lastX = e.touches[0].clientX; lastTime = now;
      pos = startPos + (startX - e.touches[0].clientX);
      if (pos >= getLimit()) pos -= getLimit(); if (pos < 0) pos += getLimit();
    };
    const onTouchEnd = () => { setTimeout(() => { paused = false; momentum = 0; }, 2000); };

    track.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    track.addEventListener('touchstart', onTouchStart, { passive: true });
    track.addEventListener('touchmove', onTouchMove, { passive: true });
    track.addEventListener('touchend', onTouchEnd);

    return () => {
      cancelAnimationFrame(raf);
      track.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      track.removeEventListener('touchstart', onTouchStart);
      track.removeEventListener('touchmove', onTouchMove);
      track.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  return (
    <div id="photo-strip">
      <div className="strip-track" id="strip-track" ref={trackRef}>
        {cells.map((cell, i) => (
          <div className="strip-cell" key={i}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={cell.src} alt={cell.alt} loading="lazy" />
            <span className="strip-label">{cell.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
