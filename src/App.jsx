import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./component/Header"
import Homepage from "./pages/Homepage"
import PetaniGo from "./Project/PetaniGo.jsx"
import ProjectList from "./pages/projectList.jsx";
import TandaBaca from "./Project/TandaBaca.jsx"
import MrJasa from "./Project/MrJasa.jsx"
import DisneyClone from "./Project/DisneyClone.jsx"
import ScrollToTop from "./other/Scroll.jsx"
import AboutPages from "./pages/AboutPages.jsx";



function AppContent() {
  return (
    <div className="items-center font-body flex flex-col min-h-screen scrollbar-none scroll-smooth bg-white text-black dark:bg-gray-950 dark:text-white">
      <Header />
      <div className="flex-1 w-full px-4">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/tandabaca" element={<TandaBaca />} />
          <Route path="/projectlist" element={<ProjectList />} />
          <Route path="/petanigo" element={<PetaniGo />} />
          <Route path="/disneyclone" element={<DisneyClone />} />
          <Route path="/mrjasa" element={<MrJasa />} />
          <Route path="/about" element={<AboutPages />} />
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
