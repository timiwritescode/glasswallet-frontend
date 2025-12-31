interface DividerProps { text: string; }

export function Divider({ text }: DividerProps) {
  return (
    <div className="relative my-8">
      <div className="absolute inset-0 flex items-center">
        
        <div className="w-full border-t border-white/10"></div>
      </div>
      <div className="relative flex justify-center text-xs uppercase tracking-widest">
        
        <span className="px-4 bg-slate-950/50 backdrop-blur-sm text-slate-500 font-bold">
          {text}
        </span>
      </div>
    </div>
  );
}