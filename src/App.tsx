import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TrialManagementOverview from "./pages/TrialManagementOverview";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import SecondPage from "./pages/SecondPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TrialManagementOverview />} />
      <Route path="/second" element={<SecondPage />} />
    </Routes>
  );
}

export default App;
