
import React, { useState } from 'react';
import { RoadmapSection } from './types';
import BrandIdentity from './components/BrandIdentity';
import Features from './components/Features';
import TechStack from './components/TechStack';
import DesignGuidelines from './components/DesignGuidelines';
import GTMStrategy from './components/GTMStrategy';
import CPOChat from './components/CPOChat';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<RoadmapSection>(RoadmapSection.BRAND);

  const navigation = [
    { id: RoadmapSection.BRAND, label: 'Brand Identity', icon: '✨' },
    { id: RoadmapSection.FEATURES, label: 'Core Features', icon: '🚀' },
    { id: RoadmapSection.TECH, label: 'Tech Stack', icon: '💻' },
    { id: RoadmapSection.DESIGN, label: 'UI/UX Design', icon: '🎨' },
    { id: RoadmapSection.GTM, label: 'GTM Strategy', icon: '📈' },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case RoadmapSection.BRAND: return <BrandIdentity />;
      case RoadmapSection.FEATURES: return <Features />;
      case RoadmapSection.TECH: return <TechStack />;
      case RoadmapSection.DESIGN: return <DesignGuidelines />;
      case RoadmapSection.GTM: return <GTMStrategy />;
      default: return <BrandIdentity />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-[#1A1A1A]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100 px-6 py-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#1A1A1A] rounded-xl flex items-center justify-center text-white text-xl font-serif shadow-lg">
            C
          </div>
          <div>
            <h1 className="text-2xl font-serif font-bold tracking-tight">Coutiqra</h1>
            <div className="flex items-center gap-1.5 mt-[-2px]">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Deployed & Live</span>
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Strategy Version</span>
            <span className="text-xs font-medium text-black">1.0.4-stable</span>
          </div>
          <button className="bg-[#1A1A1A] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-md">
            Export PDF
          </button>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-8 flex flex-col lg:flex-row gap-8">
        {/* Sidebar Nav */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-6">
            <nav className="space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-white shadow-md border border-gray-100 text-[#1A1A1A] scale-105'
                      : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="p-6 bg-gradient-to-br from-[#1A1A1A] to-[#333] rounded-3xl text-white shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37] opacity-10 rounded-full blur-2xl -mr-12 -mt-12 group-hover:opacity-20 transition-opacity"></div>
              <h3 className="font-serif font-bold text-lg mb-2 relative z-10">Coutiqra Elite</h3>
              <p className="text-[10px] opacity-70 leading-relaxed relative z-10 uppercase tracking-wider font-semibold">
                Built for the discerning digital consumer.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                 <span className="text-[9px] font-bold text-[#D4AF37]">SECURE CLOUD</span>
                 <div className="flex gap-1">
                    <div className="w-1 h-1 rounded-full bg-white/20"></div>
                    <div className="w-1 h-1 rounded-full bg-white/20"></div>
                    <div className="w-1 h-1 rounded-full bg-white/20"></div>
                 </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <div className="flex-1 bg-white rounded-[2.5rem] shadow-sm border border-gray-100 p-8 md:p-12 min-h-[600px] transition-all duration-500">
          <div key={activeSection} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            {renderContent()}
          </div>
        </div>

        {/* CPO Chat Assistant Overlay / Side */}
        <div className="lg:w-80 h-fit lg:sticky lg:top-24">
          <CPOChat activeSection={activeSection} />
        </div>
      </main>

      <footer className="py-8 border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
             <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
              &copy; 2024 Coutiqra Strategy Group
            </p>
            <span className="text-gray-200">|</span>
            <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#D4AF37] transition-colors">Legal & Privacy</a>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Environment:</span>
            <div className="flex items-center gap-1.5 px-2 py-1 bg-gray-50 rounded-md border border-gray-100">
              <svg className="w-3 h-3 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 11.991c0-6.627-5.37-11.991-11.991-11.991s-11.991 5.364-11.991 11.991 5.37 11.991 11.991 11.991 11.991-5.364 11.991-11.991z"/>
              </svg>
              <span className="text-[9px] font-bold text-gray-600">PRODUCTION READY</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
