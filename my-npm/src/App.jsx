import Home from "./pages/Home";
import './App.css'
import Navbar from "./components/Navbar";
import ResourcesSection from "./components/ResourcesSection";

function App() {

  return (
    <>
      <Navbar />
      <Home />;
      <ResourcesSection />
    </>
  )
}

export default App
