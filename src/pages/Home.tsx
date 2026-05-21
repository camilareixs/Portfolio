import { useLang } from "../context/LangContext";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import type { CSSProperties } from "react";

type Props = { goProjects: () => void };

export default function Home({ goProjects }: Props) {

  const { lang } = useLang();
  const { theme } = useTheme();
  const [hovered, setHovered] = useState<number | null>(null);

  const primary = theme === "light" ? "#60365c" : "#8f5a89";

  const text = {
    title:
      lang === "en"
        ? "Power Platform Developer"
        : "Desenvolvedora Power Platform",

    desc:
      lang === "en"
        ? "Transforming complex operational workflows into scalable digital solutions through Power Platform, automation and enterprise integrations."
        : "Transformando fluxos operacionais complexos em soluções digitais escaláveis através de Power Platform, automação e integrações corporativas.",

    viewProjects: lang === "en" ? "View Projects" : "Ver Projetos",
    downloadCV: lang === "en" ? "Download CV" : "Baixar CV",

    processTitle:
      lang === "en"
        ? "How I Solve Business Problems"
        : "Como eu resolvo problemas de negócio"
  };

  const journey = [
    {
      title: lang === "en" ? "Diagnosis" : "Diagnóstico",
      desc: lang === "en"
        ? "Understanding business context, stakeholders and real operational pain points."
        : "Entendimento do contexto do negócio, stakeholders e dores operacionais reais."
    },
    {
      title: lang === "en" ? "Process Mapping" : "Mapeamento",
      desc: lang === "en"
        ? "Analyzing workflows, identifying bottlenecks and automation opportunities."
        : "Análise de fluxos, identificação de gargalos e oportunidades de automação."
    },
    {
      title: lang === "en" ? "Solution Architecture" : "Construção",
      desc: lang === "en"
        ? "Designing and building scalable Power Platform solutions with structured logic and efficient integrations."
        : "Definição e desenvolvimento de soluções escaláveis em Power Platform, com lógica estruturada e integrações eficientes."
    },
    {
      title: lang === "en" ? "Implementation" : "Implementação",
      desc: lang === "en"
        ? "Driving adoption and ensuring measurable business value through effective delivery."
        : "Entrega orientada à adoção, garantindo uso efetivo e geração de valor mensurável para o negócio."
    }
  ];

  const sectionBg = theme === "light" ? "#fff" : "#1A1A1A";

  const textColor = theme === "light" ? "#111" : "#EEE";
  const descColor = theme === "light" ? "#555" : "#AAA";

  return (
    <>
      <section style={{ ...styles.hero, background: sectionBg }}>
        <div style={styles.heroContent}>

          <div style={styles.left}>
            <h1 style={{ ...styles.title, color: textColor }}>
              {text.title}
            </h1>

            <p style={{ ...styles.desc, color: descColor }}>
              {text.desc}
            </p>

            <div style={styles.actions}>
              <button
                style={{ ...styles.primaryBtn, background: primary }}
                onClick={goProjects}
              >
                {text.viewProjects}
              </button>

              
            </div>
          </div>

          <div style={styles.right}>
            <img src="crlogo.png" style={styles.logo}/>
          </div>

        </div>
      </section>

      <section style={{ ...styles.journeySection, background: sectionBg }}>
        <h2 style={{ ...styles.journeyTitle, color: textColor }}>
          {text.processTitle}
        </h2>

        <div style={styles.journeyContainer}>
          {journey.map((step, i) => (
            <div
              key={i}
              style={{
                ...styles.step,
                transform: hovered === i ? "translateY(-10px)" : "none"
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div style={{
                ...styles.circle,
                background: hovered === i ? primary : "transparent",
                border: `2px solid ${primary}`,
                color: hovered === i ? "#fff" : primary
              }}>
                {i + 1}
              </div>

              <h3 style={{ ...styles.stepTitle, color: textColor }}>
                {step.title}
              </h3>

              <p style={{ ...styles.stepDesc, color: descColor }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ ...styles.footer, background: sectionBg, color: primary }}>
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
  hero:{ minHeight:"10vh", display:"flex", alignItems:"center", justifyContent:"center", padding:"40px 20px 60px" },
  heroContent:{ maxWidth:1200, width:"100%", display:"flex", justifyContent:"space-between", gap:80, alignItems:"center" },
  left:{ flex:1, display:"flex", flexDirection:"column", gap:20 },
  right:{ flex:1, display:"flex", justifyContent:"center" },
  logo:{ width:230 },
  title:{ fontSize:56, lineHeight:1.1, margin:0, letterSpacing:-1 },
  desc:{ fontSize:18, maxWidth:540, lineHeight:1.6 },
  actions:{ display:"flex", gap:16, marginTop:20 },
  primaryBtn:{ padding:"15px 32px", borderRadius:14, border:"none", color:"#fff", fontWeight:600, cursor:"pointer", fontSize:15 },
  ghostBtn:{ padding:"15px 32px", borderRadius:14, background:"transparent", fontWeight:600, cursor:"pointer", fontSize:15 },
  journeySection:{ padding:"100px 20px 140px", textAlign:"center" },
  journeyTitle:{ fontSize:36, marginBottom:100 },
  journeyContainer:{ maxWidth:1000, margin:"0 auto", display:"flex", justifyContent:"space-between", gap:40 },
  step:{ width:220, textAlign:"left", transition:"0.35s" },
  circle:{ width:58, height:58, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontWeight:700, marginBottom:20, transition:"0.35s" },
  stepTitle:{ fontSize:19, marginBottom:8 },
  stepDesc:{ fontSize:15, lineHeight:1.6 },
  footer:{ padding:"30px 20px", textAlign:"center" },
  footerContainer:{ display:"flex", flexDirection:"column", alignItems:"center", gap:12 },
  footerLinks:{ display:"flex", gap:20, listStyle:"none", padding:0, margin:0 },
  footerLink:{ cursor:"pointer", fontWeight:500 },
  footerCopy:{ marginTop:16, fontSize:12 }
};