import { Route, Routes } from "react-router-dom";
import { usePageTracking } from "./hooks/usePageTracking";
import Home from "./pages/Home";
import Team from "./pages/Team";

function App() {
  usePageTracking();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/team" element={<Team />} />
    </Routes>
  );
}

export default App;
