import { useTheme } from "../context/ThemeContext";
import Footer from "../components/Footer";

interface Props {
  goBack: () => void;
}

export default function CaseReconhecimento({ goBack }: Props) {

  const { theme } = useTheme();
  const dark = theme === "dark";

  const accent = "#DB2777";
  const accentSoft = "#F9A8D4";

  const c = {
    bg: dark
      ? "radial-gradient(circle at 20% 10%, #2A0A1B 0%, #020617 60%)"
      : "#FFF1F7",
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
              PEOPLE EXPERIENCE PLATFORM
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
              RecognitionRH — Employee Recognition Journey
            </h1>

            <p
              style={{
                fontSize: 18,
                maxWidth: 820,
                lineHeight: 1.9,
                color: c.sub
              }}
            >
              Internal HR platform designed to digitize and scale employee recognition programs across South America. 
              Replaces fragmented manual validation processes with a structured multi-stage recognition journey supported by automated approvals and governance rules.
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
              <Side title="STACK" items={["Power Apps", "Dataverse", "Power Automate", "Email Services"]} accent={accent} c={c} />
              <Side title="SCALE" items={["South America Rollout", "Employee Engagement", "HR Governance"]} accent={accent} c={c} />
              <Side title="MODULES" items={["Recognition Journey", "Approval Routing", "History Dashboard"]} accent={accent} c={c} />
            </aside>

            {/* MAIN */}
            <main style={{ display: "flex", flexDirection: "column", gap: 40 }}>

              <MetricGrid c={c} />

              <Card title="Recognition Journey Design" c={c}>
                Multi-step Canvas application guiding employees through collaborator search, project impact selection, value demonstration definition and final submission.
                Journey reduces friction and ensures structured recognition submissions.
              </Card>

              <Card title="Automation & Governance" c={c}>
                Power Automate flows dynamically route approvals based on hierarchy and cost center rules.
                Notifications, history synchronization and voucher processing are fully automated.
              </Card>

              <Card title="Data Architecture" c={c}>
                Dataverse tables manage recognition history, configuration rules and eligibility validations.
                Business logic prevents invalid recognitions and ensures program compliance.
              </Card>

              <Card title="Business Impact" c={c}>
                <ul>
                  <li>Reduced HR manual workload</li>
                  <li>Increased employee participation</li>
                  <li>Standardized approval governance</li>
                  <li>Scalable regional recognition operations</li>
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
    ["5", "Journey Steps"],
    ["LATAM", "Program Scale"],
    ["Auto", "Approval Routing"]
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