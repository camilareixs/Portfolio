import { useEffect, useState } from "react";
import type { Page } from "../App";
import { useLang } from "../context/LangContext";
import { useTheme } from "../context/ThemeContext";

interface Props {
  onNavigate: (p: Page) => void;
}

export default function Header({ onNavigate }: Props) {
  const [scroll, setScroll] = useState(false);
  const [open, setOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang } = useLang();

  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    const h = () => setScroll(window.scrollY > 10);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);


  const headerBg =
    theme === "light"
      ? "rgba(255,255,255,0.85)"
      : "rgba(10,10,10,0.85)";

  const textColor = theme === "light" ? "#380f3b" : "#D8B4FE";

  const navItems = [
    { label: lang === "en" ? "Home" : "Início", page: "home" as Page },
    { label: lang === "en" ? "About" : "Sobre", page: "about" as Page },
    { label: lang === "en" ? "Projects" : "Projetos", page: "projects" as Page },
    { label: lang === "en" ? "Contact" : "Contato", page: "contact" as Page }
  ];

  return (
    <header
      style={{
        position: "fixed",
        width: "100%",
        padding: "34px 0",
        background: headerBg,
        backdropFilter: "blur(10px)",
        boxShadow: scroll ? "0 10px 30px rgba(0,0,0,.08)" : "none",
        zIndex: 99,
        transition: "0.3s ease"
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: 1200,
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        {/* LOGO */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img
            src="/crlogo.png"
            alt="Camila Reis Logo"
            style={{ width: 38, height: 38, borderRadius: 8 }}
          />
          <span style={{ fontSize: 18, fontWeight: 700, color: textColor }}>
            Camila Reis
          </span>
        </div>

        {/* DESKTOP NAV */}
        {!isMobile && (
          <nav style={{ display: "flex", gap: 18, alignItems: "center" }}>
            {navItems.map((item) => (
              <button
                key={item.page}
                style={{
                  background: "transparent",
                  border: "none",
                  fontSize: 15,
                  fontWeight: 600,
                  cursor: "pointer",
                  padding: "6px 10px",
                  borderRadius: 8,
                  color: textColor
                }}
                onClick={() => onNavigate(item.page)}
              >
                {item.label}
              </button>
            ))}

            <div style={{ display: "flex", gap: 10, marginLeft: 16 }}>
              <button
                onClick={toggleTheme}
                style={{
                  border: "1px solid currentColor",
                  background: "transparent",
                  padding: "4px 8px",
                  borderRadius: 6,
                  color: textColor,
                  cursor: "pointer"
                }}
              >
                {theme === "light" ? "🌙" : "☀️"}
              </button>

              <button
                onClick={toggleLang}
                style={{
                  border: "1px solid currentColor",
                  background: "transparent",
                  padding: "4px 8px",
                  borderRadius: 6,
                  
                  color: textColor,
                  cursor: "pointer"
                }}
              >
                {lang.toUpperCase()}
              </button>
            </div>
          </nav>
        )}

        {/* MOBILE BUTTON */}
        {isMobile && (
          <button
            onClick={() => setOpen(!open)}
            style={{
  background: "transparent",
  border: "none",
  fontSize: 16,
  fontWeight: 600,
  color: textColor,
  padding: "8px 10px",
  cursor: "pointer",
  borderRadius: 8,
  transition: "0.2s ease"
}}
          >
            ☰
          </button>
        )}
      </div>

      {/* MOBILE MENU */}
      {isMobile && open && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            padding: 16,
            background: headerBg,
backdropFilter: "blur(10px)",
WebkitBackdropFilter: "blur(10px)",
            borderTop: "1px solid rgba(255,255,255,0.08)"
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.page}
              style={{
                background: "transparent",
                border: "none",
                textAlign: "left",
                fontSize: 16,
                fontWeight: 600,
                color: textColor,
                padding: "8px 0",
                cursor: "pointer"
              }}
              onClick={() => {
                onNavigate(item.page);
                setOpen(false);
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}