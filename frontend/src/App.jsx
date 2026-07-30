import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import SubmitFeedback from "./pages/SubmitFeedback";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/submit" element={<SubmitFeedback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;