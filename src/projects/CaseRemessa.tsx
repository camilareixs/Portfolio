import { useTheme } from "../context/ThemeContext";
import { useLang } from "../context/LangContext";
import Footer from "../components/Footer";

interface Props {
  goBack: () => void;
}

export default function CaseRemessa({ goBack }: Props) {
  const { theme } = useTheme();
  const { lang } = useLang();

  const dark = theme === "dark";

  const t = {
    en: {
      back: "Back to Projects",
      tag: "Financial Data Automation Platform",
      title: "Automated Remittance Processing & Reporting Ecosystem",
      desc: "Enterprise-grade automation platform designed to orchestrate ingestion, cleansing, transformation and distribution of financial remittance datasets. Built on Microsoft Power Platform enabling reliable high-volume processing and structured operational visibility.",
      arch: "Platform Architecture",
      automation: "Automation Engineering Scope",
      pipeline: "Remittance Processing Pipeline",
      impact: "Business Impact"
    },
    pt: {
      back: "Voltar aos Projetos",
      tag: "Plataforma de Automação de Dados Financeiros",
      title: "Ecossistema Automatizado de Processamento de Remessas",
      desc: "Plataforma corporativa de automação responsável por orquestrar ingestão, limpeza, transformação e distribuição de datasets financeiros de remessa. Construída em Power Platform permitindo processamento confiável em alto volume e visibilidade operacional estruturada.",
      arch: "Arquitetura da Plataforma",
      automation: "Escopo de Engenharia de Automação",
      pipeline: "Pipeline de Processamento de Remessas",
      impact: "Impacto no Negócio"
    }
  };

  const tx = t[lang];

  const c = {
    bg: dark ? "radial-gradient(circle at 80% 20%, #0F172A 0%, #020617 60%)" : "#F5F7FB",
    card: dark ? "#0F1625" : "#FFFFFF",
    border: dark ? "#1F2A44" : "#E6EAF2",
    text: dark ? "#E8ECF8" : "#0F172A",
    sub: dark ? "#9AA6C4" : "#64748B",

    accent: "#D97706",
    accentSoft: "#F59E0B"
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

            <span style={{ color: c.accent, fontWeight: 700, fontSize: 12, letterSpacing: 3 }}>
              {tx.tag.toUpperCase()}
            </span>

            <h1 style={{ fontSize: 48, marginTop: 15, marginBottom: 25, color: c.text, maxWidth: 900, lineHeight: 1.1 }}>
              {tx.title}
            </h1>

            <p style={{ fontSize: 18, maxWidth: 820, lineHeight: 1.9, color: c.sub }}>
              {tx.desc}
            </p>
          </div>

          {/* GRID */}
          <div style={{ display: "grid", gridTemplateColumns: "360px 1fr", gap: 50 }}>
            
            {/* SIDEBAR */}
            <aside style={{
              background: c.card,
              border: `1px solid ${c.border}`,
              borderRadius: 20,
              padding: 30,
              height: "fit-content",
              position: "sticky",
              top: 120
            }}>
              <div style={{
                height: 200,
                borderRadius: 16,
                background: "linear-gradient(135deg,#D97706 0%, #F59E0B 100%)",
                opacity: 0.15,
                marginBottom: 30
              }} />

              <Side title="STACK" items={["Power Apps", "SharePoint", "Power Automate", "Power BI Dataflow", "Excel / CSV"]} c={c} />
              <Side title="SCALE" items={["Finance Operations", "Multi-File Processing", "Automated Reporting", "High Volume Runs"]} c={c} />
              <Side title="MODULES" items={["File Ingestion", "Data Cleansing", "Transformation Engine", "Remittance Export"]} c={c} />
            </aside>

            {/* MAIN */}
            <main style={{ display: "flex", flexDirection: "column", gap: 40 }}>
              
              <MetricGrid c={c} />

              <Card title={tx.arch} c={c}>
                {lang === "en"
                  ? "The solution was architected as a centralized data processing layer combining SharePoint document ingestion with Power Platform automation and Dataflow transformation pipelines. Structured datasets are normalized and validated before report generation ensuring financial integrity and operational reliability."
                  : "A solução foi arquitetada como uma camada centralizada de processamento de dados combinando ingestão de documentos via SharePoint com automações em Power Platform e pipelines de transformação via Dataflow. Os datasets estruturados são normalizados e validados antes da geração de relatórios garantindo integridade financeira e confiabilidade operacional."}
              </Card>

              <Card title={tx.automation} c={c}>
                {lang === "en"
                  ? "Engineering ownership included design of ingestion orchestration flows, legacy spreadsheet normalization logic, execution monitoring mechanisms and automated distribution models. Performance optimization initiatives significantly reduced end-to-end execution time for high-volume remittance cycles."
                  : "A atuação técnica envolveu desenho de fluxos de orquestração de ingestão, lógica de normalização de planilhas legadas, mecanismos de monitoramento de execução e modelos automatizados de distribuição de relatórios. Iniciativas de otimização reduziram significativamente o tempo total de processamento em ciclos de alto volume."}
              </Card>

              <Card title={tx.pipeline} c={c}>
                <p style={{ marginBottom: 20 }}>
                  {lang === "en"
                    ? "Core automation pipeline responsible for transforming raw financial files into consolidated remittance outputs."
                    : "Pipeline central responsável por transformar arquivos financeiros brutos em relatórios consolidados de remessa."}
                </p>

<pre style={{
background:"#020617",
color:"#E5E7EB",
padding:22,
borderRadius:16,
fontSize:13
}}>
{`UPLOAD → Validate Files
→ Clean Legacy Tables
→ Execute Dataflow Transformation
→ Generate Consolidated CSV
→ Distribute Finance Report`}
</pre>

              </Card>

              <Card title={tx.impact} c={c}>
                {lang === "en"
                  ? "The platform eliminated manual spreadsheet reconciliation cycles reducing processing time from multiple days to minutes. Finance teams gained predictable execution windows, improved data accuracy and structured monitoring capabilities enabling scalable remittance operations."
                  : "A plataforma eliminou ciclos manuais de reconciliação em planilhas reduzindo o tempo de processamento de vários dias para minutos. Os times financeiros passaram a ter janelas previsíveis de execução, maior acurácia de dados e capacidade estruturada de monitoramento permitindo escalar operações de remessa."}
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
    ["10 min", "Processing Window"],
    ["5+", "Financial Sources"],
    ["100%", "Automation Coverage"],
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