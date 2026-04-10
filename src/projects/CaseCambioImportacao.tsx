import { useTheme } from "../context/ThemeContext";
import Footer from "../components/Footer";

interface Props {
  goBack: () => void;
}

export default function CaseCambioImportacao({ goBack }: Props) {

  const { theme } = useTheme();
  const dark = theme === "dark";

  const accent = "#4F46E5";
  const accentSoft = "#A5B4FC";

  const c = {
    bg: dark
      ? "radial-gradient(circle at 20% 10%, #0B0F2A 0%, #020617 60%)"
      : "#EEF2FF",
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
              TREASURY PROCESS PLATFORM
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
              Import Exchange Request System
            </h1>

            <p
              style={{
                fontSize: 18,
                maxWidth: 820,
                lineHeight: 1.9,
                color: c.sub
              }}
            >
              Financial workflow platform created to standardize foreign remittance requests related to import payments across South America. 
              The solution replaced fragmented email-based validation cycles with a structured approval lifecycle and centralized treasury governance.
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
              <Side title="STACK" items={["Power Apps", "Power Automate", "SharePoint", "Email Services"]} accent={accent} c={c} />
              <Side title="DOMAIN" items={["Treasury Operations", "FX Payments", "Import Governance"]} accent={accent} c={c} />
              <Side title="CAPABILITIES" items={["Lifecycle Tracking", "Approval Routing", "Attachment Validation"]} accent={accent} c={c} />
            </aside>

            {/* MAIN */}
            <main style={{ display: "flex", flexDirection: "column", gap: 40 }}>

              <MetricGrid c={c} />

              <Card title="Process Standardization" c={c}>
                Users can create structured exchange requests choosing between advance payment or authorized payment journeys. 
                The application ensures required documentation and request completeness before submission.
              </Card>

              <Card title="Approval Governance" c={c}>
                Treasury teams review and approve requests directly within the platform. 
                Automated notifications allow request resubmission when adjustments are required, reducing back-and-forth communication cycles.
              </Card>

              <Card title="Operational Visibility" c={c}>
                Status filtering and lifecycle tracking provide centralized visibility of requests, enabling better prioritization and risk management.
              </Card>

              <Card title="Business Impact" c={c}>
                <ul>
                  <li>Reduced manual communication between business and treasury</li>
                  <li>Improved governance over foreign exchange approvals</li>
                  <li>Faster turnaround time for payment processing</li>
                  <li>Lower operational risk and data inconsistency</li>
                  <li>Regional scalability of import payment workflows</li>
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
    ["2", "Request Journeys"],
    ["LATAM", "Treasury Scope"],
    ["Auto", "Approval Flow"]
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