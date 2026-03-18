// src/pages/Case.tsx

import { useLang } from "../context/LangContext";
import { useTheme } from "../context/ThemeContext";
import type { CSSProperties } from "react";
import type { Project } from "./MyProjects";
import Footer from "../components/Footer";

interface Props {
  project: Project;
  goBack: () => void;
}

export default function Case({ project, goBack }: Props) {
  const { lang } = useLang();
  const { theme } = useTheme();

  const bg = theme === "light" ? "#F7F4F2" : "#121212";
  const text = theme === "light" ? "#111" : "#EEE";
  const card = theme === "light" ? "#fff" : "#1E1E1E";
  const purple = "#7D5FFF";

  return (
    <>
      <section style={{ ...styles.section, background: bg, color: text }}>
        <div style={styles.container}>

          <button style={{ ...styles.back, color: text }} onClick={goBack}>
            ← {lang === "en" ? "Back to Projects" : "Voltar aos Projetos"}
          </button>

          {/* HERO */}
          <div style={{ ...styles.hero, background: card }}>
            <h1 style={styles.title}>{project.title}</h1>

            <div style={styles.tags}>
              {project.tags.map((t, i) => (
                <span key={i} style={{ ...styles.tag, background: purple }}>
                  {t}
                </span>
              ))}
            </div>

            <p style={styles.short}>{project.shortDesc}</p>

            <div style={styles.benefitBox}>
              ⭐ {lang === "en" ? "Business Impact:" : "Impacto no negócio:"}
              <strong> {project.benefit}</strong>
            </div>
          </div>

          {/* LAYOUT GRID */}
          <div style={styles.layout}>

            {/* SIDEBAR */}
            <aside style={{ ...styles.sidebar, background: card }}>

              <h3 style={styles.sidebarTitle}>
                {lang === "en" ? "Project Info" : "Informações"}
              </h3>

              <div style={styles.infoBlock}>
                <span style={styles.infoLabel}>Stack</span>
                <span>Power Apps · Power Automate · Dataverse</span>
              </div>

              <div style={styles.infoBlock}>
                <span style={styles.infoLabel}>
                  {lang === "en" ? "Complexity" : "Complexidade"}
                </span>
                <span>Advanced</span>
              </div>

              <div style={styles.infoBlock}>
                <span style={styles.infoLabel}>
                  {lang === "en" ? "Duration" : "Duração"}
                </span>
                <span>3 months</span>
              </div>

              <div style={styles.infoBlock}>
                <span style={styles.infoLabel}>
                  {lang === "en" ? "Team Size" : "Time"}
                </span>
                <span>4 people</span>
              </div>

              <div style={styles.infoBlock}>
                <span style={styles.infoLabel}>
                  {lang === "en" ? "Your Role" : "Seu Papel"}
                </span>
                <span>Automation Developer</span>
              </div>

              <div style={styles.infoBlock}>
                <span style={styles.infoLabel}>
                  {lang === "en" ? "Industry" : "Indústria"}
                </span>
                <span>Environmental Services</span>
              </div>

            </aside>

            {/* MAIN CONTENT */}
            <div style={styles.mainContent}>

              <div style={styles.block}>
                <h2 style={styles.h2}>
                  {lang === "en" ? "Solution Architecture" : "Arquitetura da Solução"}
                </h2>

                <p style={styles.p}>
                  {lang === "en"
                    ? "The solution was built using Microsoft Power Platform. Power Apps provides the user interface enabling business users to manage requests and operations. Dataverse acts as the centralized relational database ensuring scalability, security roles and data governance."
                    : "A solução foi construída utilizando Microsoft Power Platform. O Power Apps fornece a interface permitindo que usuários gerenciem solicitações e operações. O Dataverse atua como banco relacional central garantindo escalabilidade, papéis de segurança e governança de dados."}
                </p>

                <p style={styles.p}>
                  {lang === "en"
                    ? "Power Automate flows orchestrate business logic including approvals, SLA monitoring, automated notifications via Teams and Outlook, and integrations with external APIs and ERP systems."
                    : "Os fluxos do Power Automate orquestram a lógica de negócio incluindo aprovações, monitoramento de SLA, notificações automáticas via Teams e Outlook e integrações com APIs externas e sistemas ERP."}
                </p>

                <p style={styles.p}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer facilisis massa non commodo luctus. Sed ut metus
                  suscipit, volutpat elit vel, pretium neque.
                </p>
              </div>

              <div style={styles.block}>
                <h2 style={styles.h2}>
                  {lang === "en" ? "Measured Results" : "Resultados Medidos"}
                </h2>

                <div style={styles.grid}>
                  <div style={{ ...styles.metric, background: card }}>
                    <h3 style={styles.metricNumber}>70%</h3>
                    <p>{lang === "en" ? "Manual work reduction" : "Redução manual"}</p>
                  </div>

                  <div style={{ ...styles.metric, background: card }}>
                    <h3 style={styles.metricNumber}>$100+</h3>
                    <p>{lang === "en" ? "Weekly savings" : "Economia semanal"}</p>
                  </div>

                  <div style={{ ...styles.metric, background: card }}>
                    <h3 style={styles.metricNumber}>3x</h3>
                    <p>{lang === "en" ? "Process speed increase" : "Velocidade do processo"}</p>
                  </div>

                  <div style={{ ...styles.metric, background: card }}>
                    <h3 style={styles.metricNumber}>99%</h3>
                    <p>{lang === "en" ? "Data accuracy" : "Precisão dos dados"}</p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

const styles: Record<string, CSSProperties> = {
  section: { padding: "120px 20px" },

  container: {
    maxWidth: 1100,
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    gap: 40
  },

  back: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: 16
  },

  hero: {
    padding: 30,
    borderRadius: 18,
    display: "flex",
    flexDirection: "column",
    gap: 10
  },

  title: { fontSize: 38, margin: 0 },

  tags: { display: "flex", gap: 8, flexWrap: "wrap" },

  tag: {
    padding: "4px 12px",
    borderRadius: 8,
    color: "#fff",
    fontWeight: 600,
    fontSize: 12
  },

  short: { fontSize: 16 },

  benefitBox: { marginTop: 10, fontSize: 15 },

  layout: {
    display: "grid",
    gridTemplateColumns: "260px 1fr",
    gap: 40,
    alignItems: "start"
  },

  sidebar: {
    padding: 24,
    borderRadius: 18,
    position: "sticky",
    top: 120,
    display: "flex",
    flexDirection: "column",
    gap: 18
  },

  sidebarTitle: { fontSize: 20, margin: 0 },

  infoBlock: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
    fontSize: 14
  },

  infoLabel: {
    fontWeight: 700,
    color: "#7D5FFF",
    fontSize: 12,
    textTransform: "uppercase"
  },

  mainContent: {
    display: "flex",
    flexDirection: "column",
    gap: 30
  },

  block: { display: "flex", flexDirection: "column", gap: 14 },

  h2: { fontSize: 24, margin: 0 },

  p: { fontSize: 15, lineHeight: 1.6 },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
    gap: 20
  },

  metric: {
    padding: 20,
    borderRadius: 14,
    textAlign: "center"
  },

  metricNumber: {
    fontSize: 30,
    margin: 0,
    color: "#7D5FFF"
  }
};