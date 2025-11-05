import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import ResourcesSection from "./components/ResourcesSection";
import PostpartumSection from "./components/PostpartumSection";
import HowWeAreDifferent from "./components/HowWeAreDifferent";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

import About from "./pages/About";
import ForPartners from "./pages/ForPartners";
import ForMoms from "./pages/ForMoms";
import Blog from "./pages/Blog";
import Podcast from "./pages/Podcast";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";

import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home page (your long landing page) */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <ResourcesSection />
              <PostpartumSection />
              <HowWeAreDifferent />
              <Gallery />
              <Testimonials />
              <CTA />
            </>
          }
        />

        {/* Standalone Pages */}
        <Route path="/About" element={<About />} />
        <Route path="/For-partners" element={<ForPartners />} />
        <Route path="/For-moms" element={<ForMoms />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Podcast" element={<Podcast />} />
        <Route path="/Resources" element={<Resources />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}
