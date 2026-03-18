import { useLang } from "../context/LangContext";
import { useTheme } from "../context/ThemeContext";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";

export default function About() {
  const { lang } = useLang();
  const { theme } = useTheme();
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReveal(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const bgColor = theme === "light" ? "#F7F4F2" : "#121212";
  const textColor = theme === "light" ? "#111" : "#EEE";
  const cardBg = theme === "light" ? "#fff" : "#1E1E1E";
  const cardShadow = theme === "light"
    ? "0 20px 40px rgba(0,0,0,.08)"
    : "0 20px 40px rgba(255,255,255,.05)";

  const cards = [
    {
      icon: "⚡",
      title: lang === "en" ? "Power Platform & Low-Code" : "Power Platform & Low-Code",
      subtitle:
        lang === "en"
          ? "Building apps and automations to optimize processes."
          : "Criando apps e automações para otimizar processos."
    },
    {
      icon: "🤖",
      title: lang === "en" ? "RPA & Automation" : "RPA & Automação",
      subtitle:
        lang === "en"
          ? "Automating workflows with UiPath and Pipefy."
          : "Automatizando fluxos de trabalho com UiPath e Pipefy."
    },
  
    {
      icon: "🚀",
      title: lang === "en" ? "Impact & Efficiency" : "Impacto & Eficiência",
      subtitle:
        lang === "en"
          ? "Designing solutions that generate real business results."
          : "Desenvolvendo soluções que geram resultados reais."
    }
  ];

  return (
    <section style={{ ...styles.section, background: bgColor, color: textColor }}>
      <div style={styles.container}>
        <h1 style={styles.headline}>
          {lang === "en" ? "Hi, I'm Camila!" : "Oi, eu sou a Camila!"}
        </h1>
        <p style={styles.subline}>
          {lang === "en"
            ? "Low-Code Automation Developer focused on Power Platform, building digital solutions and automating processes."
            : "Desenvolvedora Low-Code & RPA, focada em Power Platform, criando soluções digitais e automatizando processos."}
        </p>

        <div style={styles.cardsContainer}>
          {cards.map((c, i) => (
            <div
              key={i}
              style={{
                ...styles.card,
                background: cardBg,
                boxShadow: cardShadow,
                transform: reveal ? "translateY(0)" : "translateY(20px)",
                opacity: reveal ? 1 : 0,
                transition: `0.5s ease ${(i + 1) * 0.2}s`
              }}
            >
              <div style={styles.icon}>{c.icon}</div>
              <h3 style={styles.cardTitle}>{c.title}</h3>
              <p style={styles.cardSubtitle}>{c.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  section: { padding: "140px 20px" },
  container: { maxWidth: 1280, margin: "auto", display: "flex", flexDirection: "column", gap: 40 },
  headline: { fontSize: 42, fontWeight: 700, margin: 0 },
  subline: { fontSize: 18, lineHeight: 1.6 },
  cardsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 24
  },
  card: {
    padding: 24,
    borderRadius: 16,
    cursor: "default",
    textAlign: "center",
    transition: "0.3s",
    display: "flex",
    flexDirection: "column",
    gap: 12,
    position: "relative",
    overflow: "hidden"
  },
  icon: { fontSize: 32, color: "#380f3b" }, // roxo do header
  cardTitle: { fontSize: 16, fontWeight: 600, color: "#380f3b" },
  cardSubtitle: { fontSize: 14, color: "#555" }
};