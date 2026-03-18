import { useLang } from "../context/LangContext";
import { useTheme } from "../context/ThemeContext";
import type { CSSProperties } from "react";
import Footer from "../components/Footer";

export default function Contact() {
  const { lang } = useLang();
  const { theme } = useTheme();

  const bg = theme === "light" ? "#F7F4F2" : "#121212";
  const text = theme === "light" ? "#111" : "#EEE";
  const card = theme === "light" ? "#fff" : "#1E1E1E";

  return (
    <>
      <section style={{ ...styles.section, background: bg, color: text }}>
        <div style={styles.container}>
          
          <h1 style={styles.title}>
            {lang === "en"
              ? "Let's Work Together"
              : "Vamos Trabalhar Juntos"}
          </h1>

          <p style={styles.subtitle}>
            {lang === "en"
              ? "I'm open to opportunities in Power Platform, RPA and automation projects."
              : "Estou aberta a oportunidades em Power Platform, RPA e projetos de automação."}
          </p>

          <div style={{ ...styles.contactCard, background: card }}>

            <a
              href="mailto:camilalaurindoreis@gmail.com"
              style={{ ...styles.contactButton, background: "#7D5FFF" }}
            >
              📧 {lang === "en" ? "Send Email" : "Enviar Email"}
            </a>

            <a
              href="https://www.linkedin.com/in/camilalaurindoreis/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...styles.contactButton, background: "#0A66C2" }}
            >
              💼 LinkedIn
            </a>

            <a
              href="https://wa.me/5511988033775"
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...styles.contactButton, background: "#25D366" }}
            >
              💬 WhatsApp
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
    gap: 24,
    alignItems: "center",
    textAlign: "center"
  },

  title: {
    fontSize: 42,
    margin: 0
  },

  subtitle: {
    fontSize: 18,
    maxWidth: 600
  },

  contactCard: {
    marginTop: 30,
    padding: 40,
    borderRadius: 20,
    display: "flex",
    gap: 20,
    flexWrap: "wrap",
    justifyContent: "center"
  },

  contactButton: {
    padding: "16px 28px",
    borderRadius: 14,
    color: "#fff",
    fontWeight: 700,
    textDecoration: "none",
    fontSize: 16,
    transition: "0.3s",
    minWidth: 180
  }
};