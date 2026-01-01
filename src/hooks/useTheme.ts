import { useEffect, useState } from "react";

export type Theme = 'Light' | 'dark' | 'system'

export function useTheme() {
  // 1. Initialize from localStorage or System Preference
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem("theme") as Theme) || "system"
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
   const applyTheme = () => {
    let activeTheme = theme;

    if (theme === 'system') {
      console.log(window.matchMedia('prefers-color-scheme'))
      activeTheme = window.matchMedia('prefers-color-scheme: dark').matches 
      ? 'dark'
      : 'Light';
        
    }

    if (activeTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    
   };
   
  
    
      applyTheme();
      localStorage.setItem("theme", theme)
    
  }, [theme]);

  return { theme, setTheme };
}