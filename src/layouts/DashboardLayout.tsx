import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutGrid, PlusCircle, History, Settings, Bell } from 'lucide-react';

const navItems = [
  { icon: LayoutGrid, label: 'Overview', path: '/dashboard' },
  { icon: PlusCircle, label: 'Create Pot', path: '/dashboard/create' },
  { icon: History, label: 'Activity', path: '/dashboard/activity' },
  { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
];

export function DashboardLayout({ children }: { children: ReactNode }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col md:flex-row">
      
      {/* 1. Desktop Sidebar (Hidden on Mobile) */}
      <aside className="hidden md:flex w-64 flex-col border-r border-white/10 p-6 fixed h-full bg-slate-950/50 backdrop-blur-xl">
        <div className="flex items-center gap-3 mb-12 px-2">
          <span className="text-2xl">💰</span>
          <span className="font-black text-xl tracking-tighter">GlassWallet</span>
        </div>

        <nav className="space-y-2 flex-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
                  isActive 
                    ? 'bg-orange-500 text-white shadow-[0_0_20px_rgba(249,115,22,0.3)]' 
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <item.icon size={20} />
                <span className="font-bold">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* 2. Main Content Area */}
      <main className="flex-1 md:ml-64 pb-24 md:pb-0">
        {/* Top Header (Search/Notifications) */}
        <header className="p-6 flex justify-between items-center sticky top-0 bg-slate-950/80 backdrop-blur-md z-30">
          <div className="md:hidden flex items-center gap-2">
             <span className="text-xl">💰</span>
             <span className="font-black">GlassWallet</span>
          </div>
          <div className="hidden md:block">
             <h2 className="text-slate-400 font-medium">Welcome back, <span className="text-white font-bold">Tola</span></h2>
          </div>
          <button className="relative p-2 bg-white/5 rounded-xl border border-white/10">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-orange-500 rounded-full border-2 border-slate-950"></span>
          </button>
        </header>

        <div className="p-6 max-w-5xl mx-auto">
          {children}
        </div>
      </main>

      {/* 3. Mobile Bottom Tab Bar (Hidden on Desktop) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-2xl border-t border-white/10 px-6 py-3 flex justify-between items-center z-40">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link key={item.path} to={item.path} className="flex flex-col items-center gap-1">
              <div className={`p-2 rounded-xl transition-all ${isActive ? 'text-orange-500' : 'text-slate-500'}`}>
                <item.icon size={24} />
              </div>
              <span className={`text-[10px] font-bold ${isActive ? 'text-orange-500' : 'text-slate-500'}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}