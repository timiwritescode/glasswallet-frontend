import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PATHS } from '../../constant/paths';

export function Hero() {
  return (
    <section className="pt-20 pb-12 text-center relative">
      {/* 1. The Badge: Milky glass in light mode, Dark glass in dark mode */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="inline-flex items-center gap-2 bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 px-4 py-2 rounded-full mb-8 transition-colors duration-300"
      >
        <Sparkles className="w-4 h-4 text-orange-500" />
        <span className="text-sm font-medium text-slate-600 dark:text-white/80">
          Trusted by 10,000+ friend groups
        </span>
      </motion.div>

      {/* 2. The Headline: Vertical gradient in light mode, Solid white in dark mode */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter transition-all duration-300
          text-slate-900 dark:text-white
          bg-gradient-to-b from-purple-600 to-orange-500 bg-clip-text text-transparent dark:bg-none dark:text-white"
      >
        Collect Money <br /> 
        {/* Keeping the horizontal gradient for the bottom line as it's your brand signature */}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-purple-600">
          With Witnesses
        </span>
      </motion.h1>

      {/* 3. The Paragraph: Darker slate for light mode contrast */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed transition-colors duration-300"
      >
        The social escrow app for group payments. See who's paid, track progress live, 
        and get automatic refunds if goals aren't met.
      </motion.p>

      {/* 4. The Button: Stronger shadow in light mode */}
      <Link to={PATHS.SIGNUP} className="inline-block">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="bg-gradient-to-r from-orange-600 to-purple-600 text-white font-black text-xl px-10 py-5 rounded-2xl shadow-xl hover:shadow-orange-500/40 dark:shadow-2xl transition-all flex items-center gap-3 mx-auto"
        >
          Create Your First Pot
          <ArrowRight className="w-6 h-6" />
        </motion.button>
      </Link>
    </section>
  );
}