import { useEffect } from "react";

export default function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting)
          e.target.classList.add("visible");
      });
    });

    els.forEach((el) => io.observe(el));
  }, []);
}