import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

export function LivePreview() {
  const participants = [
    { emoji: '😎', name: 'Tola', amount: '₦19,000', time: '2 min ago' },
    { emoji: '🚀', name: 'Emeka', amount: '₦19,000', time: '5 min ago' },
    { emoji: '✨', name: 'Seyi', amount: '₦19,000', time: '8 min ago' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 pb-16">
      <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 shadow-2xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-4">
            <div className="text-5xl bg-white/10 p-4 rounded-2xl">📡</div>
            <div>
              <h3 className="text-2xl font-bold text-white">Yaba WiFi Pot</h3>
              <p className="text-slate-400">4/5 friends contributed</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-black text-orange-500">₦76,000</div>
            <div className="text-sm text-slate-500 uppercase tracking-widest font-bold">Goal: ₦95,000</div>
          </div>
        </div>

        {/* Animated Progress Bar */}
        <div className="h-4 bg-white/10 rounded-full overflow-hidden mb-8">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80%' }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="h-full bg-gradient-to-r from-orange-500 via-red-500 to-purple-600"
          />
        </div>

        <div className="space-y-4">
          {participants.map((person, i) => (
            <div key={i} className="flex items-center justify-between bg-white/5 p-4 rounded-2xl border border-white/5">
              <div className="flex items-center gap-4">
                <span className="text-2xl">{person.emoji}</span>
                <div>
                  <div className="font-bold text-white">{person.name}</div>
                  <div className="text-xs text-slate-500">{person.time}</div>
                </div>
              </div>
              <div className="font-bold text-white text-lg">{person.amount}</div>
            </div>
          ))}
        </div>

        <Link to="/demo" className="block mt-8">
          <button className="w-full bg-white/5 hover:bg-white/10 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-colors border border-white/10">
            <Eye className="w-5 h-5" />
            View Live Wall Demo
          </button>
        </Link>
      </div>
    </div>
  );
}