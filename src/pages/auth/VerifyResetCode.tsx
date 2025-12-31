import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Timer } from "lucide-react";
import { AuthHeaderSection } from "../../components/auth/AuthHeader";
import { AuthSubmitBtn } from "../../components/auth/AuthSubmitBtn";
import { formatTime } from "../../shared/helpers";

export function VerifyResetCode() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [seconds, setSeconds] = useState(119);
  const [canResend, setCanResend] = useState(false)

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (seconds <=0) {
        setCanResend(true);
        return;
    }

    const timer = setInterval(() => {
        setSeconds((prev) => prev -1);
    }, 1000);

    return () => clearInterval(timer);

    
  }, [seconds])
  
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);


  const handleChange = (index: number, value: string) => {
    
    if (!/^\d*$/.test(value)) return;

    const newCode = [...code];
    
    newCode[index] = value.slice(-1);
    setCode(newCode);

    
    if (value !== "" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    
    if (e.key === "Backspace" && code[index] === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullCode = code.join("");
    console.log("Verifying Reset Code:", fullCode);
    
    // After Spring Boot validates this code:
    navigate("/auth/reset-password"); 
  };

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden flex flex-col md:items-center md:justify-center px-6 p-10">
      <div className="relative z-10 max-w-md w-full">
        <AuthHeaderSection 
          headline="Enter Code" 
          rider="We sent a 6-digit security code to your email address." 
        />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 md:p-10 shadow-2xl"
        >
          <form onSubmit={handleSubmit}>
            <div className="flex justify-between gap-2 mb-8">
              {code.map((digit, i) => (
                <input
                  key={i}
                  ref={(el) => (inputRefs.current[i] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                  className="w-12 h-14 md:w-14 md:h-16 bg-white/5 border border-white/10 rounded-2xl text-center text-2xl font-black text-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all"
                />
              ))}
            </div>

            <AuthSubmitBtn text="Verify & Continue" />

            <div className="mt-8 flex flex-col items-center justify-center gap-2 text-sm">
                {!canResend ? (
                    <div className="flex items-center gap-2 text-slate-500">
                    <Timer size={16} />
                    <span>Resend code in <span className="text-white font-bold">{formatTime(seconds)}</span></span>
                    </div>
                ) : (
                    <button 
                    type="button"
                    onClick={() => { /* Your Spring Boot resend logic here */ }}
                    className="text-orange-500 font-bold hover:underline animate-pulse"
                    >
                    Resend Code Now
                    </button>
                )}
            </div>
          </form>
        </motion.div>

        <button 
          onClick={() => navigate("/auth/forgot-password")}
          className="mt-8 flex items-center gap-2 text-slate-500 hover:text-white mx-auto transition-colors font-medium"
        >
          <ArrowLeft size={18} />
          Try a different email
        </button>
      </div>
    </div>
  );
}