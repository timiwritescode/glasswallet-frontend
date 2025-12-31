import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Logo } from '../Logo';
import { useTheme } from '../../hooks/useTheme';
import { Moon, Sun } from 'lucide-react';

export function NavBar() {
  
  return (
    <nav className="flex items-center justify-between py-6 px-2 md:px-4 max-w-6xl mx-auto relative z-20">
      <Link to="/" className="flex items-center gap-2">
        <div className="text-2xl md:text-3xl filter drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]"></div>
        <div className="flex flex-col">
          <h1 className="leading-none tracking-tight h-10 p-0"><Logo/></h1>
          <p className="text-[8px] md:text-[10px] uppercase tracking-[0.1em] text-orange-500 font-bold">Money with Witnesses</p>
        </div>
      </Link>
      <ThemeToggle/>
      <div className="flex items-center gap-3 md:gap-6">
        <Link 
          to="/auth/login" 
          className="text-white/70 hover:text-white text-sm md:text-base font-medium transition-colors px-2"
        >
          Sign In
        </Link>
        
        <Link to="/auth/signup">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black font-bold px-4 py-2 md:px-6 md:py-2.5 rounded-full text-sm md:text-base shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all"
          >
            Get Started
          </motion.button>
        </Link>
      </div>
    </nav>
  );
}


export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-2xl bg-white/10 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white transition-all hover:scale-110"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}