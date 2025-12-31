import React, { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Mail, User, Check } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { AuthHeaderSection } from "../components/auth/AuthHeader";
import { ContinueWithGoogleBtn } from "../components/auth/ContinueWithGoogleBtn";
import { Divider } from "../components/auth/Divider";
import { Input } from "../components/Input";
import { AuthSubmitBtn } from "../components/auth/AuthSubmitBtn";

export function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  
  const navigate = useNavigate();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Creating account...");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden flex flex-col items-center justify-center px-6">
      <BackgroundBlobs />

      <div className="relative z-10 max-w-md w-full py-12">
        <AuthHeaderSection
          headline="Join GlassWallet"
          rider="Create your account and start managing group payments"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] p-10 shadow-2xl"
        >
          <ContinueWithGoogleBtn 
            className="text-white font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-3"
          />

          <Divider text="Or sign up with email" />

          <form onSubmit={handleSignUp} className="space-y-5">
            <Input 
              label="Full Name"
              type="text"
              icon={User}
              placeholder="John Doe"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)} 
            />
            
            <Input 
              label="Email Address"
              type="email"
              icon={Mail}
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            />
            
            <Input 
              label="Password"
              type="password"
              icon={Lock}
              placeholder="Min. 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            />

            <Input 
              label="Password Confirmation"
              type="password"
              icon={Lock}
              placeholder="Confirm your password"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)} 
            />

            <FeaturesList />

            <AuthSubmitBtn text="Create Account" />
          </form>

          <SignInLink />
        </motion.div>
        
        <ExtraInformation />
      </div>
    </div>
  );
}

// --- Internal Helpers (Styled for the new theme) ---

function FeaturesList() {
  const benefits = [
    "Create unlimited pots",
    "Track all group payments",
    "Auto-refunds & escrow protection"
  ];

  return (
    <div className="bg-orange-500/5 border border-orange-500/10 rounded-2xl p-5 space-y-3">
      {benefits.map((text, i) => (
        <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
          <div className="bg-orange-500/20 p-1 rounded-full">
            <Check className="w-3 h-3 text-orange-500" strokeWidth={3} />
          </div>
          <span>{text}</span>
        </div>
      ))}
    </div>
  );
}

function SignInLink() {
  return (
    <div className="mt-8 text-center text-sm text-slate-500">
      <span>Already have an account?</span>
      <Link
        to="/login"
        className="ml-2 text-orange-500 font-bold hover:text-orange-400 transition-colors"
      >
        Sign in
      </Link>
    </div>
  );
}

function ExtraInformation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="mt-8 text-center text-xs text-slate-500 leading-relaxed px-4"
    >
      By signing up, you agree to our <span className="text-slate-300 hover:underline cursor-pointer">Terms of Service</span> and <span className="text-slate-300 hover:underline cursor-pointer">Privacy Policy</span>
    </motion.div>
  );
}

function BackgroundBlobs() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-600/10 blur-[120px] rounded-full" />
    </div>
  );
}