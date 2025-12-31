import React, { useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle, Lock, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

// Your custom components
import { Input } from "../../components/Input";
import { AuthHeaderSection } from "../../components/auth/AuthHeader";
import { ContinueWithGoogleBtn } from "../../components/auth/ContinueWithGoogleBtn";
import { Divider } from "../../components/auth/Divider";
import { AuthSubmitBtn } from "../../components/auth/AuthSubmitBtn";
import { BackgroundBlobs } from "../../components/BackgroundBlobs";

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard'); 
  };

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden flex flex-col items-center justify-center px-6">
      
      <BackgroundBlobs />

      <div className="relative z-10 max-w-md w-full py-12">
        <AuthHeaderSection
          headline="Welcome back"
          rider="Sign in to manage your pots"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] p-10 shadow-[0_32px_64px_-15px_rgba(0,0,0,0.5)]"
        >
          <ContinueWithGoogleBtn 
            className="text-white font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-3"
            />

          <Divider text="Or sign in with email" />

          <form onSubmit={handleLogin} className="space-y-6">
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
              placeholder="........."
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            />

            <ForgotPassword />

            <AuthSubmitBtn text="Sign in" />

            <SignUpLink />
          </form>
        </motion.div>

        <DemoNotice />
      </div>
    </div>
  );
}


function SignUpLink() {
  return (
    <div className="mt-6 text-center text-sm text-slate-400 flex items-center justify-center">
      <span>Don't have an account?</span>
      <Link
        to="/signup"
        className="ml-2 text-orange-500 font-bold hover:text-orange-400 transition-colors"
      >
        Sign up
      </Link>
    </div>
  );
}

function ForgotPassword() {
  return (
    <div className="flex items-center justify-between text-sm">
      <label className="flex items-center gap-4 cursor-pointer group">
        <input type="checkbox" className="w-4 h-4 accent-orange-500 bg-slate-800 border-white/10 rounded" />
        <span className="text-slate-400 group-hover:text-slate-200">Remember me</span>
      </label>
      <Link
        to="/forgot-password">
            <button type="button" className="text-orange-500 font-medium hover:text-orange-400">
                Forgot password?
            </button>
      </Link>
      
    </div>
  );
}


function DemoNotice() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ delay: 0.4 }} 
      className="mt-8 bg-orange-500/10 border border-orange-500/20 rounded-2xl p-4 flex gap-3"
    >
      <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
      <div className="text-sm">
        <p className="font-bold text-orange-500">Demo Mode</p>
        <p className="text-slate-400">Feel free to use any credentials to explore.</p>
      </div>
    </motion.div>
  );
}