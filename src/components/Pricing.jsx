import React from 'react';

const tiers = [
  {
    name: 'Monthly',
    price: '₹999',
    period: 'per month',
    features: [
      'Early access to releases',
      'Access to private Discord',
      'Monthly coaching sessions',
      'Member-only events'
    ]
  },
  {
    name: 'Quarterly',
    price: '₹2,499',
    period: 'every 3 months',
    popular: true,
    features: [
      'Everything in Monthly',
      'Priority beta invites',
      'Exclusive merch drops',
      'VIP community badge'
    ]
  },
  {
    name: 'Yearly',
    price: '₹8,999',
    period: 'per year',
    features: [
      'Everything in Quarterly',
      '1:1 strategy session',
      'Tournament entries',
      'Premium support'
    ]
  }
];

const Pricing = () => {
  return (
    <section id="join" className="relative py-20 bg-black text-white">
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
        background: 'radial-gradient(700px 400px at 50% 0%, rgba(34,197,94,0.18), transparent)'
      }} />
      <div className="relative container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Choose Your Access</h2>
          <p className="mt-4 text-zinc-300">Flexible plans to match your grind. Upgrade or cancel anytime.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-2xl border p-6 bg-white/5 backdrop-blur ${t.popular ? 'border-emerald-400/50 shadow-[0_0_60px_-15px_rgba(16,185,129,0.5)]' : 'border-white/10'}`}>
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="text-xl font-semibold">{t.name}</h3>
                {t.popular && (
                  <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-200">Most Popular</span>
                )}
              </div>
              <div className="flex items-end gap-2">
                <span className="text-4xl font-extrabold">{t.price}</span>
                <span className="text-zinc-400">{t.period}</span>
              </div>
              <ul className="mt-6 space-y-2 text-zinc-300">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#join" className={`mt-8 inline-flex w-full items-center justify-center rounded-lg px-4 py-3 font-semibold transition ${t.popular ? 'bg-emerald-500 text-white hover:bg-emerald-400' : 'bg-white/10 hover:bg-white/20 text-white'}`}>
                Get Access
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
