import { useTheme } from "../context/ThemeContext";
import Footer from "../components/Footer";

interface Props {
  goBack: () => void;
}

export default function CaseInvoice({ goBack }: Props) {

  const { theme } = useTheme();
  const dark = theme === "dark";

  const accent = "#F59E0B";

  const c = {
    bg: dark
      ? "radial-gradient(circle at 20% 10%, #2A1900 0%, #020617 60%)"
      : "#FFFBEB",
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
              DOCUMENT AUTOMATION PLATFORM
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
              Invoice Center — AP Intake & Processing Engine
            </h1>

            <p
              style={{
                fontSize: 18,
                maxWidth: 820,
                lineHeight: 1.9,
                color: c.sub
              }}
            >
              Centralized financial document platform created to automate invoice ingestion, validation and analyst review workflows across South America operations. 
              Replaces high-volume email handling with structured ticket generation and lifecycle visibility.
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
              <Side title="STACK" items={["Power Apps", "Power Automate", "Dataverse", "Email Connectors"]} accent={accent} c={c} />
              <Side title="DOMAIN" items={["Accounts Payable", "Invoice Processing", "Document Intake"]} accent={accent} c={c} />
              <Side title="CAPABILITIES" items={["Email Ingestion", "Ticket Generation", "Lifecycle Tracking"]} accent={accent} c={c} />
            </aside>

            {/* MAIN */}
            <main style={{ display: "flex", flexDirection: "column", gap: 40 }}>

              <MetricGrid c={c} />

              <Card title="Automated Invoice Intake" c={c}>
                Power Automate flows ingest incoming invoice emails, validate attachments and create structured processing records within Dataverse relational tables.
              </Card>

              <Card title="Analyst Review Workflow" c={c}>
                The Canvas application generates review tickets for AP analysts, allowing validation decisions and status updates to be handled directly within the platform.
              </Card>

              <Card title="Operational Visibility" c={c}>
                Status notifications inform requesters about processing progress while scheduled export and cleanup processes maintain system performance and reporting readiness.
              </Card>

              <Card title="Business Impact" c={c}>
                <ul>
                  <li>40 hours operational effort saved monthly</li>
                  <li>Reduced manual validation errors</li>
                  <li>Improved traceability and reporting</li>
                  <li>Eliminated dependency on direct requester follow-ups</li>
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
    ["40h", "Monthly Saved"],
    ["LATAM", "Operations Scope"],
    ["Auto", "Email Intake"]
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