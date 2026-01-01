import { useNavigate } from "react-router-dom";
import { PATHS } from "../../constant/paths";

export function CTA() {
  const navigate = useNavigate();
  return (
    <section className="py-20 text-center">
      <div className="
        
        bg-white/5 border border-white 
        
        dark:bg-gradient-to-b dark:from-white/10 dark:to-transparent dark:border-white/10 
        rounded-[40px] p-12 backdrop-blur-xl shadow-xl dark:shadow-none transition-all duration-300"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 dark:text-white">
          Ready to lead the pack?
        </h2>
        <button 
          onClick={() => navigate(PATHS.SIGNUP)}
          className="
            bg-slate-900 text-white dark:bg-white dark:text-black 
            font-bold px-10 py-5 rounded-2xl text-xl hover:scale-105 transition-transform shadow-lg"
        >
          Get Started for Free
        </button>
      </div>
    </section>
  );
}