import { useTheme } from "../context/ThemeContext";
import { useLang } from "../context/LangContext";
import Footer from "../components/Footer";

interface Props {
  goBack: () => void;
}

export default function CaseControleDelegados({ goBack }: Props) {
  const { theme } = useTheme();
  const { lang } = useLang();

  const dark = theme === "dark";

  const t = {
    en: {
      back: "Back to Projects",
      tag: "Mobility Governance Platform",
      title: "Delegates Control — Mobility Management System",
      desc:
        "Enterprise mobility application designed to manage inbound expatriate delegation periods, automate vacation entitlement calculations and replace a costly legacy platform with a scalable Power Platform solution.",
      arch: "Platform Architecture",
      flows: "Automation & Reporting",
      ux: "User Experience Strategy",
      impact: "Business Impact"
    },
    pt: {
      back: "Voltar aos Projetos",
      tag: "Plataforma de Governança de Mobilidade",
      title: "Controle de Delegados — Sistema de Gestão de Mobilidade",
      desc:
        "Aplicação enterprise desenvolvida para gerenciar períodos de delegação de expatriados inbound, automatizar cálculos de direito a férias e substituir um sistema legado custoso por uma solução escalável em Power Platform.",
      arch: "Arquitetura da Plataforma",
      flows: "Automação & Relatórios",
      ux: "Estratégia de Experiência do Usuário",
      impact: "Impacto no Negócio"
    }
  };

  const tx = t[lang];

  const accent = "#16A34A";
  const accentSoft = "#86EFAC";

  const c = {
    bg: dark
      ? "radial-gradient(circle at 70% 10%, #052E1C 0%, #020617 60%)"
      : "#F0FFF6",
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
              <Side title="SCALE" items={["South America Coverage", "Inbound Delegates", "Regional Governance"]} accent={accent} c={c} />
              <Side title="MODULES" items={["Delegate Registration", "Vacation Calculation", "PDF Reporting"]} accent={accent} c={c} />
            </aside>

            {/* MAIN */}
            <main style={{ display: "flex", flexDirection: "column", gap: 40 }}>

              <MetricGrid c={c} />

              <Card title={tx.arch} c={c}>
                Aplicação construída em Power Apps Canvas com Dataverse como base estruturada de dados.
                Permite controle completo dos períodos de delegação, histórico de movimentações e gestão centralizada
                de direitos a férias para expatriados inbound.
              </Card>

              <Card title={tx.flows} c={c}>
                Automação implementada via Power Automate:
                <ul>
                  <li>Leitura de anexos e validação de dados</li>
                  <li>Geração automática de relatórios PDF</li>
                  <li>Distribuição por email para stakeholders</li>
                  <li>Atualização automática de status e registros</li>
                </ul>
              </Card>

              <Card title={tx.ux} c={c}>
                Interface redesenhada para substituir sistema legado com baixa usabilidade.
                Estrutura focada em rapidez operacional, redução de erros e adoção por usuários não técnicos.
              </Card>

              <Card title={tx.impact} c={c}>
                Resultados estratégicos:
                <ul>
                  <li>Eliminação de custo mensal com plataforma antiga</li>
                  <li>Controle digital completo de delegados inbound</li>
                  <li>Relatórios confiáveis para pagamento de férias</li>
                  <li>Maior visibilidade operacional regional</li>
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

function MetricGrid({ c }: any) {
  const data = [
    ["LATAM", "Operational Coverage"],
    ["100%", "Delegates Digital"],
    ["0", "Legacy Cost"],
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