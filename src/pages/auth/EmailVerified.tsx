import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { useEffect } from "react";
import { PATHS } from "../../constant/paths";

export function EmailVerified() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
        navigate(PATHS.LOGIN);
    }, 5000);

  return () => clearTimeout(timer); 

}, [navigate]);

  return (
    /* 1. Wrapper: Support slate-50 for a clean light-mode background */
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 relative overflow-hidden flex flex-col items-center justify-center px-6 transition-colors duration-500">
      
      {/* 2. Background Glow: Soft green glow for both modes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/10 dark:bg-green-500/10 blur-[120px] rounded-full" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        /* 3. Card: Use the same Milky Glass logic we established for Login/Signup */
        className="relative z-10 max-w-md w-full text-center bg-white/70 dark:bg-white/5 backdrop-blur-2xl border border-white/40 dark:border-white/10 p-10 rounded-[40px] shadow-xl dark:shadow-2xl"
      >
        
        <div className="relative inline-block mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
            /* 4. Icon Container: bg-green-50 for light mode, bg-green-500/20 for dark */
            className="bg-green-50 dark:bg-green-500/20 p-6 rounded-full border border-green-200 dark:border-green-500/30"
          >
            <CheckCircle2 className="w-16 h-16 text-green-600 dark:text-green-500" />
          </motion.div>
          
          <motion.div
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5], x: [0, 20, 0], y: [0, -20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-2 -right-2 text-yellow-500 dark:text-yellow-400"
          >
            <Sparkles size={24} />
          </motion.div>
        </div>

        <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter transition-colors">
          Email Verified!
        </h1>
        
        <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 leading-relaxed transition-colors">
          Your account is now fully active. You're ready to start creating pots and collecting money with witnesses.
        </p>

        <Link to={PATHS.LOGIN}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            /* 5. Button: Dark button in light mode, White button in dark mode */
            className="w-full bg-slate-900 text-white dark:bg-white dark:text-black font-black py-4 rounded-2xl flex items-center justify-center gap-3 shadow-xl dark:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.2)] transition-all"
          >
            Continue to Sign In
            <ArrowRight size={20} />
          </motion.button>
        </Link>
        
        <p className="mt-8 text-sm text-slate-500">
          Redirecting you automatically in <span className="text-slate-900 dark:text-white font-bold transition-colors">5s</span>
        </p>
      </motion.div>
    </div>
  );
}
