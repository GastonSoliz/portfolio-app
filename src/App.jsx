import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import Contact from "./views/Contact/Contact";
import Work from "./views/Work/Work";
import About from "./views/About/About";
import NavBar from "./components/NavBar/NavBar";
import { LanguageProvider } from "./LanguageContext";

function App() {
  return (
    <body className="bodyContainer">
      <LanguageProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </LanguageProvider>
    </body>
  );
}

export default App;
