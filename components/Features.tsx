
import React from 'react';

const Features: React.FC = () => {
  const essentials = [
    { title: 'Intelligent Discovery', desc: 'Predictive search & contextual filters based on user taste.' },
    { title: 'The Vault (Wishlist)', desc: 'A curated gallery for items waiting for the perfect occasion.' },
    { title: 'Seamless Transaction', desc: 'Single-tap Apple/Google Pay with bespoke packaging options.' },
    { title: 'Concierge Support', desc: 'Real-time stylist chat for fit and styling advice.' }
  ];

  const usps = [
    { 
      title: 'AI Style Alchemist', 
      icon: '✨', 
      desc: 'A Gemini-powered stylist that generates daily outfit lookbooks based on the user\'s existing Coutiqra collection and local weather.' 
    },
    { 
      title: 'AR Atelier (Virtual Try-On)', 
      icon: '🕶️', 
      desc: 'Industry-leading augmented reality that allows users to see fabric drape and fit on their own body silhouette with 98% accuracy.' 
    },
    { 
      title: 'The Provenance Ledger', 
      icon: '🌿', 
      desc: 'Blockchain-backed transparency tags showing the ethical journey of every garment, from raw material to doorstep.' 
    }
  ];

  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-3xl font-serif font-bold mb-4">Core & Unique Features</h2>
        <p className="text-gray-600 leading-relaxed max-w-2xl">
          We distinguish Coutiqra by moving beyond simple commerce into personalized digital luxury experiences.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-10">
        <section className="space-y-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">User App Essentials</h3>
          <div className="space-y-4">
            {essentials.map((e, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{e.title}</h4>
                  <p className="text-xs text-gray-500">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">The "Coutiqra Edge" (USPs)</h3>
          <div className="space-y-4">
            {usps.map((u, i) => (
              <div key={i} className="p-4 bg-gradient-to-r from-gray-50 to-white border border-gray-100 rounded-2xl hover:shadow-md transition-shadow">
                <div className="text-2xl mb-2">{u.icon}</div>
                <h4 className="font-bold text-sm mb-1">{u.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="p-6 bg-[#1A1A1A] rounded-3xl text-white">
        <h3 className="text-sm font-semibold uppercase tracking-wider opacity-60 mb-6">Admin Architecture</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="space-y-2">
            <h5 className="text-gold-400 font-medium">Inventory Matrix</h5>
            <p className="text-xs opacity-70">Automated stock alerts and predictive restocking using historical sales data.</p>
          </div>
          <div className="space-y-2">
            <h5 className="text-gold-400 font-medium">Dynamic Logistics</h5>
            <p className="text-xs opacity-70">Real-time carrier tracking and automated return processing workflows.</p>
          </div>
          <div className="space-y-2">
            <h5 className="text-gold-400 font-medium">Client Insights</h5>
            <p className="text-xs opacity-70">Advanced segmentation for VIP tiers and personalized CRM outreach.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
