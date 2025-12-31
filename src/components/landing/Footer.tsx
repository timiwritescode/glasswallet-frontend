import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="mt-20 py-12 border-t border-white/10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 px-6">
        <div className="flex items-center gap-3">
          <span className="text-2xl">💰</span>
          <div>
            <div className="font-black text-white">GlassWallet</div>
            <div className="text-xs text-slate-500">Money with Witnesses</div>
          </div>
        </div>

        <div className="flex gap-8 text-sm font-medium text-slate-400">
          <Link to="/about" className="hover:text-white transition-colors">About</Link>
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
          <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
      </div>
      <div className="mt-12 text-center text-slate-600 text-xs">
        © 2025 GlassWallet. Built for transparent group payments. 🇳🇬
      </div>
    </footer>
  );
}