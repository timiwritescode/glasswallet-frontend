import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Switch to Link

export function NavBar() {
  return (
    <nav className="flex items-center justify-between py-8 px-6 max-w-6xl mx-auto relative z-20">
      <Link to="/" className="flex items-center gap-3">
        <div className="text-3xl filter drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]">💰</div>
        <div>
          <h1 className="text-xl font-black text-white leading-tight tracking-tight">GlassWallet</h1>
          <p className="text-[10px] uppercase tracking-[0.2em] text-orange-500 font-bold">Money with Witnesses</p>
        </div>
      </Link>
      
      <div className="flex items-center gap-6">
        <Link 
          to="/login" 
          className="text-white/70 hover:text-white font-medium transition-colors hidden sm:block"
        >
          Sign In
        </Link>
        <Link to="/signup">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black font-bold px-6 py-2.5 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-white/40 transition-all"
          >
            Get Started
          </motion.button>
        </Link>
      </div>
    </nav>
  );
}