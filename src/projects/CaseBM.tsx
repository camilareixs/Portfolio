import { useTheme } from "../context/ThemeContext";
import { useLang } from "../context/LangContext";
import Footer from "../components/Footer";

interface Props {
  goBack: () => void;
}

export default function CaseBM({ goBack }: Props) {
  const { theme } = useTheme();
  const { lang } = useLang();

  const dark = theme === "dark";

  const t = {
    en: {
      tag: "Environmental Operations Platform",

title: "Measurement Management & Supplier Governance Platform",

desc: "Enterprise platform developed to manage environmental service measurements, supplier interactions and financial validation workflows. The solution centralizes the entire lifecycle of measurement reports, from service registration and approval routing to invoice submission, payment validation and operational tracking, replacing fragmented email-based processes with a structured and auditable workflow.",

      video: "Platform Walkthrough",
      arch: "Architecture",
      automation: "My Role",
      impact: "Impact",
      integration: "Payment Lifecycle Flow"
    },
    pt: {
      tag: "Plataforma de Operações Ambientais",

      title: "Plataforma de Gestão de Medições e Governança de Fornecedores",
      
      desc: "Plataforma corporativa desenvolvida para gerenciar medições de serviços ambientais, interação com fornecedores e fluxos de validação financeira. A solução centraliza todo o ciclo de vida dos boletins de medição, desde o registro dos serviços e aprovações até o envio de notas fiscais, validação de pagamentos e acompanhamento operacional, substituindo processos descentralizados baseados em e-mails por um fluxo estruturado e auditável.",

      video: "Demonstração da Plataforma",
      arch: "Arquitetura",
      automation: "Minha Atuação",
      impact: "Impacto",
      integration: "Fluxo do Ciclo de Pagamentos"
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
      <section style={{ background: c.bg, padding: "120px 20px", overflowX: "hidden" }}>
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

            <p style={{ fontSize: 18, color: c.sub, maxWidth: 900, lineHeight: 1.8 }}>
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
                src="/videos/BMop.mp4"
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
                items={
                  lang === "pt"
                    ? [
                      "Relatórios de Medição",
                      "Fluxos do Portal do Fornecedor",
                      "Validação Financeira",
                      "Dataverse + Automações"
                      ]
                    : [
                      "Measurement Reports",
 "Supplier Portal Flows",
 "Financial Validation",
 "Dataverse + Automations"
                      ]
                }
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
                  ? "A arquitetura foi desenhada para suportar um fluxo financeiro crítico, utilizando Power Platform com Dataverse como base central, Power Apps para operação e Power Automate para orquestração de aprovações, validações e execução controlada de pagamentos entre áreas."
                  : "The architecture was designed to support a critical financial workflow using Power Platform with Dataverse as the core data layer, Power Apps for operations and Power Automate orchestrating approvals, validations and controlled payment execution across business units."}
              </Card>

              <Card title={tx.automation} c={c}>
                {lang === "pt"
                  ? "Responsável pela engenharia de automações de pagamento, incluindo regras de validação, roteamento de aprovações, tratamento de exceções e manutenção de estabilidade em ambiente produtivo crítico."
                  : "Responsible for payment automation engineering, including validation rules, approval routing, exception handling and maintaining stability in a critical production environment."}
              </Card>

              <Card title={tx.integration} c={c}>
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
{`Supplier Service Performed
          ↓
Measurement Report Created
          ↓
Approval Workflow
          ↓
Supplier Notification
          ↓
Invoice Submission
          ↓
Financial Validation
          ↓
Payment Processing
          ↓
Status Update & Audit Trail`}
                </pre>
              </Card>

              <Card title={tx.impact} c={c}>
                {lang === "pt"
                  ? "Redução de risco operacional no fluxo de pagamentos, eliminação de controle manual via planilhas e aumento de governança e rastreabilidade nas operações financeiras."
                  : "Reduced operational risk in payment workflows, elimination of manual spreadsheet tracking and improved governance and traceability in financial operations."}
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
        {items.map((i: string) => <li key={i}>{i}</li>)}
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
      <h2 style={{ color: c.text, marginBottom: 15 }}>{title}</h2>
      <div style={{ color: c.sub, lineHeight: 1.8 }}>
        {children}
      </div>
    </div>
  );
}