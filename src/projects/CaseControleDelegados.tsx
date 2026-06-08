import { useTheme } from "../context/ThemeContext";
import { useLang } from "../context/LangContext";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

interface Props {
  goBack: () => void;
}

export default function CaseControleDelegados({ goBack }: Props) {
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
      tag: "Mobility Governance Platform",
      title: "Delegates Control — Mobility Management Ecosystem",
      desc:
        "Enterprise mobility governance platform developed to centralize inbound expatriate management across LATAM operations. The solution automated delegation tracking, vacation entitlement calculations, PDF reporting and operational governance workflows while replacing a costly legacy system with a scalable Power Platform ecosystem.",

      video: "Platform Walkthrough",
      arch: "Architecture",
      automation: "My Role",
      impact: "Impact",
      integration: "Operational Workflow"
    },

    pt: {
      back: "Voltar aos Projetos",
      tag: "Plataforma de Governança de Mobilidade",
      title: "Controle de Delegados — Ecossistema de Gestão de Mobilidade",
      desc:
        "Plataforma enterprise desenvolvida para centralizar a gestão de expatriados inbound em operações LATAM. A solução automatizou controle de períodos de delegação, cálculos de direito a férias, geração de relatórios PDF e fluxos operacionais de governança, substituindo um sistema legado custoso por um ecossistema escalável em Power Platform.",

      video: "Demonstração da Plataforma",
      arch: "Arquitetura",
      automation: "Minha Atuação",
      impact: "Impacto",
      integration: "Fluxo Operacional"
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

            <p
              style={{
                fontSize: isMobile ? 15 : 18,
                color: c.sub,
                maxWidth: 900,
                lineHeight: 1.8
              }}
            >
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
                src="/videos/controle.mp4"
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
                  "LATAM Mobility Operations",
                  "Inbound Delegate Governance",
                  "Vacation Entitlement Automation",
                  "Legacy Platform Replacement"
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
                  ? "A solução foi construída em Power Platform utilizando Power Apps para centralização operacional, Dataverse como camada estruturada de dados e Power Automate para automação de cálculos, geração de documentos e distribuição de relatórios. A arquitetura suporta controle completo do ciclo de delegação de expatriados inbound entre operações regionais."
                  : "The solution was built on Power Platform using Power Apps for operational centralization, Dataverse as the structured data layer and Power Automate for calculation automation, document generation and report distribution. The architecture supports full lifecycle management of inbound expatriate delegation operations across regional units."}
              </Card>

              <Card title={tx.automation} c={c} isMobile={isMobile}>
                {lang === "pt"
                  ? "Minha atuação envolveu evolução da plataforma, automação de regras operacionais e melhoria da experiência de uso para processos críticos de mobilidade. O trabalho incluiu implementação de cálculos automatizados de direito a férias, geração dinâmica de PDFs e integração de fluxos de comunicação entre stakeholders."
                  : "My role involved platform evolution, operational rule automation and usability improvements for critical mobility processes. The work included automated vacation entitlement calculations, dynamic PDF generation and integration of communication workflows between stakeholders."}
              </Card>

              <Card title={tx.integration} c={c} isMobile={isMobile}>
                <p style={{ marginBottom: 15 }}>
                  {lang === "pt"
                    ? "Fluxo operacional responsável por controlar períodos de delegação, validar regras de negócio e automatizar geração de documentação."
                    : "Operational workflow responsible for controlling delegation periods, validating business rules and automating document generation."}
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
{`REGISTER Delegate
→ Validate Delegation Rules
→ Calculate Vacation Eligibility
→ Generate PDF Report
→ Notify Stakeholders`}
                </pre>
              </Card>

              <Card title={tx.impact} c={c} isMobile={isMobile}>
                {lang === "pt"
                  ? "A plataforma eliminou custos recorrentes do sistema legado, aumentou a confiabilidade operacional e trouxe maior controle sobre processos de mobilidade internacional. A automação reduziu dependências manuais, melhorou rastreabilidade e forneceu relatórios consistentes para tomada de decisão."
                  : "The platform eliminated recurring legacy system costs, increased operational reliability and improved control over international mobility processes. Automation reduced manual dependencies, improved traceability and delivered consistent reporting for decision-making."}
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