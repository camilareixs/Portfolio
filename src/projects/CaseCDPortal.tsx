import { useTheme } from "../context/ThemeContext";
import { useLang } from "../context/LangContext";
import Footer from "../components/Footer";

interface Props {
  goBack: () => void;
}

export default function CaseCDPortal({ goBack }: Props) {
  const { theme } = useTheme();
  const { lang } = useLang();

  const dark = theme === "dark";

  const t = {
    en: {
      back: "Back to Projects",
      progress: "IN PROGRESS",
      tag: "DIGITAL LOYALTY & SALES PLATFORM",
      title: "CD Portal — From Paper Processes to a Digital Ecosystem",
      desc: "CD Portal is a digital platform currently under development to transform manual, paper-based operations into a centralized and scalable ecosystem. Customer registration, purchase tracking, loyalty points management, cashback calculations and campaign administration are being consolidated into a single solution designed to improve operational efficiency, visibility and governance.",
      video: "Platform Walkthrough",
      context: "CONTEXT",
      vision: "Product Vision",
      architecture: "Frontend Architecture",
      transformation: "Business Transformation",
      flow: "Operational Flow",
      role: "My Role",
      impact: "Expected Impact"
    },
    pt: {
      back: "Voltar aos Projetos",
      progress: "EM DESENVOLVIMENTO",
      tag: "PLATAFORMA DIGITAL DE FIDELIDADE E VENDAS",
      title: "CD Portal — Da Operação Manual para um Ecossistema Digital",
      desc: "O CD Portal é uma plataforma digital em desenvolvimento criada para transformar processos operacionais realizados manualmente em um ecossistema centralizado e escalável. Cadastro de clientes, registro de compras, controle de pontuação, cálculos de cashback e administração de campanhas estão sendo unificados em uma única solução voltada para eficiência operacional, visibilidade e governança.",
      video: "Demonstração da Plataforma",
      context: "CONTEXTO",
      vision: "Visão do Produto",
      architecture: "Arquitetura Frontend",
      transformation: "Transformação Digital",
      flow: "Fluxo Operacional",
      role: "Minha Atuação",
      impact: "Impacto Esperado"
    }
  };

  const tx = t[lang];

  const c = {
    bg: dark ? "#020617" : "#F5F7FB",
    card: dark ? "#0F172A" : "#FFFFFF",
    border: dark ? "#1E293B" : "#E6EAF2",
    text: dark ? "#E8ECF8" : "#0F172A",
    sub: dark ? "#94A3B8" : "#64748B",
    accent: "#7C3AED"
  };

  return (
    <>
      <section style={{ background: c.bg, padding: "120px 20px", overflowX: "hidden" }}>
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

          <div
            style={{
              background: c.card,
              border: `1px solid ${c.border}`,
              borderRadius: 20,
              padding: 60,
              marginBottom: 60
            }}
          >
            <span
              style={{
                background: "#FB923C",
                color: "#fff",
                padding: "6px 14px",
                borderRadius: 999,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 1,
                display: "inline-block",
                marginBottom: 18
              }}
            >
              🚧 {tx.progress}
            </span>

            <div>
              <span style={{ color: c.accent, fontWeight: 700, fontSize: 12 }}>
                {tx.tag}
              </span>

              <h1 style={{ fontSize: 48, margin: "20px 0", color: c.text }}>
                {tx.title}
              </h1>

              <p style={{ fontSize: 18, color: c.sub, maxWidth: 900, lineHeight: 1.8 }}>
                {tx.desc}
              </p>
            </div>
          </div>

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

            <div style={{ width: "100%", height: 420, borderRadius: 16, overflow: "hidden" }}>
              <video
                src="/videos/camiduda.mp4"
                controls
                autoPlay
                muted
                loop
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0,360px) minmax(0,1fr)",
              gap: 40
            }}
          >
            <aside
              style={{
                background: c.card,
                border: `1px solid ${c.border}`,
                borderRadius: 20,
                padding: 30,
                height: "fit-content"
              }}
            >
              <Side
                title={tx.context}
                items={lang === "pt" ? [
                  "Operações de Fidelidade e Cashback",
                  "Gestão de Cadastro de Clientes",
                  "Governança de Vendas e Campanhas",
                  "Arquitetura React + TypeScript",
                  "Evolução para Aplicativo Mobile",
                  "Transformação Digital"
                ] : [
                  "Loyalty & Cashback Operations",
                  "Customer Registration Management",
                  "Sales & Campaign Governance",
                  "React + TypeScript Architecture",
                  "Mobile Application Roadmap",
                  "Digital Transformation Initiative"
                ]}
                c={c}
              />
            </aside>

            <main style={{ display: "flex", flexDirection: "column", gap: 40 }}>
              <Card title={tx.vision} c={c}>
                {lang === "pt"
                  ? "O projeto foi criado para substituir atividades operacionais realizadas por meio de registros em papel, planilhas e controles descentralizados. Processos como cadastro de clientes, registro de compras, gestão de pontuação e cálculos de cashback exigiam esforço manual e pouca padronização. O CD Portal centraliza essas atividades em um único ambiente digital."
                  : "The project was created to replace operational activities previously performed through paper records, spreadsheets and disconnected controls. Processes such as customer registration, purchase tracking, loyalty points management and cashback calculations required significant manual effort. CD Portal centralizes these activities into a unified digital environment."}
              </Card>

              <Card title={tx.architecture} c={c}>
                {lang === "pt"
                  ? "A plataforma está sendo desenvolvida com React e TypeScript utilizando uma arquitetura orientada a componentes, focada em escalabilidade, manutenção e evolução contínua do produto. A estrutura foi planejada para suportar futuras integrações com sistemas de pagamento, ERP, CRM e uma futura aplicação mobile."
                  : "The platform is being developed with React and TypeScript using a component-driven architecture focused on scalability, maintainability and long-term product evolution. The structure was designed to support future integrations with payment systems, ERP platforms, CRM solutions and a future mobile application."}
              </Card>

              <Card title={tx.transformation} c={c}>
                {lang === "pt"
                  ? "A solução representa uma transição completa da gestão operacional manual para um ecossistema digital estruturado. Cadastro de clientes, registro de compras, cálculo de pontos, validação de cashback e acompanhamento de campanhas passam a ser executados dentro de uma única plataforma."
                  : "The solution represents a complete transition from manual operational management to a structured digital ecosystem. Customer registration, purchase tracking, loyalty points calculation, cashback validation and campaign monitoring are consolidated into a single platform."}
              </Card>

              <Card title={tx.flow} c={c}>
                <pre style={{ background: "#020617", color: "#E5E7EB", padding: 20, borderRadius: 12 }}>
{lang === "pt"
? `Cadastrar Cliente
→ Registrar Compra
→ Calcular Pontuação
→ Validar Cashback
→ Monitorar Campanhas
→ Gerar Indicadores`
: `Register Customer
→ Record Purchase
→ Calculate Loyalty Points
→ Validate Cashback Rules
→ Track Campaign Performance
→ Generate Operational Insights`}
                </pre>
              </Card>

              <Card title={tx.role} c={c}>
                {lang === "pt"
                  ? "Sou responsável por conduzir o produto desde a concepção até a implementação, transformando necessidades operacionais em uma solução digital escalável. Minha atuação envolve levantamento de requisitos, definição da experiência do usuário, arquitetura de interfaces, desenvolvimento frontend e planejamento da evolução futura da plataforma."
                  : "I am responsible for driving the product from concept to implementation, translating business needs into a scalable digital solution. My responsibilities include requirements analysis, UX definition, interface architecture, frontend development and long-term product planning."}
              </Card>

              <Card title={tx.impact} c={c}>
                {lang === "pt"
                  ? "A plataforma tem como objetivo reduzir significativamente o esforço operacional gerado por processos manuais, aumentando a visibilidade sobre campanhas, pontuação e operações de cashback. A visão de longo prazo inclui disponibilização mobile por meio de APK e futuras integrações corporativas."
                  : "The platform is expected to significantly reduce operational overhead caused by manual processes while improving visibility into campaigns, loyalty operations and cashback management. The long-term vision includes mobile deployment through an APK and future enterprise integrations."}
              </Card>
            </main>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function Side({ title, items, c }: any) {
  return (
    <div>
      <h4 style={{ fontSize: 12, color: c.accent, marginBottom: 10 }}>{title}</h4>
      <ul style={{ color: c.sub, lineHeight: 1.8 }}>
        {items.map((i: string) => <li key={i}>{i}</li>)}
      </ul>
    </div>
  );
}

function Card({ title, children, c }: any) {
  return (
    <div style={{ background: c.card, border: `1px solid ${c.border}`, borderRadius: 20, padding: 40 }}>
      <h2 style={{ color: c.text, marginBottom: 15 }}>{title}</h2>
      <div style={{ color: c.sub, lineHeight: 1.8 }}>{children}</div>
    </div>
  );
}
