import { useState } from "react";
import type { CSSProperties } from "react";

export default function Button({ children, onClick, variant = "primary" }: any) {
  const [hover, setHover] = useState(false);

  const style: CSSProperties = {
    padding: "18px 32px",
    borderRadius: 16,
    cursor: "pointer",
    border: "none",
    transition: ".25s",
    background:
      variant === "primary"
        ? hover
          ? "#240726"
          : "#380f3b"
        : "transparent",
    color: variant === "primary" ? "white" : "#380f3b",
    borderColor: "#380f3b",
    borderWidth: variant === "ghost" ? 2 : 0,
    borderStyle: "solid",
    transform: hover ? "translateY(-3px)" : ""
  };

  return (
    <button
      style={style}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </button>
  );
}