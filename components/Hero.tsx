'use client';
import { useEffect, useState } from 'react';

const words = ['Dallas.', 'Good coffee.', 'Real tacos.', 'Your local.'];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setExit(true);
      setTimeout(() => {
        setCurrent(c => (c + 1) % words.length);
        setExit(false);
      }, 400);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-black">
      <video
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ opacity: 0.45 }}
        preload="auto"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 flex flex-col items-center px-6 md:px-16 w-full max-w-6xl mx-auto">
        <p className="text-[0.65rem] font-semibold tracking-[0.28em] uppercase text-white/70 mb-8">
          Coffee Bar + General Store &nbsp;·&nbsp; North Dallas, TX
        </p>

        <h1
          className="font-black leading-[0.92] tracking-[-0.03em] text-white w-full text-center"
          style={{ fontSize: 'clamp(2.8rem, 9vw, 10rem)' }}
        >
          Howdy,
          <span
            className="italic text-[#FF1616] block transition-all duration-500"
            style={{
              opacity: exit ? 0 : 1,
              transform: exit ? 'translateY(-16px)' : 'translateY(0)',
            }}
          >
            {words[current]}
          </span>
        </h1>

        <p
          className="text-white/65 mt-8 max-w-[44ch] leading-relaxed text-center"
          style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.2rem)' }}
        >
          Specialty coffee. Breakfast tacos. Good things, Texas-made.
        </p>

        <div className="flex gap-5 mt-14 justify-center flex-wrap">
          <a href="#menu" className="text-[0.75rem] font-bold tracking-[0.12em] uppercase text-white bg-[#FF1616] px-10 py-4 rounded-full hover:bg-red-700 transition-all hover:-translate-y-1 shadow-xl">
            See the Menu →
          </a>
          <a href="#visit" className="text-[0.75rem] font-bold tracking-[0.12em] uppercase text-white border-2 border-white/50 px-10 py-4 rounded-full hover:border-white hover:bg-white/10 transition-all hover:-translate-y-1">
            Find Us
          </a>
        </div>
      </div>
    </section>
  );
}
