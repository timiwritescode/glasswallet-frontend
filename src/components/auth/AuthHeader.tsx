import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Add this import
import { Logo } from "../Logo";
import { PATHS } from "../../constant/paths";

interface AuthHeaderProps {
  headline: string;
  rider: string;
  className?: string
}
export function AuthHeaderSection({ headline, rider, className }: AuthHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`text-center mb-10 ${className}`}
    >
      <Link to={PATHS.HOME} className="inline-block mb-6 group outline-none">
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
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Logo usually stays the same, but ensure it doesn't have internal hardcoded colors */}
          <Logo className="h-16 w-auto" />
        </motion.div>
      </Link>
      
      {/* Change text-white to text-slate-900 (light) and dark:text-white (dark) */}
     <h1 className="
		  text-4xl md:text-5xl font-black mb-3 tracking-tighter leading-tight 
  			transition-all duration-300
			dark:text-slate-900
  			bg-gradient-to-b from-purple-600 to-orange-500 bg-clip-text text-transparent
			dark:bg-none dark:bg-transparent dark:text-white"
	>
  		{headline}
	</h1>

      {/* Adjust rider text for better contrast in light mode */}
      <p className="text-lg text-slate-600 dark:text-slate-400 font-medium max-w-[280px] mx-auto leading-relaxed transition-colors duration-300">
        {rider}
      </p>
    </motion.div>
  );
}