import { useTheme } from "../context/ThemeContext";
import Footer from "../components/Footer";

interface Props {
  goBack: () => void;
}

export default function CaseMeasurementReport({ goBack }: Props) {

  const { theme } = useTheme();
  const dark = theme === "dark";

  const accent = "#10B981";

  const c = {
    bg: dark
      ? "radial-gradient(circle at 20% 10%, #06261B 0%, #020617 60%)"
      : "#ECFDF5",
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
                right: -120,
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
              ENTERPRISE FINANCE PLATFORM
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
              Measurement Report Automation System
            </h1>

            <p
              style={{
                fontSize: 18,
                maxWidth: 820,
                lineHeight: 1.9,
                color: c.sub
              }}
            >
              Enterprise-grade platform created to automate supplier billing validation, purchase order monitoring and SAP data synchronization processes. 
              Combines Power Platform applications with UiPath RPA orchestration to enable scalable financial operations across South America.
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
              <Side title="STACK" items={["Power Apps", "Power Automate", "Dataverse", "UiPath RPA", "SAP"]} accent={accent} c={c} />
              <Side title="DOMAIN" items={["Supplier Billing", "Purchase Orders", "Finance Operations"]} accent={accent} c={c} />
              <Side title="CAPABILITIES" items={["SAP Extraction", "Workflow Engine", "Scheduled Jobs"]} accent={accent} c={c} />
            </aside>

            {/* MAIN */}
            <main style={{ display: "flex", flexDirection: "column", gap: 40 }}>

              <MetricGrid c={c} />

              <Card title="Supplier Billing Workflow" c={c}>
                Analysts validate measurement reports through structured approval and refusal flows. 
                Vendor focal point registration and lifecycle management enable standardized communication and accountability.
              </Card>

              <Card title="SAP Data Automation" c={c}>
                UiPath robots extract service order and balance data using REFramework patterns, synchronizing financial information into Dataverse relational structures.
              </Card>

              <Card title="Operational Data Platform" c={c}>
                Power Automate orchestrates SQL updates, reporting database synchronization and notification workflows. 
                Scheduled jobs refresh operational datasets every six hours.
              </Card>

              <Card title="Business Impact" c={c}>
                <ul>
                  <li>Reduced manual supplier billing validation effort</li>
                  <li>Improved auditability and transparency of payments</li>
                  <li>Centralized historical reporting database</li>
                  <li>Automation of repetitive SAP extraction tasks</li>
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
    ["RPA", "SAP Sync"],
    ["6h", "Data Refresh"],
    ["LATAM", "Finance Scope"]
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