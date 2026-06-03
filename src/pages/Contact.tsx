import { useLang } from "../context/LangContext";
import { useTheme } from "../context/ThemeContext";
import type { CSSProperties } from "react";
import Footer from "../components/Footer";

export default function Contact() {
  const { lang } = useLang();
  const { theme } = useTheme();

  const isDark = theme === "dark";

  const colors = {
    bg: isDark ? "#070A12" : "#F7F8FC",
    panel: isDark ? "#0C1220" : "#FFFFFF",
    text: isDark ? "#EAF0FF" : "#0F172A",
    sub: isDark ? "#9AA4B2" : "#64748B",
    border: isDark ? "rgba(255,255,255,0.08)" : "#E6EAF2",

    // NOVA PALETA (mais premium)
    accent: isDark ? "#4DA3FF" : "#2563EB",
    accentSoft: isDark ? "rgba(77,163,255,0.15)" : "rgba(37,99,235,0.08)",

    glow: isDark ? "rgba(77,163,255,0.25)" : "rgba(37,99,235,0.15)"
  };

  return (
    <>
      <section style={{ ...styles.section, background: colors.bg }}>
        <div style={styles.wrapper}>
          
          {/* LEFT */}
          <div style={styles.left}>
            <span style={{ ...styles.badge, color: colors.accent }}>
              {lang === "en" ? "Contact" : "Contato"}
            </span>

            <h1 style={{ ...styles.title, color: colors.text }}>
              {lang === "en"
                ? "Let’s build something!"
                : "Vamos construir algo!"}
            </h1>

            <p style={{ ...styles.subtitle, color: colors.sub }}>
              Power Platform • Automation • Digital Transformation
            </p>

            <div
              style={{
                ...styles.highlightBox,
                background: colors.accentSoft,
                border: `1px solid ${colors.border}`
              }}
            >
              <p style={{ color: colors.text, margin: 0, fontWeight: 500 }}>
                {lang === "en"
                  ? "Fast response • Direct communication • Professional inquiries"
                  : "Resposta rápida • Contato direto • Projetos profissionais"}
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div
            style={{
              ...styles.right,
              background: colors.panel,
              border: `1px solid ${colors.border}`,
              boxShadow: isDark
                ? `0 0 60px ${colors.glow}`
                : "0 20px 50px rgba(0,0,0,0.06)"
            }}
          >
            <h3 style={{ color: colors.text, marginBottom: 10 }}>
              {lang === "en" ? "Start a conversation" : "Iniciar conversa"}
            </h3>

            <p style={{ color: colors.sub, fontSize: 14, marginBottom: 20 }}>
              {lang === "en"
                ? "Choose your preferred channel"
                : "Escolha o canal de contato"}
            </p>

            <a
              href="mailto:camilalaurindoreis@gmail.com"
              style={{
                ...styles.primaryBtn,
                background: colors.accent,
                boxShadow: `0 10px 25px ${colors.glow}`
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
                border: `1px solid ${colors.border}`,
                color: colors.text
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
                border: `1px solid ${colors.border}`,
                color: colors.text
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
  section: {
    padding: "120px 20px"
  },

  wrapper: {
    maxWidth: 1100,
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "1.2fr 1fr",
    gap: 60,
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
    fontSize: 56,
    fontWeight: 800,
    lineHeight: 1.05,
    margin: "14px 0 18px"
  },

  subtitle: {
    fontSize: 18,
    lineHeight: 1.7,
    maxWidth: 520
  },

  highlightBox: {
    marginTop: 30,
    padding: 18,
    borderRadius: 14
  },

  right: {
    padding: 40,
    borderRadius: 24,
    display: "flex",
    flexDirection: "column",
    gap: 14
  },

  primaryBtn: {
    padding: "14px 18px",
    borderRadius: 12,
    color: "#fff",
    fontWeight: 700,
    textDecoration: "none",
    textAlign: "center"
  },

  secondaryBtn: {
    padding: "14px 18px",
    borderRadius: 12,
    fontWeight: 600,
    textDecoration: "none",
    textAlign: "center",
    background: "transparent"
  }
};