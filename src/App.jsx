import { Route, Routes } from "react-router-dom";
import { usePageTracking } from "./hooks/usePageTracking";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Sponsors from "./pages/Sponsors";

function App() {
  usePageTracking();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/team" element={<Team />} />
      <Route path="/sponsors" element={<Sponsors />} />
    </Routes>
  );
}

export default App;
