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
      title: "IPO — Centralized Checklist Management Platform",
      desc:
        "Enterprise application designed to standardize and centralize the annual Information Security checklist process for IPOs and pIPOs globally. Replaces fragmented Word-based workflows with a structured, scalable and trackable governance platform.",
      arch: "Platform Architecture",
      flows: "Automation & Governance",
      ux: "User Experience Design",
      impact: "Business Impact"
    },
    pt: {
      back: "Voltar aos Projetos",
      tag: "Governança de Segurança da Informação",
      title: "IPO — Plataforma Centralizada de Gestão de Checklists",
      desc:
        "Aplicação enterprise desenvolvida para padronizar e centralizar o processo anual de checklist de Segurança da Informação para IPOs e pIPOs globalmente. Substitui fluxos fragmentados em Word por uma plataforma estruturada, escalável e rastreável.",
      arch: "Arquitetura da Plataforma",
      flows: "Automação & Governança",
      ux: "Experiência do Usuário",
      impact: "Impacto no Negócio"
    }
  };

  const tx = t[lang];

  const accent = "#7C3AED";
  const accentSoft = "#C4B5FD";

  const c = {
    bg: dark
      ? "radial-gradient(circle at 20% 10%, #120A2A 0%, #020617 60%)"
      : "#F6F3FF",
    card: dark ? "#0F1625" : "#FFFFFF",
    border: dark ? "#1F2A44" : "#E6EAF2",
    text: dark ? "#E8ECF8" : "#0F172A",
    sub: dark ? "#9AA6C4" : "#64748B"
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
              color: accent,
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
                background: accent,
                filter: "blur(160px)",
                opacity: 0.18,
                left: -120,
                top: -140
              }}
            />

            <span
              style={{
                color: accent,
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
              <Side title="STACK" items={["Power Apps", "Dataverse", "Power Automate", "SharePoint"]} accent={accent} c={c} />
              <Side title="SCALE" items={["Global IPO Coverage", "Regional Governance", "Standardized Compliance"]} accent={accent} c={c} />
              <Side title="MODULES" items={["Checklist Builder", "Progress Tracking", "Visibility Dashboard"]} accent={accent} c={c} />
            </aside>

            {/* MAIN */}
            <main style={{ display: "flex", flexDirection: "column", gap: 40 }}>

              <MetricGrid accent={accent} c={c} />

              <Card title={tx.arch} c={c}>
                Plataforma construída em Power Apps Canvas com Dataverse como camada central de dados.
                Estrutura permite criação padronizada de checklists anuais, rastreamento de progresso por IPO
                e visibilidade consolidada para gestores regionais e globais.
              </Card>

              <Card title={tx.flows} c={c}>
                Automação garante consistência do processo:
                <ul>
                  <li>Criação automática de checklists por ciclo anual</li>
                  <li>Controle de status e progresso em tempo real</li>
                  <li>Padronização global de perguntas e critérios</li>
                  <li>Visibilidade centralizada para times de governança</li>
                </ul>
              </Card>

              <Card title={tx.ux} c={c}>
                Interface simples focada em adoção rápida.
                Usuários conseguem criar, preencher e acompanhar checklists sem necessidade de treinamento técnico.
                Estrutura visual reduz complexidade percebida e melhora compliance.
              </Card>

              <Card title={tx.impact} c={c}>
                Impactos diretos:
                <ul>
                  <li>Eliminação de checklists manuais em Word</li>
                  <li>Governança padronizada globalmente</li>
                  <li>Maior transparência de progresso e riscos</li>
                  <li>Redução significativa de esforço operacional</li>
                </ul>
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

function Side({ title, items, accent, c }: any) {
  return (
    <div style={{ marginBottom: 28 }}>
      <h4 style={{
        fontSize: 11,
        letterSpacing: 3,
        color: accent,
        marginBottom: 10
      }}>
        {title}
      </h4>

      <ul style={{ color: c.sub, fontSize: 15, lineHeight: 1.9 }}>
        {items.map((i: string) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}

function MetricGrid({ accent, c }: any) {
  const data = [
    ["37", "Standard Questions"],
    ["Global", "IPO Coverage"],
    ["100%", "Process Centralized"],
  ];

  return (
    <div style={{
      display:"grid",
      gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
      gap:25
    }}>
      {data.map((m)=>(
        <div key={m[1]} style={{
          background:c.card,
          border:`1px solid ${c.border}`,
          borderRadius:18,
          padding:30
        }}>
          <h2 style={{color:c.text,fontSize:30}}>{m[0]}</h2>
          <span style={{color:c.sub,fontSize:14}}>{m[1]}</span>
        </div>
      ))}
    </div>
  );
}

function Card({ title, children, c }: any) {
  return (
    <div style={{
      background:c.card,
      border:`1px solid ${c.border}`,
      borderRadius:20,
      padding:45
    }}>
      <h2 style={{ fontSize:26, color:c.text, marginBottom:15 }}>
        {title}
      </h2>

      <div style={{ color:c.sub, lineHeight:1.9, fontSize:16 }}>
        {children}
      </div>
    </div>
  );
}