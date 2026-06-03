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
  const [isMobile, setIsMobile] = useState(false);

  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang } = useLang();

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const headerBg =
    theme === "light"
      ? "rgba(255,255,255,0.85)"
      : "rgba(10,10,10,0.85)";

  const textColor = theme === "light" ? "#380f3b" : "#D8B4FE";

  const overlayBg = "rgba(0,0,0,0.45)";

  const navItems = [
    { label: lang === "en" ? "Home" : "Início", page: "home" as Page },
    { label: lang === "en" ? "About" : "Sobre", page: "about" as Page },
    { label: lang === "en" ? "Projects" : "Projetos", page: "projects" as Page },
    { label: lang === "en" ? "Contact" : "Contato", page: "contact" as Page }
  ];

  return (
    <>
      {/* HEADER */}
      <header
        style={{
          position: "fixed",
          width: "100%",
          padding: "32px 0",
          background: headerBg,
          backdropFilter: "blur(10px)",
          boxShadow: scroll ? "0 10px 30px rgba(0,0,0,.08)" : "none",
          zIndex: 99
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
              alt="Logo"
              style={{ width: 36, height: 36, borderRadius: 8 }}
            />
            <span style={{ fontSize: 17, fontWeight: 700, color: textColor }}>
              Camila Reis
            </span>
          </div>

          {/* DESKTOP NAV (NÃO FOI REMOVIDO) */}
          {!isMobile && (
            <nav style={{ display: "flex", gap: 16, alignItems: "center" }}>
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => onNavigate(item.page)}
                  style={{
                    background: "transparent",
                    border: "none",
                    fontSize: 16,
                    fontWeight: 600,
                    cursor: "pointer",
                    color: textColor,
                    padding: "6px 8px"
                  }}
                >
                  {item.label}
                </button>
              ))}

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
            </nav>
          )}

          {/* MOBILE BUTTON */}
          {isMobile && (
            <button
              onClick={() => setOpen(true)}
              style={{
                background: "transparent",
                border: "none",
                fontSize: 24,
                color: textColor,
                cursor: "pointer"
              }}
            >
              ☰
            </button>
          )}
        </div>
      </header>

      {/* OVERLAY */}
      {isMobile && open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: overlayBg,
            zIndex: 100
          }}
        />
      )}

      {/* DRAWER (FONTES AJUSTADAS) */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100%",
          width: "78%",
          maxWidth: 300,
          background: theme === "light" ? "#fff" : "#111",
          zIndex: 101,
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "0.3s ease",
          boxShadow: "-10px 0 30px rgba(0,0,0,0.25)",
          padding: 18,
          display: "flex",
          flexDirection: "column",
          gap: 14
        }}
      >
        {/* CLOSE */}
        <button
          onClick={() => setOpen(false)}
          style={{
            alignSelf: "flex-end",
            background: "transparent",
            border: "none",
            fontSize: 18,
            color: textColor,
            cursor: "pointer"
          }}
        >
          ✕
        </button>

        {/* NAV */}
        {navItems.map((item) => (
          <button
            key={item.page}
            onClick={() => {
              onNavigate(item.page);
              setOpen(false);
            }}
            style={{
              background: "transparent",
              border: "none",
              textAlign: "left",
              fontSize: 15,
              fontWeight: 600,
              color: textColor,
              padding: "8px 0",
              cursor: "pointer"
            }}
          >
            {item.label}
          </button>
        ))}

        <hr style={{ opacity: 0.2 }} />

        {/* ACTIONS */}
        <button
          onClick={toggleTheme}
          style={{
            background: "transparent",
            border: "1px solid currentColor",
            padding: "8px",
            borderRadius: 8,
            color: textColor,
            fontSize: 14
          }}
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>

        <button
          onClick={toggleLang}
          style={{
            background: "transparent",
            border: "1px solid currentColor",
            padding: "8px",
            borderRadius: 8,
            color: textColor,
            fontSize: 14
          }}
        >
          {lang.toUpperCase()}
        </button>
      </div>
    </>
  );
}