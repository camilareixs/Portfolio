import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import MyProjects from "./pages/MyProjects";
import Contact from "./pages/Contact";

import CaseActus from "./projects/CaseActus";
import CaseBM from "./projects/CaseBM";
import CaseRemessa from "./projects/CaseRemessa";
import CaseIPO from "./projects/CaseIPO";
import CaseControleDelegados from "./projects/CaseControleDelegados";
import CaseIndice from "./projects/CaseIndice";
import CaseReconhecimento from "./projects/CaseReconhecimento";
import CaseCambioImportacao from "./projects/CaseCambioImportacao";
import CaseInvoice from "./projects/CaseInvoice";
import CaseMeasurementReport from "./projects/CaseMeasurementReport";
import CaseCDPortal from "./projects/CaseCDPortal"; // ⭐ NOVO

export type Page = "home" | "about" | "projects" | "contact" | "case";

export default function App() {

  const [page, setPage] = useState<Page>("home");
  const [selectedCase, setSelectedCase] = useState<string | null>(null);

  function renderCase() {

    switch (selectedCase) {

      case "actus":
        return <CaseActus goBack={() => setPage("projects")} />;

      case "bm":
        return <CaseBM goBack={() => setPage("projects")} />;

      case "remessa":
        return <CaseRemessa goBack={() => setPage("projects")} />;

      case "ipo":
        return <CaseIPO goBack={() => setPage("projects")} />;

      case "controle-de-delegados":
        return <CaseControleDelegados goBack={() => setPage("projects")} />;

      case "indice":
        return <CaseIndice goBack={() => setPage("projects")} />;

      case "reconhecimento":
        return <CaseReconhecimento goBack={() => setPage("projects")} />;

      case "cambio-importacao":
        return <CaseCambioImportacao goBack={() => setPage("projects")} />;

      case "invoice":
        return <CaseInvoice goBack={() => setPage("projects")} />;

      case "measurement-report":
        return <CaseMeasurementReport goBack={() => setPage("projects")} />;

      case "cd-portal": // ⭐ NOVO
        return <CaseCDPortal goBack={() => setPage("projects")} />;

      default:
        return <div style={{ padding: 40 }}>Case not found</div>;
    }

  }

  return (
    <>
      <Header onNavigate={setPage} />

      <main style={{ paddingTop: 100 }}>

        {page === "home" && <Home goProjects={() => setPage("projects")} />}

        {page === "about" && <About />}

        {page === "projects" && (
          <MyProjects
            openCase={(id) => {
              setSelectedCase(id);
              setPage("case");
            }}
          />
        )}

        {page === "contact" && <Contact />}

        {page === "case" && renderCase()}

      </main>
    </>
  );
}