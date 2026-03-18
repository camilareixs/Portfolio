import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import MyProjects from "./pages/MyProjects";
import Contact from "./pages/Contact";
import Case from "./pages/Case"; // Página do projeto detalhado

export type Page = "home" | "about" | "projects" | "contact" | "case";

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <>
      <Header onNavigate={setPage} />

      <main style={{ paddingTop: 100 }}>
        {page === "home" && <Home goProjects={() => setPage("projects")} />}
        {page === "about" && <About />}
        {page === "projects" && (
          <MyProjects
            openCase={(project) => {
              setSelectedProject(project);
              setPage("case");
            }}
          />
        )}
        {page === "contact" && <Contact />}
        {page === "case" && selectedProject && (
          <Case project={selectedProject} goBack={() => setPage("projects")} />
        )}
      </main>
    </>
  );
}