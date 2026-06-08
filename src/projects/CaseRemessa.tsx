import { useTheme } from "../context/ThemeContext";
import { useLang } from "../context/LangContext";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

interface Props {
  goBack: () => void;
}

export default function CaseRemessa({ goBack }: Props) {
  const { theme } = useTheme();
  const { lang } = useLang();

  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const check = () => setIsMobile(window.innerWidth < 768);

  check();

  window.addEventListener("resize", check);

  return () => window.removeEventListener("resize", check);
}, []);

  const dark = theme === "dark";

  const t = {
    en: {
      back: "Back to Projects",
      tag: "Financial Data Automation Platform",
      title: "Automated Financial Remittance Processing Ecosystem",
      desc: "Enterprise-grade automation platform responsible for orchestrating the complete remittance processing lifecycle, including ingestion, normalization, validation, transformation and controlled distribution of financial datasets across operational and finance teams with reliability, traceability and scalable execution.",

      video: "Platform Walkthrough",
      arch: "Architecture",
      automation: "My Role",
      impact: "Impact",
      integration: "Remittance Processing Pipeline"
    },

    pt: {
      back: "Voltar aos Projetos",
      tag: "Plataforma de Automação Financeira",
      title: "Ecossistema Automatizado de Processamento de Remessas",
      desc: "Plataforma corporativa de automação responsável por orquestrar todo o ciclo de processamento de remessas financeiras, incluindo ingestão, normalização, validação, transformação e distribuição controlada de datasets financeiros entre áreas operacionais e times financeiros com confiabilidade, rastreabilidade e execução escalável.",

      video: "Demonstração da Plataforma",
      arch: "Arquitetura",
      automation: "Minha Atuação",
      impact: "Impacto",
      integration: "Pipeline de Processamento de Remessas"
    }
  };

  const tx = t[lang];

  const c = {
    bg: dark ? "#020617" : "#F5F7FB",
    card: dark ? "#0F172A" : "#FFFFFF",
    border: dark ? "#1E293B" : "#E6EAF2",
    text: dark ? "#E8ECF8" : "#0F172A",
    sub: dark ? "#94A3B8" : "#64748B",
    accent: "#3B82F6"
  };

  return (
    <>
      <section
        style={{
          background: c.bg,
          padding: isMobile ? "90px 16px" : "120px 20px",
          overflowX: "hidden"
        }}
      >
        <div style={{ maxWidth: 1280, margin: "auto" }}>

          {/* BACK */}
          <button
            onClick={goBack}
            style={{
              background: "none",
              border: "none",
              color: c.accent,
              fontWeight: 600,
              cursor: "pointer",
              marginBottom: 40
            }}
          >
            ← {tx.back}
          </button>

          {/* HERO */}
          <div
            style={{
              background: c.card,
              border: `1px solid ${c.border}`,
              borderRadius: 20,
              padding: isMobile ? 24 : 60,
              marginBottom: 60
            }}
          >
            <span style={{ color: c.accent, fontWeight: 700, fontSize: 12 }}>
              {tx.tag.toUpperCase()}
            </span>

            <h1
  style={{
    fontSize: isMobile ? 30 : 48,
    margin: "20px 0",
    color: c.text,
    lineHeight: 1.15
  }}
>
              {tx.title}
            </h1>

            <p style={{ fontSize: isMobile ? 15 : 18, color: c.sub, maxWidth: 900, lineHeight: 1.8 }}>
              {tx.desc}
            </p>
          </div>

          {/* VIDEO */}
          <div
            style={{
              background: c.card,
              border: `1px solid ${c.border}`,
              borderRadius: 20,
              padding: isMobile ? 16 : 30,
              marginBottom: 60
            }}
          >
            <h2 style={{ color: c.text, marginBottom: 20 }}>
              {tx.video}
            </h2>

            <div
              style={{
                width: "100%",
                height: isMobile ? 220 : 420,
                borderRadius: 16,
                overflow: "hidden"
              }}
            >
              <video
                src="/videos/remessa.mp4"
                controls
                autoPlay
                muted
                loop
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            </div>
          </div>

          {/* GRID */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
  ? "1fr"
  : "minmax(0,360px) minmax(0,1fr)",

gap: isMobile ? 20 : 40
            }}
          >

            {/* SIDEBAR */}
            <aside
              style={{
                background: c.card,
                border: `1px solid ${c.border}`,
                borderRadius: 20,
                padding: isMobile ? 20 : 30,
                height: "fit-content",
                minWidth: 0
              }}
            >
              <Side
                title="CONTEXT"
                items={[
                  "Financial Remittance Operations",
                  "Automated File Processing",
                  "High-volume Financial Datasets",
                  "Enterprise Reporting Pipelines"
                ]}
                c={c}
              />
            </aside>

            {/* MAIN */}
            <main
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 40,
                minWidth: 0
              }}
            >

