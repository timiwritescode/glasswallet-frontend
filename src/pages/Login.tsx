import React, { useState } from "react";
import { motion } from "framer-motion"
import { AlertCircle, ArrowRight, Lock, Mail } from "lucide-react";
import { SocialButton } from "../components/SocialButton";
import { Input } from "../components/Input";
import { AuthHeaderSection } from "../components/AuthHeader";
import { GoogleIcon } from "../components/GoogleIcon";

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login attempt:', {email, password})
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 relative overflow-hidden flex items-center justify-center px-6">
            <BackgroundBlobs/>
            <div className="relative z-10 max-w-md w-full py-12">
                <AuthHeaderSection
                headline="Welcome back"
                rider="Sign in to manage your pots"
                />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-[32px] p-8 shadow-2xl"
                >
                    <div className="space-y-6 mb-6">
                        <SocialButton text="Continue with Google" icon={<GoogleIcon/>} className="border border-gray-300 shadow-md hover:shadow-lg"/>
                    </div>


            <Divider text="Or sign in with email" />

            <form onSubmit={handleLogin} className="space-y-5">
                <Input 
                    label="Email Address"
                    type="email"
                    icon={Mail}
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />

                <Input 
                    label="Password"
                    type="password"
                    icon={Lock}
                    placeholder="........."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                <ForgotPassword/>

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl py-5 px-6 flex items-center justify-center gap-2 shadow-lg font-bold text-lg"
                >
                    Sign In <ArrowRight className="w-5 h-5" />
                </motion.button>

                <NoAccount/>

            </form>
          </motion.div>
            <DemoNotice/>
            </div>

        </div>
    )
}


function NoAccount() {
    return (
        <div className="mt-6 text-center text-sm text-gray-600">
                    <span className="p-1">Don't have an account?</span>
                    <button
                        onClick={() => {}}
                        className="text-purple-600 font-semibold hover:underline"
                    >
                        Sign up
                    </button>
                </div>
    )
}

function ForgotPassword() {
    return (
        <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 text-purple-600 rounded" />
                <span className="text-gray-700">Remember me</span>
              </label>
              <button type="button" className="text-purple-600 hover:underline">
                Forgot password?
              </button>
            </div>
    )
}

function BackgroundBlobs() {
  return (
    <>
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{ scale: [1, 1.2, 1], x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{ scale: [1.2, 1, 1.2], x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
      />
    </>
  );
}




function Divider({ text }: { text: string }) {
  return (
    <div className="relative my-6">
      <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
      <div className="relative flex justify-center text-sm"><span className="px-4 bg-white text-gray-500">{text}</span></div>
    </div>
  );
}

function DemoNotice() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-6 bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl p-4 text-white flex gap-3">
      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
      <div className="text-sm"><p className="font-semibold">Demo Mode</p><p className="opacity-90">Click "Sign In" with any credentials.</p></div>
    </motion.div>
  );
}


