import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function AuthSubmitBtn({text}: {text: string}) {
    return(
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl py-5 px-6 flex items-center justify-center gap-2 shadow-lg font-bold text-lg"
        >
            {text} <ArrowRight className="w-5 h-5" />
        </motion.button>
    )
}