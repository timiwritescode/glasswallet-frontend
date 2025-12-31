import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, ArrowLeft, Ghost } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden flex flex-col justify-center px-6">
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/10 blur-[120px] rounded-full" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center flex flex-col justify-center items-center"
      >

        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="inline-block mb-8 text-orange-500"
        >
          <Ghost size={80} strokeWidth={1.5} />
        </motion.div>

        <h1 className="text-8xl md:text-9xl font-black text-white mb-4 tracking-tighter opacity-20">
          404
        </h1>
        
        <div className="w-full">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight">
                Lost in the void?
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-md mx-auto">
                The page you're looking for doesn't exist or has been moved to a private pot.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/dashboard">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-black font-black px-8 py-4 rounded-2xl flex items-center gap-2 shadow-xl"
                    >
                        <Home size={20} />
                        Go to Dashboard
                    </motion.button>
                </Link>

                <button 
                    onClick={() => window.history.back()}
                    className="text-slate-400 hover:text-white font-bold px-8 py-4 flex items-center gap-2 transition-colors"
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