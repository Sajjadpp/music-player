
import Footer from "./component/footer/Footer"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Search from "./pages/Search"
import Library from "./pages/Library"
import "./app.css"

function App() {
  return (
    <div className="all">
      <BrowserRouter className="all">
        <Routes>

          <Route path="/" element={<Home />}/>
          <Route path="/search" element={<Search />}/>
          <Route path="/library" element={<Library />}/>
                    
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
