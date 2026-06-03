import { useTheme } from "../context/ThemeContext";
import { useLang } from "../context/LangContext";
import Footer from "../components/Footer";

interface Props {
  goBack: () => void;
}

export default function CaseActus({ goBack }: Props) {
  const { theme } = useTheme();
  const { lang } = useLang();

  const dark = theme === "dark";

  const t = {
    en: {
      back: "Back to Projects",
      tag: "Global Compliance Platform",
      title: "ACTUS — Global Governance in Motion",
      desc: "More than an application, ACTUS is an operational ecosystem that sustains incident governance at global scale. The platform connects business units, standardizes processes and ensures that every occurrence — regardless of country — follows a structured, traceable and auditable flow. My role focused on evolving this environment, ensuring stability, reliability and integration across critical systems.",
      video: "Platform Walkthrough",
      arch: "Architecture",
      automation: "My Role",
      impact: "Impact",
      integration: "Global Integration (GID)"
    },
    pt: {
      back: "Voltar aos Projetos",
      tag: "Plataforma Global de Compliance",
      title: "ACTUS — Governança Global em Movimento",
      desc: "Muito além de uma aplicação, o ACTUS é um ecossistema operacional que sustenta a governança de incidentes em escala global. A plataforma conecta unidades, padroniza processos e garante que cada ocorrência — independentemente do país — siga um fluxo estruturado, rastreável e auditável. Minha atuação esteve diretamente ligada à evolução desse ambiente, garantindo estabilidade, confiabilidade e integração entre sistemas críticos.",
      video: "Demonstração da Plataforma",
      arch: "Arquitetura",
      automation: "Minha Atuação",
      impact: "Impacto",
      integration: "Integração Global (GID)"
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
          padding: "120px 20px",
          overflowX: "hidden"
        }}
      >
        <div style={{ maxWidth: 1280, margin: "auto" }}>
          
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
            <h2 style={{ color: c.text, marginBottom: 20 }}>{tx.video}</h2>

            <div
  style={{
    width: "100%",
    height: 420,
    borderRadius: 16,
    overflow: "hidden"
  }}
>
  <video
    src="/videos/actus.mp4"
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
          "Operação global multi-país",
          "Mais de 2800 usuários ativos",
          "Dezenas de automações críticas",
          "Fluxos corporativos de governança",
          "Disponível em múltiplos idiomas"
        ]
      : [
          "Global multi-country operation",
          "Over 2800 active users",
          "Dozens of critical automations",
          "Enterprise governance workflows",
          "Multi-language platform"
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
                  ? "A solução foi estruturada para suportar operações distribuídas, combinando aplicações operacionais com uma camada robusta de dados e automações. Cada componente cumpre um papel claro dentro do fluxo global de incidentes, permitindo que informações fluam entre áreas, países e sistemas sem perda de consistência. O resultado é uma arquitetura que não apenas suporta o negócio, mas o organiza."
                  : "The solution was designed to support distributed operations, combining operational applications with a robust data and automation layer. Each component plays a clear role within the global incident flow, allowing information to move across areas, countries and systems without losing consistency. The result is an architecture that not only supports the business, but structures it."}
              </Card>

              <Card title={tx.automation} c={c}>
                {lang === "pt"
                  ? "Minha atuação não foi na criação inicial da plataforma, mas na sua evolução contínua dentro de um ambiente já em produção e altamente dependente do negócio. Trabalhei na melhoria de fluxos existentes, estabilização de automações críticas e evolução de integrações globais. Isso envolveu lidar com cenários reais, dados inconsistentes e processos já utilizados por múltiplas regiões, onde qualquer ajuste precisava ser preciso, seguro e escalável."
                  : "My role was not building the platform from scratch, but evolving it within an already active and business-critical environment. I worked on improving existing flows, stabilizing critical automations and refining global integrations. This meant dealing with real scenarios, inconsistent data and processes already used across multiple regions, where every change had to be precise, safe and scalable."}
              </Card>

              <Card title={tx.integration} c={c}>
                <p style={{ marginBottom: 15 }}>
                  {lang === "pt"
                    ? "Um dos pontos mais críticos da plataforma é a integração com o Global Incident Database (GID). Cada incidente precisa ser transformado dinamicamente em uma estrutura padronizada, respeitando regras complexas e variações entre regiões. Abaixo está um recorte real dessa lógica."
                    : "One of the most critical parts of the platform is the integration with the Global Incident Database (GID). Each incident must be dynamically transformed into a standardized structure, respecting complex rules and regional variations. Below is a real excerpt of this logic."}
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
{`"incident_main_root_cause":
@if(empty(first(body('Identify_Main_Cause'))['lower_root']),
first(body('Identify_Main_Cause'))['near_root'],
first(body('Identify_Main_Cause'))['lower_root'])

"incident_causes":
@json(concat('[',replace(replace(join(body('Parse_Root_Causes'),','),'{\\"cause_chain\\":',''),'}',''),']'))`}
                </pre>
              </Card>

              <Card title={tx.impact} c={c}>
                {lang === "pt"
                  ? "O impacto vai além da tecnologia. A evolução da plataforma reduziu dependências manuais, aumentou a confiabilidade dos dados e trouxe maior previsibilidade para a governança de incidentes. Em escala global, isso se traduz em decisões mais rápidas, maior rastreabilidade e uma operação mais madura, sustentada por um sistema que precisa funcionar com consistência todos os dias."
                  : "The impact goes beyond technology. The platform evolution reduced manual dependencies, increased data reliability and brought greater predictability to incident governance. At global scale, this translates into faster decisions, better traceability and a more mature operation supported by a system that must perform consistently every day."}
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