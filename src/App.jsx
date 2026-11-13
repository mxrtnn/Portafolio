import { useRef } from "react";
import { useScrollReveal } from "./hooks/useScrollReveal";
import "./styles/page.css";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import ValueProposition from "./components/ValueProposition";
import Certifications from "./components/Certifications";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ProjectModals from "./components/ProjectModals";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const pageRef = useRef(null);
  useScrollReveal(pageRef);
  return (
    <div className="portfolio-page" ref={pageRef}>
      <Navbar />
      <Introduction />
      <ValueProposition />
      <Certifications />
      <Experience />
      <Projects />
      <ProjectModals />
      <Contact />
      <Footer />
    </div>
  );
}
