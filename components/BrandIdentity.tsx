
import React from 'react';

const BrandIdentity: React.FC = () => {
  const taglines = [
    "Your Style, Curated.",
    "The Aura of Couture.",
    "Define Your Elegance.",
    "Coutiqra: Where Unique Meets Elite.",
    "Timeless Fashion, Tailored for You."
  ];

  const colors = [
    { name: 'Midnight Charcoal', hex: '#1A1A1A', role: 'Primary / Grounding' },
    { name: 'Champagne Gold', hex: '#D4AF37', role: 'Secondary / Accent' },
    { name: 'Silk Cream', hex: '#FDFCF8', role: 'Surface / Background' },
    { name: 'Dusty Rose', hex: '#A68481', role: 'Call to Action / Detail' }
  ];

  return (
    <div className="space-y-10">
      <section>
        <h2 className="text-3xl font-serif font-bold mb-4">Brand Identity & Vibe</h2>
        <p className="text-gray-600 leading-relaxed max-w-2xl">
          The name <span className="font-semibold text-black italic">Coutiqra</span> evokes a synthesis of 
          <span className="text-black"> Couture</span> (tailored, high-end), 
          <span className="text-black"> Unique</span> (exclusive, one-of-a-kind), and 
          <span className="text-black"> Aura</span> (the distinct atmosphere surrounding a person).
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Brand Personality</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
              <span className="font-medium">Boutique & Intimate</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
              <span className="font-medium">Premium & Uncompromising</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
              <span className="font-medium">Minimalist Modernity</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Logo Concept</h3>
          <div className="p-4 border border-dashed border-gray-200 rounded-xl bg-gray-50 flex flex-col items-center justify-center h-full">
            <div className="text-4xl font-serif mb-2">𝓒𝓸𝓾𝓽𝓲𝓺𝓻𝓪</div>
            <p className="text-xs text-center text-gray-500">
              Custom-ligature serif typography with a stylized 'Q' that integrates a needle-eye silhouette, symbolizing precision and curation.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Color Palette</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {colors.map((c) => (
            <div key={c.hex} className="group">
              <div 
                className="h-24 rounded-2xl shadow-sm border border-gray-100 mb-2 transition-transform group-hover:scale-105" 
                style={{ backgroundColor: c.hex }}
              />
              <p className="text-sm font-medium">{c.name}</p>
              <p className="text-xs text-gray-400">{c.hex} • {c.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Core Taglines</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {taglines.map((t, i) => (
            <div key={i} className="p-3 bg-gray-50 rounded-lg text-sm italic font-serif text-gray-700">
              "{t}"
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BrandIdentity;
