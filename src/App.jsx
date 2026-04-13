import { useContext, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LanguageContext from "@/LanguageContext";
import Layout from "@/layout";
import data from "@/translation";
import { usePageTracking } from "./hooks/usePageTracking";
import Sponsors from "./pages/Sponsors";
import Team from "./pages/Team";

import "./App.scss";
import CodeOfConduct from "@/pages/CodeOfConduct";
import LandingPage from "@/pages/LandingPage";

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();
  useEffect(() => {
    // `pathname` in deps retriggers on navigation; scroll must not depend on reading it.
    void pathname;
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  usePageTracking();
  const { language } = useContext(LanguageContext);
  const [allData, setAllData] = useState({});

  useEffect(() => {
    setAllData(data[language]);
  }, [language]);

  return (
    <Layout dataTranslate={allData}>
      <ScrollToTopOnRouteChange />
      <Routes>
        <Route path="/" element={<LandingPage dataTranslate={allData} />} />
        <Route path="/team" element={<Team />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route
          path="/code-of-conduct"
          element={<CodeOfConduct dataTranslate={allData} />}
        />
      </Routes>
    </Layout>
  );
}

export default App;
