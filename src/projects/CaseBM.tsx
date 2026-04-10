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
      arch: "Operational Architecture",
      automation: "Automation Engineering Scope",
      lifecycle: "Service Request Lifecycle Flow",
      impact: "Operational Impact"
    },
    pt: {
      back: "Voltar aos Projetos",
      tag: "Plataforma de Operações Digitais",
      title: "Ecossistema de Automação de Fluxos e Gestão de Serviços",
      desc: "Plataforma operacional completa construída em Power Platform para digitalizar solicitações de serviço, automatizar fluxos entre múltiplos times e fornecer visibilidade estruturada de performance operacional.",
      arch: "Arquitetura Operacional",
      automation: "Escopo de Engenharia de Automação",
      lifecycle: "Fluxo de Ciclo de Vida de Solicitações",
      impact: "Impacto Operacional"
    }
  };

  const tx = t[lang];

  const c = {
    bg: dark ? "radial-gradient(circle at 80% 20%, #0F172A 0%, #020617 60%)" : "#F5F7FB",
    card: dark ? "#0F1625" : "#FFFFFF",
    border: dark ? "#1F2A44" : "#E6EAF2",
    text: dark ? "#E8ECF8" : "#0F172A",
    sub: dark ? "#9AA6C4" : "#64748B",

    accent: "#0EA5E9",
    accentSoft: "#22D3EE"
  };

  return (
    <>
      <section style={{ background: c.bg, padding: "120px 20px" }}>
        <div style={{ maxWidth: 1280, margin: "auto" }}>
          
          <button
            onClick={goBack}
            style={{
              background: "none",
              border: "none",
              color: c.accent,
              fontWeight: 600,
              cursor: "pointer",
              marginBottom: 50
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
              marginBottom: 60,
              position: "relative",
              overflow: "hidden"
            }}
          >
            <div
              style={{
                position: "absolute",
                width: 420,
                height: 420,
                background: c.accent,
                filter: "blur(160px)",
                opacity: 0.18,
                left: -120,
                top: -140
              }}
            />

            <span
              style={{
                color: c.accent,
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: 3
              }}
            >
              {tx.tag.toUpperCase()}
            </span>

            <h1
              style={{
                fontSize: 48,
                marginTop: 15,
                marginBottom: 25,
                color: c.text,
                maxWidth: 900,
                lineHeight: 1.1
              }}
            >
              {tx.title}
            </h1>

            <p
              style={{
                fontSize: 18,
                maxWidth: 820,
                lineHeight: 1.9,
                color: c.sub
              }}
            >
              {tx.desc}
            </p>
          </div>

          {/* GRID */}
          <div style={{ display: "grid", gridTemplateColumns: "360px 1fr", gap: 50 }}>
            
            {/* SIDEBAR */}
            <aside
              style={{
                background: c.card,
                border: `1px solid ${c.border}`,
                borderRadius: 20,
                padding: 30,
                height: "fit-content",
                position: "sticky",
                top: 120
              }}
            >
              <div
                style={{
                  height: 200,
                  borderRadius: 16,
                  background: "linear-gradient(135deg,#0EA5E9 0%, #22D3EE 100%)",
                  opacity: 0.15,
                  marginBottom: 30
                }}
              />

              <Side title="STACK" items={["Power Apps", "Dataverse", "Power Automate", "Outlook API", "Power BI"]} c={c} />
              <Side title="SCALE" items={["1200+ Users", "Regional Rollout", "15+ Flows", "30 Tables"]} c={c} />
              <Side title="MODULES" items={["Service Requests", "Queues", "SLA Engine", "Operational Dashboards"]} c={c} />
            </aside>

            {/* MAIN */}
            <main style={{ display: "flex", flexDirection: "column", gap: 40 }}>

              <MetricGrid c={c} />

              <Card title={tx.arch} c={c}>
                {lang === "en"
                  ? "The platform was architected using a hybrid Power Platform model combining Model-Driven governance capabilities for structured data management with Canvas applications focused on request submission usability. Dataverse served as the operational backbone while automation flows orchestrated routing decisions, SLA enforcement and lifecycle status transitions."
                  : "A plataforma foi arquitetada utilizando um modelo híbrido em Power Platform combinando capacidades Model-Driven voltadas à governança de dados estruturados com aplicações Canvas focadas na usabilidade de abertura de solicitações. O Dataverse atuou como base operacional enquanto fluxos de automação orquestraram decisões de roteamento, aplicação de SLA e transições de status ao longo do ciclo de vida."}
              </Card>

              <Card title={tx.automation} c={c}>
                {lang === "en"
                  ? "Engineering ownership included creation of multi-stage routing flows, refactoring legacy automation logic, implementing escalation strategies and designing notification distribution models across operational teams. Performance optimization initiatives reduced execution latency in high-volume service scenarios."
                  : "A atuação técnica envolveu criação de fluxos de roteamento multi-estágio, refatoração de lógicas de automação legadas, implementação de estratégias de escalonamento e desenho de modelos de distribuição de notificações entre times operacionais. Iniciativas de otimização de performance reduziram latências de execução em cenários de alto volume de solicitações."}
              </Card>

              <Card title={tx.lifecycle} c={c}>
                <p style={{ marginBottom: 20 }}>
                  {lang === "en"
                    ? "Core automation responsible for controlling request lifecycle transitions from submission to resolution."
                    : "Automação central responsável por controlar as transições de ciclo de vida das solicitações desde a abertura até a resolução."}
                </p>

<pre style={{
background:"#020617",
color:"#E5E7EB",
padding:22,
borderRadius:16,
fontSize:13
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
                {lang === "en"
                  ? "The platform significantly reduced reliance on email-based service coordination and spreadsheet tracking approaches. Teams gained structured visibility into backlog volume, SLA compliance and request throughput enabling more predictable operational execution."
                  : "A plataforma reduziu significativamente a dependência de coordenação de serviços baseada em e-mails e controles em planilhas. Os times passaram a ter visibilidade estruturada sobre volume de backlog, cumprimento de SLA e throughput de solicitações, permitindo uma execução operacional mais previsível."}
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
    <div style={{ marginBottom: 28 }}>
      <h4 style={{ fontSize: 11, letterSpacing: 3, color: c.accent, marginBottom: 10 }}>
        {title}
      </h4>
      <ul style={{ color: c.sub, fontSize: 15, lineHeight: 1.9 }}>
        {items.map((i: string) => <li key={i}>{i}</li>)}
      </ul>
    </div>
  );
}

function MetricGrid({ c }: any) {
  const data = [
    ["1200+", "Enterprise Users"],
    ["15+", "Automation Flows"],
    ["30", "Dataverse Tables"],
  ];

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 25 }}>
      {data.map((m) => (
        <div key={m[1]} style={{ background: c.card, border: `1px solid ${c.border}`, borderRadius: 18, padding: 30 }}>
          <h2 style={{ color: c.text, fontSize: 30 }}>{m[0]}</h2>
          <span style={{ color: c.sub, fontSize: 14 }}>{m[1]}</span>
        </div>
      ))}
    </div>
  );
}

function Card({ title, children, c }: any) {
  return (
    <div style={{ background: c.card, border: `1px solid ${c.border}`, borderRadius: 20, padding: 45 }}>
      <h2 style={{ fontSize: 26, color: c.text, marginBottom: 15 }}>{title}</h2>
      <div style={{ color: c.sub, lineHeight: 1.9, fontSize: 16 }}>
        {children}
      </div>
    </div>
  );
}