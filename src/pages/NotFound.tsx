import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, ArrowLeft, Ghost } from "lucide-react";
import { PATHS } from "../constant/paths";

export function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 relative overflow-hidden flex flex-col justify-center px-6 transition-colors duration-500">
      
      {/* 1. Background Glow: Adjusted for light/dark visibility */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-orange-600/10 dark:bg-orange-600/10 blur-[80px] md:blur-[120px] rounded-full" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center flex flex-col justify-center items-center"
      >
        {/* Floating Ghost: Orange-500 works perfectly on both */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="inline-block mb-8 text-orange-500"
        >
          <Ghost size={80} strokeWidth={1.5} />
        </motion.div>

        {/* 2. Big 404: Slate-200 for light, White for dark (both with low opacity) */}
        <h1 className="text-8xl md:text-[12rem] font-black text-gray-300 dark:text-white mb-4 tracking-tighter opacity-50 dark:opacity-10 absolute -z-10 select-none">
          404
        </h1>
        
        <div className="w-full">
            <h2 className="text-3xl md:text-5xl font-black text-slate-00 dark:text-white mb-2 tracking-tight">
                Lost in the void?
            </h2>
            <p className="text-slate-800 dark:text-slate-400 text-lg mb-10 max-w-md mx-auto leading-relaxed">
                The page you're looking for doesn't exist or has been moved to a private pot.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to={PATHS.DASHBOARD.ROOT}>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        /* 3. Button: Black in light mode, White in dark mode */
                        className="bg-slate-900 text-white dark:bg-white dark:text-black font-black px-10 py-4 rounded-2xl flex items-center gap-2 shadow-xl hover:shadow-orange-500/20 transition-all"
                    >
                        <Home size={20} />
                        Go to Dashboard
                    </motion.button>
                </Link>

                <button 
                    onClick={() => window.history.back()}
                    className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white font-bold px-8 py-4 flex items-center gap-2 transition-colors"
                >
                    <ArrowLeft size={20} />
                    Go Back
                </button>
            </div>
        </div>
      </motion.div>
    </div>
  );
}