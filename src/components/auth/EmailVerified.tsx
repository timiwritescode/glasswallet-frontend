import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { useEffect } from "react";

export function EmailVerified() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
        navigate("/login");
    }, 5000);

  return () => clearTimeout(timer); 

}, [navigate]);
  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden flex flex-col items-center justify-center px-6">
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/10 blur-[120px] rounded-full" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 max-w-md w-full text-center"
      >
        
        <div className="relative inline-block mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
            className="bg-green-500/20 p-6 rounded-full border border-green-500/30"
          >
            <CheckCircle2 className="w-16 h-16 text-green-500" />
          </motion.div>
          
          
          <motion.div
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5], x: [0, 20, 0], y: [0, -20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-2 -right-2 text-yellow-400"
          >
            <Sparkles size={24} />
          </motion.div>
        </div>

        <h1 className="text-4xl font-black text-white mb-4 tracking-tighter">
          Email Verified!
        </h1>
        
        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
          Your account is now fully active. You're ready to start creating pots and collecting money with witnesses.
        </p>

        <Link to="/login">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-white text-black font-black py-4 rounded-2xl flex items-center justify-center gap-3 shadow-[0_20px_40px_-15px_rgba(255,255,255,0.2)]"
          >
            Continue to Sign In
            <ArrowRight size={20} />
          </motion.button>
        </Link>
        
        <p className="mt-8 text-sm text-slate-500">
          Redirecting you automatically in <span className="text-white font-bold">5s</span>
        </p>
      </motion.div>
    </div>
  );
}