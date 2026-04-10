import { useTheme } from "../context/ThemeContext";
import Footer from "../components/Footer";

interface Props {
  goBack: () => void;
}

export default function CaseIndice({ goBack }: Props) {

  const { theme } = useTheme();

  const dark = theme === "dark";

  const accent = "#D97706";
  const accentSoft = "#FCD34D";

  const c = {
    bg: dark
      ? "radial-gradient(circle at 80% 10%, #2A1A05 0%, #020617 60%)"
      : "#FFF7ED",
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
                color: accent,
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: 3
              }}
            >
              DOCUMENT GOVERNANCE AUTOMATION
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
              Be On Index — Automated Hierarchical Index Engine
            </h1>

            <p
              style={{
                fontSize: 18,
                maxWidth: 820,
                lineHeight: 1.9,
                color: c.sub
              }}
            >
              Enterprise automation designed to dynamically rebuild structured operational manual indexes based on SharePoint folder hierarchy and metadata. Eliminates manual maintenance and ensures governance compliance through automated PDF publication.
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
              <Side title="STACK" items={["Power Automate", "SharePoint", "HTML Engine", "PDF Converter"]} accent={accent} c={c} />
              <Side title="SCALE" items={["Multi-Region Manuals", "Compliance Environment", "Dynamic Structure"]} accent={accent} c={c} />
              <Side title="MODULES" items={["Hierarchy Builder", "JSON Processor", "PDF Publisher"]} accent={accent} c={c} />
            </aside>

            {/* MAIN */}
            <main style={{ display: "flex", flexDirection: "column", gap: 40 }}>

              <MetricGrid c={c} />

              <Card title="Automation Architecture" c={c}>
                Solution designed using parent-child flow orchestration.
                Parent flow retrieves SharePoint items, processes hierarchy logic and sends structured JSON to a child flow responsible for HTML rendering and PDF generation.
              </Card>

              <Card title="Hierarchy Engine Logic" c={c}>
                Custom logic dynamically rebuilds index numbering such as 1 → 1.1 → 1.1.1
                based on folder depth and document metadata.
                Guarantees consistency across manual updates.
              </Card>

              <Card title="Governance & Compliance" c={c}>
                Automated publishing ensures teams always access the latest indexed manuals.
                Reduces operational risk and improves onboarding efficiency.
              </Card>

              <Card title="Business Impact" c={c}>
                <ul>
                  <li>100% elimination of manual index updates</li>
                  <li>Improved document traceability</li>
                  <li>Faster compliance validation cycles</li>
                  <li>Consistent hierarchical documentation globally</li>
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
    ["0", "Manual Updates"],
    ["Dynamic", "Hierarchy Engine"],
    ["PDF", "Auto Publication"]
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