import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SeoMeta from "./components/SeoMeta/SeoMeta";
import SchemaMarkup from "./components/SchemaMarkup/SchemaMarkup";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

const Home = lazy(() => import("./pages/Home/Home"));
const MenuPage = lazy(() => import("./pages/MenuPage/MenuPage"));
const About = lazy(() => import("./pages/About/About"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const FAQPage = lazy(() => import("./pages/FAQPage/FAQPage"));

function PageFallback() {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="pageSpinner" />
    </div>
  );
}

function App() {
  return (
    <Router>
      <SeoMeta />
      <SchemaMarkup />
      <Navigation />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
