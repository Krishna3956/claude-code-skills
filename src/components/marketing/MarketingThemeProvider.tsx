"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type MarketingTheme = "dark" | "light";

const STORAGE_KEY = "hwyk-marketing-theme";

const MarketingThemeContext = createContext<{
  theme: MarketingTheme;
  setTheme: (theme: MarketingTheme) => void;
  toggleTheme: () => void;
} | null>(null);

export function MarketingThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<MarketingTheme>(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "dark" || saved === "light") {
      return saved;
    }

    return "light";
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme: () => setTheme((current) => (current === "dark" ? "light" : "dark")),
    }),
    [theme],
  );

  return (
    <MarketingThemeContext.Provider value={value}>
      <div className="marketing-theme min-h-screen" data-marketing-theme={theme}>
        {children}
      </div>
    </MarketingThemeContext.Provider>
  );
}

export function useMarketingTheme() {
  const context = useContext(MarketingThemeContext);
  if (!context) {
    throw new Error("useMarketingTheme must be used inside MarketingThemeProvider");
  }

  return context;
}
