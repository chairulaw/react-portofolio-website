import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./component/Header"
import Homepage from "./pages/Homepage"
import Footer from "./component/Footer"

function AppContent() {
  

  return (
    <div className="bg-white font-body text-black flex flex-col min-h-screen scrollbar-none scroll-smooth">
      <Header/>

        <div className="flex-1 w-full px-4">
          <Routes>
          
            <Route path="/" element={<Homepage />} />

          </Routes>
        </div>

      <Footer/>
    </div>
  )
}

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App;
