import { useState } from "react";

// importing browser router to navigate between pages
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import LoginPage from "./components/Login";
import RegisterPage from "./components/Register";

function App() {
  return (
    <>
      {/* storing user information in local storage for now */}
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />

          <Route path="/login" element={<LoginPage />} />

          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
