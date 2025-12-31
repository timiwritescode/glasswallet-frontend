import { useState } from "react";
import { Mail, ArrowLeft, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { AuthHeaderSection } from "../../components/auth/AuthHeader";
import { Input } from "../../components/Input";
import { AuthSubmitBtn } from "../../components/auth/AuthSubmitBtn";
import { motion } from "framer-motion";
import { BackgroundBlobs } from "../../components/BackgroundBlobs";
import { PATHS } from "../../constant/paths";

export function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isSent, setIsSent] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden flex flex-col items-center justify-center px-6">
      <BackgroundBlobs />
      
      <div className="relative z-10 max-w-md w-full">
        <AuthHeaderSection 
          headline={isSent ? "Check your mail" : "Forgot Password?"} 
          rider={isSent ? "We've sent recovery instructions to your email." : "No worries, it happens. Enter your email to reset."} 
        />

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] p-10 shadow-2xl"
        >
          {!isSent ? (
            <form onSubmit={(e) => { e.preventDefault(); setIsSent(true); }} className="space-y-6">
              <Input 
                label="Email Address"
                icon={Mail}
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <AuthSubmitBtn text="Send Reset Link" />
            </form>
          ) : (
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto">
                <Send className="text-orange-500 w-10 h-10" />
              </div>
              <p className="text-slate-400">Didn't get the email? Check your spam folder or try another address.</p>
              <button onClick={() => setIsSent(false)} className="text-orange-500 font-bold hover:underline">
                Try again
              </button>
            </div>
          )}

          <div className="mt-8 text-center">
            <Link to={PATHS.LOGIN} className="text-sm text-slate-500 hover:text-white inline-flex items-center gap-2 transition-colors">
              <ArrowLeft size={16} /> Back to Sign In
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Reuse your BackgroundBlobs component here...