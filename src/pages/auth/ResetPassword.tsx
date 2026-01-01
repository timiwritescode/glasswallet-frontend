import { useState } from "react";
import { Lock, Eye, EyeOff, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AuthHeaderSection } from "../../components/auth/AuthHeader";
import { Input } from "../../components/Input";
import { AuthSubmitBtn } from "../../components/auth/AuthSubmitBtn";
import { PATHS } from "../../constant/paths";

export function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(PATHS.LOGIN);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 relative overflow-hidden flex flex-col items-center justify-center px-6 transition-colors duration-500">
      
      
      <div className="relative z-10 max-w-md w-full py-12">
        <AuthHeaderSection 
          headline="Secure your account" 
          rider="Choose a strong password that you haven't used before." 
        />

        <div className="bg-white/70 dark:bg-white/5 backdrop-blur-2xl border border-white/40 dark:border-white/10 rounded-[40px] p-10 shadow-xl dark:shadow-2xl transition-all duration-300">
          <form onSubmit={handleReset} className="space-y-6">
            <div className="relative">
              <Input 
                label="New Password"
                icon={Lock}
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-[42px] text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <Input 
              label="Confirm New Password"
              icon={Lock}
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <div className="bg-slate-100/50 dark:bg-white/5 rounded-2xl p-4 border border-slate-200 dark:border-white/5 transition-colors">
                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-3">Security Check</h4>
                <div className="space-y-2">
                    <Requirement met={password.length >= 8} text="At least 8 characters" />
                    <Requirement met={/[0-9]/.test(password)} text="At least one number" />
                    <Requirement met={password === confirmPassword && password !== ""} text="Passwords match" />
                </div>
            </div>

            <AuthSubmitBtn text="Update Password" />
          </form>
        </div>
      </div>
    </div>
  );
}

function Requirement({ met, text }: { met: boolean; text: string }) {
  return (
    <div className={`flex items-center gap-2 text-sm transition-colors duration-300 ${
      met ? 'text-orange-600 dark:text-orange-500' : 'text-slate-500'
    }`}>
      <div className={`w-1.5 h-1.5 rounded-full transition-colors ${
        met ? 'bg-orange-500' : 'bg-slate-300 dark:bg-slate-700'
      }`} />
      <span className={met ? "font-medium" : ""}>{text}</span>
    </div>
  );
}