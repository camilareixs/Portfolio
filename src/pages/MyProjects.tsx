import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { useLang } from "../context/LangContext";
import type { CSSProperties } from "react";
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

  const tagColors: Record<string, string> = {
    "Power Apps": "#7D5FFF",
    Dataverse: "#FF914D",
    Automation: "#00C48C",
    Canvas: "#FF5DA2",
    "Model Driven": "#4DA6FF",
    SharePoint: "#1DA57A",
    Dataflows: "#FFB547",
    "Power Automate": "#0066FF",
    React: "#61DAFB",
    TypeScript: "#3178C6",
    "Product Design": "#FF8C42"
  };

  const tagTranslate: Record<string, { pt: string; en: string }> = {
    "Power Apps": { pt: "Power Apps", en: "Power Apps" },
    Dataverse: { pt: "Dataverse", en: "Dataverse" },
    Automation: { pt: "Automação", en: "Automation" },
    Canvas: { pt: "Canvas", en: "Canvas" },
    "Model Driven": { pt: "Model Driven", en: "Model Driven" },
    SharePoint: { pt: "SharePoint", en: "SharePoint" },
    Dataflows: { pt: "Dataflows", en: "Dataflows" },
    "Power Automate": { pt: "Power Automate", en: "Power Automate" },
    React: { pt: "React", en: "React" },
    TypeScript: { pt: "TypeScript", en: "TypeScript" },
    "Product Design": { pt: "Product Design", en: "Product Design" }
  };

  const projects: Project[] = [
    {
      id: "actus",
      title: "ACTUS Compliance Platform",
      cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400",
      users: "2800+ users",
      region: "LATAM",
      domain: { pt: "Compliance", en: "Compliance" },
      tech: ["Power Apps", "Dataverse", "Automation"],
      shortDesc: {
        pt: "Plataforma enterprise que substituiu sistemas legados e planilhas, centralizando a governança de incidentes e compliance.",
        en: "Enterprise platform replacing legacy systems and spreadsheets, centralizing incident governance and compliance."
      }
    },

    {
      id: "bm",
      title: "Measurement Report",
      cover: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1400",
      users: "-85% manual work",
      region: "Brasil",
      tech: ["Power Apps", "Automation", "Dataverse"],
      shortDesc: {
        pt: "Automação de validação e pagamento de fornecedores, reduzindo erros operacionais.",
        en: "Automation of supplier validation and payments, reducing operational errors."
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
        pt: "Pipeline automatizado integrado ao SAP substituindo processos manuais.",
        en: "Automated pipeline integrated with SAP replacing manual processes."
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
        pt: "Gestão centralizada de processos críticos de IPO com rastreabilidade.",
        en: "Centralized management of IPO processes with full traceability."
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
        pt: "Automação do ciclo de férias e pagamentos com maior controle do RH.",
        en: "Automation of vacation lifecycle and payments improving HR control."
      }
    },

    {
      id: "indice",
      title: "Be On Index Automation",
      cover: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1400",
      users: "Operations",
      region: "LATAM",
      domain: { pt: "Operações", en: "Operations" },
      tech: ["Power Automate", "Automation"],
      shortDesc: {
        pt: "Geração automática de estruturas e publicação de documentos.",
        en: "Automatic generation of structures and document publishing."
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
        pt: "Plataforma de reconhecimento com fluxos estruturados.",
        en: "Recognition platform with structured workflows."
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
        pt: "Aprovações de câmbio com visibilidade total do processo.",
        en: "FX approvals with full process visibility."
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
        pt: "Centralização de validação e roteamento de faturas.",
        en: "Centralized invoice validation and routing."
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
        pt: "Plataforma de validação financeira com orquestração RPA.",
        en: "Financial validation platform with RPA orchestration."
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

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: 30
          }}>
            {filtered.map(p => (
              <div
                key={p.id}
                onClick={() => openCase(p.id)}
                style={{
                  borderRadius: 22,
                  overflow: "hidden",
                  background: cardBg,
                  cursor: "pointer",
                  transition: "all .35s ease"
                }}
                onMouseEnter={(e: any) => {
                  e.currentTarget.style.transform = "translateY(-12px) scale(1.03)";
                  e.currentTarget.style.boxShadow = "0 30px 80px rgba(0,0,0,.35)";
                }}
                onMouseLeave={(e: any) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{
                  height: 200,
                  backgroundImage: `url(${p.cover})`,
                  backgroundSize: "cover",
                  position: "relative"
                }}>
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg,rgba(0,0,0,.1),rgba(0,0,0,.6))"
                  }} />

                  <div style={{
                    position: "absolute",
                    bottom: 12,
                    left: 12,
                    display: "flex",
                    gap: 6
                  }}>
                    {p.tech.slice(0, 3).map(t => (
                      <span key={t} style={{
                        padding: "5px 12px",
                        borderRadius: 999,
                        background: tagColors[t],
                        color: "#fff",
                        fontSize: 11,
                        fontWeight: 700,
                        boxShadow: "0 4px 12px rgba(0,0,0,.25)"
                      }}>
                        {tagTranslate[t][lang]}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ padding: 20 }}>
                  <div style={{ fontSize: 11, opacity: 0.6 }}>
                    {p.domain[lang]}
                  </div>

                  <h3 style={{ fontSize: 18, fontWeight: 700 }}>
                    {p.title}
                  </h3>

                  <p style={{ fontSize: 14, color: descColor }}>
                    {p.shortDesc[lang]}
                  </p>

                  <div style={{
                    marginTop: 12,
                    display: "flex",
                    gap: 8
                  }}>
                    <span style={{
                      background: "#7D5FFF",
                      color: "#fff",
                      padding: "6px 12px",
                      borderRadius: 999,
                      fontSize: 12,
                      fontWeight: 700
                    }}>
                      🌎 {p.region}
                    </span>

                    <span style={{
                      background: "rgba(255,255,255,.08)",
                      padding: "6px 12px",
                      borderRadius: 999,
                      fontSize: 12,
                      fontWeight: 600
                    }}>
                      ⚡ {p.users}
                    </span>
                  </div>
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