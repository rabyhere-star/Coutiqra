
import React from 'react';

const GTMStrategy: React.FC = () => {
  const phases = [
    {
      title: 'The "Invisible" Launch',
      duration: 'Month 1-2',
      focus: 'Invite-only beta for 100 fashion influencers and high-net-worth individuals to create scarcity and refine the UX.'
    },
    {
      title: 'Aura Collaborations',
      duration: 'Month 3-4',
      focus: 'Drop exclusive capsule collections with 3 mid-tier "Quiet Luxury" designers. 40% of first-time users come from designer audiences.'
    },
    {
      title: 'Growth Flywheel',
      duration: 'Month 5+',
      focus: 'Launch the "Stylist Ambassador" program—rewarding users who curate public lookbooks that lead to sales.'
    }
  ];

  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-3xl font-serif font-bold mb-4">Go-to-Market Strategy</h2>
        <p className="text-gray-600 leading-relaxed max-w-2xl">
          Attracting the first 1,000 high-value users requires a mix of exclusivity and extreme utility.
        </p>
      </section>

      <div className="space-y-6">
        {phases.map((p, i) => (
          <div key={i} className="flex flex-col md:flex-row gap-6 p-6 border border-gray-100 rounded-3xl hover:bg-gray-50 transition-colors">
            <div className="md:w-48 flex-shrink-0">
              <span className="text-xs font-bold text-[#D4AF37] tracking-widest uppercase">{p.duration}</span>
              <h3 className="text-lg font-serif font-bold mt-1">{p.title}</h3>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500 leading-relaxed">{p.focus}</p>
            </div>
          </div>
        ))}
      </div>

      <section className="p-8 bg-gradient-to-br from-gray-900 to-black rounded-3xl text-white">
        <h3 className="text-lg font-serif mb-4">Key Acquisition Channels</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-2">
            <div className="text-xs opacity-50 font-bold uppercase">Organic</div>
            <div className="text-sm">Pinterest & Instagram "Moodboard" SEO targeting luxury aesthetics.</div>
          </div>
          <div className="space-y-2">
            <div className="text-xs opacity-50 font-bold uppercase">Referral</div>
            <div className="text-sm">"The Inner Circle": Existing users get early access to drops for every successful referral.</div>
          </div>
          <div className="space-y-2">
            <div className="text-xs opacity-50 font-bold uppercase">PR</div>
            <div className="text-sm">Press features in Vogue Business and Hypebeast focusing on the "AR Atelier" tech.</div>
          </div>
          <div className="space-y-2">
            <div className="text-xs opacity-50 font-bold uppercase">Direct</div>
            <div className="text-sm">Personalized email invitations sent to curated lists of high-fashion shoppers.</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GTMStrategy;
