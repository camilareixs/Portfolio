import { useTheme } from "../context/ThemeContext";
import Footer from "../components/Footer";

interface Props {
  goBack: () => void;
}

export default function CaseCDPortal({ goBack }: Props) {

  const { theme } = useTheme();
  const dark = theme === "dark";

  const accent = "#7C3AED";

  const c = {
    bg: dark
      ? "radial-gradient(circle at 20% 10%, #140A2E 0%, #020617 60%)"
      : "#F5F3FF",
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
            ← Back to Projects
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
              🚧 IN PROGRESS
            </span>

            <h1
              style={{
                fontSize: 48,
                marginBottom: 20,
                color: c.text
              }}
            >
              CD Portal — Loyalty & Sales Platform
            </h1>

            <p
              style={{
                fontSize: 18,
                maxWidth: 820,
                lineHeight: 1.9,
                color: c.sub
              }}
            >
              Modern digital product designed to centralize loyalty campaign management, sales tracking and financial reconciliation workflows. 
              Built with React and TypeScript focusing on scalability, product usability and future enterprise integrations.
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
              <Side title="STACK" items={["React", "TypeScript", "Product Design", "Future APIs"]} accent={accent} c={c} />
              <Side title="DOMAIN" items={["Retail Loyalty", "Sales Operations", "Campaign Management"]} accent={accent} c={c} />
              <Side title="FOCUS" items={["UX Architecture", "Scalable Frontend", "Data Visualization"]} accent={accent} c={c} />
            </aside>

            {/* MAIN */}
            <main style={{ display: "flex", flexDirection: "column", gap: 40 }}>

              <MetricGrid c={c} />

              <Card title="Product Vision" c={c}>
                The platform replaces fragmented spreadsheet-based controls with centralized dashboards enabling structured campaign lifecycle tracking and financial performance visibility.
              </Card>

              <Card title="Frontend Architecture" c={c}>
                Designed with reusable component patterns, scalable state management strategies and performance-oriented UI composition.
              </Card>

              <Card title="Operational Impact (Expected)" c={c}>
                Automated reconciliation flows and structured approval processes aim to reduce operational delays and improve decision-making quality.
              </Card>

              <Card title="My Role" c={c}>
                <ul>
                  <li>Product discovery and UX definition</li>
                  <li>Frontend architecture design</li>
                  <li>React + TypeScript component development</li>
                  <li>Scalable data interaction pattern definition</li>
                  <li>Future enterprise integration strategy planning</li>
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
    ["React", "Frontend Core"],
    ["UX", "Product Focus"],
    ["SaaS", "Platform Vision"]
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