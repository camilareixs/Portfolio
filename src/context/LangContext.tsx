import type { createContext, useState, ReactNode, useContext } from "react";

type Lang = "pt" | "en";

interface LangContextProps {
  lang: Lang;
  toggleLang: () => void;
}

const LangContext = createContext<LangContextProps>({
  lang: "en",
  toggleLang: () => {}
});

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");
  const toggleLang = () => setLang((l) => (l === "en" ? "pt" : "en"));
  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);