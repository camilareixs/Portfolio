// src/pages/MyProjects.tsx
import { useLang } from "../context/LangContext";
import { useTheme } from "../context/ThemeContext";
import { useEffect, useState, type CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

export interface Project {
  id: string;
  title: string;
  tags: string[];
  shortDesc: string;
  benefit: string;
  description: string;
}

export default function MyProjects() {
  const { lang } = useLang();
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReveal(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const bgColor = theme === "light" ? "#F7F4F2" : "#121212";
  const textColor = theme === "light" ? "#111" : "#EEE";
  const cardBg = theme === "light" ? "#fff" : "#1E1E1E";
  const cardShadow =
    theme === "light"
      ? "0 20px 40px rgba(0,0,0,.08)"
      : "0 20px 40px rgba(255,255,255,.05)";

  const tagColors: Record<string, string> = {
    "Power Platform": "#7D5FFF",
    Pipefy: "#4DA6FF",
    RPA: "#FF914D"
  };

  const projects: Project[] = [
    {
      id: "actus",
      title: "ACTUS – Enterprise Incident & Compliance Automation",
      tags: ["Power Platform"],
      shortDesc:
        lang === "en"
          ? "Enterprise platform for incident lifecycle and regulatory automation"
          : "Plataforma enterprise para ciclo de incidentes e automação regulatória",
      benefit:
        lang === "en"
          ? "Supports ~3000 users • Eliminated Excel compliance process"
          : "Suporta ~3000 usuários • Eliminou processo regulatório em Excel",
      description:
        "Power Apps enterprise solution integrated with SharePoint CSV ingestion via Dataflows and automated document delivery using Power Automate."
    },

    {
      id: "vendor",
      title: "Vendor RPA",
      tags: ["RPA"],
      shortDesc: "Automation of vendor onboarding lifecycle",
      benefit: "Saved 100h/month",
      description: "UiPath bots automated vendor creation and validation."
    }
  ];

  return (
    <>
      <section
        style={{ ...styles.section, background: bgColor, color: textColor }}
      >
        <div style={styles.container}>
          <h1 style={styles.headline}>
            {lang === "en" ? "My Projects" : "Meus Projetos"}
          </h1>

          <div style={styles.cardsContainer}>
            {projects.map((p, i) => (
              <div
                key={p.id}
                style={{
                  ...styles.card,
                  background: cardBg,
                  boxShadow: cardShadow,
                  transform: reveal ? "translateY(0)" : "translateY(20px)",
                  opacity: reveal ? 1 : 0,
                  transition: `0.5s ease ${(i + 1) * 0.1}s`
                }}
                onClick={() => navigate(`/case/${p.id}`)}
              >
                <div style={styles.tagContainer}>
                  {p.tags.map((t, idx) => (
                    <span
                      key={idx}
                      style={{
                        ...styles.tag,
                        background: tagColors[t]
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h3
                  style={{
                    ...styles.cardTitle,
                    color: theme === "light" ? "#380f3b" : "#C9A7FF"
                  }}
                >
                  {p.title}
                </h3>

                <p style={styles.cardSubtitle}>{p.shortDesc}</p>
                <p style={styles.cardBenefit}>{p.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

const styles: Record<string, CSSProperties> = {
  section: { padding: "140px 20px" },
  container: {
    maxWidth: 1280,
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    gap: 40
  },
  headline: { fontSize: 42, fontWeight: 700 },
  cardsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 24
  },
  card: {
    padding: 20,
    borderRadius: 16,
    cursor: "pointer",
    transition: "0.3s",
    display: "flex",
    flexDirection: "column",
    gap: 12
  },
  tagContainer: {
    display: "flex",
    gap: 6,
    justifyContent: "center",
    flexWrap: "wrap"
  },
  tag: {
    padding: "4px 10px",
    borderRadius: 8,
    color: "#fff",
    fontWeight: 600,
    fontSize: 12
  },
  cardTitle: { fontSize: 18, fontWeight: 700 },
  cardSubtitle: { fontSize: 14, color: "#777" },
  cardBenefit: { fontSize: 13, fontWeight: 700, color: "#7D5FFF" }
};