import { createContext, useContext, useEffect, useState } from "react";

export type ThemeContextTypes = {
  theme: string;
  setTheme: (c: string) => void;
};

const ThemeContext = createContext<ThemeContextTypes>({
  theme: "",
  setTheme: () => {},
});

export default function ThemeContextProvider({ children }: any) {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") !== "dark" ? "light" : "dark"
  );

  useEffect(() => {
    const root = window.document.documentElement;

    const removeOldTheme = theme == "dark" ? "light" : "dark";

    root.classList.remove(removeOldTheme);
    root.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  return useContext(ThemeContext);
};
