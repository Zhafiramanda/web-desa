import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import StrukturOrganisasi from "./pages/StrukturOrganisasi";
import SejarahDesa from "./pages/SejarahDesa";
import Agenda from "./pages/Agenda";
import PotensiDesa from "./components/PotensiDesa";
import PotensiDetail from "./pages/PotensiDetail";
// import ArticlePage from "./pages/ArticlePage";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/struktur-organisasi"
              element={<StrukturOrganisasi />}
            />
            <Route path="/sejarah-desa" element={<SejarahDesa />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/potensi-desa" element={<PotensiDesa />} />
            <Route path="/potensi/:id" element={<PotensiDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
