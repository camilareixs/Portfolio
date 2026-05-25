import { useTheme } from "../context/ThemeContext";
import Footer from "../components/Footer";

interface Props {
  goBack: () => void;
}

export default function CaseCDPortal({ goBack }: Props) {

  const { theme } = useTheme();
  const dark = theme === "dark";

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
      <section
        style={{
          background: c.bg,
          padding: "120px 20px",
          overflowX: "hidden"
        }}
      >
        <div style={{ maxWidth: 1280, margin: "auto" }}>

          {/* BACK */}
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
            ← Back to Projects
          </button>

          {/* HERO */}
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
              🚧 IN PROGRESS
            </span>

            <div>
              <span style={{ color: c.accent, fontWeight: 700, fontSize: 12 }}>
                DIGITAL LOYALTY & SALES ECOSYSTEM
              </span>

              <h1 style={{ fontSize: 48, margin: "20px 0", color: c.text }}>
                CD Portal — Loyalty & Sales Platform
              </h1>

              <p
                style={{
                  fontSize: 18,
                  color: c.sub,
                  maxWidth: 900,
                  lineHeight: 1.8
                }}
              >
                Modern digital product being developed to centralize loyalty
                campaigns, sales operations, cashback controls and financial
                reconciliation workflows into a single operational ecosystem.
                The platform replaces fragmented spreadsheet-based processes
                with a scalable React architecture focused on usability,
                operational visibility and future enterprise integrations.
              </p>
            </div>
          </div>

          {/* VIDEO */}
          <div
            style={{
              background: c.card,
              border: `1px solid ${c.border}`,
              borderRadius: 20,
              padding: 30,
              marginBottom: 60
            }}
          >
            <h2 style={{ color: c.text, marginBottom: 20 }}>
              Platform Walkthrough
            </h2>

            <div
              style={{
                width: "100%",
                height: 420,
                borderRadius: 16,
                overflow: "hidden"
              }}
            >
              <video
                src="/videos/camiduda.mp4"
                controls
                autoPlay
                muted
                loop
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            </div>
          </div>

          {/* GRID */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0,360px) minmax(0,1fr)",
              gap: 40
            }}
          >

            {/* SIDEBAR */}
            <aside
              style={{
                background: c.card,
                border: `1px solid ${c.border}`,
                borderRadius: 20,
                padding: 30,
                height: "fit-content",
                minWidth: 0
              }}
            >
              <Side
                title="CONTEXT"
                items={[
                  "Loyalty & Cashback Operations",
                  "Sales & Campaign Governance",
                  "React + TypeScript Architecture",
                  "Scalable SaaS Product Vision"
                ]}
                c={c}
              />
            </aside>

            {/* MAIN */}
            <main
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 40,
                minWidth: 0
              }}
            >

              <Card title="Product Vision" c={c}>
                The platform was conceived to become the operational center for
                loyalty campaign management, sales monitoring and cashback
                reconciliation processes. Instead of relying on spreadsheets and
                disconnected workflows, the solution centralizes operational
                visibility into structured dashboards, enabling better control
                over campaigns, performance indicators and financial operations.
              </Card>

              <Card title="Frontend Architecture" c={c}>
                The application is being built with React and TypeScript using a
                scalable component-driven architecture focused on maintainability,
                responsiveness and product evolution. The structure prioritizes
                reusable UI patterns, modular navigation flows and a clean user
                experience capable of supporting future integrations with ERP,
                payment and CRM ecosystems.
              </Card>

              <Card title="Operational Ecosystem" c={c}>
                <p style={{ marginBottom: 15 }}>
                  The operational flow was designed to centralize loyalty and
                  sales lifecycle management from campaign creation to cashback
                  reconciliation and financial tracking.
                </p>

                <pre
                  style={{
                    background: "#020617",
                    color: "#E5E7EB",
                    padding: 20,
                    borderRadius: 12,
                    fontSize: 12,
                    overflowX: "auto"
                  }}
                >
{`CREATE Campaign
→ Track Sales Performance
→ Validate Cashback Rules
→ Execute Financial Reconciliation
→ Generate Operational Dashboards`}
                </pre>
              </Card>

              <Card title="My Role" c={c}>
                I am responsible for product discovery, UX definition and
                frontend engineering decisions, translating operational business
                needs into a scalable digital product. My role includes interface
                architecture, reusable component development, usability strategy
                and planning future enterprise integration patterns for the
                platform ecosystem.
              </Card>

              <Card title="Expected Impact" c={c}>
                The platform is expected to significantly reduce operational
                overhead caused by fragmented controls while improving visibility
                into campaign performance and financial reconciliation processes.
                By centralizing loyalty operations into a scalable ecosystem, the
                product creates a foundation for faster decision-making, improved
                governance and long-term SaaS scalability.
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
    <div style={{ marginBottom: 30 }}>
      <h4 style={{ fontSize: 12, color: c.accent, marginBottom: 10 }}>
        {title}
      </h4>

      <ul style={{ color: c.sub, lineHeight: 1.8 }}>
        {items.map((i: string) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}

function Card({ title, children, c }: any) {
  return (
    <div
      style={{
        background: c.card,
        border: `1px solid ${c.border}`,
        borderRadius: 20,
        padding: 40,
        minWidth: 0
      }}
    >
      <h2 style={{ color: c.text, marginBottom: 15 }}>
        {title}
      </h2>

      <div style={{ color: c.sub, lineHeight: 1.8 }}>
        {children}
      </div>
    </div>
  );
}