import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="pt-20 pb-12 text-center relative">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full mb-8"
      >
        <Sparkles className="w-4 h-4 text-orange-400" />
        <span className="text-sm font-medium text-white/80">Trusted by 10,000+ friend groups</span>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter"
      >
        Collect Money <br /> 
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-purple-600">
          With Witnesses
        </span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
      >
        The social escrow app for group payments. See who's paid, track progress live, 
        and get automatic refunds if goals aren't met.
      </motion.p>

      <Link to="/signup" className="inline-block">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="bg-gradient-to-r from-orange-600 to-purple-600 text-white font-black text-xl px-10 py-5 rounded-2xl shadow-2xl hover:shadow-orange-500/20 transition-all flex items-center gap-3 mx-auto"
        >
          Create Your First Pot
          <ArrowRight className="w-6 h-6" />
        </motion.button>
      </Link>
    </section>
  );
}