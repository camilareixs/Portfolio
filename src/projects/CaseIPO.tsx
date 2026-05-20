import { useTheme } from "../context/ThemeContext";
import { useLang } from "../context/LangContext";
import Footer from "../components/Footer";

interface Props {
  goBack: () => void;
}

export default function CaseIPO({ goBack }: Props) {
  const { theme } = useTheme();
  const { lang } = useLang();

  const dark = theme === "dark";

  const t = {
    en: {
      back: "Back to Projects",
      tag: "Information Security Governance",
      title: "IPO Governance & Security Compliance Platform",
      desc:
        "Enterprise governance platform created to centralize and standardize annual Information Security checklist operations for IPOs and pIPOs globally. The solution replaced fragmented Word-based processes with a structured operational ecosystem focused on governance, compliance visibility, auditability and scalable execution across regions.",

      video: "Platform Walkthrough",
      arch: "Architecture",
      automation: "My Role",
      impact: "Impact",
      integration: "Governance Workflow"
    },

    pt: {
      back: "Voltar aos Projetos",
      tag: "Governança de Segurança da Informação",
      title: "Plataforma de Governança e Compliance para IPOs",
      desc:
        "Plataforma enterprise criada para centralizar e padronizar as operações anuais de checklist de Segurança da Informação para IPOs e pIPOs globalmente. A solução substituiu processos fragmentados em Word por um ecossistema operacional estruturado focado em governança, visibilidade de compliance, rastreabilidade e execução escalável entre regiões.",

      video: "Demonstração da Plataforma",
      arch: "Arquitetura",
      automation: "Minha Atuação",
      impact: "Impacto",
      integration: "Fluxo de Governança"
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
                src="/videos/ipoman.mp4"
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
                  "Global Security Governance",
                  "Annual Compliance Operations",
                  "Centralized Checklist Control",
                  "Enterprise Audit Visibility"
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
                  ? "A arquitetura foi construída em Power Platform utilizando Power Apps para operação centralizada, Dataverse como camada estruturada de dados e Power Automate para automações de governança e rastreabilidade. A solução suporta execução padronizada dos ciclos anuais de compliance entre diferentes regiões e unidades."
                  : "The architecture was built on Power Platform using Power Apps for centralized operations, Dataverse as the structured data layer and Power Automate for governance and traceability automations. The solution supports standardized execution of annual compliance cycles across regions and business units."}
              </Card>

              <Card title={tx.automation} c={c}>
                {lang === "pt"
                  ? "Responsável pela evolução da plataforma, automação de fluxos operacionais, padronização de processos globais e melhoria da experiência de uso para times envolvidos em operações de governança e compliance."
                  : "Responsible for platform evolution, operational workflow automation, standardization of global processes and improving usability for governance and compliance operational teams."}
              </Card>

              <Card title={tx.integration} c={c}>
                <p style={{ marginBottom: 15 }}>
                  {lang === "pt"
                    ? "O fluxo operacional centraliza a criação, execução e rastreamento dos checklists anuais de Segurança da Informação."
                    : "The operational workflow centralizes creation, execution and tracking of annual Information Security checklists."}
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
{`CREATE Annual Checklist
→ Assign Business Unit
→ Execute Security Review
→ Track Progress & Status
→ Generate Governance Visibility`}
                </pre>
              </Card>

              <Card title={tx.impact} c={c}>
                {lang === "pt"
                  ? "A plataforma eliminou processos manuais descentralizados em Word, aumentou a padronização global dos ciclos de compliance e trouxe maior visibilidade operacional para times de governança e Segurança da Informação."
                  : "The platform eliminated decentralized Word-based manual processes, increased global compliance standardization and improved operational visibility for governance and Information Security teams."}
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