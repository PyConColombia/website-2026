import { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import LanguageContext from "@/LanguageContext";
import Layout from "@/layout";
import data from "@/translation";
import { usePageTracking } from "./hooks/usePageTracking";
import Home from "./pages/Home";
import Sponsors from "./pages/Sponsors";
import Team from "./pages/Team";

import "./App.scss";
import LandingPage from "@/pages/LandingPage";

function App() {
  usePageTracking();
  const { language } = useContext(LanguageContext);
  const [allData, setAllData] = useState({});

  useEffect(() => {
    setAllData(data[language]);
  }, [language]);

  return (
    <Layout dataTranslate={allData}>
      <Routes>
        <Route path="/" element={<LandingPage dataTranslate={allData} />} />
        <Route path="/team" element={<Team />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/keynotes" element={<Home dataTranslate={allData} />} />
        <Route path="/speakers" element={<Home dataTranslate={allData} />} />
      </Routes>
    </Layout>
  );
}

export default App;
