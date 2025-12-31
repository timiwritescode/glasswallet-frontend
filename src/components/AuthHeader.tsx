import {motion} from "framer-motion";
import { Logo } from "./Logo";

interface AuthHeaderProps {
    headline: string;
    rider: string;
}

export function AuthHeaderSection({headline, rider}: AuthHeaderProps) {
  return (
        <>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 text-white"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0, repeat: Infinity }}
            className="inline-block mb-0"
          >
            <div className="">
                <Logo className="h-20 md:h-16 lg:h-64 w-auto" />
            </div>
          </motion.div>
          
          <h1 className="text-4xl mb-2">{headline}</h1>
          <p className="text-lg opacity-90">{rider}</p>
        </motion.div>

        </>
  );
}
