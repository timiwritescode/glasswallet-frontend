import { motion } from "framer-motion";

interface AuthSubmitBtnProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}

export function AuthSubmitBtn({ text, onClick, disabled }: AuthSubmitBtnProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      disabled={disabled}
      className="relative w-full overflow-hidden bg-gradient-to-r from-orange-600 to-purple-600 text-white font-black text-lg py-4 rounded-2xl shadow-[0_20px_40px_-15px_rgba(249,115,22,0.5)] transition-shadow hover:shadow-orange-500/40 group"
    >
      
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "200%" }}
        transition={{
          repeat: Infinity,
          repeatDelay: 3, 
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg]"
      />

      <span className="relative z-10 flex items-center justify-center gap-2">
        {text}
      </span>

      <div className="absolute inset-0 rounded-2xl border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.button>
  );
}