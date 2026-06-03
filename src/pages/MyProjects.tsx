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
  const descColor = isDark ? "#A1A1AA" : "#555";
  const primary = "#8B5CF6";

  const projects: Project[] = [
    {
      id: "actus",
      title: "ACTUS Platform",
      cover: "/public/actus.jpg",
      users: "2800+ USERS",
      region: "LATAM",
      domain: { pt: "Compliance", en: "Compliance" },
      tech: ["Power Automate", "Power BI", "HTTP APIs"],
      shortDesc: {
        pt: "Plataforma enterprise desenvolvida para centralizar operações de compliance, substituir controles descentralizados e aumentar a rastreabilidade dos processos corporativos.",
        en: "Enterprise platform designed to centralize compliance operations, replace decentralized controls and improve corporate process traceability."
      }
    },

    {
      id: "bm",
      title: "Environmental Measurement",
      cover: "/public/bmop.png",
      users: "-85% MANUAL WORK",
      region: "BRAZIL",
      domain: { pt: "Financeiro", en: "Finance" },
      tech: ["Power Apps", "Automation", "Dataverse"],
      shortDesc: {
        pt: "Solução financeira criada para automatizar validações de medição, controle de fornecedores e sincronização operacional com SAP através de RPA e Power Platform.",
        en: "Financial solution built to automate measurement validation, supplier control and SAP operational synchronization using RPA and Power Platform."
      }
    },

    {
      id: "remessa",
      title: "Financial Tools",
      cover: "/public/remessa.png",
      users: "FINANCE TEAM",
      region: "BRAZIL",
      domain: { pt: "Financeiro", en: "Finance" },
      tech: ["Dataflows", "SharePoint", "Automation"],
      shortDesc: {
        pt: "Pipeline financeiro automatizado para processamento de remessas e integração de dados SAP, reduzindo esforço manual e inconsistências operacionais.",
        en: "Automated financial pipeline for remittance processing and SAP data integration, reducing manual effort and operational inconsistencies."
      }
    },

    {
      id: "ipo",
      title: "IPO Governance",
      cover: "/public/ipo.png",
      users: "REGIONAL TEAMS",
      region: "LATAM",
      domain: { pt: "Compliance", en: "Compliance" },
      tech: ["Power Apps", "Automation"],
      shortDesc: {
        pt: "Plataforma global de governança para padronização e rastreamento de processos anuais de compliance e Segurança da Informação.",
        en: "Global governance platform for standardizing and tracking annual compliance and Information Security processes."
      }
    },

    {
      id: "controle-de-delegados",
      title: "Global Mobility Management",
      cover: "/public/controle.png",
      users: "HR TEAMS",
      region: "LATAM",
      domain: { pt: "RH", en: "HR" },
      tech: ["Power Apps", "Automation"],
      shortDesc: {
        pt: "Sistema corporativo para gestão de expatriados inbound, automação de cálculos de férias e controle operacional de mobilidade regional.",
        en: "Corporate system for inbound expatriate management, vacation entitlement automation and regional mobility operations control."
      }
    },

    {
      id: "cambio-importacao",
      title: "Import Governance",
      cover: "/public/fluxopag.png",
      users: "TREASURY",
      region: "LATAM",
      domain: { pt: "Financeiro", en: "Finance" },
      tech: ["Power Apps", "Automation"],
      shortDesc: {
        pt: "Plataforma financeira para gestão estruturada de solicitações cambiais e aprovação centralizada de pagamentos internacionais.",
        en: "Financial platform for structured foreign exchange requests and centralized international payment approvals."
      }
    },

    {
      id: "measurement-report",
      title: "Financial Operations Automation",
      cover: "/public/measurement.png",
      users: "FINANCE LATAM",
      region: "LATAM",
      domain: { pt: "Financeiro", en: "Finance" },
      tech: ["Power Apps", "Automation", "UiPath"],
      shortDesc: {
        pt: "Ecossistema de automação financeira com orquestração RPA, sincronização SAP e governança operacional para operações LATAM.",
        en: "Financial automation ecosystem with RPA orchestration, SAP synchronization and operational governance for LATAM operations."
      }
    },

    {
      id: "cd-portal",
      title: "Cami&Duda Portal",
      cover: "/public/camiduda.png",
      users: "RETAIL",
      region: "BRAZIL",
      domain: { pt: "Vendas", en: "Sales" },
      tech: ["React", "TypeScript"],
      status: "ongoing",
      shortDesc: {
        pt: "Produto digital focado em campanhas de fidelidade, gestão comercial e visualização estratégica de indicadores operacionais.",
        en: "Digital product focused on loyalty campaigns, sales management and strategic operational visibility."
      }
    }
  ];

  const [filter, setFilter] = useState("All");

  const filters = ["All", ...new Set(projects.map((p) => p.domain.en))];

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.domain.en === filter);

  return (
    <>
      <section
        style={{
          padding: "140px 20px",
          background: bg,
          color: text
        }}
      >
        <div style={{ maxWidth: 1300, margin: "auto" }}>

          {/* HEADER */}
          <div style={{ marginBottom: 50 }}>
            <h1
              style={{
                fontSize: 44,
                marginBottom: 14
              }}
            >
              {lang === "pt" ? "Projetos" : "Projects"}
            </h1>

            <p
              style={{
                maxWidth: 760,
                lineHeight: 1.8,
                color: descColor,
                fontSize: 16
              }}
            >
              {lang === "pt"
                ? "Soluções enterprise focadas em automação, governança operacional, compliance, integração SAP e transformação de processos utilizando Power Platform e tecnologias modernas."
                : "Enterprise solutions focused on automation, operational governance, compliance, SAP integration and process transformation using Power Platform and modern technologies."}
            </p>
          </div>

          {/* FILTERS */}
          <div
            style={{
              display: "flex",
              gap: 12,
              marginBottom: 40,
              flexWrap: "wrap"
            }}
          >
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  padding: "10px 18px",
                  borderRadius: 10,
                  border: "none",
                  cursor: "pointer",
                  background:
                    filter === f
                      ? primary
                      : isDark
                      ? "#2B2B31"
                      : "#fff",
                  color: filter === f ? "#fff" : text,
                  fontWeight: 600,
                  fontSize: 13,
                  letterSpacing: 0.5
                }}
              >
                {f}
              </button>
            ))}
          </div>

          {/* GRID */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
              gap: 28
            }}
          >
            {filtered.map((p) => (
              <div
                key={p.id}
                onClick={() => openCase(p.id)}
                style={{
                  borderRadius: 24,
                  overflow: "hidden",
                  background: cardBg,
                  cursor: "pointer",
                  border: isDark
                    ? "1px solid rgba(255,255,255,0.06)"
                    : "1px solid rgba(0,0,0,0.06)",
                  transition: "0.25s ease",
                  display: "flex",
                  flexDirection: "column"
                }}
                onMouseEnter={(e: any) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    isDark
                      ? "0 20px 50px rgba(0,0,0,0.4)"
                      : "0 20px 50px rgba(0,0,0,0.08)";
                }}
                onMouseLeave={(e: any) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >

                {/* IMAGE */}
                <div
                  style={{
                    height: 190,
                    backgroundImage: `url(${p.cover})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative"
                  }}
                >

                  {p.status === "ongoing" && (
                    <div
                      style={{
                        position: "absolute",
                        top: 14,
                        right: 14,
                        background: "rgba(0,0,0,0.7)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "#F59E0B",
                        padding: "7px 11px",
                        borderRadius: 999,
                        fontSize: 9,
                        fontWeight: 700,
                        letterSpacing: 1.5,
                        textTransform: "uppercase"
                      }}
                    >
                      In Progress
                    </div>
                  )}
                </div>

                {/* CONTENT */}
                <div
                  style={{
                    padding: 22,
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    minHeight: 250
                  }}
                >

                  {/* TOP INFO */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 14,
                      flexWrap: "wrap"
                    }}
                  >
                    <span
                      style={{
                        fontSize: 10,
                        letterSpacing: 2,
                        textTransform: "uppercase",
                        fontWeight: 700,
                        color: primary
                      }}
                    >
                      {p.domain[lang]}
                    </span>

                    <span
                      style={{
                        width: 4,
                        height: 4,
                        borderRadius: "50%",
                        background: isDark ? "#555" : "#AAA"
                      }}
                    />

                    <span
                      style={{
                        fontSize: 10,
                        letterSpacing: 1.4,
                        textTransform: "uppercase",
                        color: isDark ? "#777" : "#666",
                        fontWeight: 700
                      }}
                    >
                      {p.region}
                    </span>

                    <span
                      style={{
                        width: 4,
                        height: 4,
                        borderRadius: "50%",
                        background: isDark ? "#555" : "#AAA"
                      }}
                    />

                    <span
                      style={{
                        fontSize: 10,
                        letterSpacing: 1.4,
                        textTransform: "uppercase",
                        color: isDark ? "#777" : "#666",
                        fontWeight: 700
                      }}
                    >
                      {p.users}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3
                    style={{
                      margin: 0,
                      marginBottom: 14,
                      fontSize: 20,
                      lineHeight: 1.25,
                      color: text
                    }}
                  >
                    {p.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p
                    style={{
                      color: descColor,
                      lineHeight: 1.7,
                      fontSize: 15.5,
                      marginBottom: 26
                    }}
                  >
                    {p.shortDesc[lang]}
                  </p>

                  {/* TECH */}
                  <div
                    style={{
                      marginTop: "auto",
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 10,
                      alignItems: "center"
                    }}
                  >
                    {p.tech.map((t, i) => (
                      <div
                        key={t}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10
                        }}
                      >
                        <span
                          style={{
                            fontSize: 10,
                            textTransform: "uppercase",
                            letterSpacing: 1.4,
                            color: isDark ? "#A1A1AA" : "#666",
                            fontWeight: 600
                          }}
                        >
                          {t}
                        </span>

                        {i !== p.tech.length - 1 && (
                          <span
                            style={{
                              width: 4,
                              height: 4,
                              borderRadius: "50%",
                              background: primary,
                              opacity: 0.7
                            }}
                          />
                        )}
                      </div>
                    ))}
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