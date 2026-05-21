import { useTheme } from "../context/ThemeContext";
import { useLang } from "../context/LangContext";
import Footer from "../components/Footer";

interface Props {
  goBack: () => void;
}

export default function CaseMeasurementReport({ goBack }: Props) {
  const { theme } = useTheme();
  const { lang } = useLang();

  const dark = theme === "dark";

  const t = {
    en: {
      back: "Back to Projects",
      tag: "Enterprise Finance Platform",
      title: "Measurement Report Automation & SAP Integration Ecosystem",
      desc:
        "Enterprise-grade financial operations platform created to automate supplier billing validation, purchase order monitoring and SAP synchronization processes across South America. The solution combines Power Platform applications with UiPath RPA orchestration to centralize operational visibility, reduce manual effort and enable scalable governance over measurement report operations.",

      video: "Platform Walkthrough",
      arch: "Architecture",
      automation: "My Role",
      impact: "Impact",
      integration: "Automation Workflow"
    },

    pt: {
      back: "Voltar aos Projetos",
      tag: "Plataforma Enterprise Finance",
      title: "Ecossistema de Automação de Measurement Report e Integração SAP",
      desc:
        "Plataforma enterprise criada para automatizar validações de faturamento de fornecedores, monitoramento de pedidos de compra e sincronizações SAP em toda a América do Sul. A solução combina aplicações em Power Platform com orquestração RPA via UiPath para centralizar visibilidade operacional, reduzir esforço manual e permitir governança escalável sobre operações de measurement report.",

      video: "Demonstração da Plataforma",
      arch: "Arquitetura",
      automation: "Minha Atuação",
      impact: "Impacto",
      integration: "Fluxo de Automação"
    }
  };

  const tx = t[lang];

  const c = {
    bg: dark ? "#020617" : "#ECFDF5",
    card: dark ? "#0F172A" : "#FFFFFF",
    border: dark ? "#1E293B" : "#E6EAF2",
    text: dark ? "#E8ECF8" : "#0F172A",
    sub: dark ? "#94A3B8" : "#64748B",
    accent: "#10B981"
  };

  return (
    <>
      <section
        style={{
          background: c.bg,
          padding: "120px 20px",
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
              padding: 60,
              marginBottom: 60
            }}
          >
            <span style={{ color: c.accent, fontWeight: 700, fontSize: 12 }}>
              {tx.tag.toUpperCase()}
            </span>

            <h1 style={{ fontSize: 48, margin: "20px 0", color: c.text }}>
              {tx.title}
            </h1>

            <p
              style={{
                fontSize: 18,
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
              padding: 30,
              marginBottom: 60
            }}
          >
            <h2 style={{ color: c.text, marginBottom: 20 }}>
              {tx.video}
            </h2>

            <div
              style={{
                width: "100%",
                height: 420,
                borderRadius: 16,
                overflow: "hidden"
              }}
            >
              <video
                src="/videos/measurement.mp4"
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
              gridTemplateColumns: "minmax(0,360px) minmax(0,1fr)",
              gap: 40
            }}
          >

            {/* SIDEBAR */}
            <aside
              style={{
                background: c.card,
                border: `1px solid ${c.border}`,
                borderRadius: 20,
                padding: 30,
                height: "fit-content",
                minWidth: 0
              }}
            >
              <Side
                title="CONTEXT"
                items={[
                  "LATAM Financial Operations",
                  "SAP & RPA Integration",
                  "Supplier Billing Governance",
                  "Enterprise Measurement Workflows"
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

              <Card title={tx.arch} c={c}>
                {lang === "pt"
                  ? "A arquitetura combina aplicações Power Apps, automações Power Automate, banco relacional em Dataverse e robôs UiPath integrados ao SAP. A solução foi desenhada para suportar operações financeiras distribuídas, centralizando validações de faturamento, sincronização de pedidos de compra e consolidação de dados operacionais em uma única camada de governança."
                  : "The architecture combines Power Apps applications, Power Automate workflows, Dataverse relational structures and UiPath robots integrated with SAP. The solution was designed to support distributed financial operations by centralizing billing validations, purchase order synchronization and operational data consolidation into a single governance layer."}
              </Card>

              <Card title={tx.automation} c={c}>
                {lang === "pt"
                  ? "Minha atuação envolveu evolução da plataforma, construção de fluxos operacionais, automações financeiras e integração entre Power Platform, SAP e UiPath. Trabalhei na estabilização de processos críticos de measurement report, criação de mecanismos de sincronização automatizada e melhoria da rastreabilidade operacional para times financeiros e fornecedores."
                  : "My role involved platform evolution, financial workflow automation and integration between Power Platform, SAP and UiPath. I worked on stabilizing critical measurement report processes, creating automated synchronization mechanisms and improving operational traceability for finance teams and suppliers."}
              </Card>

              <Card title={tx.integration} c={c}>
                <p style={{ marginBottom: 15 }}>
                  {lang === "pt"
                    ? "O fluxo automatizado integra validações operacionais, sincronização SAP e processamento financeiro de fornecedores."
                    : "The automated workflow integrates operational validations, SAP synchronization and supplier financial processing."}
                </p>

                <pre
                  style={{
                    background: "#020617",
                    color: "#E5E7EB",
                    padding: 20,
                    borderRadius: 12,
                    fontSize: 12,
                    overflowX: "auto"
                  }}
                >
{`EXTRACT SAP DATA
→ Sync Purchase Orders
→ Validate Measurement Reports
→ Execute Approval Workflow
→ Update Dataverse Records
→ Refresh Reporting Database`}
                </pre>
              </Card>

              <Card title={tx.impact} c={c}>
                {lang === "pt"
                  ? "A plataforma reduziu esforço manual em validações financeiras, aumentou a confiabilidade dos dados sincronizados com SAP e trouxe maior rastreabilidade sobre operações de faturamento de fornecedores. A integração entre RPA e Power Platform permitiu escalar processos críticos financeiros mantendo governança, visibilidade operacional e redução de tarefas repetitivas."
                  : "The platform reduced manual effort in financial validations, increased reliability of SAP synchronized data and improved traceability over supplier billing operations. The integration between RPA and Power Platform enabled scalable financial processes while maintaining governance, operational visibility and reduction of repetitive tasks."}
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

function Card({ title, children, c }: any) {
  return (
    <div
      style={{
        background: c.card,
        border: `1px solid ${c.border}`,
        borderRadius: 20,
        padding: 40,
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