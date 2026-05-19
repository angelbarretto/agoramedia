import { useEffect, useState, useCallback } from 'react';

const KEY = 'agora-theme';

export function useDarkMode() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const stored = window.localStorage.getItem(KEY);
    if (stored === 'dark') return true;
    // Default to light to match theagoramedia.com; ignore OS dark-mode preference.
    return false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    window.localStorage.setItem(KEY, isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggle = useCallback(() => setIsDark(v => !v), []);
  return { isDark, toggle };
}
