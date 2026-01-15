
import React from 'react';

const TechStack: React.FC = () => {
  const layers = [
    {
      title: 'Frontend Ecosystem',
      tech: 'React Native + Expo',
      reason: 'Delivers native-level smoothness with cross-platform efficiency. Expo allows for rapid iteration and OTA (Over-The-Air) updates for minor style tweaks.'
    },
    {
      title: 'Computational Core',
      tech: 'Node.js (TypeScript) + NestJS',
      reason: 'Highly scalable, event-driven architecture suitable for the real-time nature of flash sales and personalized styling feeds.'
    },
    {
      title: 'Data Persistence',
      tech: 'PostgreSQL + Prisma',
      reason: 'Relational data for product catalogs and inventory integrity. Prisma ORM ensures type-safety from DB to Frontend.'
    },
    {
      title: 'AI Engine',
      tech: 'Gemini 3 Pro + TensorFlow.js',
      reason: 'Gemini handles the high-level reasoning for the Alchemist Stylist, while TensorFlow runs lighter AR fitting logic on the client device.'
    }
  ];

  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-3xl font-serif font-bold mb-4">Technical Architecture</h2>
        <p className="text-gray-600 leading-relaxed max-w-2xl">
          A premium experience requires low latency, 99.9% uptime, and a robust security layer to protect high-value customer data.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-6">
        {layers.map((l, i) => (
          <div key={i} className="p-6 border border-gray-100 rounded-3xl hover:border-[#D4AF37] transition-colors group">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 group-hover:text-[#D4AF37] mb-4">{l.title}</h3>
            <h4 className="text-xl font-bold mb-3">{l.tech}</h4>
            <p className="text-sm text-gray-500 leading-relaxed">{l.reason}</p>
          </div>
        ))}
      </div>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-gray-100">
        <div className="space-y-3">
          <h4 className="text-sm font-bold">Secure Transactions</h4>
          <p className="text-xs text-gray-500">Stripe for global payments, supporting Apple Pay, Google Pay, and Crypto for high-ticket items.</p>
        </div>
        <div className="space-y-3">
          <h4 className="text-sm font-bold">Cloud Infrastructure</h4>
          <p className="text-xs text-gray-500">AWS (Lambda, S3, RDS) or Vercel for the API layer to ensure auto-scaling during seasonal peaks.</p>
        </div>
        <div className="space-y-3">
          <h4 className="text-sm font-bold">Cdn & Assets</h4>
          <p className="text-xs text-gray-500">Cloudinary for high-resolution image optimization and real-time AR asset delivery.</p>
        </div>
      </section>
    </div>
  );
};

export default TechStack;
