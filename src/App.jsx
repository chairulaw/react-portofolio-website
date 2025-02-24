import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./component/Header"
import Homepage from "./pages/Homepage"
import ScrollToTop from "./other/Scroll.jsx"
import AboutPages from "./pages/AboutPages.jsx";
import DisneyClonePages from "./Project/DisneyClonePages.jsx";
import MrJasaPages from "./Project/MrJasaPages.jsx";
import TandaBacaPages from "./Project/TandaBacaPages.jsx";
import  ProjectPages from "./pages/ProjectPages.jsx";
import PetaniGoPages from "./Project/PetaniGoPages.jsx";

function AppContent() {
  return (
    <div className="items-center font-body flex flex-col min-h-screen scrollbar-none scroll-smooth bg-white text-black dark:bg-gray-950 dark:text-white">
      <Header />
      <div className="flex-1 w-full px-4">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPages />} />
          <Route path="/disneyclone" element={<DisneyClonePages />} />
          <Route path="/mrjasa" element={<MrJasaPages />} />
          <Route path="/tandabaca" element={<TandaBacaPages />} />
          <Route path="/projectlist" element={<ProjectPages />} />
          <Route path="petanigo" element={<PetaniGoPages />}/>
        </Routes>
      </div>
    </div>
  );
}

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App; 
