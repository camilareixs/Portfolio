import { useLang } from "../context/LangContext";
import { useTheme } from "../context/ThemeContext";
import type { CSSProperties } from "react";

export default function Footer() {
  const { lang } = useLang();
  const { theme } = useTheme();

  const bgColor = theme === "light" ? "#fff" : "#1A1A1A";
  const textColor = theme === "light" ? "#380f3b" : "#D8B4FE";

  return (
    <footer
      style={{
        background: bgColor,
        color: textColor,
        textAlign: "center",
        padding: "24px 16px",
        fontSize: 14,
      }}
    >
      <p>
        {lang === "en"
          ? "© 2026 Camila Reis. All rights reserved."
          : "© 2026 Camila Reis. Todos os direitos reservados."}
      </p>
      <p>
        {lang === "en"
          ? "camilalaurindoreis@gmail.com | +55 11 98803-3775"
          : "camilalaurindoreis@gmail.com | +55 11 98803-3775"}
      </p>
    
    </footer>
  );
}

const styles: Record<string, CSSProperties> = {};