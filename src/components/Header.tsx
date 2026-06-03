import { useEffect, useState } from "react";
import type { Page } from "../App";
import { useLang } from "../context/LangContext";
import { useTheme } from "../context/ThemeContext";

interface Props {
  onNavigate: (p: Page) => void;
}

export default function Header({ onNavigate }: Props) {
  const [scroll, setScroll] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang } = useLang();

  useEffect(() => {
    const h = () => setScroll(window.scrollY > -10);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const headerBg = scroll
    ? theme === "light"
      ? "white"
      : "#1A1A1A"
    : "transparent";

  const textColor = theme === "light" ? "#380f3b" : "#D8B4FE";

  return (
    <header
      style={{
        position: "fixed",
        width: "100%",
        padding: "16px 0",
        background: headerBg,
        boxShadow: scroll ? "0 10px 30px rgba(0,0,0,.06)" : "none",
        zIndex: 99,
        transition: "0.4s"
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: 1200,
          height: 80,
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        {/* Logo + Nome */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img
            src="/crlogo.png"
            alt="Camila Reis Logo"
            style={{ width: 48, height: 48, borderRadius: 8 }}
          />
          <span style={{ fontSize: 20, fontWeight: 700, color: textColor }}>
            Camila Reis
          </span>
        </div>

        {/* Navegação horizontal */}
        <nav style={{ display: "flex", gap: 20, alignItems: "center" }}>
          <button
            style={{ ...styles.navBtn, color: textColor }}
            onClick={() => onNavigate("home")}
          >
            {lang === "en" ? "Home" : "Início"}
          </button>
          <button
            style={{ ...styles.navBtn, color: textColor }}
            onClick={() => onNavigate("about")}
          >
            {lang === "en" ? "About" : "Sobre"}
          </button>
          <button
            style={{ ...styles.navBtn, color: textColor }}
            onClick={() => onNavigate("projects")}
          >
            {lang === "en" ? "Projects" : "Projetos"}
          </button>
          <button
            style={{ ...styles.navBtn, color: textColor }}
            onClick={() => onNavigate("contact")}
          >
            {lang === "en" ? "Contact" : "Contato"}
          </button>

          {/* Botões Dark/Light e EN/PT */}
          <div style={{ display: "flex", gap: 12, marginLeft: 24 }}>
            <button
              style={{ ...styles.toggleBtn, color: textColor }}
              onClick={toggleTheme}
              title={theme === "light" ? "Switch to Dark" : "Switch to Light"}
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
            <button
              style={{ ...styles.toggleBtn, color: textColor }}
              onClick={toggleLang}
              title={lang === "en" ? "Mudar para PT" : "Switch to EN"}
            >
              {lang.toUpperCase()}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

const styles = {
  navBtn: {
    background: "transparent",
    border: "none",
    fontSize: 16,
    fontWeight: 600,
    cursor: "pointer",
    padding: "8px 12px",
    borderRadius: 8,
    transition: "0.3s",
  } as React.CSSProperties,

  toggleBtn: {
    background: "transparent",
    border: "2px solid",
    borderColor: "currentColor",
    borderRadius: 6,
    fontSize: 14,
    padding: "4px 8px",
    cursor: "pointer",
    transition: "0.3s",
  } as React.CSSProperties,
};