import { useLang } from "../context/LangContext";
import { useTheme } from "../context/ThemeContext";
import type { CSSProperties } from "react";

export default function About() {
  const { lang } = useLang();
  const { theme } = useTheme();

  const isDark = theme === "dark";
  const primary = isDark ? "#8f5a89" : "#60365c";

  const techColors: Record<string, string> = {
    "Power Apps": "#742774",
    "Power Automate": "#0066FF",
    "Dataverse": "#999999",
    "SharePoint": "#0078D4",

  
    "UiPath": "#FF6C37",
    "Pipefy": "#FF4A00",
  
  
    "React": "#61DAFB",
    "TypeScript": "#3178C6",
    "JavaScript": "#F7DF1E",
    "HTML": "#E34F26",
    "CSS": "#1572B6",
  
    "SAP Integrations": "#0FAAFF",
    "REST APIs": "#22C55E",
    "XML": "#F97316",
    "SQL": "#336791",
    "Dataflow": "#A855F7",
  
    "Python": "#3776AB"
  };
  
  const stack = [
    {
      title: "Power Platform",
      items: [
        "Power Apps",
        "Power Automate",
        "Dataverse",
        "SharePoint"
      ]
    },
    {
      title: "Automation & Process",
      items: [
        "UiPath",
        "Pipefy"
      ]
    },
    {
      title: "Frontend",
      items: [
        "React",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS"
      ]
    },
    {
      title: "Data & Integrations",
      items: [
        "REST APIs",
        "XML",
        "SQL",
        "Dataflow"
      ]
    },
    {
      title: "Backend",
      items: ["Python"]
    }
  ];

  return (
    <>
      <section
        style={{
          ...styles.section,
          background: isDark ? "#1A1A1A" : "#fff",
          color: isDark ? "#EEE" : "#111"
        }}
      >
        <div style={styles.container}>

          {/* HEADER */}
          <div style={styles.header}>
            <h1 style={styles.title}>
              {lang === "en" ? "Hi, I'm Camila." : "Oi, eu sou a Camila."}
            </h1>

            <p style={styles.subtitle}>
              {lang === "en"
                ? "Building scalable automation and business solutions using Power Platform and modern web technologies."
                : "Construo soluções escaláveis de automação e negócio utilizando Power Platform e tecnologias web modernas."}
            </p>
          </div>

          {/* BLOCO PRINCIPAL */}
          <div style={{
            ...styles.mainBlock,
            background: isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)"
          }}>
            <p style={styles.mainText}>
              {lang === "en"
                ? "I work by understanding business problems, structuring scalable solutions and implementing automation that reduces manual effort and improves efficiency."
                : "Atuo entendendo problemas de negócio, estruturando soluções escaláveis e implementando automações que reduzem esforço manual e aumentam a eficiência."}
            </p>
          </div>

          {/* STACK */}
          <div>
            <h2 style={styles.stackTitle}>
              {lang === "en" ? "Tech Stack" : "Tecnologias"}
            </h2>

            {stack.map((group, i) => (
              <div key={i} style={styles.stackGroup}>
                <h3 style={styles.groupTitle}>{group.title}</h3>

                <div style={styles.chips}>
                  {group.items.map((tech, j) => (
                    <div
                      key={j}
                      style={{
                        ...styles.chip,
                        background: isDark
                          ? "rgba(255,255,255,0.05)"
                          : "rgba(0,0,0,0.05)",
                        border: `1px solid ${techColors[tech] || "rgba(255,255,255,0.1)"}`,
                        color: isDark ? "#EEE" : "#111"
                      }}
                      onMouseEnter={(e:any)=>{
                        const color = techColors[tech];

                        e.currentTarget.style.transform="translateY(-5px) scale(1.05)";
                        e.currentTarget.style.boxShadow=`0 12px 30px ${color}55`;
                        e.currentTarget.style.background = `${color}22`;
                      }}
                      onMouseLeave={(e:any)=>{
                        e.currentTarget.style.transform="none";
                        e.currentTarget.style.boxShadow="none";
                        e.currentTarget.style.background = isDark
                          ? "rgba(255,255,255,0.05)"
                          : "rgba(0,0,0,0.05)";
                      }}
                    >
                      {/* DOT estilo GitHub */}
                      <span style={{
                        width:8,
                        height:8,
                        borderRadius:"50%",
                        background: techColors[tech]
                      }}/>

                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        ...styles.footer,
        background: isDark ? "#1A1A1A" : "#fff",
        color: primary
      }}>
        <div style={styles.footerContainer}>
          <ul style={styles.footerLinks}>
            {["Home","About","Projects","Contact"].map(link => (
              <li key={link} style={styles.footerLink}>{link}</li>
            ))}
          </ul>
        </div>

        <p style={styles.footerCopy}>
          © 2026 Camila Reis. All rights reserved.
        </p>
      </footer>
    </>
  );
}

const styles: Record<string, CSSProperties> = {

  section:{ padding:"160px 20px" },

  container:{
    maxWidth:1000,
    margin:"auto",
    display:"flex",
    flexDirection:"column",
    gap:60
  },

  header:{
    display:"flex",
    flexDirection:"column",
    gap:16
  },

  title:{
    fontSize:52,
    margin:0
  },

  subtitle:{
    fontSize:18,
    opacity:0.7,
    maxWidth:600
  },

  mainBlock:{
    padding:30,
    borderRadius:20,
    border:"1px solid rgba(255,255,255,0.08)"
  },

  mainText:{
    fontSize:16,
    lineHeight:1.6,
    opacity:0.8
  },

  stackTitle:{
    fontSize:24,
    marginBottom:30
  },

  stackGroup:{
    marginBottom:30
  },

  groupTitle:{
    fontSize:14,
    opacity:0.6,
    marginBottom:12,
    textTransform:"uppercase",
    letterSpacing:1
  },

  chips:{
    display:"flex",
    flexWrap:"wrap",
    gap:12
  },

  chip:{
    padding:"10px 14px",
    borderRadius:999,
    display:"flex",
    alignItems:"center",
    gap:8,
    fontSize:14,
    transition:"0.25s",
    cursor:"default"
  },

  footer:{ padding:"30px 20px", textAlign:"center" },

  footerContainer:{
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    gap:12
  },

  footerLinks:{
    display:"flex",
    gap:20,
    listStyle:"none",
    padding:0,
    margin:0
  },

  footerLink:{
    cursor:"pointer",
    fontWeight:500
  },

  footerCopy:{
    marginTop:16,
    fontSize:12
  }
};