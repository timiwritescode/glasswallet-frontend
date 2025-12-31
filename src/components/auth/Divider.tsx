interface DividerProps { text: string; }

export function Divider({ text }: DividerProps) {
  return (
    <div className="relative my-8">
      <div className="absolute inset-0 flex items-center">
        
        <div className="w-full border-t border-slate-200 dark:border-white/10 transition-colors duration-300"></div>
      </div>
      <div className="relative flex justify-center text-xs uppercase tracking-widest">
       
        <span className="px-4 bg-white/70 dark:bg-[#0f172a]/50 backdrop-blur-sm text-slate-500 dark:text-slate-500 font-bold transition-all duration-300">
          {text}
        </span>
      </div>
    </div>
  );
}