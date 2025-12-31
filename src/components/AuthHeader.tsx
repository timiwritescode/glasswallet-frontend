import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Add this import
import { Logo } from "./Logo";

interface AuthHeaderProps {
  headline: string;
  rider: string;
}

export function AuthHeaderSection({ headline, rider }: AuthHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-10"
    >
      {/* Wrap the Logo in a Link to handle navigation */}
      <Link to="/" className="inline-block mb-6 group outline-none">
        <motion.div
          animate={{ 
            y: [0, -8, 0],
            filter: [
                "drop-shadow(0 0 0px rgba(249,115,22,0))", 
                "drop-shadow(0 0 20px rgba(249,115,22,0.4))", 
                "drop-shadow(0 0 0px rgba(249,115,22,0))"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.05 }} // Give the user feedback that it's clickable
          whileTap={{ scale: 0.95 }}
        >
          <Logo className="h-16 w-auto" />
        </motion.div>
      </Link>
      
      <h1 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tighter leading-tight">
        {headline}
      </h1>

      <p className="text-lg text-slate-400 font-medium max-w-[280px] mx-auto leading-relaxed">
        {rider}
      </p>
    </motion.div>
  );
}