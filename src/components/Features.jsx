import React from 'react';
import { Shield, Crown, Users, Trophy } from 'lucide-react';

const features = [
  {
    icon: Crown,
    title: 'Early Access Drops',
    desc: 'Be first to play new experiences, DLCs, and beta builds before the public.'
  },
  {
    icon: Shield,
    title: 'Pro Coaching',
    desc: 'Level up with expert-led workshops, VOD reviews, and tailored practice plans.'
  },
  {
    icon: Users,
    title: 'Private Community',
    desc: 'Network with passionate gamers, form squads, and join members-only events.'
  },
  {
    icon: Trophy,
    title: 'Member Rewards',
    desc: 'Unlock merch, tournament tickets, partner discounts, and seasonal perks.'
  }
];

const Features = () => {
  return (
    <section className="relative py-20 bg-black text-white" id="features">
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
        background: 'radial-gradient(600px 300px at 20% 30%, rgba(16,185,129,0.2), transparent), radial-gradient(600px 300px at 80% 70%, rgba(99,102,241,0.2), transparent)'
      }} />

      <div className="relative container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center tracking-tight mb-12">
          Everything You Need To Go Pro
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <div key={idx} className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur hover:bg-white/10 transition">
              <div className="h-12 w-12 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center mb-4">
                <f.icon className="text-emerald-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-zinc-300 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
