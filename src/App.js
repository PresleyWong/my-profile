// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Missing from "./components/Missing";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Language from "./components/Language";
import Layout from "./components/Layout";
import Content from "./components/Content";
import Data from "./data";

const App = () => {
  return (
    <HashRouter>
      <Layout>
        <Header data={Data.about} />
        <Navbar />
        <Content>
          <Routes>
            <Route path="/" element={<About data={Data.about} />} />
            <Route
              path="/education"
              element={<Education data={Data.education} />}
            />
            <Route
              path="/experience"
              element={<Experience data={Data.experience} />}
            />
            <Route
              path="/portfolio"
              element={<Portfolio data={Data.portfolio} />}
            />
            <Route path="/skills" element={<Skills data={Data.skills} />} />
            <Route
              path="/language"
              element={<Language data={Data.language} />}
            />
            <Route path="*" element={<Missing />} />
          </Routes>
        </Content>
      </Layout>
      <Footer />
    </HashRouter>
  );
};

export default App;
