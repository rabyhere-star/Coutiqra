
import React from 'react';

const DesignGuidelines: React.FC = () => {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-3xl font-serif font-bold mb-4">UI/UX Design Philosophy</h2>
        <p className="text-gray-600 leading-relaxed max-w-2xl">
          Luxury design is about the "unsaid." We utilize white space, elegant typography, and buttery-smooth transitions to create a frictionless journey.
        </p>
      </section>

      <div className="space-y-10">
        <section className="bg-gray-50 p-8 rounded-3xl">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6">Home Screen Architecture</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex gap-3">
                <span className="text-[#D4AF37] font-bold">01.</span>
                <p className="text-sm"><span className="font-bold">Editorial Hero:</span> Large-format, high-fashion photography featuring the current "Aura" collection.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#D4AF37] font-bold">02.</span>
                <p className="text-sm"><span className="font-bold">The Feed:</span> Infinite-scroll of curated items with horizontal "Story" bubbles for brand behind-the-scenes.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#D4AF37] font-bold">03.</span>
                <p className="text-sm"><span className="font-bold">Contextual Nav:</span> Bottom-bar that changes based on session intent (Browsing vs. Checkout).</p>
              </div>
            </div>
            <div className="aspect-[9/16] bg-white rounded-2xl shadow-xl border border-gray-100 flex items-center justify-center relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-full bg-cover opacity-10" style={{backgroundImage: 'url(https://picsum.photos/400/800)'}} />
               <div className="z-10 text-center p-6">
                 <div className="text-2xl font-serif mb-2">Summer 2024</div>
                 <div className="h-0.5 w-12 bg-[#D4AF37] mx-auto mb-4" />
                 <div className="text-[10px] tracking-widest uppercase opacity-60">The Aura Collection</div>
               </div>
               <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <div className="w-10 h-10 rounded-full bg-black/10 backdrop-blur-md" />
                  <div className="w-10 h-10 rounded-full bg-black/10 backdrop-blur-md" />
               </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Product Detail Page (PDP)</h3>
            <ul className="text-sm space-y-3 text-gray-600">
              <li>• <span className="font-bold text-black">High-Resolution Carousel:</span> 360° view and "In-Context" styling videos.</li>
              <li>• <span className="font-bold text-black">Micro-Interactions:</span> Haptic feedback on 'Add to Bag' for a physical sense of weight.</li>
              <li>• <span className="font-bold text-black">Sustainability Score:</span> Quick-glance icons for eco-credentials.</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Checkout UX</h3>
            <ul className="text-sm space-y-3 text-gray-600">
              <li>• <span className="font-bold text-black">Zero-Redirect:</span> Payments processed entirely in-app to maintain brand immersion.</li>
              <li>• <span className="font-bold text-black">Gift Logic:</span> Premium wrapping toggle with custom handwritten note input.</li>
              <li>• <span className="font-bold text-black">Predictive Sizing:</span> Size recommender based on past purchases and brand-specific fit data.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DesignGuidelines;
