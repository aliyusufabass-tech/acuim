import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import InsightDetail from "./pages/InsightDetail";
import Insights from "./pages/Insights";
import { PrivacyPolicy, TermsAndConditions } from "./pages/Legal";
import NotFound from "./pages/NotFound";
import ProjectDetail from "./pages/ProjectDetail";
import Projects from "./pages/Projects";
import ServiceDetail from "./pages/ServiceDetail";
import Services from "./pages/Services";

const titles = {
  "/": "ACUIM Development Ltd | Sustainable Cities and Infrastructure",
  "/about": "About ACUIM Development Ltd",
  "/services": "Services | ACUIM Development Ltd",
  "/projects": "Projects | ACUIM Development Ltd",
  "/insights": "Insights | ACUIM Development Ltd",
  "/contact": "Contact | ACUIM Development Ltd",
  "/privacy-policy": "Privacy Policy | ACUIM Development Ltd",
  "/terms-and-conditions": "Terms and Conditions | ACUIM Development Ltd",
};

export default function App() {
  const location = useLocation();

  useEffect(() => {
    document.title = titles[location.pathname] || "ACUIM Development Ltd";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:slug" element={<ServiceDetail />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:slug" element={<ProjectDetail />} />
        <Route path="insights" element={<Insights />} />
        <Route path="insights/:slug" element={<InsightDetail />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
