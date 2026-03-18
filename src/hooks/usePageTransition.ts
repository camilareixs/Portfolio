import { useEffect, useState } from "react";

export default function usePageTransition(page: any) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 40);
    return () => clearTimeout(t);
  }, [page]);

  return visible;
}