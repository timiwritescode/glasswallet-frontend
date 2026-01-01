import { motion } from 'framer-motion'; // Using framer-motion for animations

import { NavBar } from '../components/landing/NavBar';
import { Hero } from '../components/landing/Hero';
import { LivePreview } from '../components/landing/LivePreview';
import { HowItWorks } from '../components/landing/HowItWorks';
import { Features } from '../components/landing/Features';
import { Testimonials } from '../components/landing/Testimonials';
import { Footer } from '../components/landing/Footer';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../constant/paths';


export function Landing() {
  return (
<div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white relative overflow-hidden selection:bg-orange-500/30 transition-colors duration-500">      
      
      <BackgroundBlobs />

      
      <div className="relative z-10">
        <NavBar/>
        
        <main className="max-w-6xl mx-auto px-6">
          <Hero/>
          
          <RevealSection>
            <LivePreview />
          </RevealSection>

           <RevealSection>
            <HowItWorks />
          </RevealSection>

          <RevealSection>
            <Features />
          </RevealSection>

          <RevealSection>
            <Testimonials />
          </RevealSection> 

        <CTA/>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

// --- Internal Helpers ---

function BackgroundBlobs() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Updated: Adjusted opacity and blur for light mode */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/10 dark:bg-purple-600/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-orange-600/5 dark:bg-orange-600/10 blur-[100px] rounded-full" />
    </div>
  );
}
function RevealSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className=""
    >
      {children}
    </motion.section>
  );
}

function CTA() {
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