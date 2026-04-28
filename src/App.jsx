import { useContext, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LanguageContext from "@/LanguageContext";
import Layout from "@/layout";
import { stripLanguagePrefix } from "@/languageRouting";
import { getTranslation } from "@/translation";
import { usePageTracking } from "./hooks/usePageTracking";
import Sponsors from "./pages/Sponsors";
import Team from "./pages/Team";

import "./App.scss";
import CallForProposals from "@/pages/CallForProposals";
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
  const location = useLocation();
  const normalizedPathname = stripLanguagePrefix(location.pathname);
  const { language } = useContext(LanguageContext);
  const allData = getTranslation(language);
  const routedLocation =
    normalizedPathname === location.pathname
      ? location
      : { ...location, pathname: normalizedPathname };

  return (
    <Layout dataTranslate={allData}>
      <ScrollToTopOnRouteChange />
      <Routes location={routedLocation}>
        <Route path="/" element={<LandingPage dataTranslate={allData} />} />
        <Route path="/team" element={<Team />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route
          path="/call-for-proposals"
          element={<CallForProposals dataTranslate={allData} />}
        />
        <Route
          path="/code-of-conduct"
          element={<CodeOfConduct dataTranslate={allData} />}
        />
      </Routes>
    </Layout>
  );
}

export default App;
