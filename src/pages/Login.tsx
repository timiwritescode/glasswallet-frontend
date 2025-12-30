import React, { useState } from "react";
import { motion } from "framer-motion"
import { AlertCircle, ArrowRight, Lock, Mail } from "lucide-react";
import { SocialButton } from "../components/SocialButton";
import { Input } from "../components/Input";

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
                <HeaderSection/>

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


function HeaderSection() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8 text-white">
      <div className="text-6xl mb-4">💰</div>
      <h1 className="text-4xl font-bold mb-2">Welcome Back!</h1>
      <p className="text-lg opacity-90">Sign in to manage your pots</p>
    </motion.div>
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


const GoogleIcon = () =>{
    return (
            <>
            <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </>
            
        )

}