<Card title={tx.arch} c={c} isMobile={isMobile}>
                {lang === "pt"
                  ? "A arquitetura foi desenhada para suportar processamento financeiro em alto volume utilizando SharePoint para ingestão documental, Power Automate para orquestração operacional e Dataflows para transformação e consolidação de datasets financeiros antes da geração de relatórios e arquivos finais."
                  : "The architecture was designed to support high-volume financial processing using SharePoint for document ingestion, Power Automate for operational orchestration and Dataflows for transformation and consolidation of financial datasets before final reporting and export generation."}
              </Card>

              <Card title={tx.automation} c={c} isMobile={isMobile}>
                {lang === "pt"
                  ? "Responsável pela engenharia das automações de remessa, incluindo normalização de arquivos legados, validações financeiras, controle de execução, tratamento de inconsistências e otimização de pipelines críticos de processamento."
                  : "Responsible for remittance automation engineering, including legacy file normalization, financial validations, execution control, inconsistency handling and optimization of critical processing pipelines."}
              </Card>

              <Card title={tx.integration} c={c} isMobile={isMobile}>
                <p style={{ marginBottom: 15 }}>
                  {lang === "pt"
                    ? "O pipeline automatizado processa arquivos financeiros desde a ingestão inicial até a consolidação e distribuição final dos relatórios operacionais."
                    : "The automated pipeline processes financial files from initial ingestion to final consolidation and operational report distribution."}
                </p>

                <pre
                  style={{
                    background: "#020617",
                    color: "#E5E7EB",
                    padding: isMobile ? 14 : 20,
                    borderRadius: 12,
                    fontSize: isMobile ? 10 : 12,
                    overflowX: "auto",
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word"
                  }}
                >
{`UPLOAD → Validate Files
→ Normalize Legacy Tables
→ Execute Dataflow Transformation
→ Generate Consolidated Output
→ Distribute Financial Reports`}
                </pre>
              </Card>

              <Card title={tx.impact} c={c} isMobile={isMobile}>
                {lang === "pt"
                  ? "A automação eliminou ciclos manuais de consolidação financeira, reduziu drasticamente o tempo de processamento operacional e aumentou a confiabilidade dos dados utilizados pelos times financeiros e operacionais."
                  : "The automation eliminated manual financial consolidation cycles, drastically reduced operational processing time and improved reliability of datasets consumed by finance and operational teams."}
              </Card>

            </main>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

/* COMPONENTS */

function Side({ title, items, c }: any) {
  return (
    <div style={{ marginBottom: 30 }}>
      <h4 style={{ fontSize: 12, color: c.accent, marginBottom: 10 }}>
        {title}
      </h4>

      <ul style={{ color: c.sub, lineHeight: 1.8 }}>
        {items.map((i: string) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}

function Card({ title, children, c, isMobile }: any) {
  return (
    <div
      style={{
        background: c.card,
        border: `1px solid ${c.border}`,
        borderRadius: 20,
        padding: isMobile ? 20 : 40,
        minWidth: 0
      }}
    >
      <h2 style={{ color: c.text, marginBottom: 15 }}>
        {title}
      </h2>

      <div style={{ color: c.sub, lineHeight: 1.8 }}>
        {children}
      </div>
    </div>
  );
}