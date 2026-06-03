import { useLang } from "../context/LangContext";
import { useTheme } from "../context/ThemeContext";
import { useState, useEffect } from "react";
import type { CSSProperties } from "react";

type Props = { goProjects: () => void };

export default function Home({ goProjects }: Props) {
  const { lang } = useLang();
  const { theme } = useTheme();
  const [hovered, setHovered] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const primary = theme === "light" ? "#60365c" : "#8f5a89";
  const textColor = theme === "light" ? "#111" : "#EEE";
  const descColor = theme === "light" ? "#555" : "#AAA";
  const sectionBg = theme === "light" ? "#fff" : "#1A1A1A";

  const text = {
    title:
      lang === "en"
        ? "Power Platform Developer"
        : "Desenvolvedora Power Platform",

    desc:
      lang === "en"
        ? "Transforming operational workflows into scalable digital solutions through Power Platform, automation and enterprise integrations."
        : "Transformando fluxos operacionais em soluções digitais escaláveis através de Power Platform, automação e integrações corporativas.",

    viewProjects: lang === "en" ? "View Projects" : "Ver Projetos",

    processTitle:
      lang === "en"
        ? "How I Solve Business Problems"
        : "Como eu resolvo problemas de negócio"
  };

  const journey = [
    {
      title: lang === "en" ? "Diagnosis" : "Diagnóstico",
      desc:
        lang === "en"
          ? "Understanding business context, stakeholders and pain points."
          : "Entendimento do contexto do negócio e dores reais."
    },
    {
      title: lang === "en" ? "Mapping" : "Mapeamento",
      desc:
        lang === "en"
          ? "Identifying bottlenecks and automation opportunities."
          : "Identificação de gargalos e automação."
    },
    {
      title: lang === "en" ? "Build" : "Construção",
      desc:
        lang === "en"
          ? "Building scalable Power Platform solutions."
          : "Criação de soluções escaláveis."
    },
    {
      title: lang === "en" ? "Delivery" : "Entrega",
      desc:
        lang === "en"
          ? "Ensuring measurable business value."
          : "Garantia de valor para o negócio."
    }
  ];

  return (
    <>
      {/* HERO */}
      <header
        style={{
          ...styles.hero,
          background: sectionBg,
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: isMobile ? "flex-start" : "center",
          padding: isMobile ? "50px 20px" : "80px 80px 50px",
          gap: isMobile ? 30 : 80
        }}
      >
        <div style={styles.left}>
          <h1
            style={{
              ...styles.title,
              color: textColor,
              fontSize: isMobile ? 34 : 56,
              lineHeight: 1.1
            }}
          >
            {text.title}
          </h1>

          <p
            style={{
              ...styles.desc,
              color: descColor,
              fontSize: isMobile ? 15 : 17,
              maxWidth: 520
            }}
          >
            {text.desc}
          </p>

          <button
            onClick={goProjects}
            style={{
              background: primary,
              color: "#fff",
              fontWeight: 600,
              border: "none",
              borderRadius: 10,
              padding: "10px 18px",
              fontSize: 13,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "fit-content",
              minWidth: 140,
              cursor: "pointer"
            }}
          >
            {text.viewProjects}
          </button>
        </div>

        {!isMobile && (
          <div style={styles.right}>
            <img src="crlogo.png" style={styles.logo} />
          </div>
        )}
      </header>

      {/* JOURNEY */}
      <section
        style={{
          ...styles.journeySection,
          background: sectionBg,
          padding: isMobile ? "40px 20px" : "70px 20px",
          textAlign: "center"
        }}
      >
        <h2
          style={{
            ...styles.journeyTitle,
            color: textColor,
            fontSize: isMobile ? 22 : 34,
            marginTop: 0,
            marginBottom: isMobile ? 20 : 50
          }}
        >
          {text.processTitle}
        </h2>

        {/* MOBILE */}
        {isMobile ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              maxWidth: 520,
              width: "100%",
              margin: "0 auto"
            }}
          >
            {journey.map((step, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 14,
                  alignItems: "flex-start",
                  padding: 16,
                  borderRadius: 14,
                  background:
                    theme === "light"
                      ? "rgba(0,0,0,0.03)"
                      : "rgba(255,255,255,0.04)",
                  border:
                    theme === "light"
                      ? "1px solid rgba(0,0,0,0.06)"
                      : "1px solid rgba(255,255,255,0.08)"
                }}
              >
                <div
                  style={{
                    ...styles.circle,
                    background: primary,
                    minWidth: 42,
                    minHeight: 42
                  }}
                >
                  {i + 1}
                </div>

                <div>
                  <h3 style={{ color: textColor, margin: 0, fontSize: 16 }}>
                    {step.title}
                  </h3>
                  <p
                    style={{
                      color: descColor,
                      marginTop: 6,
                      fontSize: 13,
                      lineHeight: 1.4
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={styles.journeyContainer}>
            {journey.map((step, i) => (
              <div
                key={i}
                style={styles.step}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div
                  style={{
                    ...styles.circle,
                    background:
                      hovered === i ? primary : "transparent",
                    border: `2px solid ${primary}`,
                    color: hovered === i ? "#fff" : primary
                  }}
                >
                  {i + 1}
                </div>

                <h3 style={{ color: textColor }}>{step.title}</h3>
                <p style={{ color: descColor }}>{step.desc}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer
        style={{
          ...styles.footer,
          background: sectionBg,
          color: primary
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: 14,
            listStyle: "none",
            padding: 0,
            margin: 0,
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          {["Home", "About", "Projects", "Contact"].map((link) => (
            <li key={link} style={{ fontSize: 13, opacity: 0.85 }}>
              {link}
            </li>
          ))}
        </ul>

        <div
          style={{
            marginTop: 10,
            fontSize: 12,
            opacity: 0.75,
            textAlign: "center"
          }}
        >
          <div>
            camilalaurindoreis@gmail.com | +55 11 98803-3775
          </div>
        </div>
      </footer>
    </>
  );
}

/* STYLES */
const styles: Record<string, CSSProperties> = {
  hero: {
    minHeight: "50vh",
    display: "flex"
  },

  left: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 18
  },

  right: {
    flex: 1,
    display: "flex",
    justifyContent: "center"
  },

  title: {
    margin: 0
  },

  desc: {
    lineHeight: 1.6
  },

  journeySection: {
    textAlign: "center"
  },

  journeyContainer: {
    maxWidth: 1000,
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    gap: 30
  },

  step: {
    width: 220,
    textAlign: "left"
  },

  circle: {
    width: 42,
    height: 42,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    marginBottom: 12
  },

  footer: {
    padding: "30px 20px",
    textAlign: "center"
  },

  logo: {
    width: 240
  }
};