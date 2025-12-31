import { motion } from 'framer-motion'; // Using framer-motion for animations
import { ArrowRight, Eye, CheckCircle, Shield, Zap, Star, Sparkles } from 'lucide-react';
// import type { Screen } from '../App';

// --- Components ---
import { NavBar } from '../components/landing/NavBar';
import { Hero } from '../components/landing/Hero';
import { LivePreview } from '../components/landing/LivePreview';
import { HowItWorks } from '../components/landing/HowItWorks';
import { Features } from '../components/landing/Features';
import { Testimonials } from '../components/landing/Testimonials';
import { Footer } from '../components/landing/Footer';


export function Landing() {
  return (
    // We use slate-950 to make our "Glass" components and gradients pop
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden selection:bg-orange-500/30">
      
      
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
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-orange-600/10 blur-[100px] rounded-full" />
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
      className="py-20"
    >
      {children}
    </motion.section>
  );
}

function CTA() {
    return (
      <section className="py-20 text-center">
        <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-[40px] p-12 backdrop-blur-xl">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to lead the pack?</h2>
            <button 
                onClick={() => {

                }}
                className="bg-white text-black font-bold px-10 py-5 rounded-2xl text-xl hover:scale-105 transition-transform"
            >
                Get Started for Free
            </button>
        </div>
      </section>
    );
}