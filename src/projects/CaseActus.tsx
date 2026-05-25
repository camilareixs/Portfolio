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
      back: "Back to Projects",
      tag: "Digital Operations Platform",
      title: "Workflow Automation & Service Management Ecosystem",
      desc: "End-to-end operational platform built on Microsoft Power Platform designed to digitize service requests, automate multi-team workflows and provide structured performance visibility across business units.",

      video: "Platform Walkthrough",
      arch: "Architecture",
      automation: "My Role",
      impact: "Impact",
      integration: "Service Lifecycle Flow"
    },
    pt: {
      back: "Voltar aos Projetos",
      tag: "Plataforma de Operações Digitais",
      title: "Ecossistema de Automação de Fluxos e Gestão de Serviços",
      desc: "Plataforma operacional completa construída em Power Platform para digitalizar solicitações de serviço, automatizar fluxos entre múltiplos times e fornecer visibilidade estruturada de performance operacional.",

      video: "Demonstração da Plataforma",
      arch: "Arquitetura",
      automation: "Minha Atuação",
      impact: "Impacto",
      integration: "Fluxo de Ciclo de Vida"
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

          {/* HERO (igual ACTUS) */}
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

          {/* VIDEO (EXATAMENTE IGUAL ACTUS) */}
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

            <div style={{ width: "100%", height: 420, borderRadius: 16, overflow: "hidden" }}>
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

          {/* GRID (igual ACTUS) */}
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
                  "Digital Operations Platform",
                  "1200+ Users",
                  "Multi-team workflows",
                  "Power Platform Ecosystem"
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
                  ? "Arquitetura em Power Platform com Dataverse como base, Power Apps para interface e Power Automate para automação de processos."
                  : "Power Platform architecture using Dataverse as core, Power Apps for UI and Power Automate for workflow automation."}
              </Card>

              <Card title={tx.automation} c={c}>
                {lang === "pt"
                  ? "Atuação na evolução de automações existentes, otimização de fluxos e estabilidade em produção."
                  : "Work on improving existing automations, optimizing flows and maintaining production stability."}
              </Card>

              <Card title={tx.integration} c={c}>
                <pre style={{
                  background: "#020617",
                  color: "#E5E7EB",
                  padding: 20,
                  borderRadius: 12,
                  fontSize: 12,
                  overflowX: "auto"
                }}>
{`IF Priority = High
 → Assign Queue = Level 2
 → Notify Manager
 → Start SLA Timer

ELSE
 → Assign Queue = Level 1
 → Standard SLA`}
                </pre>
              </Card>

              <Card title={tx.impact} c={c}>
                {lang === "pt"
                  ? "Redução de processos manuais e aumento de visibilidade operacional."
                  : "Reduction of manual processes and improved operational visibility."}
              </Card>

            </main>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

/* COMPONENTS (IGUAL ACTUS) */

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