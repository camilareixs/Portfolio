import { useLang } from "../context/LangContext";
import { useTheme } from "../context/ThemeContext";
import type { CSSProperties } from "react";
import Footer from "../components/Footer";

export default function Contact() {
  const { lang } = useLang();
  const { theme } = useTheme();

  const isDark = theme === "dark";

  const bg = isDark ? "#020617" : "#F5F7FB";
  const text = isDark ? "#E8ECF8" : "#0F172A";
  const sub = isDark ? "#94A3B8" : "#64748B";
  const card = isDark ? "#0F172A" : "#FFFFFF";
  const border = isDark ? "#1E293B" : "#E6EAF2";
  const accent = "#7D5FFF";

  return (
    <>
      <section
        style={{
          ...styles.section,
          background: bg,
          color: text
        }}
      >
        <div style={styles.container}>

          <span
            style={{
              color: accent,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase"
            }}
          >
            {lang === "en"
              ? "Let's Connect"
              : "Vamos Conversar"}
          </span>

          <h1
            style={{
              ...styles.title,
              color: text
            }}
          >
            {lang === "en"
              ? "Let's Build Something Meaningful"
              : "Vamos Construir Algo Relevante"}
          </h1>

          <p
            style={{
              ...styles.subtitle,
              color: sub
            }}
          >
            {lang === "en"
              ? "Specialized in Power Platform, Intelligent Automation and Digital Transformation, helping organizations reduce operational effort, increase governance and accelerate business outcomes."
              : "Especializada em Power Platform, Automação Inteligente e Transformação Digital, ajudando empresas a reduzir esforço operacional, aumentar governança e acelerar resultados de negócio."}
          </p>

          <div
            style={{
              ...styles.contactCard,
              background: card,
              border: `1px solid ${border}`
            }}
          >

            <div
              style={{
                width: "100%",
                textAlign: "center",
                marginBottom: 8,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: accent
              }}
            >
              Contact Channels
            </div>

            <a
              href="mailto:camilalaurindoreis@gmail.com"
              style={{
                ...styles.contactButton,
                background: isDark ? "#1E293B" : "#111"
              }}
            >
              Email
            </a>

            <a
              href="https://www.linkedin.com/in/camilalaurindoreis/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...styles.contactButton,
                background: isDark ? "#1E293B" : "#111"
              }}
            >
              LinkedIn
            </a>

            <a
              href="https://wa.me/5511988033775"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...styles.contactButton,
                background: isDark ? "#1E293B" : "#111"
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
    padding: "140px 20px"
  },

  container: {
    maxWidth: 900,
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center"
  },

  title: {
    fontSize: 56,
    fontWeight: 700,
    lineHeight: 1.1,
    letterSpacing: "-2px",
    margin: "16px 0 24px"
  },

  subtitle: {
    fontSize: 18,
    maxWidth: 760,
    lineHeight: 1.8,
    marginBottom: 40
  },

  contactCard: {
    width: "100%",
    padding: 40,
    borderRadius: 28,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 16
  },

  contactButton: {
    minWidth: 180,
    padding: "16px 28px",
    borderRadius: 14,
    color: "#fff",
    textDecoration: "none",
    fontWeight: 700,
    fontSize: 14,
    letterSpacing: 1,
    textTransform: "uppercase",
    transition: "0.25s ease"
  }
};