import { AuthHeaderSection } from "../components/AuthHeader";
import { motion } from "framer-motion"
import { ContinueWithGoogleBtn } from "../components/ContinueWithGoogleBtn";
import { Divider } from "../components/Divider";
import { useState } from "react";
import { Input } from "../components/Input";
import { Check, Contact, Contact2Icon, Lock, LucideContact, Mail, PersonStanding } from "lucide-react";
import { AuthSubmitBtn } from "../components/AuthSubmitBtn";


export function SignUp() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");


    const handleSignUp = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(`Signing up with: ${fullName}, ${email}, ${password}`)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 relative overflow-hidden flex items-center justify-center px-6">
            <div className="relative z-10 max-w-md w-full py-12">
                <AuthHeaderSection
                    headline="Join Glasswallet"
                    rider="Create your account and start managing group payments"
                />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-[32px] p-8 shadow-2xl"
                >
                    <ContinueWithGoogleBtn/>
                    <Divider text="Or sign up with email"/>
                    <form onSubmit={handleSignUp} className="space-y-5">
                        <Input 
                            label="Full Name"
                            type="text"
                            icon={LucideContact}
                            placeholder="John Doe"
                            value={email}
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
                            label="Confirm Password"
                            type="password"
                            icon={Lock}
                            placeholder={""}
                            value={passwordConfirmation}
                            onChange={(e) => setPasswordConfirmation(e.target.value)} 
                        />

                        <FeaturesList/>

                        <AuthSubmitBtn text="Create Account"/>

                    </form>
                    <SignInLink/>
                </motion.div>
                <ExtraInformation/>
            </div> 
        </div>
    )
    
}


function ExtraInformation() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-6 text-center text-sm text-white/80"
            >
                <p>By signing up, you agree to our Terms of Service and Privacy Policy</p>
            </motion.div>
        </>
    )
}

function SignInLink() {
    return (
        <div className="mt-6 text-center text-sm text-gray-600">
            <span className="p-1">Already have an account?</span>
            <button
                onClick={() => {}}
                className="text-purple-600 font-semibold hover:underline"
            >
                Sign in
            </button>
        </div>
    )
}


function FeaturesList() {
    return (
        <div className="bg-purple-50 rounded-2xl p-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-purple-900">
                <Check className="w-4 h-4 text-purple-600" />
                <span>Create unlimited pots</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-purple-900">
                <Check className="w-4 h-4 text-purple-600" />
                <span>Track all your group payments</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-purple-900">
                <Check className="w-4 h-4 text-purple-600" />
                <span>Auto refunds & escrow protection</span>
              </div>
        </div>
    )
}