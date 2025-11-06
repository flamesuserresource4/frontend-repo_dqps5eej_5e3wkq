import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

const Hero = () => {
  const handleImgError = (e) => {
    if (e?.target) e.target.style.display = 'none';
  };

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      <div className="absolute inset-0 opacity-40 pointer-events-none" style={{
        background: 'radial-gradient(800px 500px at 10% 10%, rgba(99,102,241,0.25), transparent), radial-gradient(700px 400px at 90% 20%, rgba(34,197,94,0.25), transparent), radial-gradient(1000px 600px at 50% 90%, rgba(59,130,246,0.2), transparent)'
      }} />

      <div className="relative z-10 container mx-auto px-6 pt-10 md:pt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="max-w-xl">
          <div className="flex items-center gap-3 mb-6">
            <img
              src="/exr-logo.png"
              alt="EXR Games"
              className="h-10 w-auto"
              onError={handleImgError}
            />
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
              <Rocket size={14} className="text-emerald-300" />
              Exclusive Membership
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Unlock Elite Access to the World of Gaming
          </h1>
          <p className="mt-5 text-zinc-300 text-lg md:text-xl leading-relaxed">
            Join EXR Games Exclusive Program for early releases, pro coaching, private community events, and member-only perks designed to level up your journey.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#join"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition"
            >
              Join the Program
            </a>
            <a
              href="#video"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition"
            >
              Watch Overview
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-zinc-400">
            <div>
              • Early Access Launches
            </div>
            <div>
              • Expert-Led Workshops
            </div>
            <div>
              • Members-Only Rewards
            </div>
          </div>
        </div>

        <div className="relative h-[420px] md:h-[520px] lg:h-[640px] w-full">
          <div className="absolute inset-0 rounded-2xl overflow-hidden ring-1 ring-white/10 bg-black/20">
            <Spline scene="https://prod.spline.design/NkcnsJpx2b5y-eA7/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
