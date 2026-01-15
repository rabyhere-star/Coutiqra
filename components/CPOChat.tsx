
import React, { useState, useRef, useEffect } from 'react';
import { getCPOAdvice } from '../services/geminiService';
import { Message, RoadmapSection } from '../types';

interface CPOChatProps {
  activeSection: RoadmapSection;
}

const CPOChat: React.FC<CPOChatProps> = ({ activeSection }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: `Hello, I'm the CPO of Coutiqra. I see you're reviewing the ${activeSection} strategy. How can I help refine this vision?` }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    const response = await getCPOAdvice(input, activeSection);
    
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'assistant', content: response || "I'm processing that request." }]);
  };

  return (
    <div className="h-full flex flex-col bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
      <div className="p-4 border-b border-gray-50 flex items-center justify-between bg-gray-50/50">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500">CPO Assistant</h3>
        </div>
        <button className="text-[10px] text-gray-400 hover:text-gray-600 font-medium">Clear</button>
      </div>

      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth"
      >
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-xs leading-relaxed ${
              m.role === 'user' 
                ? 'bg-[#1A1A1A] text-white rounded-tr-none' 
                : 'bg-gray-100 text-gray-700 rounded-tl-none'
            }`}>
              {m.content}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-400 px-4 py-3 rounded-2xl text-xs rounded-tl-none italic animate-pulse">
              CPO is thinking...
            </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-gray-50">
        <div className="relative">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about tech, brand, or strategy..."
            className="w-full pl-4 pr-12 py-3 bg-gray-50 border border-transparent rounded-xl text-xs focus:bg-white focus:border-gray-200 focus:outline-none transition-all"
          />
          <button 
            onClick={handleSend}
            disabled={isTyping}
            className="absolute right-2 top-1.5 h-8 w-8 bg-[#D4AF37] text-white rounded-lg flex items-center justify-center hover:bg-[#B8860B] transition-colors disabled:opacity-50"
          >
            →
          </button>
        </div>
        <p className="mt-3 text-[10px] text-center text-gray-400">Powered by Gemini AI Insights</p>
      </div>
    </div>
  );
};

export default CPOChat;
