import { useLang } from "../context/LangContext";
import { useTheme } from "../context/ThemeContext";
import { useState, useEffect } from "react";
import type { CSSProperties } from "react";
import Footer from "../components/Footer";

export default function Contact() {
  const { lang } = useLang();
  const { theme } = useTheme();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const isDark = theme === "dark";

  const colors = {
    bg: isDark ? "#1A1A1A" : "#fff",
    panel: isDark
      ? "rgba(255,255,255,0.03)"
      : "rgba(0,0,0,0.03)",
    text: isDark ? "#EEE" : "#111",
    sub: isDark ? "#AAA" : "#555",
    border: isDark
      ? "rgba(255,255,255,0.08)"
      : "rgba(0,0,0,0.06)",
    accent: isDark ? "#8f5a89" : "#60365c"
  };

  return (
    <>
      <section
        style={{
          ...styles.section,
          background: colors.bg,
          padding: isMobile ? "60px 20px" : "90px 20px"
        }}
      >
        <div
          style={{
            ...styles.wrapper,
            gridTemplateColumns: isMobile ? "1fr" : "1.3fr 0.9fr",
            gap: isMobile ? 40 : 80
          }}
        >
          <div style={styles.left}>
            <span
              style={{
                ...styles.badge,
                color: colors.accent
              }}
            >
              {lang === "en" ? "CONTACT" : "CONTATO"}
            </span>

            <h1
              style={{
                ...styles.title,
                color: colors.text,
                fontSize: isMobile ? 36 : 56
              }}
            >
              {lang === "en"
                ? "Let's create something meaningful."
                : "Vamos criar algo que gere impacto."}
            </h1>

            <p
              style={{
                ...styles.subtitle,
                color: colors.sub
              }}
            >
              {lang === "en"
                ? "I'm open to discussing new projects, automation opportunities and digital transformation initiatives."
                : "Estou aberta para conversar sobre novos projetos, oportunidades de automação e iniciativas de transformação digital."}
            </p>

            <p
              style={{
                color: colors.sub,
                lineHeight: 1.8,
                maxWidth: 620,
                marginTop: 2,
                fontSize: isMobile ? 14 : 16
              }}
            >
            </p>
          </div>

          <div
            style={{
              ...styles.card,
              background: colors.panel,
              border: `1px solid ${colors.border}`
            }}
          >
            <h3
              style={{
                color: colors.text,
                marginTop: 0,
                marginBottom: 8
              }}
            >
              {lang === "en"
                ? "Get in Touch"
                : "Entre em Contato"}
            </h3>

            <p
              style={{
                color: colors.sub,
                fontSize: 14,
                marginBottom: 24
              }}
            >
              {lang === "en"
                ? "Choose the channel that works best for you."
                : "Escolha o canal que for mais conveniente para você."}
            </p>

            <a
              href="mailto:camilalaurindoreis@gmail.com"
              style={{
                ...styles.primaryBtn,
                background: colors.accent
              }}
            >
              Email
            </a>

            <a
              href="https://www.linkedin.com/in/camilalaurindoreis/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...styles.secondaryBtn,
                color: colors.text,
                border: `1px solid ${colors.border}`
              }}
            >
              LinkedIn
            </a>

            <a
              href="https://wa.me/5511988033775"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...styles.secondaryBtn,
                color: colors.text,
                border: `1px solid ${colors.border}`
              }}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

const styles: Record<string, CSSProperties> = {
  section: {},

  wrapper: {
    maxWidth: 1100,
    margin: "0 auto",
    display: "grid",
    alignItems: "center"
  },

  left: {
    display: "flex",
    flexDirection: "column"
  },

  badge: {
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: 2,
    textTransform: "uppercase"
  },

  title: {
    fontWeight: 700,
    lineHeight: 1.1,
    margin: "14px 0 18px"
  },

  subtitle: {
    fontSize: 18,
    lineHeight: 1.8,
    maxWidth: 620
  },

  card: {
    padding: 32,
    borderRadius: 16,
    display: "flex",
    flexDirection: "column",
    gap: 12
  },

  primaryBtn: {
    padding: "12px 18px",
    borderRadius: 10,
    color: "#fff",
    fontWeight: 600,
    textDecoration: "none",
    textAlign: "center"
  },

  secondaryBtn: {
    padding: "12px 18px",
    borderRadius: 10,
    fontWeight: 500,
    textDecoration: "none",
    textAlign: "center",
    background: "transparent"
  }
};
