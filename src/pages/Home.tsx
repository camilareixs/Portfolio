import { useState } from "react";
import type { CSSProperties } from "react";
import { useLang } from "../context/LangContext";
import { useTheme } from "../context/ThemeContext";

type Props = { goProjects: () => void };

export default function Home({ goProjects }: Props) {
  const [hoveredMetric, setHoveredMetric] = useState<number | null>(null);
  const { lang } = useLang();
  const { theme } = useTheme();

  const text = {
    title:
      lang === "en"
        ? "Power Platform Developer"
        : "Desenvolvedora Power Platform",
    desc:
      lang === "en"
        ? "+3 years of experience delivering enterprise automation and low code solutions."
        : "+3 anos de experiência entregando automações e soluções low code.",
    viewProjects: lang === "en" ? "View Projects" : "Ver Projetos",
    downloadCV: lang === "en" ? "Download CV" : "Baixar CV"
  };

  const metrics = [
    { label: lang === "en" ? "Projects Power Platform" : "Projetos Power Platform", value: "+10", icon: "📁" },
    { label: lang === "en" ? "Pipefy Projects" : "Projetos Pipefy", value: "3", icon: "📊" },
    { label: lang === "en" ? "UiPath Projects" : "Projetos UiPath", value: "2", icon: "🤖" }
  ];

  const cv = "/public//cv.pdf"; 
  const logo = "/public/crlogo.png";

  // Cores adaptadas
  const bgColorHero = theme === "light" ? "#F7F4F2" : "#121212";
  const textColor = theme === "light" ? "#111" : "#EEE";
  const descColor = theme === "light" ? "#666" : "#CCC";
  const metricBg = theme === "light" ? "#fff" : "#222";
  const metricText = theme === "light" ? "#111" : "#EEE";
  const footerBg = theme === "light" ? "#EDE0F4" : "#1C1C1C";
  const footerText = theme === "light" ? "#333" : "#EEE";
  const linkColor = theme === "light" ? "#380f3b" : "#A178FF";

  return (
    <>
      {/* Hero Section */}
      <section style={{ ...styles.hero, background: bgColorHero }}>
        <div style={styles.container}>
          <div style={styles.left}>
            <h1 style={{ ...styles.title, color: textColor }}>{text.title}</h1>
            <p style={{ ...styles.desc, color: descColor }}>{text.desc}</p>

            <div style={styles.actions}>
              <button style={{
                ...styles.primaryBtn,
                background: theme === "light" ? "#380f3b" : "#A178FF",
                boxShadow: theme === "light" ? "0 20px 40px rgba(56,15,59,0.25)" : "0 20px 40px rgba(161,120,255,0.25)"
              }} onClick={goProjects}>
                {text.viewProjects}
              </button>
              <a href={cv} download>
                <button style={{
                  ...styles.ghostBtn,
                  border: theme === "light" ? "2px solid #380f3b" : "2px solid #A178FF",
                  color: theme === "light" ? "#380f3b" : "#A178FF"
                }}>
                  {text.downloadCV}
                </button>
              </a>
            </div>
          </div>

          <div style={styles.right}>
            <img src={logo} alt="Camila Reis Logo" style={styles.logoHero} />
          </div>
        </div>

        {/* Background blur shapes */}
        <div style={styles.shape1}></div>
        <div style={styles.shape2}></div>
      </section>

      {/* Metrics Section */}
      <section style={{ ...styles.metricsSection, background: theme === "light" ? "#fff" : "#1A1A1A" }}>
        <div style={styles.metricsContainer}>
          {metrics.map((m, i) => (
            <div
              key={i}
              style={{
                ...styles.metricCard,
                background: metricBg,
                color: metricText,
                transform: hoveredMetric === i ? "translateY(-6px)" : "none",
                boxShadow:
                  hoveredMetric === i
                    ? theme === "light"
                      ? "0 30px 60px rgba(0,0,0,.12)"
                      : "0 30px 60px rgba(255,255,255,.05)"
                    : theme === "light"
                      ? "0 10px 20px rgba(0,0,0,.05)"
                      : "0 10px 20px rgba(255,255,255,.02)"
              }}
              onMouseEnter={() => setHoveredMetric(i)}
              onMouseLeave={() => setHoveredMetric(null)}
            >
              <span style={styles.metricIcon}>{m.icon}</span>
              <h3 style={styles.metricValue}>{m.value}</h3>
              <p style={styles.metricLabel}>{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ ...styles.footer, background: footerBg, color: footerText }}>
        <div style={styles.footerContainer}>
          <ul style={styles.footerLinks}>
            {["Home", "About", "Projects", "Contact"].map((link) => (
              <li key={link} style={{ ...styles.footerLink, color: linkColor }}>{link}</li>
            ))}
          </ul>
        </div>
        <p style={{ ...styles.footerCopy, color: linkColor }}>© 2026 Camila Reis. All rights reserved.</p>
      </footer>
    </>
  );
}

const styles: Record<string, CSSProperties> = {
  hero: { minHeight: "90vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", padding: "0 20px" },
  container: { width: "100%", maxWidth: 1280, margin: "auto", display: "grid", gridTemplateColumns: "1.3fr 1fr", alignItems: "center", gap: 60 },
  left: { display: "flex", flexDirection: "column", gap: 16 },
  title: { fontSize: 56, lineHeight: 1.1, margin: 0 },
  desc: { fontSize: 18, lineHeight: 1.6 },
  actions: { display: "flex", gap: 16, marginTop: 24 },
  primaryBtn: { color: "#fff", padding: "14px 28px", borderRadius: 12, border: "none", fontSize: 15, fontWeight: 500, cursor: "pointer", transition: "0.3s" },
  ghostBtn: { border: "2px solid #380f3b", background: "transparent", padding: "14px 28px", borderRadius: 12, fontSize: 15, fontWeight: 500, cursor: "pointer", transition: "0.3s" },
  right: { display: "flex", justifyContent: "center", alignItems: "center" },
  logoHero: { width: 220, height: 220, objectFit: "contain" },
  shape1: { position: "absolute", top: -60, left: -100, width: 300, height: 300, background: "#61355a", filter: "blur(120px)", opacity: 0.2 },
  shape2: { position: "absolute", bottom: -40, right: -100, width: 300, height: 300, background: "#61355a", filter: "blur(120px)", opacity: 0.2 },
  metricsSection: { padding: "60px 20px", display: "flex", justifyContent: "center" },
  metricsContainer: { display: "flex", gap: 20, maxWidth: 900, width: "100%", justifyContent: "space-around" },
  metricCard: { flex: 1, padding: 20, borderRadius: 16, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", transition: "0.3s", cursor: "default" },
  metricIcon: { fontSize: 26 }, metricValue: { fontSize: 22, margin: 4 }, metricLabel: { fontSize: 14, color: "#777" },
  footer: { padding: "30px 20px", textAlign: "center" },
  footerContainer: { display: "flex", flexDirection: "column", alignItems: "center", gap: 12 },
  footerLinks: { display: "flex", gap: 20, listStyle: "none", padding: 0, margin: 0 },
  footerLink: { cursor: "pointer", fontWeight: 500, transition: "0.3s" },
  footerCopy: { marginTop: 16, fontSize: 12 }
};