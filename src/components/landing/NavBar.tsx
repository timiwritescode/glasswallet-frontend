import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Logo } from '../Logo';
import { useTheme } from '../../hooks/useTheme';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useState, type SetStateAction } from 'react';
import { PATHS } from '../../constant/paths';
import { SideBarPanel } from './SideBar';
import { ThemePicker } from '../ThemePicker';

export function NavBar() {
  	const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between py-6 px-2 md:px-4 max-w-6xl mx-auto relative z-20">
      <Link to="/" className="flex items-center gap-2 group">
        <div className="flex flex-col">
          {/* Ensure Logo component inside handles its own colors or is neutral */}
          <h1 className="leading-none tracking-tight h-10 p-0">
            <Logo />
          </h1>
          <p className="text-[8px] md:text-[10px] uppercase tracking-[0.1em] text-orange-500 font-bold">
            Money with Witnesses
          </p>
        </div>
      </Link>

      {/* DESKTOP MENU (Hidden on Mobile) */}
      <div className="hidden md:flex items-center gap-6">
        <ThemePicker />
        <Link to={PATHS.LOGIN} className="text-slate-600 dark:text-white/70 hover:text-orange-500 transition-colors font-medium">
          Sign In
        </Link>
        <Link to={PATHS.SIGNUP}>
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            className="bg-slate-900 text-white dark:bg-white dark:text-black font-bold px-6 py-2.5 rounded-full shadow-lg"
          >
            Get Started
          </motion.button>
        </Link>
      </div>

      {/* MOBILE HAMBURGER BUTTON (Hidden on Desktop) */}
      <button 
        onClick={() => setIsOpen(true)}
        className="md:hidden p-2 text-slate-900 dark:text-white"
      >
        <Menu size={28} />
      </button>

      {/* MOBILE SIDEBAR DRAWER */}
      <AnimatePresence>
        {isOpen && (
          SideBarPanel(setIsOpen)
        )}

		
      </AnimatePresence>
    </nav>
  );
}



// export function ThemeToggle() {
//   const { theme, setTheme } = useTheme();

//   return (
//     <button
//       onClick={() => setTheme()}
//       className="p-3 rounded-2xl bg-white/10 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white transition-all hover:scale-110"
//     >
//       {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
//     </button>
//   );
// }


