import { useTheme } from "../context/ThemeContext";
import { useLang } from "../context/LangContext";
import Footer from "../components/Footer";

interface Props {
  goBack: () => void;
}

export default function CaseCambioImportacao({ goBack }: Props) {
  const { theme } = useTheme();
  const { lang } = useLang();

  const dark = theme === "dark";

  const t = {
    en: {
      back: "Back to Projects",
      tag: "Treasury Process Platform",
      title: "Import Exchange Request & Treasury Governance Platform",
      desc:
        "Enterprise treasury platform created to standardize and centralize foreign exchange remittance requests related to import payments across South America. The solution replaced fragmented email-based validation cycles with a structured operational ecosystem focused on approval governance, payment traceability, attachment validation and scalable treasury execution between business units and finance operations.",

      video: "Platform Walkthrough",
      arch: "Architecture",
      automation: "My Role",
      impact: "Impact",
      integration: "Approval Workflow"
    },

    pt: {
      back: "Voltar aos Projetos",
      tag: "Plataforma de Processos Treasury",
      title: "Plataforma de Solicitação Cambial e Governança Treasury",
      desc:
        "Plataforma enterprise criada para centralizar e padronizar solicitações de remessas cambiais relacionadas a pagamentos de importação em toda a América do Sul. A solução substituiu ciclos fragmentados de validação via email por um ecossistema operacional estruturado focado em governança de aprovações, rastreabilidade de pagamentos, validação documental e execução escalável entre áreas de negócio e operações financeiras.",

      video: "Demonstração da Plataforma",
      arch: "Arquitetura",
      automation: "Minha Atuação",
      impact: "Impacto",
      integration: "Fluxo de Aprovação"
    }
  };

  const tx = t[lang];

  const c = {
    bg: dark ? "#020617" : "#EEF2FF",
    card: dark ? "#0F172A" : "#FFFFFF",
    border: dark ? "#1E293B" : "#E6EAF2",
    text: dark ? "#E8ECF8" : "#0F172A",
    sub: dark ? "#94A3B8" : "#64748B",
    accent: "#4F46E5"
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
                src="/videos/fluxopag.mp4"
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
                  "LATAM Treasury Operations",
                  "Foreign Exchange Governance",
                  "Import Payment Approval Flows",
                  "Enterprise Financial Validation"
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
                  ? "A solução foi construída em Power Platform utilizando Power Apps para centralização operacional, SharePoint como camada documental e Power Automate para automações de aprovação, validação e rastreabilidade. A arquitetura suporta diferentes jornadas de pagamento cambial garantindo consistência operacional, controle documental e governança financeira entre múltiplos países e áreas corporativas."
                  : "The solution was built on Power Platform using Power Apps for centralized operations, SharePoint as the document layer and Power Automate for approval, validation and traceability automations. The architecture supports multiple foreign exchange payment journeys ensuring operational consistency, document control and financial governance across countries and corporate teams."}
              </Card>

              <Card title={tx.automation} c={c}>
                {lang === "pt"
                  ? "Minha atuação esteve focada na evolução da plataforma, criação de fluxos automatizados de aprovação, validação de anexos financeiros e melhoria da experiência operacional para áreas solicitantes e times de treasury. O projeto envolveu transformar um processo altamente dependente de emails em um fluxo estruturado, rastreável e escalável."
                  : "My role focused on platform evolution, creation of automated approval flows, validation of financial attachments and improving the operational experience for requesters and treasury teams. The project transformed a highly email-dependent process into a structured, traceable and scalable workflow."}
              </Card>

              <Card title={tx.integration} c={c}>
                <p style={{ marginBottom: 15 }}>
                  {lang === "pt"
                    ? "O fluxo operacional controla todo o ciclo de aprovação das solicitações cambiais desde a criação até a validação final pelo treasury."
                    : "The operational workflow controls the entire approval lifecycle of foreign exchange requests from creation to final treasury validation."}
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
{`CREATE FX Request
→ Upload Financial Documents
→ Validate Required Attachments
→ Treasury Approval Flow
→ Return for Adjustment (if needed)
→ Final Payment Authorization`}
                </pre>
              </Card>

              <Card title={tx.impact} c={c}>
                {lang === "pt"
                  ? "A plataforma reduziu dependências manuais entre áreas de negócio e treasury, aumentou a rastreabilidade das aprovações financeiras e trouxe maior previsibilidade operacional para pagamentos de importação. O resultado foi uma operação mais segura, auditável e escalável para processos cambiais em nível regional."
                  : "The platform reduced manual dependencies between business and treasury teams, increased traceability of financial approvals and brought greater operational predictability for import payment processing. The result was a safer, auditable and scalable foreign exchange operation at regional level."}
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