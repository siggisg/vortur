import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/layout/ScrollToTop";

import Home from "./pages/Home";
import BeforeAfter from "./pages/BeforeAfter";
import AboutMe from "./pages/AboutMe";

import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="app">
      <ScrollToTop />

      <Routes>
        <Route
          path="/about-me"
          element={<Navigate to="/is/about-me" replace />}
        />

        <Route
          path="/fyrir-og-eftir"
          element={<Navigate to="/is/fyrir-og-eftir" replace />}
        />

        <Route path="/:lang" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-me" element={<AboutMe />} />
          <Route path="fyrir-og-eftir" element={<BeforeAfter />} />
        </Route>

        <Route path="*" element={<Navigate to="/is" replace />} />
      </Routes>

      <Analytics />
    </div>
  );
}

export default App;