import Home from "./pages/Home";
import './App.css'
import Navbar from "./components/Navbar";
import ResourcesSection from "./components/ResourcesSection";
import PostpartumSection from './components/PostpartumSection';
import HowWeAreDifferent from "./components/HowWeAreDifferent;";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";


function App() {

  return (
    <>
      <Navbar />
      <Home />;
      <ResourcesSection />
      <PostpartumSection />
      <HowWeAreDifferent />
      <Gallery />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  )
}

export default App
