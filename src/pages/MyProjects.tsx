import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { useLang } from "../context/LangContext";
import Footer from "../components/Footer";

export interface Project {
  id: string;
  title: string;
  cover: string;
  users: string;
  region: string;
  domain: { pt: string; en: string };
  tech: string[];
  shortDesc: { pt: string; en: string };
  status?: "ongoing";
}

interface Props {
  openCase: (id: string) => void;
}

export default function MyProjects({ openCase }: Props) {
  const { theme } = useTheme();
  const { lang } = useLang();

  const isDark = theme === "dark";

  const bg = isDark ? "#1A1A1A" : "#F6F7FB";
  const cardBg = isDark ? "#232326" : "#fff";
  const text = isDark ? "#EEE" : "#111";
  const descColor = isDark ? "#AAA" : "#555";
  const primary = "#7D5FFF";

  const projects: Project[] = [
    {
      id: "actus",
      title: "ACTUS Platform",
      cover: "/public/actus.jpg",
      users: "2800+ users",
      region: "LATAM",
      domain: { pt: "Compliance", en: "Compliance" },
      tech: ["Power Apps", "Dataverse", "Automation"],
      shortDesc: {
        pt: "Plataforma enterprise que substituiu sistemas legados e planilhas.",
        en: "Enterprise platform replacing legacy systems and spreadsheets."
      }
    },
    {
      id: "bm",
      title: "Measurement Report",
      cover: "/public/bmop.png",
      users: "-85% manual work",
      region: "Brasil",
      domain: { pt: "Financeiro", en: "Finance" },
      tech: ["Power Apps", "Automation", "Dataverse"],
      shortDesc: {
        pt: "Automação de validação e pagamento de fornecedores.",
        en: "Automation of supplier validation and payments."
      }
    },
    {
      id: "remessa",
      title: "Automated Remittance Pipeline",
      cover: "https://images.unsplash.com/photo-1605902711622-cfb43c4437cd?q=80&w=1400",
      users: "Finance Team",
      region: "Brazil",
      domain: { pt: "Financeiro", en: "Finance" },
      tech: ["Dataflows", "SharePoint", "Automation"],
      shortDesc: {
        pt: "Pipeline automatizado integrado ao SAP.",
        en: "Automated pipeline integrated with SAP."
      }
    },
    {
      id: "ipo",
      title: "IPO Management App",
      cover: "https://images.unsplash.com/photo-1564866657311-196d1e9e16f8?q=80&w=1400",
      users: "Regional Teams",
      region: "LATAM",
      domain: { pt: "Compliance", en: "Compliance" },
      tech: ["Power Apps", "Automation"],
      shortDesc: {
        pt: "Gestão centralizada de processos críticos de IPO.",
        en: "Centralized management of IPO processes."
      }
    },
    {
      id: "controle-de-delegados",
      title: "Controle de Delegados",
      cover: "https://images.unsplash.com/photo-1581091012184-7ee295f4874b?q=80&w=1400",
      users: "HR Teams",
      region: "LATAM",
      domain: { pt: "RH", en: "HR" },
      tech: ["Power Apps", "Automation"],
      shortDesc: {
        pt: "Automação do ciclo de férias e pagamentos.",
        en: "Automation of vacation lifecycle and payments."
      }
    },
    {
      id: "reconhecimento",
      title: "HR Recognition Platform",
      cover: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1400",
      users: "Employees",
      region: "LATAM",
      domain: { pt: "RH", en: "HR" },
      tech: ["Power Apps", "Dataverse"],
      shortDesc: {
        pt: "Plataforma de reconhecimento com workflows.",
        en: "Recognition platform with workflows."
      }
    },
    {
      id: "cambio-importacao",
      title: "Import Exchange Request App",
      cover: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1400",
      users: "Treasury",
      region: "LATAM",
      domain: { pt: "Financeiro", en: "Finance" },
      tech: ["Power Apps", "Automation"],
      shortDesc: {
        pt: "Aprovações de câmbio com visibilidade total.",
        en: "FX approvals with full visibility."
      }
    },
    {
      id: "invoice",
      title: "Invoice Center",
      cover: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1400",
      users: "Accounts Payable",
      region: "LATAM",
      domain: { pt: "Financeiro", en: "Finance" },
      tech: ["Power Apps", "Dataverse"],
      shortDesc: {
        pt: "Centralização de validação de faturas.",
        en: "Centralized invoice validation."
      }
    },
    {
      id: "measurement-report",
      title: "Measurement Report Automation Platform",
      cover: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1400",
      users: "Finance LATAM",
      region: "LATAM",
      domain: { pt: "Financeiro", en: "Finance" },
      tech: ["Power Apps", "Automation"],
      shortDesc: {
        pt: "Plataforma com orquestração RPA.",
        en: "Platform with RPA orchestration."
      }
    },
    {
      id: "cd-portal",
      title: "CD Portal — Loyalty & Sales Platform",
      cover: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?q=80&w=1400",
      users: "Retail",
      region: "Brazil",
      domain: { pt: "Vendas", en: "Sales" },
      tech: ["React", "TypeScript"],
      status: "ongoing",
      shortDesc: {
        pt: "Plataforma moderna de fidelidade e vendas.",
        en: "Modern loyalty and sales platform."
      }
    }
  ];

  const [filter, setFilter] = useState("All");

  const filters = ["All", ...new Set(projects.map(p => p.domain.en))];

  const filtered =
    filter === "All"
      ? projects
      : projects.filter(p => p.domain.en === filter);

  return (
    <>
      <section style={{ padding: "140px 20px", background: bg, color: text }}>
        <div style={{ maxWidth: 1300, margin: "auto" }}>
          <h1 style={{ fontSize: 44, marginBottom: 30 }}>
            {lang === "pt" ? "Projetos" : "Projects"}
          </h1>

          <div style={{ display: "flex", gap: 10, marginBottom: 30 }}>
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  padding: "8px 16px",
                  borderRadius: 999,
                  border: "none",
                  cursor: "pointer",
                  background: filter === f ? primary : "transparent",
                  color: filter === f ? "#fff" : text
                }}
              >
                {f}
              </button>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
              gap: 30
            }}
          >
            {filtered.map(p => (
              <div
                key={p.id}
                onClick={() => openCase(p.id)}
                style={{
                  borderRadius: 22,
                  overflow: "hidden",
                  background: cardBg,
                  cursor: "pointer"
                }}
              >
                <div
                  style={{
                    height: 200,
                    backgroundImage: `url(${p.cover})`,
                    backgroundSize: "cover"
                  }}
                />

                <div style={{ padding: 20 }}>
                  <div style={{ fontSize: 11, opacity: 0.6 }}>
                    {p.domain[lang]}
                  </div>

                  <h3>{p.title}</h3>

                  <p style={{ color: descColor }}>
                    {p.shortDesc[lang]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}