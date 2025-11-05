import Home from "./pages/Home";
import './App.css'
import Navbar from "./components/Navbar";
import ResourcesSection from "./components/ResourcesSection";
import PostpartumSection from './components/PostpartumSection';
function App() {

  return (
    <>
      <Navbar />
      <Home />;
      <ResourcesSection />
      <PostpartumSection />

    </>
  )
}

export default App
