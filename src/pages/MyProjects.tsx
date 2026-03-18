// src/pages/MyProjects.tsx
import { useLang } from "../context/LangContext";
import { useTheme } from "../context/ThemeContext";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

export interface Project {
  title: string;
  tags: string[];
  shortDesc: string;
  benefit: string;
  description: string;
}

interface Props {
  openCase: (project: Project) => void;
}

export default function MyProjects({ openCase }: Props) {
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

  const tagColors: Record<string,string> = {
    "Power Platform": "#7D5FFF",
    "Pipefy": "#4DA6FF",
    "RPA": "#FF914D"
  };

  const projects: Project[] = [
    { title: "Power Apps Governance", tags: ["Power Platform"], shortDesc: lang === "en" ? "Monitors environments and compliance" : "Monitora ambientes e conformidade", benefit: lang === "en" ? "Saved 20h/week" : "Economizou 20h/semana", description: lang === "en" ? "Full governance solution to monitor Power Platform usage." : "Solução completa de governança para monitorar uso do Power Platform." },
    { title: "Vendor RPA", tags: ["RPA"], shortDesc: lang === "en" ? "Automates vendor onboarding" : "Automatiza cadastro de fornecedores", benefit: lang === "en" ? "Saved $100/week" : "Economizou R$500/semana", description: lang === "en" ? "UiPath bot automating vendor workflows." : "Bot UiPath automatizando fluxos de fornecedores." },
    { title: "Pipefy Automation", tags: ["Pipefy"], shortDesc: lang === "en" ? "Internal workflow automation" : "Automatiza fluxos internos", benefit: lang === "en" ? "Saved 15h/week" : "Economizou 15h/semana", description: lang === "en" ? "Improved process efficiency using Pipefy." : "Melhorou a eficiência dos processos usando Pipefy." },
    { title: "Inventory Tracker", tags: ["Power Platform"], shortDesc: lang === "en" ? "Track stock levels" : "Acompanha níveis de estoque", benefit: lang === "en" ? "Reduced errors 40%" : "Reduziu erros em 40%", description: lang === "en" ? "Power Apps app to monitor inventory and alerts." : "Aplicativo Power Apps para monitorar inventário e alertas." },
    { title: "Customer Feedback Bot", tags: ["RPA"], shortDesc: lang === "en" ? "Collects feedback automatically" : "Coleta feedback automaticamente", benefit: lang === "en" ? "Saved 10h/week" : "Economizou 10h/semana", description: lang === "en" ? "UiPath bot sending surveys and aggregating responses." : "Bot UiPath enviando pesquisas e agregando respostas." },
    { title: "Sales Dashboard", tags: ["Power Platform"], shortDesc: lang === "en" ? "Interactive dashboard for sales" : "Dashboard interativo de vendas", benefit: lang === "en" ? "Improved reporting" : "Acelerou relatórios", description: lang === "en" ? "Power BI + Power Apps dashboard for KPIs." : "Dashboard Power BI + Power Apps para KPIs." },
    { title: "Invoice Automation", tags: ["RPA"], shortDesc: lang === "en" ? "Automates invoice processing" : "Automatiza faturas", benefit: lang === "en" ? "Reduced processing time 70%" : "Reduziu tempo 70%", description: lang === "en" ? "UiPath bot for reading and registering invoices." : "Bot UiPath para ler e registrar faturas." },
    { title: "Employee Onboarding App", tags: ["Power Platform"], shortDesc: lang === "en" ? "Digital onboarding workflow" : "Onboarding digital", benefit: lang === "en" ? "Standardized process" : "Processo padronizado", description: lang === "en" ? "Power Apps app guiding new hires." : "Aplicativo Power Apps guiando novos colaboradores." },
    { title: "Support Ticket Automation", tags: ["Pipefy"], shortDesc: lang === "en" ? "Automates ticket routing" : "Automatiza tickets", benefit: lang === "en" ? "Saved 12h/week" : "Economizou 12h/semana", description: lang === "en" ? "Pipefy automates ticket assignment." : "Automação Pipefy atribuindo tickets." },
    { title: "Marketing Campaign Tracker", tags: ["Power Platform"], shortDesc: lang === "en" ? "Tracks campaign performance" : "Acompanha campanhas", benefit: lang === "en" ? "Improved ROI" : "Melhorou ROI", description: lang === "en" ? "Power Apps + Power BI tracking campaigns." : "Power Apps + Power BI acompanhando campanhas." }
  ];

  return (
    <>
      <section style={{ ...styles.section, background: bgColor, color: textColor }}>
        <div style={styles.container}>
          <h1 style={styles.headline}>{lang === "en" ? "My Projects" : "Meus Projetos"}</h1>
          <p style={styles.subline}>{lang === "en" ? "Click a project to see full details." : "Clique em um projeto para ver detalhes completos."}</p>

          <div style={styles.cardsContainer}>
            {projects.map((p,i) => (
              <div
                key={i}
                style={{
                  ...styles.card,
                  background: cardBg,
                  boxShadow: cardShadow,
                  transform: reveal ? "translateY(0)" : "translateY(20px)",
                  opacity: reveal ? 1 : 0,
                  transition: `0.5s ease ${(i+1)*0.1}s`
                }}
                onClick={() => openCase(p)}
              >
                <div style={styles.tagContainer}>
                  {p.tags.map((t, idx) => <span key={idx} style={{...styles.tag, background: tagColors[t]}}>{t}</span>)}
                </div>
                <h3 style={styles.cardTitle}>{p.title}</h3>
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
  container: { maxWidth: 1280, margin: "auto", display: "flex", flexDirection: "column", gap: 40 },
  headline: { fontSize: 42, fontWeight: 700, margin: 0 },
  subline: { fontSize: 18, lineHeight: 1.6 },
  cardsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 24
  },
  card: {
    padding: 20,
    borderRadius: 16,
    cursor: "pointer",
    textAlign: "center",
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
  cardTitle: { fontSize: 16, fontWeight: 600, color: "#380f3b" },
  cardSubtitle: { fontSize: 14, color: "#555" },
  cardBenefit: { fontSize: 13, fontWeight: 600, color: "#7D5FFF" }
};