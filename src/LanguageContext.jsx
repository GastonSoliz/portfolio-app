import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("es");

  function handleToggle() {
    setLang((prevLang) => (prevLang === "es" ? "en" : "es"));
    console.log(lang);
  }

  return (
    <LanguageContext.Provider value={{ lang, handleToggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
