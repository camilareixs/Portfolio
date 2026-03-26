// MyProjects.tsx
import { useTheme } from "../context/ThemeContext";
import type { CSSProperties } from "react";
import Footer from "../components/Footer";

export interface Project {
  id: string;
  title: string;
  cover: string;
  users: string;
  region: string;
  tags: string[];
  shortDesc: string;
}

interface Props {
  openCase: (project: Project) => void;
}

export default function MyProjects({ openCase }: Props) {
  const { theme } = useTheme();

  const bg = theme === "light" ? "#F6F7FB" : "#0E0E11";
  const text = theme === "light" ? "#111" : "#EEE";

  const tagColors: Record<string, string> = {
    "Power Apps": "#7D5FFF",
    Dataverse: "#FF914D",
    Automation: "#00C48C",
    Canvas: "#FF5DA2",
    "Model Driven": "#4DA6FF",
    SharePoint: "#1DA57A",
    Dataflows: "#FFB547",
    "Power Automate": "#0066FF"
  };

  const projects: Project[] = [
    {
      id: "actus",
      title: "ACTUS Compliance Platform",
      cover:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400",
      users: "3000+ users",
      region: "South America",
      tags: ["Power Apps", "Model Driven", "Dataverse", "Automation"],
      shortDesc:
        "Enterprise governance platform managing incident lifecycle and compliance workflows."
    },
    {
      id: "bm",
      title: "Measurement Report",
      cover:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1400",
      users: "800+ users",
      region: "Brazil",
      tags: ["Power Apps", "Canvas", "Automation", "Dataverse"],
      shortDesc:
        "Environmental operations app automating supplier measurement and payment processes."
    },
    {
      id: "remessa",
      title: "Automated Remittance Pipeline",
      cover:
        "https://images.unsplash.com/photo-1605902711622-cfb43c4437cd?q=80&w=1400",
      users: "Finance Team",
      region: "Brazil",
      tags: ["Power Apps", "Dataflows", "SharePoint", "Automation"],
      shortDesc:
        "Automated pipeline replacing manual spreadsheet processes, SAP extractions and remittance preparation."
    },
    {
      id: "ipo",
      title: "IPO Management App",
      cover:
        "https://images.unsplash.com/photo-1564866657311-196d1e9e16f8?q=80&w=1400",
      users: "Regional IPO Teams",
      region: "South America",
      tags: ["Power Apps", "Canvas", "Dataverse", "Automation"],
      shortDesc:
        "Centralized app for managing IPO checklists, tracking progress and ensuring Information Security compliance."
    },
    {
      id: "controle-de-delegados",
      title: "Controle de Delegados",
      cover:
        "https://images.unsplash.com/photo-1581091012184-7ee295f4874b?q=80&w=1400",
      users: "HR & Mobility",
      region: "South America",
      tags: ["Power Apps", "Canvas", "Dataverse", "Automation"],
      shortDesc:
        "Application to manage delegates vacation lifecycle, acquisition periods and payout reporting."
    },
    {
      id: "indice",
      title: "Be On Index Automation",
      cover:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1400",
      users: "Operations Teams",
      region: "South America",
      tags: ["Power Automate", "SharePoint", "Automation"],
      shortDesc:
        "Automated hierarchical index generation rebuilding document numbering and publishing updated PDF indexes."
    },
    {
      id: "reconhecimento",
      title: "HR Recognition Platform",
      cover:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1400",
      users: "South America Employees",
      region: "South America",
      tags: ["Power Apps", "Canvas", "Dataverse", "Power Automate"],
      shortDesc:
        "Interactive recognition platform enabling employees to reward colleagues through structured approval workflows."
    },
    {
      id: "cambio-importacao",
      title: "Import Exchange Request App",
      cover:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1400",
      users: "Treasury & Requesters",
      region: "South America",
      tags: ["Power Apps", "Canvas", "Automation", "Finance"],
      shortDesc:
        "Application streamlining foreign exchange request approvals and payment tracking."
    }
  ];

  return (
    <>
      <section style={{ ...styles.section, background: bg, color: text }}>
        <div style={styles.container}>
          <h1 style={styles.title}>My Projects</h1>

          <div style={styles.grid}>
            {projects.map((p) => (
              <div
                key={p.id}
                style={styles.card}
                onClick={() => openCase(p)}
              >
                <div
                  style={{
                    ...styles.cover,
                    backgroundImage: `url(${p.cover})`
                  }}
                >
                  <div style={styles.overlay} />

                  <div style={styles.tags}>
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        style={{
                          ...styles.tag,
                          background: tagColors[t] || "#888"
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={styles.content}>
                  <h3 style={styles.cardTitle}>{p.title}</h3>
                  <p style={styles.desc}>{p.shortDesc}</p>

                  <div style={styles.meta}>
                    <span>🌎 {p.region}</span>
                    <span>👤 {p.users}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

const styles: Record<string, CSSProperties> = {
  section: { padding: "140px 20px" },
  container: { maxWidth: 1300, margin: "auto" },
  title: { fontSize: 44, marginBottom: 40 },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))",
    gap: 30
  },
  card: {
    borderRadius: 22,
    overflow: "hidden",
    cursor: "pointer",
    background: "#fff",
    transition: ".35s",
    boxShadow: "0 20px 50px rgba(0,0,0,.12)"
  },
  cover: {
    height: 200,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative"
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(180deg,rgba(0,0,0,.1),rgba(0,0,0,.6))"
  },
  tags: {
    position: "absolute",
    bottom: 12,
    left: 12,
    display: "flex",
    gap: 6,
    flexWrap: "wrap"
  },
  tag: {
    padding: "4px 10px",
    borderRadius: 8,
    color: "#fff",
    fontWeight: 600,
    fontSize: 11
  },
  content: {
    padding: 20,
    display: "flex",
    flexDirection: "column",
    gap: 10
  },
  cardTitle: { fontSize: 18, fontWeight: 700 },
  desc: { fontSize: 14, lineHeight: 1.5, color: "#555" },
  meta: {
    marginTop: 10,
    display: "flex",
    justifyContent: "space-between",
    fontSize: 12,
    fontWeight: 600,
    color: "#7D5FFF"
  }
};