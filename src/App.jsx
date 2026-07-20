import { Routes, Route } from 'react-router-dom'
import { Navigate } from "react-router-dom";
import { useState } from 'react';
import Footer from './components/layout/Footer'
import Layout from './components/layout/Layout';
import Popup from './components/ui/Popup';
import ScrollToTop from './components/layout/ScrollToTop';

import Home from './pages/Home'
import BeforeAfter from './pages/BeforeAfter'
import AboutMe from './pages/AboutMe';
import { Analytics } from "@vercel/analytics/react";

function App() {

  return (
    <>
    <div className='app'>
      <ScrollToTop />
      <main>
      <Routes>
          <Route element={<Layout />}>
          <Route path="/:lang" element={<Home />} />
          <Route path="/:lang/about-me" element={<AboutMe />} />
          <Route path="/:lang/fyrir-og-eftir" element={<BeforeAfter />} />
        </Route>
        
        <Route path="*" element={<Navigate to="/is" replace />} />
      </Routes>
      </main>

      <Analytics />
    </div>
    </>
  )
}

export default App