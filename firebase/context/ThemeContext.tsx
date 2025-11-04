import React, { createContext, useState, ReactNode } from "react";

type ThemeType = "light" | "dark";

interface ThemeColors {
  background: string;
  text: string;
}

interface ThemeContextProps {
  theme: ThemeType;
  colors: ThemeColors;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps
);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>("light");

  const colors: Record<ThemeType, ThemeColors> = {
    light: {
      background: "orange",
      text: "white",
    },
    dark: {
      background: "red",
      text: "white",
    },
  };

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider
      value={{ theme, colors: colors[theme], toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
