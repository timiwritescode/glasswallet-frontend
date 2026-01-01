import { Sun, Moon, Monitor } from "lucide-react";
import { useTheme, type Theme } from "../hooks/useTheme";


export function ThemePicker() {
  const { theme, setTheme } = useTheme(); // Assuming your hook provides setTheme

  const options = [
    { value: 'light', icon: Sun, label: 'Light' },
    { value: 'system', icon: Monitor, label: 'System' },
    { value: 'dark', icon: Moon, label: 'Dark' },
  ];

  return (
    <div className="flex bg-slate-100 dark:bg-white/5 p-1 rounded-2xl border border-slate-200 dark:border-white/10">
      {options.map((opt) => {
        const Icon = opt.icon;
        const isActive = theme === opt.value;

        return (
          <button
            key={opt.value}
            onClick={() => setTheme(opt.value as Theme)}
            className={`
              flex flex-1 items-center justify-center gap-2 px-3 py-2 rounded-xl transition-all duration-200
              ${isActive 
                ? "bg-white dark:bg-white/10 text-orange-500 shadow-sm ring-1 ring-black/5" 
                : "text-slate-500 hover:text-slate-900 dark:hover:text-white"}
            `}
          >
            <Icon size={18} />
            {/* Optional: Hide label on mobile if it's too cramped */}
            <span className="text-xs font-bold hidden sm:block">{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}