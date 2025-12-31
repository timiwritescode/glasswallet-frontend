import {motion} from "framer-motion";

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
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-4"
          >
            <div className="text-6xl">💰</div>
          </motion.div>
          
          <h1 className="text-4xl mb-2">{headline}</h1>
          <p className="text-lg opacity-90">{rider}</p>
        </motion.div>

        </>
  );
}
