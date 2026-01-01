import type { SetStateAction } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { PATHS } from "../../constant/paths";
import { motion } from "framer-motion";
import { ThemePicker } from "../ThemePicker";


export function SideBarPanel(setIsOpen: { (value: SetStateAction<boolean>): void; (arg0: boolean): void; }) {
	
    
    return <>
		{/* BACKDROP */}
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			onClick={() => setIsOpen(false)}
			className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden" />

		{/* DRAWER */}
		<motion.div
			initial={{ x: "100%" }}
			animate={{ x: 0 }}
			exit={{ x: "100%" }}
			transition={{ type: "spring", damping: 25, stiffness: 200 }}
			className="fixed right-0 top-0 h-full w-[280px] bg-white dark:bg-slate-900 z-50 p-8 shadow-2xl md:hidden flex flex-col"
		>
			<div className="flex justify-between items-center mb-12">
				<span className="text-sm font-bold uppercase tracking-widest text-slate-400">Menu</span>
				<button onClick={() => setIsOpen(false)} className="text-slate-900 dark:text-white">
					<X size={28} />
				</button>
			</div>

			<div className="flex flex-col gap-8">
				<div className="flex items-center justify-between">
					<span className="font-medium text-slate-600 dark:text-slate-400">Theme</span>
					<ThemePicker />
				</div>

				<Link
					to={PATHS.LOGIN}
					onClick={() => setIsOpen(false)}
					className="text-2xl font-bold text-slate-900 dark:text-white"
				>
					Sign In
				</Link>

				<Link to={PATHS.SIGNUP} onClick={() => setIsOpen(false)}>
					<button className="w-full bg-orange-500 text-white font-black py-4 rounded-2xl text-xl shadow-lg shadow-orange-500/20">
						Get Started
					</button>
				</Link>
			</div>
		</motion.div>
	</>;
}
