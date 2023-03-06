// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Layout from "./components/Layout";
import About from "./pages/About";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Missing from "./pages/Missing";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";
import Language from "./pages/Language";

const App = () => {
  return (
    <BrowserRouter basename="/my-profile/">
      <Layout>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/language" element={<Language />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      </Layout>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
